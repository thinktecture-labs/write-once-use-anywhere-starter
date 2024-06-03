import { promises as fsPromises } from 'fs';
import { glob } from 'glob';
import { basename, join, dirname } from 'path';

export async function processCSSFile(cssFilePath: string): Promise<void> {
  const cssContent = await fsPromises.readFile(cssFilePath, 'utf-8');
  const filename = basename(cssFilePath, '.css');
  const prefix = filename.replace('.component', '').replace('-', '');
  const outputDir = dirname(cssFilePath);
  const convertedContent = `import { css, CSSResult } from 'lit';\n\nexport const ${prefix}Styles: CSSResult = css\`${cssContent}\`;`;
  const outputFilePath = join(outputDir, `${filename}.styles.ts`);
  await fsPromises.writeFile(outputFilePath, convertedContent);
  await fsPromises.unlink(cssFilePath);
}

async function main(): Promise<void> {
  const filenames = await glob('./src/**/*.css');
  await Promise.all(filenames.map((cssFile) => processCSSFile(cssFile)));
}

main();
