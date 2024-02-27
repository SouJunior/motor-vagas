FROM node:alpine

WORKDIR /app

# Instalar dependências para o Firefox e o Geckodriver
RUN apk add --no-cache \
    firefox \
    dbus-x11 \
    udev \
    ttf-freefont \
    wget \
    tar \
    curl

# Definir a versão do Geckodriver que você deseja instalar
ARG GECKODRIVER_VERSION=0.30.0

# Baixar e instalar o Geckodriver
# Utiliza-se 'curl' para baixar o Geckodriver e instalar no diretório apropriado
RUN curl -sL "https://github.com/mozilla/geckodriver/releases/download/v${GECKODRIVER_VERSION}/geckodriver-v${GECKODRIVER_VERSION}-linux64.tar.gz" -o /tmp/geckodriver.tar.gz \
 && tar -zxf /tmp/geckodriver.tar.gz -C /usr/local/bin \
 && rm /tmp/geckodriver.tar.gz

# Copiar o arquivo package.json e instalar as dependências do projeto
COPY package.json ./
RUN npm install

# Copiar o restante dos arquivos do projeto
COPY . .

# Expor a porta em que sua aplicação estará ouvindo
EXPOSE 3333

# Comando para executar as migrations e iniciar a aplicação
CMD sh -c "npx ts-node ./node_modules/typeorm/cli.js migration:run -d src/database/data-source.ts && npm run dev"
