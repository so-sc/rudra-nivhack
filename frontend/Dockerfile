
# FROM node:13.12.0-alpine
FROM node:18-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install -g typescript
COPY . ./
CMD ["npm", "run", "dev"]