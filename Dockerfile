FROM php:latest
RUN docker-php-ext-install pdo_mysql
WORKDIR /var/www/html