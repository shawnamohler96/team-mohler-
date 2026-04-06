import https from 'https';

const url = 'https://www.teammohler.com/main-pic-main-pic-mohler.jpeg';

https.get(url, (res) => {
  res.on('data', (chunk) => {
    console.log(chunk.toString('utf8').substring(0, 100));
    process.exit(0);
  });
}).on('error', (e) => {
  console.error(e);
});
