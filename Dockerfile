# pull official base image
# FROM node:14.19-alpine
FROM nginx

COPY build /usr/share/nginx/html
