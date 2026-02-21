#!/usr/bin/env node

/**
 * Validation script for webring members
 * Checks that members.json is valid and all entries meet requirements
 */

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const MEMBERS_FILE = join(__dirname, '..', 'members.json');

// Validation rules
const CURRENT_YEAR = new Date().getFullYear();
const MIN_GRAD_YEAR = 2003;
const MAX_YEAR = CURRENT_YEAR + 6;
const URL_REGEX = /^https?:\/\/.+\..+/;

let hasErrors = false;

function error(message) {
    console.error(`❌ ERROR: ${message}`);
    hasErrors = true;
}

function warn(message) {
    console.warn(`⚠️  WARNING: ${message}`);
}

function success(message) {
    console.log(`✅ ${message}`);
}

function validateMember(member, index) {
    const memberPrefix = `Member ${index + 1} (${member.name || 'unnamed'})`;

    // Required fields
    if (!member.name || typeof member.name !== 'string') {
        error(`${memberPrefix}: Missing or invalid 'name' field`);
    } else if (member.name.trim().length === 0) {
        error(`${memberPrefix}: 'name' cannot be empty`);
    } else if (member.name.length > 50) {
        error(`${memberPrefix}: 'name' is too long (max 50 characters)`);
    }

    if (!member.url || typeof member.url !== 'string') {
        error(`${memberPrefix}: Missing or invalid 'url' field`);
    } else if (!URL_REGEX.test(member.url)) {
        error(`${memberPrefix}: Invalid URL format (must start with http:// or https://)`);
    } else if (member.url.length > 200) {
        error(`${memberPrefix}: 'url' is too long (max 200 characters)`);
    }
    // grad_year is required and should be a reasonable integer
    if (member.grad_year === undefined || member.grad_year === null) {
        error(`${memberPrefix}: Missing required 'grad_year' field`);
    } else if (typeof member.grad_year !== 'number' || !Number.isInteger(member.grad_year)) {
        error(`${memberPrefix}: 'grad_year' must be an integer year`);
    } else if (member.grad_year < MIN_GRAD_YEAR) {
        error(`${memberPrefix}: 'grad_year' cannot be before ${MIN_GRAD_YEAR}`);
    } else if (member.grad_year > MAX_YEAR) {
        warn(`${memberPrefix}: 'grad_year' looks unusual. Expected no later than ${MAX_YEAR}`);
    }

    // Check for extra fields
    const allowedFields = ['name', 'url', 'grad_year', 'program', 'year'];
    const extraFields = Object.keys(member).filter(key => !allowedFields.includes(key));
    if (extraFields.length > 0) {
        warn(`${memberPrefix}: Contains unexpected fields: ${extraFields.join(', ')}`);
    }
}

function checkDuplicates(members) {
    const names = new Map();
    const urls = new Map();

    members.forEach((member, index) => {
        // Check duplicate names
        const lowerName = member.name?.toLowerCase();
        if (lowerName) {
            if (names.has(lowerName)) {
                error(`Duplicate name found: "${member.name}" (members ${names.get(lowerName) + 1} and ${index + 1})`);
            } else {
                names.set(lowerName, index);
            }
        }

        // Check duplicate URLs
        const lowerUrl = member.url?.toLowerCase();
        if (lowerUrl) {
            if (urls.has(lowerUrl)) {
                error(`Duplicate URL found: "${member.url}" (members ${urls.get(lowerUrl) + 1} and ${index + 1})`);
            } else {
                urls.set(lowerUrl, index);
            }
        }
    });
}

function main() {
    console.log('🔍 Validating members.json...\n');

    let members;
    try {
        const fileContent = readFileSync(MEMBERS_FILE, 'utf-8');
        members = JSON.parse(fileContent);
    } catch (err) {
        if (err.code === 'ENOENT') {
            error('members.json file not found');
            process.exit(1);
        } else if (err instanceof SyntaxError) {
            error(`Invalid JSON format: ${err.message}`);
            process.exit(1);
        } else {
            error(`Failed to read file: ${err.message}`);
            process.exit(1);
        }
    }

    // Check if it's an array
    if (!Array.isArray(members)) {
        error('members.json must contain an array');
        process.exit(1);
    }

    if (members.length === 0) {
        warn('members.json is empty');
    } else {
        success(`Found ${members.length} member(s)`);
    }

    // Validate each member
    members.forEach(validateMember);

    // Check for duplicates
    checkDuplicates(members);

    console.log('');
    if (hasErrors) {
        console.error('❌ Validation failed! Please fix the errors above.');
        process.exit(1);
    } else {
        console.log('✅ All validations passed!');
        process.exit(0);
    }
}

main();
