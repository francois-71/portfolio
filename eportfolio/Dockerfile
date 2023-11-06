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
COPY /etc/letsencrypt/live/dionfrancois.com-0001/fullchain.pem /etc/nginx/SSL/fullchain.pem
COPY /etc/letsencrypt/live/dionfrancois.com-0001/privkey.pem /etc/nginx/SSL/privkey.pem
COPY ./nginx/SSL/private.key /etc/nginx/SSL/private.key
COPY ./nginx/SSL/certicate.pem /etc/nginx/SSL/certificate.pem


# Define the command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
