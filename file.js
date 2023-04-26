const fs = require('fs');

const createFile = async () => {
  try {
    const data = 'Creating file using fs module...';
    await fs.promises.writeFile('myfile.txt', data);
    console.log('File created successfully!!!');
  } catch (error) {
    console.error('Error creating file:', error);
  }
}

createFile();