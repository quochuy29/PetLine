# Use an official Node.js runtime as the base image
FROM node:20-alpine as petline-fe

ARG USER_ID=1000
ARG GROUP_ID=1000
# Set the working directory in the container to /app
WORKDIR /app

# Copy the rest of the application code to the working directory
COPY . .

COPY package*.json ./
# Install the project dependencies
RUN npm install -g @angular/cli
# ...existing code...
RUN npm install


# Make port 4200 available to the outside world
EXPOSE 4200

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
CMD ["/entrypoint.sh"]

# Start the application in development mode
# CMD [ "npm", "start" ]