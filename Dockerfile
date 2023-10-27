
FROM node:latest

WORKDIR /comparssion_frontend

COPY package*.json ./

RUN npm install


COPY . .



CMD ["npm","start"]

EXPOSE 3000
