# Davy Frank | Diseñador Gráfico

Página de portafolio (React + Vite + Tailwind CSS v4), adaptada a escritorio y celular.

## Requisitos
- Node.js 20 o superior

## Instalar y ejecutar
```bash
npm install
npm run dev        # abre http://localhost:5173
```

## Compilar para producción
```bash
npm run build      # genera la carpeta dist/
npm run preview    # prueba la versión final
npm test           # verifica los enlaces de las tarjetas
```

## Estructura
- `src/App.tsx` — la página
- `src/styles.css` — estilos, animaciones y adaptación a celular
- `src/lib/portfolio-links.ts` — enlaces de Behance, Instagram y WhatsApp (edítalos aquí)
- `public/assets/` — imágenes del diseño

## Publicar en Vercel
1. Sube esta carpeta a un repositorio de GitHub.
2. En vercel.com → **Add New → Project** → importa el repositorio.
3. Vercel detecta Vite automáticamente (Build: `npm run build`, Output: `dist`). Pulsa **Deploy**.

No se necesitan variables de entorno.
