FROM node:16

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

RUN yarn run build

CMD ["yarn", "run", "start"]

ENV TZ="Europe/Warsaw"

EXPOSE 8080
