FROM nginx:1.25

COPY cors.conf /etc/nginx/snippets/cors.conf
COPY public-location.conf /etc/nginx/snippets/public-location.conf
COPY robots.txt /usr/share/nginx/html/robots.txt

COPY wait-for-it.sh /usr/bin/wait-for-it.sh

CMD ["nginx", "-g", "daemon off;"]
