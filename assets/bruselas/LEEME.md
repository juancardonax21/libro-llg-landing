# Material del acto en el Parlamento Europeo (30/09/2026)

La web lee `evento.json` y muestra en la sección de Bruselas solo lo que esté relleno.
Mientras un campo esté vacío, ese bloque no aparece.

## Fotos (tira con scroll horizontal bajo el titular)
1. Copiar las fotos en esta carpeta (JPG, ~1600 px en el lado largo y < 400 KB).
2. Añadir una entrada por foto en `fotos`, en el orden en que deben aparecer.
   El pie se ve al abrir la foto; si falta `pie_en`, se usa el español.

```json
"fotos": [
  { "archivo": "foto-01.jpg", "pie_es": "Leopoldo López Gil con Esteban González Pons y Antonio López Istúriz.", "pie_en": "Leopoldo López Gil with Esteban González Pons and Antonio López Istúriz." }
]
```

## Discurso (solo descarga en PDF)
- Copiar el PDF aquí y poner el nombre en `pdf_es` (y `pdf_en` si hay traducción;
  si falta, en inglés se descarga el español).

## Vídeo (opcional)
- Poner el ID de YouTube en `video_youtube_id` (lo que va después de `watch?v=`).
