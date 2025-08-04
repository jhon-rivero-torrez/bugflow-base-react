import 'reflect-metadata';
// import express from 'express';
// import * as path from 'path';
import createApp from './createApp';
import { AppDataSource } from './config/typeorm.config';

const app = createApp();

// //app.use('/assets', express.static(path.join(__dirname, 'assets')));

// app.get('/api', (req, res) => {
//   res.send({ message: 'Welcome to bugflow-api!' });
// });

// const port = process.env.PORT || 3333;
// const server = app.listen(port, () => {
//   console.log(`Listening at http://localhost:${port}/api`);
// });

// server.on('error', console.error);

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');

    // // Setup your routes after DB is ready
    // app.use('/api/roles', roleRoutes);

    const PORT = process.env.PORT || 3333;
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
