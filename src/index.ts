import express, { Express, Request, Response } from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'TG Mini App API is running' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 