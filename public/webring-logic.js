// Webring navigation script
// Place this file in the site's root (public/) so it is available at /webring-logic.js

(function () {
    const MEMBERS_URL = '/members.json';

    function normalizeName(name) {
        return String(name || '')
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function getQuery() {
        try {
            return new URL(window.location.href).searchParams;
        } catch (e) {
            return new URLSearchParams(window.location.search);
        }
    }

    function redirect(url) {
        if (!url) {
            window.location.href = '/';
            return;
        }
        window.location.href = url;
    }

    async function run() {
        const path = window.location.pathname || '';
        const mode = path.replace(/\/$/, '').split('/').pop(); // 'next' or 'prev'
        if (!mode || !['next', 'prev'].includes(mode.toLowerCase())) return;

        const params = getQuery();
        const from = params.get('from');
        const current = params.get('current');
        const id = params.get('id');

        let members = [];
        try {
            const res = await fetch(MEMBERS_URL, { cache: 'no-store' });
            if (!res.ok) throw new Error('Failed to fetch members.json');
            members = await res.json();
            if (!Array.isArray(members) || members.length === 0) throw new Error('No members');
        } catch (e) {
            console.error('webring: could not load members', e);
            redirect('/');
            return;
        }

        let idx = -1;

        if (id !== null) {
            const parsed = parseInt(id, 10);
            if (!Number.isNaN(parsed) && parsed >= 0 && parsed < members.length) idx = parsed;
        }

        if (idx === -1 && current) {
            idx = members.findIndex(m => (m.url || '').toLowerCase() === current.toLowerCase());
        }

        if (idx === -1 && from) {
            const normalizedFrom = normalizeName(decodeURIComponent(from));
            idx = members.findIndex(m => normalizeName(m.name) === normalizedFrom);
            if (idx === -1) {
                // Also try matching by simple slug (underscores/dashes)
                const slugFrom = (from || '').toLowerCase().replace(/[_\-]+/g, ' ');
                idx = members.findIndex(m => normalizeName(m.name) === normalizeName(slugFrom));
            }
        }

        if (idx === -1) {
            // fallback to homepage if no match
            redirect('/');
            return;
        }

        const n = members.length;
        let targetIndex = idx;
        if (mode.toLowerCase() === 'next') targetIndex = (idx + 1) % n;
        if (mode.toLowerCase() === 'prev') targetIndex = (idx - 1 + n) % n;

        const target = members[targetIndex];
        if (!target || !target.url) {
            redirect('/');
            return;
        }

        // redirect to target URL
        redirect(target.url);
    }

    // Run on load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', run);
    } else {
        run();
    }
})();
