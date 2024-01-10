# docker build . -t osmium
# docker run -it -p 3000:3000 -v $(pwd):/app osmium

FROM node:21-bookworm

ENV NOTION_DATABASE_ID=XXXXXX

RUN apt update && \
  apt install npm -y

WORKDIR /app

