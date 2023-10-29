# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /usr/source/app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install any needed dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Change directory to the frontend folder and install frontend dependencies
WORKDIR /usr/source/app/frontend
RUN npm install

# Change directory back to the app root folder
WORKDIR /usr/source/app

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Define the command to run the app
CMD ["node", "backend/server.js"]
