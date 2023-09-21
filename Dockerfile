# Usa una imagen base de Node.js
FROM node:18.16.0 as build

# Establece el directorio de trabajo en /html/Biblioteca
WORKDIR app/

COPY package*.json ./

COPY . .

RUN npm install 

RUN npx ng build 

### STAGE 2: Run ###
FROM nginx:1.24.0
#RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

# Inicia el servidor Nginx cuando se ejecute el contenedor
CMD ["nginx", "-g", "daemon off;"]

#docker build -t angular-dockerv2 .