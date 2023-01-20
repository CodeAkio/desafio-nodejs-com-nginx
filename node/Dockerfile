FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN chmod +x ./entrypoint.sh

ENTRYPOINT [ "./entrypoint.sh" ]

CMD [ "nginx", "-g", "daemon off;" ]
