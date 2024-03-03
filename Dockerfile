# Get the base image of Node version 16
FROM node:20-bookworm

# Get the latest version of Playwright
RUN npx -y playwright@1.42.0 install --with-deps

# Set the work directory for the application
WORKDIR /app

# COPY the needed files to the app folder in Docker image
COPY . /app

# Start tests
CMD [ "sh", "-c", "npx playwright test --reporter=line" ]
