FROM node:16-alpine

RUN apk update
RUN apk upgrade
RUN apk add --no-cache udev ttf-freefont chromium

RUN apk --no-cache add tzdata && \
    cp /usr/share/zoneinfo/Asia/Seoul /etc/localtime && \
    echo "Asia/Seoul" > /etc/timezone

RUN mkdir /usr/share/fonts/nanumfont
RUN wget http://cdn.naver.com/naver/NanumFont/fontfiles/NanumFont_TTF_ALL.zip
RUN unzip NanumFont_TTF_ALL.zip -d /usr/share/fonts/nanumfont
RUN fc-cache -f -v

ENV LANG=ko_KR.UTF-8
ENV LANGUAGE=ko_KR.UTF-8


RUN apk add --no-cache \
    autoconf \
    automake \
    bash \
    g++ \
    libc6-compat \
    libtool \
    libjpeg-turbo-dev \
    libpng-dev \
    make \
    nasm \
    curl



WORKDIR /usr/src/app

RUN apk add --no-cache curl && \
    cd /tmp && curl -Ls https://github.com/dustinblackman/phantomized/releases/download/2.1.1/dockerized-phantomjs.tar.gz | tar xz && \
    cp -R lib lib64 / && \
    cp -R usr/lib/x86_64-linux-gnu /usr/lib && \
    cp -R usr/share /usr/share && \
    cp -R etc/fonts /etc && \
    curl -k -Ls https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2 | tar -jxf - &&\
    cp phantomjs-2.1.1-linux-x86_64/bin/phantomjs /usr/local/bin/phantomjs && \
    rm -fR phantomjs-2.1.1-linux-x86_64 && \
    apk del curl


RUN yarn global add typescript
RUN yarn global add pm2 
ENV NODE_PATH=.
ENV NODE_ENV=production

COPY package*.json .
RUN yarn install --production=false

COPY . .

CMD ["pm2-runtime", "start", "deploy.config.json", "--env", "production"]