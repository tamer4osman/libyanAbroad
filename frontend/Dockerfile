# Use Node.js official image as a base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install frontend dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the frontend port
EXPOSE 5173

# Start the frontend server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]