FROM node:18 as build

RUN apt-get update -qq && apt-get install -y build-essential

WORKDIR /app

COPY ./ /app/

RUN mkdir -p node_modules/node-sass/vendor/linux-x64-51
RUN curl -L https://github.com/sass/node-sass/releases/download/v4.5.0/linux-x64-51_binding.node -o node_modules/node-sass/vendor/linux-x64-51/binding.node

RUN npm install
RUN npm rebuild node-sass

RUN npm run build

FROM nginx:1.19-alpine

EXPOSE 80

COPY --from=build /app/public /usr/share/nginx/html

STOPSIGNAL SIGQUIT

CMD ["nginx", "-g", "daemon off;"]
