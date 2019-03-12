FROM node:10.15.0-alpine
WORKDIR /app
VOLUME ["/app"]
RUN apk add --no-cache bash
RUN yarn global add @vue/cli
RUN yarn install 
EXPOSE 8080
CMD ["yarn", "run", "serve"]