FROM node:14

ARG REACT_APP_BASE_URL

ENV REACT_APP_BASE_URL $REACT_APP_BASE_URL

WORKDIR '/app'



COPY package.json ./
COPY package-lock.json ./
RUN npm install


COPY . .

CMD ["npm","start"]