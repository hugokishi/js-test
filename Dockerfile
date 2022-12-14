FROM node:16-alpine

WORKDIR /

RUN apk update
RUN apk add yarn --no-cache

COPY . .
RUN yarn install

EXPOSE 3001
CMD ["yarn", "start"]
