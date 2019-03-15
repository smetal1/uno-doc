FROM saurav7055/xlsx-pdf

WORKDIR /
COPY . .

ENV HOSTNAME 0.0.0.0
ENV PORT 4000

RUN npm install

EXPOSE 4000

CMD ["node","app.js"]
