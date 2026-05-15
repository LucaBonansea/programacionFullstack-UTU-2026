# FitVoice Arena

## Integrantes

- Luca Bonansea
- Emanuel Trapolini

## Idea del proyecto

FitVoice Arena es una aplicacion web responsive de entrenamiento que cuenta repeticiones con la camara, permite controlar la sesion con comandos de voz cuando el navegador lo soporta, guarda el progreso del usuario y muestra estadisticas de rendimiento.

La idea del proyecto fue combinar una app fitness con una estetica visual tipo arcade o videojuego de combate para hacerla mas llamativa, creativa e innovadora que una pagina comun.

## Objetivo

El objetivo fue crear una aplicacion funcional, visualmente atractiva y adaptable a distintas pantallas, usando tecnologias web vistas en clase y agregando una idea original del grupo.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Font Awesome
- MediaPipe Pose
- LocalStorage
- Gemini API para recomendaciones opcionales

## Funcionalidades principales

- Conteo de repeticiones mediante la camara
- Seleccion de rutina
- Temporizador de entrenamiento
- Pausa, reinicio y finalizacion de sesion
- Suma manual de repeticiones
- Historial de sesiones
- Estadisticas semanales
- Guardado local con LocalStorage
- Recomendaciones inteligentes
- Interfaz responsive

## Funcionamiento general

1. El usuario entra a la app y selecciona su rutina.
2. Al tocar iniciar, la pagina solicita permisos para usar la camara y, en algunos dispositivos, tambien el microfono.
3. MediaPipe Pose detecta puntos del cuerpo y la aplicacion calcula angulos para reconocer el movimiento.
4. Cuando el movimiento cumple las condiciones configuradas, se suma una repeticion.
5. La sesion se puede pausar, reiniciar o finalizar.
6. Al finalizar, se guarda el historial y se actualizan las estadisticas.

## Responsive design

Para cumplir con la consigna de responsive se uso Bootstrap y tambien media queries en CSS.

### Uso de Bootstrap

Bootstrap se uso para organizar la estructura principal de la pagina y adaptar el contenido a distintas pantallas.

Ejemplos:

- `container` para centrar y limitar el ancho del contenido
- `row` y `col-*` para dividir la pantalla en columnas
- `col-lg-*`, `col-xl-*` y `col-6` para cambiar la distribucion segun el tamano de la pantalla
- clases utilitarias como `d-flex`, `gap-*`, `flex-wrap`, `justify-content-between` y `align-items-center`

### Uso de media queries

Tambien se usaron media queries en `style.css` para ajustar detalles visuales y de distribucion que Bootstrap por si solo no resolvia exactamente como queriamos.

Ejemplos de lo que se adapto con media queries:

- reorganizacion del panel principal en tablets y celulares
- ajuste del tamano de la camara
- cambio de disposicion de botones
- correccion del contador y temporizador en pantallas grandes
- adaptacion de espaciados y tamanos de texto en pantallas chicas

## Creatividad e innovacion

Lo creativo e innovador del proyecto esta en:

- combinar entrenamiento fisico con deteccion corporal en tiempo real
- usar una interfaz inspirada en videojuegos arcade
- ofrecer una experiencia distinta a una pagina informativa tradicional
- incluir voz, conteo automatico, historial y recomendaciones en una sola app

## Uso de Inteligencia Artificial

En este proyecto si hubo apoyo de Inteligencia Artificial.

La IA se uso para:

- generar ideas de mejora visual
- reorganizar la estructura del diseno
- ayudar a resolver errores tecnicos
- mejorar compatibilidad de permisos de camara y microfono
- redactar y ordenar parte de la documentacion

El grupo igualmente participo en:

- la idea principal
- las decisiones del proyecto
- la adaptacion del contenido
- la revision del funcionamiento
- la explicacion final del trabajo

## Dificultades encontradas

- compatibilidad de permisos con iPhone y iPad
- diferencias de soporte entre navegadores para comandos de voz
- ajuste del responsive para que no se rompan elementos grandes
- evitar errores en el conteo al pausar y reanudar la sesion

## Como ejecutar el proyecto

1. Abrir la carpeta del proyecto.
2. Ejecutar la aplicacion en un navegador moderno.
3. Para camara y microfono, conviene abrirla con `localhost` o `https`.
4. Presionar `Iniciar combate`.

## Aclaracion importante sobre iOS

En iPhone o iPad la camara y el microfono pueden requerir `https` o `localhost`.
Ademas, algunos navegadores limitan el soporte de comandos de voz web, por lo que el conteo por camara puede funcionar aunque la voz no este disponible.

## Que mostrar en la presentacion

- la pantalla principal
- el responsive en celular y escritorio
- el pedido de permisos
- el conteo de repeticiones
- el historial guardado
- el uso de Bootstrap y media queries
- la parte donde se uso IA

## Conclusion

FitVoice Arena busca mostrar que una aplicacion web puede ser funcional, creativa, interactiva y visualmente atractiva al mismo tiempo, combinando diseno, programacion y una idea original del grupo.
