FROM node:alpine

WORKDIR /app

RUN apk add --no-cache \
    firefox \
    dbus-x11 \
    udev \
    ttf-freefont \
    wget \
    tar \
    curl

ARG GECKODRIVER_VERSION=0.34.0

RUN curl -sL "https://github.com/mozilla/geckodriver/releases/download/v${GECKODRIVER_VERSION}/geckodriver-v${GECKODRIVER_VERSION}-linux64.tar.gz" -o /tmp/geckodriver.tar.gz \
 && tar -zxf /tmp/geckodriver.tar.gz -C /usr/local/bin \
 && rm /tmp/geckodriver.tar.gz \
 && chmod +x /usr/local/bin/geckodriver \
 && chmod 777 /usr/local/bin/geckodriver 

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 3333

CMD ["sh", "-c", "npx ts-node ./node_modules/typeorm/cli.js migration:run -d src/database/data-source.ts && npm run dev"]
