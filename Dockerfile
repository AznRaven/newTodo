# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app's source code to the container
COPY . .

# Build the React app for production
RUN npm run build

# Expose the port your app will run on
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]
