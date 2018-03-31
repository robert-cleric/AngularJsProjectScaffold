FROM nginx:1.9.8
LABEL author="Robert Cleric"
COPY ./dist /usr/share/nginx/html
EXPOSE 80 443
CMD [ "nginx", "-g", "daemon off;"]
