FROM node:alpine

WORKDIR /app

COPY package.json ./

RUN apk add --no-cache \
    firefox \
    dbus-x11 \
    udev

RUN npm install

COPY . .

RUN apk update && apk add chromium chromium-chromedriver

EXPOSE 3333

CMD ["npm", "run", "dev"]