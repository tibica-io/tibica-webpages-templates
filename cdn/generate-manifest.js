const fs = require('fs')
const path = require('path')

const PUBLIC = path.join(__dirname, 'public')
const IGNORE = new Set(['.git'])

const manifest = {}

function scanDir(dirPath, relativePath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true })

  const files = entries
    .filter(e => e.isFile() && !e.name.startsWith('.'))
    .map(e => e.name)
    .sort()

  manifest[relativePath] = files

  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    if (IGNORE.has(entry.name) || entry.name.startsWith('.')) continue
    scanDir(path.join(dirPath, entry.name), `${relativePath}/${entry.name}`)
  }
}

const publicEntries = fs.readdirSync(PUBLIC, { withFileTypes: true })

for (const entry of publicEntries) {
  if (!entry.isDirectory()) continue
  if (IGNORE.has(entry.name) || entry.name.startsWith('.')) continue
  scanDir(path.join(PUBLIC, entry.name), entry.name)
}

fs.writeFileSync(path.join(__dirname, 'manifest.json'), JSON.stringify(manifest, null, 2))
console.log('manifest.json generated:', JSON.stringify(manifest, null, 2))
