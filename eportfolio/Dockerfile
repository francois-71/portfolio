# Use the official Node.js runtime as the base image
FROM node:16 as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install Node.js dependencies (you can omit the --silent flag for debugging)
RUN npm install --silent

# Copy the rest of your frontend application code to the container
COPY . ./

# Copy the Nginx configuration file and SSL certificates


# Build the React frontend (use your specific build command)
RUN npm run build

# Use a lightweight Nginx image to serve the built frontend
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf


# Define the command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
