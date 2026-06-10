FROM node:18-alpine
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source files inside the image
COPY . .

EXPOSE 3000

# Start the application server
CMD ["node", "app.js"]
