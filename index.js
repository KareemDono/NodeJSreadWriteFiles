const { create, concatFiles } = require('./functions');

async function main() {
  await create(1, 'hello '); 
  await create(2, 'welcome '); 
  await create(3, 'to '); 
  await create(4, 'node '); 
  await create(5, 'js.');  
  await concatFiles(); 
}

main(); 
