FROM node:12.21.0

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

expose 3000

CMD [ "node", "server.js" ]
