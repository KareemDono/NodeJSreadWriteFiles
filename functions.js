const fs = require('fs');
const path = require('path');

// Create function
async function create(n, text) {
  try {
    const filePath = path.join(__dirname, 'files', `file${n}.txt`);
    await fs.promises.writeFile(filePath, text);
    console.log(`File ${filePath} has been created.`);
  } catch (err) {
    console.error(err);
  }
}

// Read function
async function read(n) {
  try {
    const filePath = path.join(__dirname, 'files', `file${n}.txt`);
    const data = await fs.promises.readFile(filePath, 'utf-8');
    console.log(`File ${filePath} has been read.`);
    return data;
  } catch (err) {
    console.error(err);
  }
}

// GetRandNumber function
function getRandNumber() {
  return Math.floor(Math.random() * 5) + 1;
}

// ConcatFiles function
async function concatFiles() {
  try {
    const concatFilePath = path.join(__dirname,'files' ,'concatTextFile.txt');
    await fs.promises.unlink(concatFilePath); 
    const randNum = getRandNumber();
    const stringFilePath = path.join(__dirname, 'files' ,'stringtxt.txt');
    let content = '';
    for (let i = 1; i <= randNum; i++) {
      const filePath = path.join(__dirname, 'files', `file${i}.txt`);
      const data = await fs.promises.readFile(filePath, 'utf-8');
      content += data;
    }
    await fs.promises.writeFile(stringFilePath, content);
    await fs.promises.rename(stringFilePath, concatFilePath);
    console.log(`Files concatenated successfully into ${concatFilePath}.`);
  } catch (err) {
    console.error(err);
  }
}

module.exports = { create, read, getRandNumber, concatFiles };
