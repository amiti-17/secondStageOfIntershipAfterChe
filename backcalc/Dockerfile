FROM node:lts-alpine
ENV NODE_ENV=development
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --development --silent && mv node_modules ../
COPY . .
EXPOSE 3002
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "run", "dev"]

# FROM node
# WORKDIR /app
# COPY package.json .
# RUN npm install
# COPY . .
# EXPOSE 3002
# CMD ["npm", "run", "dev"]