# Dockerfile para React/Vite app
FROM node:18-alpine

# Instalar serve para servir archivos estáticos
RUN npm install -g serve

# Directorio de trabajo
WORKDIR /app

# Copiar package files
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar código fuente
COPY . .

# Build de la aplicación
RUN npm run build

# Exponer puerto 5521
EXPOSE 5521

# Servir la aplicación en puerto 5521
CMD ["serve", "-s", "dist", "-l", "5521"]
