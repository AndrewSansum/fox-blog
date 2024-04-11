FROM node:21.7.2-alpine3.19

WORKDIR /fox-blog

RUN npm install -g serve

COPY package.json /fox-blog/
COPY package-lock.json /fox-blog/

RUN npm ci

COPY public/ /fox-blog/public
COPY src/ /fox-blog/src

RUN npm run build

CMD ["serve", "-l", "8080", "-s", "build"]