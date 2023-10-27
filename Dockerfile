
FROM node:latest

WORKDIR /comparssion_frontend

COPY package*.json ./

RUN npm install


COPY . .

RUN npm build

CMD ["npm","start"]

EXPOSE 3000
