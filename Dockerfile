# base image
FROM node:10.11.0
MAINTAINER JoseTello
LABEL authors="Jose David Tello"

# install chrome for protractor tests
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

RUN npm install
RUN npm install -g @angular/cli@6.1.5 && npm cache clean

# add app
COPY . /usr/src/app

# add app
COPY . /usr/src/app

# start app
CMD ng serve --host 0.0.0.0
