import https from 'https';

const url = 'https://www.teammohler.com/main-pic-main-pic-mohler.jpeg';

https.get(url, (res) => {
  console.log(`Status: ${res.statusCode}`);
  console.log(`Headers: ${JSON.stringify(res.headers, null, 2)}`);
}).on('error', (e) => {
  console.error(e);
});
