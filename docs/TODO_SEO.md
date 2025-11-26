# 📋 TODO - Completar Feat SEO

## ✅ LO QUE YA ESTÁ HECHO

- ✅ Sistema de metadatos dinámicos
- ✅ Schema.org JSON-LD completo
- ✅ Sitemap.xml
- ✅ Robots.txt mejorado
- ✅ Open Graph y Twitter Cards
- ✅ Estructura semántica mejorada
- ✅ FAQPage schema
- ✅ Funciona en local (URLs dinámicas)

---

## 🔴 CRÍTICO - HACER AHORA

### 1. **Crear Imagen OG Principal** ⚠️
**Archivo:** `public/og-image.jpg`  
**Tamaño:** 1200x630px  
**Contenido sugerido:**
- Logo INVIA
- Texto: "INVIA - Invitaciones Digitales Hermosas"
- Subtítulo: "Casamientos, Cumpleaños, 15 Años y más"
- Colores: Violeta (#7c3aed) y blanco
- Fondo: Gradiente o imagen de fondo relacionada

**Herramientas:**
- Canva (template: Open Graph Image)
- Figma
- Photoshop

**Cómo probar:**
```bash
# En local, visitar:
http://localhost:5521/og-image.jpg

# O usar herramienta:
https://www.opengraph.xyz/
```

---

### 2. **Crear Favicon** ⚠️
**Archivos necesarios:**
- `public/favicon.ico` (32x32px, 16x16px)
- `public/apple-touch-icon.png` (180x180px)

**Cómo crear:**
1. Usar logo existente: `src/assets/images/logo-invia-color.png`
2. Redimensionar a los tamaños necesarios
3. Convertir a .ico para favicon

**Herramientas:**
- https://favicon.io/
- https://realfavicongenerator.net/

**Nota:** Ya está configurado en `index.html` para usar `logo-invia-color.png`, pero es mejor tener favicon.ico específico.

---

### 3. **Crear Imágenes OG por Template** (Opcional pero recomendado)
**Archivos:**
- `public/og-template-casamiento.jpg` (1200x630px)
- `public/og-template-cumpleanos.jpg` (1200x630px)
- `public/og-template-quince.jpg` (1200x630px)
- `public/og-template-babyshower.jpg` (1200x630px)

**Contenido sugerido:**
- Screenshot o mockup de la plantilla
- Texto descriptivo de la plantilla
- Logo INVIA pequeño

---

## 🟡 IMPORTANTE - PRÓXIMA SEMANA

### 4. **Optimizar Imágenes Existentes**
- Convertir a WebP con fallback
- Comprimir imágenes JPG/PNG
- Agregar lazy loading completo

### 5. **Preload Recursos Críticos**
- Preload primera imagen hero
- Preload fuentes críticas
- Preload CSS crítico

### 6. **Verificar H1 en Templates**
- Ya tienen H1, pero verificar que el contenido sea relevante para SEO
- Asegurar que no haya múltiples H1

---

## 🟢 MEJORAS ADICIONALES (Futuro)

### 7. **Self-hosting de Fuentes** (Opcional)
- Descargar fuentes de Google Fonts
- Servir localmente
- Mejor performance y privacidad

### 8. **Breadcrumbs Visuales** (Opcional)
- Agregar breadcrumbs visuales en páginas internas
- Ya hay schema, falta UI

### 9. **Sitemap Dinámico** (Opcional)
- Generar sitemap automáticamente en build
- Script en `package.json`

---

## ✅ CHECKLIST

### Crítico (Hacer ahora):
- [ ] Crear `public/og-image.jpg` (1200x630px)
- [ ] Crear `public/favicon.ico` (32x32, 16x16)
- [ ] Crear `public/apple-touch-icon.png` (180x180)
- [ ] (Opcional) Crear imágenes OG por template

### Importante (Próxima semana):
- [ ] Optimizar imágenes (WebP)
- [ ] Preload recursos críticos
- [ ] Verificar H1 en todas las páginas

### Mejoras (Futuro):
- [ ] Self-hosting de fuentes
- [ ] Breadcrumbs visuales
- [ ] Sitemap dinámico

---

## 🧪 CÓMO PROBAR EN LOCAL

### ✅ FUNCIONA AUTOMÁTICAMENTE EN LOCAL

El sistema detecta automáticamente si estás en localhost y ajusta las URLs:
- **En local:** Usa `http://localhost:5521` (o el puerto que uses)
- **En producción:** Usa `https://invia.ursis.com.ar`

### 1. Verificar Metadatos
```bash
# Iniciar servidor
npm run dev

# Visitar http://localhost:5521
# Inspeccionar <head> en DevTools (F12)
# Verificar que:
# - title cambia por ruta
# - description cambia por ruta
# - og:image usa http://localhost:5521/og-image.jpg
# - canonical usa http://localhost:5521/...
```

### 2. Verificar Imágenes OG
```bash
# Las imágenes OG deben estar en public/:
public/og-image.jpg
public/og-template-casamiento.jpg
# etc.

# Y ser accesibles en:
http://localhost:5521/og-image.jpg
http://localhost:5521/og-template-casamiento.jpg
```

### 3. Probar Open Graph Localmente

**Opción A: Usar ngrok (recomendado)**
```bash
# Instalar ngrok: https://ngrok.com/
ngrok http 5521

# Copiar la URL de ngrok (ej: https://abc123.ngrok.io)
# Usar en: https://www.opengraph.xyz/
# O en: https://developers.facebook.com/tools/debug/
```

**Opción B: Verificar en código**
```bash
# Abrir DevTools > Elements > <head>
# Buscar meta tags con property="og:image"
# Verificar que la URL sea correcta
```

### 4. Verificar Schema.org
```bash
# En local, puedes ver los schemas en:
# DevTools > Elements > <head>
# Buscar <script type="application/ld+json">

# Para probar con Google Rich Results Test:
# Necesitas una URL pública (usar ngrok o probar en producción)
```

### 5. Probar Cambios de Ruta
```bash
# Navegar entre rutas y verificar:
# 1. http://localhost:5521/
#    - og:image debe ser: http://localhost:5521/og-image.jpg
#    - canonical: http://localhost:5521/

# 2. http://localhost:5521/whitelist
#    - og:image debe ser: http://localhost:5521/og-image.jpg
#    - canonical: http://localhost:5521/whitelist

# 3. http://localhost:5521/template/casamiento
#    - og:image debe ser: http://localhost:5521/og-template-casamiento.jpg
#    - canonical: http://localhost:5521/template/casamiento
#    - robots: noindex (verificar en meta tag)
```

---

## 📝 NOTAS

- **URLs en local:** Ya están configuradas para detectar ambiente local automáticamente
- **Imágenes OG:** Deben estar en `public/` para que sean accesibles
- **Favicon:** Debe estar en `public/` y referenciado en `index.html`

---

**Última actualización:** 27 de Enero 2025

