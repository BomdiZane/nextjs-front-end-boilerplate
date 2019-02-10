FROM node:10

EXPOSE 3000
WORKDIR /user/nextjs-front-end-boilerplate
COPY . .
RUN npm install

CMD ["npm", "run", "dev"]
