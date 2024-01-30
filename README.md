Guía de Instalación y Configuración de Jenkins para CI/CD
Esta guía proporciona instrucciones detalladas para instalar y configurar Jenkins, así como para establecer un proceso de Integración Continua y Despliegue Continuo (CI/CD) en un entorno de desarrollo. Este tutorial se centra en la utilización de Docker para la instalación y configuración inicial.

1. Instalación de Jenkins:
a. Instalación y Configuración con Docker:
Asegúrate de tener Docker instalado en tu máquina. Si no lo tienes, sigue las instrucciones de instalación para tu sistema operativo en https://docs.docker.com/get-docker/.

Ejecuta el siguiente comando en tu terminal para instalar y configurar Jenkins a través de Docker:

bash
Copy code
docker run -p 8080:8080 -p 50000:50000 -v jenkins_home:/var/jenkins_home jenkins/jenkins:lts
Accede a Jenkins a través de tu navegador web ingresando a http://localhost:8080.

b. Desbloqueo Inicial:
Durante la instalación, recupera la contraseña inicial ejecutando el siguiente comando:

bash
Copy code
docker exec -it <nombre_del_contenedor> cat /var/jenkins_home/secrets/initialAdminPassword
Sustituye <nombre_del_contenedor> con el ID o nombre de tu contenedor.

Copia la contraseña generada y pégala en la interfaz web de Jenkins.

2. Configuración de un Proyecto en Jenkins:
a. Crear un Nuevo Proyecto Pipeline:
En la interfaz de Jenkins, haz clic en "New Item".
Selecciona "Pipeline" y da un nombre al proyecto.
b. Configuración del Origen del Código Fuente:
En la sección de configuración del proyecto, ve a "Pipeline" y selecciona "Pipeline script from SCM".
Elige "Git" como SCM.
Ingresa la URL del repositorio Git (por ejemplo, el repositorio de GitHub).
Configura las credenciales para acceder al repositorio.
c. Configuración del Pipeline:
En la sección de definición del pipeline, utiliza un script similar al proporcionado en la guía anterior.
3. Configuración de Despliegue Continuo:
a. Instalar Plugin para Despliegue:
En Jenkins, ve a "Manage Jenkins" -> "Manage Plugins".
En la pestaña "Available", busca y selecciona el plugin necesario para tu entorno de despliegue (por ejemplo, AWS).
b. Configuración de Credenciales:
Ve a "Manage Jenkins" -> "Manage Credentials" y agrega las credenciales necesarias para el entorno de despliegue.
