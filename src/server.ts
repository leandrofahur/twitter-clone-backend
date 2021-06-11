import dotenv from 'dotenv';
import { app } from './app';

dotenv.config();

const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
