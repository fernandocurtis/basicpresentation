# Website Essentials — for Account Managers

An interactive, scroll-driven reference guide, built from the "Website Essentials for
Account Managers" deck. Instead of flipping through slides, you scroll through a single
page and interact with the content directly:

- Flip-card glossary for the 7 core terms (cache, hosting, DNS, plugin, staging, backend, frontend)
- A hosting-vs-domain toggle and a live CDN/DNS propagation diagram
- A three-layer triage tool for diagnosing site issues (hosting / DNS / website)
- Click-to-check first-response and final-QA checklists (progress persists in `localStorage`)
- An accordion of core WordPress/dev concepts
- A "You vs. Dev Team" ownership quiz that scores your guesses

## Stack

Vite + React + TypeScript + Tailwind CSS v4 + Framer Motion + lucide-react.

## Development

```bash
npm install
npm run dev      # start local dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```
