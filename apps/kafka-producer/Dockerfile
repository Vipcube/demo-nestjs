# Install dependencies only when needed
FROM node:16-buster-slim as deps
WORKDIR /usr/src/app
COPY ./../../package*.json ./
RUN npm install --only=production --legacy-peer-deps

# Production image, copy all the files and run nest
FROM node:16-buster-slim as runner
LABEL maintainer="Brad Chen <vipcube@gmail.com>"
ENV NODE_ENV production

WORKDIR /usr/src/app

COPY dist/apps/kafka-producer .
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=deps /usr/src/app/package.json ./package.json

EXPOSE 3000

CMD ["node", "main.js"]
