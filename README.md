# Programación Fullstack UTU 2026

Este repositorio guarda todos los ejercicios y trabajos de la materia Programación Fullstack UTU 2026.

## Organización

El repositorio tiene 10 carpetas, cada una con un ejercicio diferente. Esto permite mantener los archivos ordenados y fáciles de encontrar.

## Carpetas

- **ejercicio-0** → Primer ejercicio
- **ejercicio-1** → Segundo ejercicio
- **ejercicio-2** → Tercer ejercicio
- **ejercicio-3** → Cuarto ejercicio
- **ejercicio-4** → Quinto ejercicio
- **ejercicio-5** → Sexto ejercicio
- **ejercicio-6** → Séptimo ejercicio
- **ejercicio-7** → Octavo ejercicio
- **ejercicio-8** → Noveno ejercicio
- **ejercicio-9** → Décimo ejercicio

## Motivo

Elegí organizar los ejercicios por número para mantenerlos simples y en orden. Cada carpeta corresponde a un ejercicio diferente.

## Sistema de Gestión de Tareas

El proyecto incluye un sistema de visualización y gestión de tareas integrado en `docs/index.html`.

### Configuración

1. Instala las dependencias:

   ```
   npm install
   ```

2. Crea un archivo `.env` basado en `.env.example`:

   ```
   cp .env.example .env
   ```

3. Configura las variables de entorno en `.env`:
   - `GITHUB_CLIENT_ID`: Obtén de [GitHub OAuth Apps](https://github.com/settings/developers).
   - `GITHUB_CLIENT_SECRET`: Obtén del mismo lugar.

4. Para el OAuth App de GitHub:
   - Homepage URL: `http://localhost:3000` (para desarrollo).
   - Authorization callback URL: `http://localhost:3000/auth/github/callback`.

5. Ejecuta el servidor:

   ```
   npm start
   ```

6. Abre `http://localhost:3000` en tu navegador.

### Funcionalidades

- Visualización pública de proyectos y tareas.
- Autenticación con GitHub para acceso administrativo (bloquea `liberatorsouls85@gmail.com`).
- Gestión de tareas con guardado automático en el repositorio de GitHub.

### Producción

Para desplegar en producción (ej. Vercel, Heroku), configura las variables de entorno en el panel de tu proveedor de hosting. No es necesario modificar el código fuente.
