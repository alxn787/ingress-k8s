import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({
    db:process.env.DATABASE_URL,
    port:process.env.PORT
});
});

app.listen(process.env.PORT);