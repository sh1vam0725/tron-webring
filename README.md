# Contributing — Add your portfolio to the Webring

Thanks for wanting to join the webring! This guide shows the easiest way to add your portfolio (including Google Docs or PDFs) by creating a GitHub Pull Request.

Required fields (exact JSON keys)
- `name` (string)
- `grad_year` (integer year)
- `url` (string, must start with `http://` or `https://`)

Example entry (add to the bottom of `members.json`):

```json
{
  "name": "John Doe",
  "grad_year": 2029,
  "url": "https://docs.google.com/document/d/XXXXXXXXX" //or personal website any portfolio works!
}
```

How to submit (beginner-friendly)
1. Fork this repository (click the "Fork" button in the top-right of GitHub).
2. In your fork, click the `members.json` file in the repository root.
3. Click the pencil (Edit) icon to edit the file.
4. Add your entry to the bottom of the array (use the exact keys above). Make sure to keep valid JSON (commas between items).
5. Commit the change to a new branch in your fork with a descriptive name.
6. Open a Pull Request back to this repository with the title:

   `Add Portfolio: [Your Name]`

7. Automated checks will validate your entry. If there are problems, update your PR and commit again.

Static link template (for Google Docs / PDF users)
- Use this short link in your doc to let readers go to the next portfolio in the ring:

```
https://yourdomain.com/next?from=Your%20Full%20Name
```

Replace `https://yourdomain.com` with the published site URL and set `Your%20Full%20Name` to your name (URL-encoded). Example:

```
https://webring.example.com/next?from=Alex%20Smith
```

Notes & Tips
- Add only ONE member per PR (the automatic workflow checks for this).
- Make sure your `url` is reachable and begins with `http://` or `https://`.
- If you prefer, you can provide `id` (index) or `current` (full URL) when linking: `https://yourdomain.com/next?id=12` or `.../next?current=https://your.site`.

Thanks — we're excited to see your work!
