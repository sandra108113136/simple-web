const fs = require('fs');
const path = require('path');

const gtmId = process.env.GTM_ID || 'GTM-XXXXXXX'; // 使用環境變量或默認值
const publicDir = path.join(__dirname, 'public');
const files = ['index.html']; // 需要處理的文件列表

files.forEach(file => {
  const filePath = path.join(publicDir, file);
  
  try {
      if (fs.existsSync(filePath)) {
          let content = fs.readFileSync(filePath, 'utf8');
          content = content.replace(/%GTM_ID%/g, gtmId);
          fs.writeFileSync(filePath, content);
          console.log(`Processed ${file}`);
      } else {
          console.error(`File not found: ${filePath}`);
      }
  } catch (error) {
      console.error(`Error processing ${file}:`, error);
  }
});

console.log('GTM ID 已成功替換');