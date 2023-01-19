FROM node:16

WORKDIR /usr/src/app

COPY . .

ENTRYPOINT [ "./entrypoint.sh" ]

CMD [ "nginx", "-g", "daemon off;" ]
