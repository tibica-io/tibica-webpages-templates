const fs = require('fs');
const path = require('path');

const avatarFolder = './images/avatars';
const logoFolder = './images/logos';

function createPathTable(folderPath) {
    const pathTable = {};

    const files = fs.readdirSync(folderPath);

    files.forEach(file => {
        const filePath = path.join(folderPath, file);

        if (fs.statSync(filePath).isFile() && /\.(png|jpg|jpeg)$/i.test(file)) {
            pathTable[file] = filePath;
        }
    });

    return pathTable;
}

const outputData = {
    avatars: createPathTable(avatarFolder),
    logos: createPathTable(logoFolder)
};

const outputFilePath = './images.json';

fs.writeFileSync(outputFilePath, JSON.stringify(outputData, null, 2), 'utf8');

console.log(`Path table saved to ${outputFilePath}`);
