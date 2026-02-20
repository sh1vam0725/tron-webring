# MTE Webring 

A web ring for Mechtronics Engineering student at the University of Waterloo

---

## What is this?

A webring is a collection of websites. Navigate through portfolios, personal sites, and projects from MTE students.

## Join the Webring

Open to all current MTE students or alumni at the University of Waterloo in Waterloo, Ontario, Canada 

### How to Add Your Site

**Steps:**
1. Fork this repository
2. Edit `members.json` (in repo root)
3. Add your entry with `name`, `grad_year`, and `url`
4. Submit a PR titled: `Add Portfolio: [Your Name]`
5. Automated validation will check your submission

**Example entry:**
```json
{
  "name": "John Doe",
  "grad_year": 2029,
  "url": "https://johndoe.dev"
}
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Run validation
npm run validate:members

# Sync members.json to public folder
npm run sync:members
```

---

## Credits & Inspiration

Inspired by the UWaterloo CS and SE webrings:
- [SE Webring](https://se-webring.xyz/)
- [CS Webring](https://cs.uwatering.com/)

Built with the help of [Lovable](https://lovable.dev/) • Contributions welcome, open a PR or add an Issue to the GitHub

---

**Made with ❤️ by Shivam Walia**





