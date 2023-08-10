# Sistema de Publicación de Eventos Relacionados a Computación

![Eventos CS](docs/eventos-cs.png)
[Live demo](https://eventos-cs.netlify.app)

## Descripción

SPERC es una plataforma diseñada para facilitar la organización y promoción de eventos, tales como conferencias, talleres, seminarios y hackathons, relacionados con la ciencia de la computación y disciplinas afines. La aplicación proporciona una interfaz intuitiva y fácil de usar para los organizadores y participantes.

## Características clave

- Registro de Eventos: Los organizadores pueden crear nuevos eventos, proporcionando detalles esenciales como título, descripción, fechas, ubicación y enlaces relevantes.

- Gestión de Participantes: Los interesados en asistir a un evento pueden registrarse a través de la plataforma, lo que permite a los organizadores llevar un registro de la asistencia y planificar adecuadamente.

- Calendario de Eventos: SPERC presenta un calendario interactivo que muestra todos los eventos registrados, permitiendo a los usuarios filtrarlos según su interés y disponibilidad.

- Notificaciones: Los participantes pueden optar por recibir notificaciones sobre eventos próximos, cambios de horario o actualizaciones importantes.

- Comentarios y Calificaciones: Después de cada evento, los asistentes tienen la oportunidad de dejar comentarios y calificaciones, lo que ayuda a otros usuarios a tomar decisiones informadas sobre qué eventos les interesan.

## TRELLO
https://trello.com/invite/b/bBmltJB0/ATTI1698520f44d31836dcdbc30b7399055b6AD9CAB3/tablero-kanban

## TECNOLOGIAS
**SvelteKit:** Un marco de trabajo de desarrollo web enriquecido en características, que facilita la creación de aplicaciones web eficientes y de alto rendimiento utilizando componentes reactivos.
**PocketBase:** Una base de datos liviana y de alto rendimiento diseñada para aplicaciones web modernas, que ofrece una solución de almacenamiento escalable y segura.

## PERSPECTIVA DEL PRODUCTO 
La funcionalidad principal del sistema incluiye:
- Registro de usuarios: permitirá a los usuarios crear perfiles y acceder al sistema.
- Publicación de eventos: los usuarios podrán agregar información sobre los eventos que deseen publicar, incluyendo detalles como título, descripción, fechas, ubicación, categoría, entre otros.
- Búsqueda de eventos: los usuarios podrán buscar eventos utilizando filtros de categoría, fecha y ubicación.
- Comunicación entre usuarios: los participantes podrán comunicarse a través del la caja de comentarios de los diferentes eventos.

## FUNCIONALIDAD DEL PRODUCTO
La funcionalidad principal del sistema incluye:
- Registro de usuarios: Los usuarios podrán registrarse y acceder al sistema de forma segura y confiable.
- Publicación de eventos: Los usuarios tendrán la capacidad de agregar información detallada sobre los eventos que deseen compartir, incluyendo datos como título, descripción, fechas, ubicación, categoría, y otros campos relevantes.
- Búsqueda de eventos: Los usuarios podrán realizar búsquedas precisas utilizando filtros de categoría, fecha y ubicación para encontrar eventos de su interés de manera rápida y eficiente.

## RESTRICCIONES
El desarrollo del sistema de Publicación de Eventos Relacionados a Computación se encuentra sujeto a las siguientes restricciones:
- Lenguaje de programación: El sistema será desarrollado utilizando el lenguaje de programación JavaScript.
- Simplicidad: El sistema se diseñará y desarrollará siguiendo una aproximación de simplicidad, priorizando la facilidad de uso y la claridad en la interfaz de usuario.
- Plataformas compatibles: El sistema se desarrollará para ser compatible con las plataformas web modernas y los navegadores más utilizados, como Google Chrome, Mozilla Firefox y Microsoft Edge.
- Tecnologías adicionales: Además de JavaScript, se permitirá el uso de tecnologías relacionadas como HTML, CSS y frameworks de JavaScript para el desarrollo del sistema, siempre y cuando cumplan con los estándares y requisitos técnicos establecidos.
- Integraciones externas: El sistema podrá integrarse con servicios externos y APIs para obtener información adicional sobre los eventos o para proporcionar funcionalidades adicionales, siempre y cuando se cumplan los requisitos técnicos y de seguridad correspondientes.
- Escalabilidad: El sistema deberá ser diseñado de manera que pueda gestionar un crecimiento en la cantidad de eventos y usuarios sin comprometer el rendimiento y la estabilidad.
- Seguridad: El sistema deberá implementar medidas de seguridad adecuadas para proteger la información de los eventos y los datos de los usuarios, evitando accesos no autorizados y asegurando la confidencialidad, integridad y disponibilidad de los datos.

## Propósito del Proyecto
El propósito del proyecto es desarrollar una plataforma llamada SPERC (Sistema de Publicación de Eventos Relacionados a Computación) que facilite la organización y promoción de eventos relacionados con la ciencia de la computación y disciplinas afines. La plataforma proporcionará a los organizadores una interfaz intuitiva para crear y gestionar eventos, y permitirá a los participantes encontrar eventos de su interés.

## Funcionalidades
### Diagrama de Casos de Uso:
Incluir un diagrama que muestre las interacciones entre los actores y los casos de uso del sistema, como "Registrar Usuario", "Publicar Evento", "Buscar Evento", etc.

### Prototipo o GUI:
Se proporciona un enlace al prototipo interactivo de la interfaz de usuario [aquí](https://eventos-cs.netlify.app)

## Modelo de Dominio
### Diagrama de Clases:
Presentar un diagrama que ilustre las clases y sus relaciones en el sistema, como "Evento", "Usuario", "Comentario", etc.

### Diagrama de Módulos:
Desglosar el sistema en módulos funcionales, mostrando cómo se organiza la arquitectura. Esto puede incluir módulos como "Gestión de Eventos", "Autenticación de Usuarios", etc.

## Arquitectura y Patrones
### Diagrama de Componentes o Paquetes:
Mostrar cómo se estructuran los componentes o paquetes en el sistema. Puede representar capas como "Interfaz de Usuario", "Lógica de Negocios", "Persistencia de Datos", etc.

## Prácticas de Codificación Limpia
Describir cómo se aplican prácticas de codificación limpia en el proyecto, como seguir nombres descriptivos para variables y funciones, evitar duplicación de código, escribir comentarios claros y concisos, etc.

## Estilos de Programación
**Programación Orientada a Componentes:**
El enfoque central del desarrollo se basa en la creación de componentes reutilizables y autónomos. Cada componente encapsula su funcionalidad y presenta una interfaz coherente.

**Separación de Preocupaciones:**
Se sigue el principio de separación de preocupaciones para mantener el código organizado y comprensible. La lógica de presentación, la lógica de negocios y la interacción con la base de datos se mantienen en áreas distintas.

**Mantenibilidad y Escalabilidad:**
El código se estructura de manera modular para facilitar la mantenibilidad y escalabilidad del sistema. Los componentes se diseñan de forma que puedan extenderse o modificarse con relativa facilidad.

**Uso de Nombres Descriptivos:**
Las variables, funciones y clases se nombran de manera significativa y descriptiva, lo que permite a los desarrolladores entender rápidamente su propósito y funcionalidad.

## Principios SOLID
### Descripción:
Explicar cómo se aplican los principios SOLID (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) en el diseño y la implementación del sistema.

### Fragmento de Código (evidencia):
**Single Responsibility Principle **(Principio de Responsabilidad Única)
La clase EventoService se encarga exclusivamente de la lógica relacionada con los eventos:
``` javascript
Copy code
class EventoService {
  async crearEvento(evento) {
    // Lógica para crear un nuevo evento
  }

  async actualizarEvento(evento) {
    // Lógica para actualizar un evento existente
  }
}
```

## Conceptos DDD (Domain-Driven Design)
### Entidades, Objetos de Valor, [Servicios de Dominio]:
Explicar cómo se identificaron y diseñaron las entidades y objetos de valor clave en el dominio del sistema. Si hay servicios de dominio, describir su propósito y función.

### Agregados y Módulos:
Detallar cómo se definieron los agregados (grupos lógicos de entidades y objetos de valor) y cómo se organizaron en módulos en el sistema.

### Fábricas y Repositorios:
Describir cómo se utilizan las fábricas para crear objetos complejos y los repositorios para gestionar el acceso a la persistencia de datos.

## "Arquitectura en Capas"
El sistema sigue un enfoque de arquitectura en capas para garantizar la separación de preocupaciones y la modularidad. Las capas principales del sistema son:

**Capa de Presentación:**
Esta capa se encarga de la interfaz de usuario y la interacción con los usuarios. Aquí es donde se crean y gestionan los componentes visuales utilizando SvelteKit. La capa de presentación también maneja la entrada y salida de datos a través de formularios y eventos de usuario.

**Capa de Lógica de Negocios:**
En esta capa, reside la lógica empresarial principal del sistema. Se encarga de procesar las solicitudes del usuario, aplicar reglas de negocio y coordinar la interacción entre los componentes. Aquí es donde se encuentran los servicios que gestionan la lógica detrás de las operaciones del sistema, como la creación y actualización de eventos.

**Capa de Persistencia de Datos:**
Esta capa se ocupa de la persistencia de datos y la comunicación con la base de datos, en este caso, PocketBase. Los servicios de esta capa gestionan la consulta y escritura de datos en la base de datos, permitiendo que la capa de lógica de negocios se mantenga independiente de los detalles de almacenamiento.

**Capa de Servicios Externos:**
Si el sistema se integra con servicios externos o APIs, esta capa se encarga de la comunicación y gestión de esas integraciones. Por ejemplo, si se envían notificaciones a través de un servicio de mensajería externo, esta capa se encargaría de esa interacción.