FROM node:10

EXPOSE 3000
WORKDIR /user/bob-app
COPY . .
RUN npm install

CMD ["npm", "run", "dev"]
