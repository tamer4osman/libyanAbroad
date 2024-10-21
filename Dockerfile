# Use Node.js official image as a base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json from the root of the project to the container
COPY package.json ./ 
COPY package-lock.json ./  


# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the Next.js default port
EXPOSE 3000

# Start the frontend server
CMD ["npm", "run", "dev"]