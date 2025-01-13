# Job Backend Assignment

This is a Node.js backend application for managing jobs. It uses Sequelize as an ORM and MySQL as the database. The project supports TypeScript for scalability and maintainability.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- MySQL database (can be an AWS RDS instance or another MySQL-compatible provider like Aiven)

## Setup Instructions

### Clone the Repository

```bash
git clone <repository_url>
cd jobBackendAssignment
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the root of the project and add the following variables:

```env
DB_HOST=<your-database-host>
DB_PORT=3306
DB_NAME=<your-database-name>
DB_USER=<your-database-username>
DB_PASSWORD=<your-database-password>
PORT=3000
```

### Build the Project

Compile the TypeScript code to JavaScript:

```bash
npm run build
```

### Run the Project

Start the server:

```bash
npm start
```

The server will run on `http://localhost:3000` by default.

### Test the Endpoints

You can test the API using [Postman](https://www.postman.com/) or a similar tool.

#### Example Endpoints

- **Create a Job:**
  - `POST /api/jobs`
  - Body:
    ```json
    {
      "title": "Software Engineer",
      "company": "Example Corp",
      "location": "Remote",
      "salary": 120000,
      "description": "Develop and maintain web applications."
    }
    ```

- **Get All Jobs:**
  - `GET /api/jobs`

- **Get Job by ID:**
  - `GET /api/jobs/:id`

- **Update a Job:**
  - `PUT /api/jobs/:id`
  - Body (partial or full):
    ```json
    {
      "location": "Onsite"
    }
    ```

- **Delete a Job:**
  - `DELETE /api/jobs/:id`

## Project Structure

```plaintext
jobBackendAssignment
├── src
│   ├── config
│   │   └── db.ts          # Database connection setup
│   ├── controllers
│   │   └── jobController.ts # Controller for job-related operations
│   ├── middlewares
│   │   └── errorHandler.ts  # Custom error handling middleware
│   ├── models
│   │   └── jobModel.ts      # Job model definition
│   ├── routes
│   │   └── jobRoutes.ts     # Routes for job endpoints
│   ├── app.ts               # Express app setup
│   └── server.ts            # Server entry point
├── dist                    # Compiled JavaScript output
├── .env                    # Environment variables
├── package.json            # Project dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

## Troubleshooting

- **`connect ETIMEDOUT` or `ECONNREFUSED`:**
  - Ensure your database is publicly accessible or that the necessary security groups and firewalls allow connections from your IP.

- **`Unknown database`:**
  - Make sure the database exists and matches the `DB_NAME` in your `.env` file.

## Contributing

Feel free to submit issues or pull requests to improve the project.

## License

This project is licensed under the MIT License.
