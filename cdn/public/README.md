# Public Assets

This is where you store all files you want to host on your CDN.

Drop your files into the folders below (or create new ones), then publish the site — the build runs automatically and your files will be live on CloudFront.

## Default Folders

| Folder | Purpose |
|--------|---------|
| `icons/` | SVG or PNG icons |
| `avatars/` | User avatars or profile images |

## Adding New Folders

Just create a folder and drop files in it — the build will pick it up automatically:

```
public/
├── icons/
├── avatars/
├── logos/        ← add any folder you need
└── documents/
    └── reports/  ← nesting is supported too
```

No configuration needed. Any folder added here will appear as a section on the viewer page.

## Supported File Types

| Type | Extensions |
|------|-----------|
| Images (shown as thumbnail) | `.svg` `.png` `.jpg` `.jpeg` `.webp` `.gif` `.ico` `.avif` |
| Audio | `.mp3` `.wav` `.ogg` |
| Video | `.mp4` `.mov` |
| Documents | `.pdf` `.txt` `.md` |
| Data | `.json` `.csv` |
| Archives | `.zip` |
| Other | Shown with a generic file icon |

## Accessing Your Files

Once deployed, files are available at:

```
https://your-site.tibica.app/public/[folder]/[filename]
```

Hover over any file card on the viewer page to reveal two buttons:

- **Copy URL** — copies the direct file link to your clipboard
- **Download** — downloads the file to your device
