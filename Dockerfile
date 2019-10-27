FROM node:lts-alpine
LABEL name="lbt-inscale-adform-exercise"
LABEL maintainer="Levin Tacandong <levin.tacandong@gmail.com"
LABEL url="https://github.com/levint/inscale-adform-exercise"

WORKDIR /usr/src/app
COPY ./api/package*.json ./
RUN yarn install
COPY ./api ./
EXPOSE 8080
CMD [ "npm", "start" ]
