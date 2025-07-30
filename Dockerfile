# Dockerfile

# Use a lighter, more recent Node.js image
FROM node:20-alpine


WORKDIR /app


COPY package*.json ./


RUN npm install --production


COPY . .


EXPOSE 3000


CMD ["node", "index.js"]