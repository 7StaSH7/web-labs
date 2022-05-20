FROM node:16.14.2 as base

WORKDIR /app

COPY ./package.json .

RUN yarn install

COPY . .

EXPOSE 5000

CMD yarn start