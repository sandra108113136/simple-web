const fs = require('fs');
const path = require('path');

const gtmId = process.env.GTM_ID || 'GTM-XXXXXXX'; // 使用環境變量或默認值

const files = ['index.html']; // 需要處理的文件列表

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/%GTM_ID%/g, gtmId);
    fs.writeFileSync(filePath, content);
});

console.log('GTM ID 已成功替換');