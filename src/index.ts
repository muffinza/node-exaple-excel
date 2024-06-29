import express, { Request, Response } from 'express';// ใช้ import แบบ ES6
import homeRoutes from './routes/homeRouter';
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello, Express with TypeScript!');
// });

app.get('/mu', (req, res) => {
  res.send('mumumu');
})

app.get('/benz', (req, res) => {
  res.send('benzbenzbenzbenz');
})

app.get('/wise', (req, res) => {
  res.send('wisewisewisewisewise');
})

// Middleware เพื่อจัดการกับ JSON body
app.use(express.json());

app.use('/', homeRoutes);
app.use('/data',homeRoutes)
app.use('/name',homeRoutes)
app.use('/deleteData',homeRoutes)

// Route สำหรับ method POST
// app.post('/data', (req: Request, res: Response) => {
//   const receivedData = req.body;
//   console.log('Data received:', receivedData);
//   res.send('Data received successfully');
// });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});