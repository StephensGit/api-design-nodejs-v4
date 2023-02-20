import express from 'express';

const app = express();

app.get('/', (req, res) => {
  console.log('request GET');
  res.status(200);
  res.json({ message: 'Hello World' });
});

export default app;
