FROM node:20-alpine
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
RUN npm run build
RUN npm install -g serve
CMD ["serve", "-s", "build"]