// Fortune Cookie Wisdom for Developers — make.fun bounty entry.
// Writes one original fortune-cookie line for a software developer
// to /output/entry.txt (UTF-8, 1-120 characters).

import { mkdirSync, writeFileSync } from 'node:fs'

// The line, written in this session: the legacy code a developer fears
// to touch was once someone else's Friday-afternoon shortcut — and the
// code written today becomes tomorrow's legacy. One breath, one twist.
const FORTUNE =
  'The legacy code you fear to touch was once someone else’s Friday shortcut — and one day, yours will be too.'

const trimmed = FORTUNE.trim()
if (trimmed.length === 0 || trimmed.length > 120) {
  throw new Error(
    `Fortune must be 1-120 non-whitespace characters, got ${trimmed.length}`,
  )
}

mkdirSync('/output', { recursive: true })
writeFileSync('/output/entry.txt', FORTUNE, 'utf8')
console.log(`Wrote ${FORTUNE.length} characters to /output/entry.txt`)
