# Pharma Backend

This is the backend for a pharmacy management system. It provides RESTful APIs for managing users, medicines, orders, pharmacies, and prescription requests.

## Project Structure

```
pharma_backend-/
  server/
    config/                # Database configuration
    controllers/           # Route controllers for business logic
    middleware/            # Custom middleware (e.g., authentication)
    models/                # Mongoose models for MongoDB collections
    routes/                # API route definitions
    utils/                 # Utility functions (error handling, etc.)
    server.js              # Entry point for the Express server
    package.json           # Project dependencies and scripts
```

## Features

- User authentication and authorization
- Medicine management (CRUD)
- Order processing
- Pharmacy management
- Prescription request handling

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- MongoDB instance (local or cloud)

### Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd pharma_backend-/server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `server/` directory.
   - Add your MongoDB URI and any other required environment variables.

   Example:
   ```
   MONGODB_URI=mongodb://localhost:27017/pharma
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. Start the server:
   ```bash
   npm start
   ```

   The server should now be running on `http://localhost:5000`.

## API Endpoints

- `/api/auth` - Authentication routes (login, register)
- `/api/medicines` - Medicine CRUD operations
- `/api/orders` - Order management
- `/api/pharmacies` - Pharmacy management
- `/api/prescription-requests` - Prescription request handling

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE) 