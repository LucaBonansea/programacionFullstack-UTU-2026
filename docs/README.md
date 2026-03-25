# 📚 Índice de Proyectos - Actualización Automática

## Cómo funciona

La página `index.html` se actualiza automáticamente cada vez que la abres. Carga el contenido desde el archivo `projects.json`.

## Sistema de actualización automática

### Opción 1: Actualización automática (Recomendado)

El script `actualizar_proyectos.py` detecta automáticamente todos tus ejercicios y los agrega a `projects.json`.

**Para usar:**

1. Abre PowerShell en la carpeta `docs`
2. Ejecuta: `python actualizar_proyectos.py`
3. Abre `index.html` en el navegador

### Opción 2: Edición manual

Si prefieres editar `projects.json` manualmente:

- **Completar un ejercicio**: Cambia `"type": "pending"` a `"type": "completed"` y agrega `"path": "./ejercicio-X/index.html"`
- **Agregar subproyectos**: Usa el formato de `ejercicio-3` como referencia
- Luego recarga la página

## Estructura de projects.json

```json
{
  "projects": [
    {
      "id": 1,
      "title": "Ejercicio 1",
      "emoji": "🎨",
      "type": "completed",
      "path": "./ejercicio-1/index.html"
    },
    {
      "id": 3,
      "title": "Ejercicio 3 - Réplicas Web",
      "emoji": "🌐",
      "type": "completed",
      "subprojects": [
        {
          "name": "🚗 Audi",
          "emoji": "🚗",
          "path": "./ejercicio-3/html/Audi.html"
        }
      ]
    },
    {
      "id": 4,
      "title": "Ejercicio 4",
      "emoji": "📝",
      "type": "pending"
    }
  ]
}
```

## Lo que sucede automáticamente

✅ **Al abrir `index.html`:**

- Se carga el archivo `projects.json`
- Se separan en dos secciones: completados y pendientes
- Se generan dinámicamente las tarjetas con los enlaces

✅ **El script detecta:**

- Ejercicios completados (con carpeta y archivos)
- Ejercicios pendientes
- Subproyectos dentro de carpetas `html/`

## Flujo de trabajo sugerido

1. Crea tu nuevo proyecto en la carpeta `ejercicio-X`
2. Cuando termines, ejecuta: `python actualizar_proyectos.py`
3. Abre `index.html` y verás tu proyecto en la lista

¡Listo! La página se actualiza automáticamente sin editar HTML.
