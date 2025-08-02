FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

# Instalar dependências de desenvolvimento e produção
RUN npm install --production=false

COPY . .

EXPOSE 3000

# Comando para iniciar o servidor em modo de desenvolvimento
CMD [ "npm", "run", "dev" ]