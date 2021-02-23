FROM node:14
RUN mkdir -p /opt/apollo-server
WORKDIR /opt/apollo-server
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
