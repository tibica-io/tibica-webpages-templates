# CDN Asset Viewer Template

A static file hosting viewer template designed to be deployed directly to a CDN (AWS CloudFront). Displays assets organized in folders — images, documents, audio, and any other file type — with a clean, responsive UI.

## Framework / Technology

- **Type**: Static HTML (no framework)
- **Build tool**: Custom Node.js scripts + Tailwind CLI
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide Icons
- **Target**: AWS CloudFront (any static CDN)

## Key Features

- Auto-discovers folders and files via a generated `manifest.json`
- Supports nested folders (e.g. `icons/ui/`, `my-files/documents/`)
- Image thumbnails for image files (SVG, PNG, JPG, WebP, etc.)
- File-type icons for non-image files (PDF, MP3, TXT, MD, JSON, etc.)
- Hover overlay with **Copy URL** and **Download** actions
- Responsive: 200×200 cards on desktop, 80×80 on mobile
- No framework, no runtime dependencies — pure HTML + built CSS

## Project Structure

```
cdn/
├── index.html                # Main viewer page
├── input.css                 # Tailwind CSS source
├── output.css                # Built CSS (gitignored)
├── manifest.json             # Generated file map (gitignored)
├── generate-manifest.js      # Scans folders → writes manifest.json
├── generate-test-assets.js   # Generates sample files for development
├── server.js                 # Local dev server (avoids CORS on file://)
├── test.js                   # Basic test suite
├── eslint.config.js          # ESLint configuration
├── package.json
├── icons/                    # Drop your icon files here
└── avatars/                  # Drop your avatar files here
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Setup

```bash
npm install
```

### Development

```bash
# Watch mode — rebuilds CSS on change
npm run dev

# In a separate terminal, start the local server
npm run preview
# → http://localhost:3000
```

### Add Your Files

Drop any files into existing folders or create new ones:

```bash
icons/
├── logo.svg
└── arrow.svg

avatars/
└── user.png

my-docs/
├── report.pdf
└── notes/
    └── meeting.txt
```

Then rebuild the manifest:

```bash
npm run build
```

The page auto-discovers all folders and file types — no configuration needed.

### Build for Deployment

```bash
npm run build
```

Outputs:
- `output.css` — minified Tailwind CSS
- `manifest.json` — folder/file map

Deploy the following to CloudFront (or any CDN):

```
index.html
output.css
manifest.json
[your asset folders]
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run build` | Build CSS + generate manifest |
| `npm run build:css` | Build Tailwind CSS only |
| `npm run build:manifest` | Scan folders and generate manifest.json |
| `npm run dev` | Watch mode for CSS |
| `npm run preview` | Start local dev server on port 3000 |
| `npm run lint` | Lint JS files with ESLint |
| `npm run test` | Run build + test suite |
| `npm run generate:test-assets` | Generate sample files for development |

## Supported File Types

| Type | Extensions |
|------|-----------|
| Images (thumbnail) | `.svg` `.png` `.jpg` `.jpeg` `.webp` `.gif` `.ico` `.avif` |
| Audio | `.mp3` `.wav` `.ogg` |
| Video | `.mp4` `.mov` |
| Documents | `.pdf` `.txt` `.md` |
| Data | `.json` `.csv` |
| Archives | `.zip` |
| Other | Shows generic file icon |
