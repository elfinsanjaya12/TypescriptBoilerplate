import express from 'express';

const PORT = process.env.PORT || 3000;
const app = express();
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

// import express, { Application, Request, Response } from 'express';
// import bodyParser from 'body-parser';
// import morgan from 'morgan';
// import compression from 'compression';
// import helmet from 'helmet';
// import cors from 'cors';
// import { config as dotenv } from 'dotenv';

// // import mongoose
// import mongoose = require('mongoose');

// // import routers
// import UserRouterExample from './routers/UserRouterExample';

// // import docs swagger
// import swaggerUiExpress from 'swagger-ui-express';
// import * as swaggerDocument from './docs/swagger.json';

// class App {
//   public app: Application;

//   constructor() {
//     this.app = express();
//     dotenv();
//     this.mongoSetup();
//     this.plugins();
//     this.routes();
//   }

//   protected plugins(): void {
//     this.app.use(bodyParser.json());
//     this.app.use(bodyParser.urlencoded({ extended: false }));
//     this.app.use(morgan('dev'));
//     this.app.use(compression());
//     this.app.use(helmet());
//     this.app.use(cors());
//   }

//   protected routes(): void {
//     // endpoint method get
//     this.app.use(
//       '/docs-api',
//       swaggerUiExpress.serve,
//       swaggerUiExpress.setup(swaggerDocument)
//     );
//     this.app.use('/', (req: Request, res: Response) => {
//       return res.status(200).json({ massage: "Welcome Api Boilerplate Typescript Express" })
//     });
//     this.app.use('/api/v1/users', UserRouterExample);
//   }
//   // connection database mongodb
//   private mongoSetup(): void {
//     const MONGO_URI: any = process.env.DB_CONNECTION;
//     mongoose.set('useCreateIndex', true);
//     mongoose.connect(MONGO_URI || 'mongodb+srv://elfinsanjaya:Copyright12@cluster0-vnlpo.gcp.mongodb.net/db_text?retryWrites=true&w=majority', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//   }
// }

// const app = new App().app;
// app.listen(process.env.PORT || 3000, () => {
//   // tslint:disable-next-line: no-console
//   console.log(`Server Running di port ${process.env.PORT || 3000}`);
// });
