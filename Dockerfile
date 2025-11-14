# 1) Build del front
FROM node:18-alpine AS build

# Seteamos directorio de trabajo
WORKDIR /app

# Copiamos package.json y package-lock primero (para cache)
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el resto del código
COPY . .

# Copiamos .env explícitamente (ya que está en .gitignore)
COPY .env* ./

# Debug: verificamos que el .env esté presente y tenga contenido
RUN echo "=== DEBUG: Archivos .env ===" && ls -la .env* && echo "=== Contenido del .env ===" && cat .env || echo "No se encontró .env"

# Debug: verificamos las variables de entorno antes del build
RUN echo "=== DEBUG: Variables de entorno ===" && env | grep VITE || echo "No hay variables VITE"

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
