FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /home/node/app
COPY --chown=node:node package.json .
RUN npm install
COPY --chown=node:node . .
EXPOSE 3000
USER node
CMD ["npm", "start"]