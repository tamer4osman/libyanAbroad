
# Libyan Citizens Abroad

**Libyan Citizens Abroad** is a web-based system for the Ministry of Foreign Affairs to manage and record the data of Libyan citizens residing abroad. The system allows embassies in each country to register basic information of citizens, handle new births and deaths, and manage records efficiently. The application is built with a **React frontend**, **Node.js/Express backend**, and a **MySQL** database, and it is deployed using **Docker**.

## Features

- Register and manage Libyan citizens living abroad.
- Capture detailed personal information.
- Support for recording new births and deaths.
- Secure login and authentication for embassy staff.
- Separate frontend and backend with a single unified Docker setup for deployment.
- Responsive user interface built with React.
- RESTful API for seamless communication between frontend and backend.

## Table of Contents

- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [API Documentation](#api-documentation)
- [Docker Setup](#docker-setup)
- [License](#license)

## Technology Stack

### Backend:
- **Node.js** with **Express**: RESTful API for managing citizens' data and handling authentication.
- **MySQL**: Relational database for storing citizen data and related records.
- **Sequelize**: ORM for interacting with the MySQL database.

### Frontend:
- **React**: Client-side application for embassy staff to interact with the system.
- **Vite**: Fast build tool for modern web projects with React.
- **Axios**: HTTP client for making API requests to the backend.

### Infrastructure:
- **Docker**: Containerized application with `docker-compose` for running backend, frontend, and MySQL services.
- **Docker Compose**: Simplifies orchestration of multi-container Docker applications.

## Project Structure

```
libyan-citizens-abroad/
│
├── backend/               # Node.js Express backend
│   ├── src/
│   ├── package.json
│   ├── Dockerfile
│   └── ...
│
├── frontend/              # React Vite frontend
│   ├── src/
│   ├── package.json
│   ├── Dockerfile
│   └── ...
│
├── docker-compose.yml      # Docker Compose setup
├── .gitignore              # Ignoring unnecessary files (e.g., node_modules)
└── README.md               # Project documentation
```

## Setup Instructions

To get started with the project, follow the steps below to set up the application locally using Docker.

### Prerequisites

Make sure you have the following installed on your machine:
- [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/)
- [Git](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/USERNAME/libyan-citizens-abroad.git
cd libyan-citizens-abroad
```

### 2. Set Up Environment Variables

Create an `.env` file in the backend directory with the following configuration:

```env
DB_HOST=db
DB_USER=user
DB_PASSWORD=userpassword
DB_NAME=citizen_db
PORT=5000
```

### 3. Build and Run the Application with Docker Compose

```bash
docker-compose up --build
```

This will build and start the backend, frontend, and MySQL database containers.

### 4. Access the Application

- The **frontend** will be accessible at: `http://localhost:3000`
- The **backend** API will be accessible at: `http://localhost:5000`

### 5. Database Setup

The MySQL database will be automatically initialized. You can connect to it using the following credentials:

- Host: `localhost`
- Port: `3306`
- Database: `citizen_db`
- Username: `user`
- Password: `userpassword`

## API Documentation

The backend provides a set of RESTful APIs for managing citizens' data. Below is a brief overview of the main endpoints:

### **GET /citizens**
Retrieve a list of all Libyan citizens residing abroad.

### **POST /citizens**
Register a new citizen by providing personal details (name, national number, address, etc.).

### **PUT /citizens/:id**
Update the details of an existing citizen.

### **DELETE /citizens/:id**
Delete a citizen record from the system.

### **POST /births**
Register a new birth for a Libyan citizen abroad.

### **POST /deaths**
Register a death for a Libyan citizen abroad.

_For more detailed API documentation, refer to the API section in the backend source code._

## Docker Setup

### Development

For development purposes, you can run the app using Docker Compose to bring up both the backend and frontend:

```bash
docker-compose up
```

If you want to make changes to the backend or frontend, changes will automatically reflect in the containers thanks to the mounted volumes.

### Production

For production deployment, consider building the images with production configurations:

```bash
docker-compose -f docker-compose.prod.yml up --build
```

This will ensure optimizations are applied for the production environment (e.g., minified assets in the frontend).

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.

---

### **Contributions**

Contributions to this project are welcome. Please open an issue or submit a pull request if you have ideas for improving the system.
