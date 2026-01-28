import { readdirSync, writeFileSync } from "fs"
import { join, basename } from "path"

const LIB_DIR = join(process.cwd(), "lib")

const categories = ["processors", "microcontrollers"]

// Generate index.ts for each category
for (const category of categories) {
  const categoryDir = join(LIB_DIR, category)
  const files = readdirSync(categoryDir).filter(
    (f) => f.endsWith(".tsx") && f !== "index.tsx"
  )

  const exports = files.map((file) => {
    const name = basename(file, ".tsx")
    return `export { ${name} } from "./${name}"`
  })

  const content = `// Auto-generated - do not edit manually
// Run: bun run scripts/generate-exports.ts

${exports.join("\n")}
`

  writeFileSync(join(categoryDir, "index.ts"), content)
  console.log(`Generated ${category}/index.ts with ${files.length} exports`)
}

// Generate jlc100-library.ts (re-exports all categories)
const kicadLibraryContent = `// Auto-generated - KiCad PCM entrypoint
// Run: bun run scripts/generate-exports.ts

export * from "./processors"
export * from "./microcontrollers"
`

writeFileSync(join(LIB_DIR, "jlc100-library.ts"), kicadLibraryContent)
console.log("Generated lib/jlc100-library.ts")

// Generate main index.ts
const indexContent = `// Auto-generated - Main entry point
// Run: bun run scripts/generate-exports.ts

export * from "./jlc100-library"

// Category-specific exports
export * as processors from "./processors"
export * as microcontrollers from "./microcontrollers"
`

writeFileSync(join(LIB_DIR, "index.ts"), indexContent)
console.log("Generated lib/index.ts")

console.log("\nDone! All export files generated.")
