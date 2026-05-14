import fs from 'fs';
import path from 'path';

const SKILLS_DIR = 'd:\\my website\\skills';

async function main() {
  const directories = fs.readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  let updatedCount = 0;

  for (const dirName of directories) {
    const skillMdPath = path.join(SKILLS_DIR, dirName, 'SKILL.md');
    if (!fs.existsSync(skillMdPath)) continue;

    let content = fs.readFileSync(skillMdPath, 'utf8');
    
    // Replace origin: ECC or origin:ECC with origin: Tejas sapara
    const newContent = content.replace(/^origin:\s*ECC\s*$/gm, 'origin: Tejas sapara');
    
    if (content !== newContent) {
      fs.writeFileSync(skillMdPath, newContent, 'utf8');
      updatedCount++;
    }
  }

  console.log(`Successfully updated origin in ${updatedCount} files.`);
}

main().catch(console.error);
