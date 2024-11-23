
FROM node:22-slim

WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]