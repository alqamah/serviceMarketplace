# Service Marketplace Backend API

## Postman Documentation

https://documenter.getpostman.com/view/32469410/2sAXqnejHM

## Description

This project is a backend API for an online service marketplace. It provides a platform where service providers can create and manage their services, while customers can browse and book these services. The API handles user authentication, service management, and booking operations.

## Routes

### Authentication Routes

- `POST /api/auth/register`: Register a new user (customer or service provider)
- `POST /api/auth/login`: Login and receive a JWT token
- `GET /api/auth/profile`: Get the current user's profile (protected route)

### Service Routes

- `GET /api/services`: Get all services
- `GET /api/services/:id`: Get a specific service by ID
- `POST /api/services`: Create a new service (service provider only)
- `PUT /api/services/:id`: Update a service (service provider only)
- `DELETE /api/services/:id`: Delete a service (service provider only)

### Booking Routes

- `GET /api/bookings`: Get all bookings for the current user
- `GET /api/bookings/:id`: Get a specific booking by ID
- `POST /api/bookings`: Create a new booking
- `PUT /api/bookings/:id`: Update a booking status
- `DELETE /api/bookings/:id`: Cancel a booking

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/service-marketplace-api.git
   cd service-marketplace-api
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:
   ```
   npm start
   ```

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT) for authentication

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.