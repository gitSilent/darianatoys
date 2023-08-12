FROM node:18-alpine3.17
COPY package.json package-lock.json
RUN npm install
COPY . .
CMD ["npm", "run", "build"] 