FROM node:21.7.2-alpine3.19

WORKDIR /json-server

RUN mkdir data
RUN touch data/db.json

CMD ["npx", "json-server", "--host", "0.0.0.0", "--port", "8000", "data/db.json"]