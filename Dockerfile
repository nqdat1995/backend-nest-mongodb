FROM node:alpine as development

ENV http_proxy http://datnq29692:Friday%40123@192.168.95.100:3128
ENV https_proxy http://datnq29692:Friday%40123@192.168.95.100:3128

WORKDIR /app

COPY package*.json .

RUN npm config set proxy=http://datnq29692:Friday%40123@192.168.95.100:3128 &&\
    npm config set https-proxy=http://datnq29692:Friday%40123@192.168.95.100:3128 &&\
    npm install

COPY . .

RUN npm run build

FROM node:alpine as production

EXPOSE 3000

ENV NODE_ENV=production
ENV http_proxy http://datnq29692:Friday%40123@192.168.95.100:3128
ENV https_proxy http://datnq29692:Friday%40123@192.168.95.100:3128

WORKDIR /app

COPY package*.json .

RUN npm config set proxy=http://datnq29692:Friday%40123@192.168.95.100:3128 &&\
    npm config set https-proxy=http://datnq29692:Friday%40123@192.168.95.100:3128 &&\
    npm install --only=production

COPY . .

COPY --from=development /app/dist ./dist

CMD ["npm", "run", "start:prod"]