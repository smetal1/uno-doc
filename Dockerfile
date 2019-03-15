FROM saurav7055/xlsx-pdf

WORKDIR /
COPY . .

ENV HOSTNAME 0.0.0.0
ENV PORT 4000

RUN npm cache clean -f
RUN npm install -g n
RUN n stable

RUN npm install

EXPOSE 4000

CMD ["node","app.js"]
