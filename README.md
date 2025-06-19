# Venue Relationship Tracker

A comprehensive web application designed to help musicians and bands manage their relationships with venues, track communications, manage bookings, and analyze performance history.

## Overview

The Venue Relationship Tracker is a specialized CRM tool for musicians, bands, and music managers to optimize their relationships with performance venues. It provides a centralized platform for storing venue information, tracking all communications, managing bookings, analyzing performance metrics, and storing important documents.

## Features

### Contact Management
- Store detailed venue information (capacity, tech specs, address)
- Manage multiple contacts per venue (bookers, sound engineers, etc.)
- Categorize venues by size, location, and genre focus

### Communication Tracking
- Log and track all communications with venues
- Set follow-up reminders
- Create communication templates for common interactions

### Booking History
- Track past performances at each venue
- Record financial details (guarantee, door split, merch sales)
- Log attendance and audience response

### Performance Analytics
- View venue performance metrics
- Compare venues across different metrics
- Generate reports to identify valuable venue relationships

### Calendar Integration
- View venue availability and conflicts
- Coordinate with venue calendars
- Send booking requests directly from the app

### Document Management
- Store contracts, riders, and stage plots
- Track contract status and deadlines
- Access venue tech specs

## Technology Stack

### Frontend
- React.js with TypeScript
- Material-UI for component library
- Redux Toolkit for state management
- Chart.js for data visualization
- Formik with Yup for form validation

### Backend
- Node.js with Express
- JWT authentication with OAuth integration
- Swagger/OpenAPI for API documentation

### Database
- PostgreSQL for primary data storage
- Redis for caching
- Elasticsearch for advanced venue search

### DevOps/Deployment
- Docker for containerization
- GitHub Actions for CI/CD
- AWS (ECS/Fargate) for cloud hosting
- AWS S3 for document storage

## Getting Started

### Prerequisites
- Node.js (v16+)
- Docker
- PostgreSQL
- Redis

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/dxaginfo/venue-relationship-tracker-app.git
   cd venue-relationship-tracker-app
   ```

2. Install dependencies for the frontend
   ```bash
   cd frontend
   npm install
   ```

3. Install dependencies for the backend
   ```bash
   cd ../backend
   npm install
   ```

4. Set up environment variables
   - Create a `.env` file in the backend directory based on `.env.example`
   - Configure database connections, API keys, and other required settings

5. Start the development environment
   ```bash
   # Start the backend server
   cd backend
   npm run dev
   
   # In a new terminal, start the frontend
   cd frontend
   npm start
   ```

### Docker Deployment

1. Build and run with Docker Compose
   ```bash
   docker-compose up -d
   ```

## Project Structure

```
venue-relationship-tracker/
├── frontend/               # React frontend application
│   ├── public/             # Static files
│   ├── src/                # Source code
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API service integrations
│   │   ├── store/          # Redux store configuration
│   │   ├── types/          # TypeScript type definitions
│   │   └── utils/          # Utility functions
│   └── package.json        # Frontend dependencies
│
├── backend/                # Node.js/Express backend
│   ├── src/
│   │   ├── config/         # Configuration files
│   │   ├── controllers/    # Request handlers
│   │   ├── middleware/     # Express middleware
│   │   ├── models/         # Database models
│   │   ├── routes/         # API route definitions
│   │   ├── services/       # Business logic
│   │   └── utils/          # Utility functions
│   └── package.json        # Backend dependencies
│
├── database/               # Database migrations and seeds
│   ├── migrations/         # Database schema migrations
│   └── seeds/              # Seed data for testing
│
├── docker/                 # Docker configuration files
├── docker-compose.yml      # Docker compose configuration
└── README.md               # Project documentation
```

## API Documentation

The API documentation is available at `/api/docs` when the server is running. It is generated using Swagger/OpenAPI.

## Database Schema

The application uses a relational database with the following core tables:
- Users
- Bands
- BandMembers
- Venues
- VenueContacts
- Communications
- Performances
- Documents
- Reminders
- Tags

See the project plan for a detailed schema definition.

## Security Considerations

- Authentication is handled using JWT tokens
- Sensitive data (passwords, financial information) is properly encrypted
- All communications use HTTPS
- Proper data access controls and permissions are implemented
- Regular security audits and vulnerability scanning

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Project Link: [https://github.com/dxaginfo/venue-relationship-tracker-app](https://github.com/dxaginfo/venue-relationship-tracker-app)