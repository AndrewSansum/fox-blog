FROM node:21.7.2-alpine3.19

WORKDIR /json-server

RUN npm install -g json-server

RUN mkdir data
RUN touch data/db.json

CMD ["json-server", "--watch", "data/db.json", "--port", "8000"]