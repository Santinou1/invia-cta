# 1) Build del front
FROM node:18-alpine AS build

# Build arguments
ARG VITE_API_URL_PRODUCTION
ARG VITE_API_URL_LOCAL
ARG VITE_NODE_ENV

# Seteamos directorio de trabajo
WORKDIR /app

# Copiamos package.json y package-lock primero (para cache)
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el archivo .env
COPY .env .

# Copiamos el resto del código
COPY . .

# Build de producción
RUN npm run build


# 2) Servimos el build con un servidor estático liviano
FROM node:18-alpine

# Instalamos 'serve' para servir archivos estáticos
RUN npm install -g serve

WORKDIR /app

# Copiamos el build generado por la etapa anterior
COPY --from=build /app/dist ./dist

# Exponemos el puerto
EXPOSE 5543

# Comando que arranca el servidor estático
CMD ["serve", "-s", "dist", "-l", "5543"]
