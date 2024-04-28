# docker build . -t osmium --build-arg NOTION_DATABASE_ID=my ID

FROM node:21-bookworm
ARG NOTION_DATABASE_ID
ENV NOTION_DATABASE_ID=${NOTION_DATABASE_ID}

RUN apt update && \
  apt install npm -y

WORKDIR /app

