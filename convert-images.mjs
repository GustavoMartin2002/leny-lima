import sharp from 'sharp';
import { readdirSync, statSync, existsSync } from 'fs';
import { join, extname, basename } from 'path';

const directoryPath = 'public';

const convertImages = async (dir) => {
  const files = readdirSync(dir);

  for (const file of files) {
    const filePath = join(dir, file);
    const stats = statSync(filePath);

    if (stats.isDirectory()) {
      await convertImages(filePath);
      continue;
    }

    const ext = extname(file).toLowerCase();
    
    if (['.png', '.jpg', '.jpeg'].includes(ext)) {
      const fileName = basename(file, ext);
      const newFilePath = join(dir, `${fileName}.webp`);

      if (existsSync(newFilePath)) continue;

      try {
        await sharp(filePath)
          .webp({ quality: 100 })
          .toFile(newFilePath);
        console.log(`Convertido: ${file} -> ${fileName}.webp`);
      } catch (error) {
        console.error(`Erro ao converter ${file}:`, error);
      }
    }
  }
}

convertImages(directoryPath)
  .then(() => console.log('🎉 Conversão concluída!'))
  .catch(err => console.error('Erro fatal:', err));