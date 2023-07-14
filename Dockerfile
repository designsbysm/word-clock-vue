FROM node:18.16.1-alpine

RUN npm install -g http-server

WORKDIR /app

COPY package.json .
RUN yarn install

COPY . .
RUN yarn build

CMD http-server dist
