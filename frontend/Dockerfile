# Use a image leve do Node.js como base
FROM node:20

# Cria a pasta de trabalho no container
WORKDIR /app

# Copia os arquivos necessários para o container
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos
COPY . .

# Expõe a porta 8080 para o servidor de desenvolvimento do Vue
EXPOSE 8080

# Comando para iniciar o servidor de desenvolvimento
CMD ["npm", "run", "serve"]