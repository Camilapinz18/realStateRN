![BrightCoders Logo](img/logo.png)

- [App Inmobiliaria](#app-inmobiliaria)
  - [Objetivos](#objetivos)
  - [Instrucciones](#instrucciones)
  - [Entregables](#entregables)
  - [Puntos](#puntos)
  - [Tecnologías](#tecnologías)
  - [Requerimientos funcionales](#requerimientos-funcionales)
  - [Diseño](#diseño)
  - [Flujo de trabajo sugerido](#flujo-de-trabajo-sugerido)
  - [Requerimientos no-funcionales](#requerimientos-no-funcionales)
  - [Recursos](#recursos)
  
# App Inmobiliaria

  Atributo |  Valor
 --- | --- |
 Tipo | Individual
 Estrategia | Code Lab
 Modo | Asíncrono
 Dedicación | 10 horas
 Duración | 10 días

## Objetivos

- Fortalecer los fundamentos en la programación con React Native
- Introducir el modelo de React Native de programación por componentes
- Introducir el desarrollo de interfaces para aplicaciones móviles con react native

## Instrucciones

- De manera individual deberás desarrollar una aplicación móvil que permita mostrar información de diferentes propiedades inmobiliarias (detalles en la sección de [requerimientos funcionales](#requerimientos-funcionales)).
- En la actividad de Github (commits) se deberá observar la actividad diaria de trabajo (avances)
- Poner en práctica el concepto de commits significativos.

## Entregables

- Código fuente en este repositorio
- Archivo README.md actualizado
- El código debe incluir pruebas unitarias
- La puntuación obtenida por Codacy, CodeClimate o similar debe ser A o lo equivalente
- Se deben incluir los badges de los analizadores de código estáticos (codacy, codeclimate, etc.)
- La versión final de tu código deberá estar en la rama principal

## Puntos

- Número de commits
- Frecuencia de los commits (# de commits realizados en días diferentes)
- Tamaño de los commits (líneas de código agregadas)

## Tecnologías

- Javascript ó Typescript
- ESLint
- Jest
- Codacy, CodeClimate, CodeCov

## Requerimientos funcionales

 Una empresa inmobiliaria necesita una App para poder mostrar a sus clientes las propiedades que tiene disponibles en renta. La App mostrar un listado de todas las propiedades disponibles mostrando la siguiente información para cada propiedad:

- Nombre
- Dirección
- Número de habitaciones
- Número de baños
- Superficie
- Costo de renta mensual
- Evaluación o calificación de la propiedad
- Icono que permita al usuario indicar o marcar las propiedades que más le gustan

## Diseño

En la carpeta [design](/design) se encuentra el diseño solicitado.

![inmobiliaria-card](design/inmobiliaria-card.png)
<img src="design/inmobiliaria.png" alt="inmobiliaria" width="450"/>

## Flujo de trabajo sugerido

- Divide tu trabajo en pequeñas tareas
- Para cada pantalla identifica o clasifica los diferentes compones que se presentan
- Inicia programando los componentes individuales procurando que estos sean reutilizables
- Una vez que tienes listos los componentes integra las pantallas.

## Requerimientos no-funcionales

- Base de datos
  - Los datos (información  de las propiedades) se tomarán de un archivo local en formato JSON
- Calidad
  - Utilizar un estilo de código estandarizado (revisado por Eslint)
  - Puntuación **A** obtenida en CodeClimate ó similares
- Ejecución
  - Puede ejecutarse en Android y/o iOs
- Código fuente
  - Orientado a Objetos
  - Métodos pequeños
  - Aplicar los principios SOLID
  
## Recursos

- Estructura tu pensamiento o forma de trabajo por componentes
  - [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
  - [Thinking in React — few tips](https://medium.com/@5066aman/thinking-in-react-few-tips-6b32fbe835a3)
  - [Thinking in components - building a todo app](https://softchris.github.io/books/react/thinkingincomponents/)
- React Native
  - [React Native CLI](https://reactnative.dev/docs/environment-setup)
  - [React Native Navigation](https://reactnavigation.org/)
  - [Presentando Hooks](https://es.reactjs.org/docs/hooks-intro.html)
  - [Debugging](https://reactnative.dev/docs/debugging)
- Calidad del código
  - [ESLint](https://eslint.org/)
  - [CodeClimate](https://codeclimate.com/)
  - [Codacy](https://codacy.com/)
  - [Codecov](https://codecov.com/)
