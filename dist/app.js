"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const jobRoutes_1 = __importDefault(require("./routes/jobRoutes"));
const db_1 = __importDefault(require("./config/db"));
const errorHandler_1 = require("./middlewares/errorHandler");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(errorHandler_1.errorHandler);
app.use('/api', jobRoutes_1.default);
app.get('/', (_req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>NxtJobAI Assignment</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color:rgb(13, 12, 12);
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            color: #333;
          }
          .container {
            box-shadow: 0px 4px 6px rgba(175, 173, 173, 0.1);
            padding: 20px;
            border-radius: 10px;
            background-color: #fff;
          }
          h1 {
            color: #5a67d8;
          }
          a {
            text-decoration: none;
            color: #3182ce;
            font-weight: bold;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Thanks for the opportunity, NxtJobAI!</h1>
            Check out my  <a href="https://github.com/AryamanSi17/jobBackendAssignment.git" target="_blank">GitHub Repository</a> for assignment .
            The backend is deployed at <a href="https://jobbackend-9nvb.onrender.com/" target="_blank">Live Link</a> .
          </p>
        </div>
      </body>
      </html>
    `);
});
db_1.default.sync({ force: false }).then(() => {
    console.log("This is working !!");
});
exports.default = app;
