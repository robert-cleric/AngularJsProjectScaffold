FROM nginx:1.9.8
LABEL author="Robert Cleric"

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./dist /usr/share/nginx/html

#EXPOSE 80 443
EXPOSE 443

#CMD [ "nginx", "-g", "daemon off;"]
ENTRYPOINT [ "nginx", "-g daemon off;" ]
