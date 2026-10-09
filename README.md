# Zach Nelson's Personal Site

Personal site served at [https://zach-nelson.github.io/](https://zach-nelson.github.io/)

## Editing the Site

The site is a single-page static HTML file with an interactive timeline and knowledge graph visualization. All content is editable through the `data.js` file.

### Structure

- **`index.html`** — The main HTML page with embedded CSS and JavaScript
- **`data.js`** — All timeline events, graph nodes, links, and content (edit this to update the site)
- **`.nojekyll`** — Tells GitHub Pages not to process the site with Jekyll

### How to Edit Content

All site content lives in `data.js`. Open that file and edit:

1. **Timeline events** (`timeline` array) — When interests began, with labels and descriptions
2. **Knowledge graph nodes** (`nodes` array) — Individual ideas/topics with start years and categories
3. **Links between ideas** (`links` array) — Connections showing how topics relate to each other
4. **Narrative text** (`narrative` object) — The intro and current work descriptions
5. **Future paths** (`futurePaths` array) — Possible future directions (keep open-ended)
6. **Contact info** (`contact` object) — Email, GitHub, location, and other contact details

### Node Categories

Each node has a `category` that determines its color in the graph:

- `baseline` — Gold (Voyager origin point)
- `science` — Blue
- `ecology` — Green
- `technical` — Purple
- `modeling` — Tan
- `application` — Light blue
- `practice` — Brown
- `social` — Coral

### Publishing Changes

1. Edit `data.js` (or `index.html` if needed)
2. Commit and push to the `main` branch
3. Changes appear live at https://zach-nelson.github.io/ within a few minutes

### Design Notes

The visualization shows:
- A meandering timeline path from 1977 to present
- An Obsidian-style force-directed graph of interconnected ideas
- Nodes that appear progressively as you scrub through time
- Hover interactions to highlight connected ideas
- Future paths shown as dashed tentative branches at the end

The site is fully static (no build step required), mobile-friendly, keyboard-accessible, and respects reduced-motion preferences.

---

© Zach Nelson · Open source on [GitHub](https://github.com/zach-nelson/zach-nelson.github.io)
