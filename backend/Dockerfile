# Use Node.js official image as a base image
FROM node:latest

# Install ping
RUN apt-get update && apt-get install -y iputils-ping

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the backend port
EXPOSE 5000

# Run the backend server
CMD ["npm", "start"]