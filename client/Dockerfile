FROM node:14
RUN mkdir -p /opt/front-end
WORKDIR /opt/front-end
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
