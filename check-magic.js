import fs from 'fs';

const buffer = fs.readFileSync('public/main-pic-main-pic-mohler.jpeg');
console.log(buffer.subarray(0, 16).toString('hex'));
