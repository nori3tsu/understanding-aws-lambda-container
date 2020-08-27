const express = require('express');
const app = express();

app.use('/case1', (req, res) => {
  console.log("START")
  const maxCount = 3000000000
  for (let i = 0; i < maxCount; i++) {
  }
  console.log("END")

  res.send('{}')
});

app.use('/case2', async (req, res) => {
  console.log("START")
  await new Promise((resolve) => setTimeout(resolve, 3000))
  console.log("END")

  res.send('{}')
});

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server started: port = ${port}`);
});