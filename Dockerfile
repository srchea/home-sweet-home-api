FROM node:10-alpine

# Create app directory
RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/

# Install app dependencies
COPY package*.json /usr/src/app/
RUN apk add --no-cache --virtual .gyp \
  python \
  make \
  g++ \
&& npm install --production \
&& apk del .gyp

# Bundle app source
COPY . /usr/src/app/

EXPOSE 8080
CMD [ "npm", "start" ]
