# Página web Altura Turismo #

Página web realizada para la empresa [Altura Turismo](https://www.facebook.com/turismoaltura/)

* [Facebook](https://www.facebook.com/turismoaltura/)
* [Twitter](https://twitter.com/AlturaTurismo)

## Pre requisitos ##
* [npm](https://github.com/npm/npm).
* [gulp](https://github.com/gulpjs/gulp).
* [bower](https://github.com/bower/bower).

Para instalar los paquetes necesarios, utilizar el siguiente comando:
    
    curl -L https://www.npmjs.com/install.sh | sh
    npm install -g gulp bower npm

## Instalación ##
Para Instalar las dependencias necesarias para el proyecto ejecutar los siguientes comandos:

    npm install
    bower install

## Ejecución ##
Para ejecutar utilizar el siguiente comando, la página estará disponible en el puerto 9000 (localhost:9000)

    gulp serve

## Puesta en producción ##
Para llevar a producción, copiar el contenido de la carpeta apps, al directorio donde se encontrará la página en el servidor.

## Tecnologías utilizadas ##
* La base del proyecto fue creada con [yeoman](http://yeoman.io/) usando el constructor [webapp](https://github.com/yeoman/generator-webapp).
* Para cambiar de idioma en las páginas se utiliza un plugin de jQuery: [jquery-lang-js](https://github.com/Irrelon/jquery-lang-js).
* El proyecto utiliza [Boostrap](http://getbootstrap.com/) en su versión 3.3.5.
* Las dependencias (librerias, entre otros) del proyecto se manejan con Bower, en el archivo Bower.json se encuentran las dependencias a utilizar.
* Para mostrar contenido de una página de Facebook se utiliza el widget: [Page Plugin](https://developers.facebook.com/docs/plugins/page-plugin).
* Para mostrar contenido de una página de Twitter se utiliza el widget: [Embedded Timelines](https://dev.twitter.com/web/embedded-timelines).

## Hacer la traducción ##

Se utiliza este plugins de JQuery: [jquery-lang-js](https://github.com/Irrelon/jquery-lang-js). 
Para indicar que un elemento se va a traducir es necesario agregar el atributo:
`lang="es"`. Por ejemplo, utilizando jade o gup:

```
    a(href='index.html#inicio', lang="es") Inicio
```

En donde 'es' es el lenguaje del contenido.

Luego los archivos de las traducción estan en `app/langs`. En donde hay 
archivos para el lenguaje ingles y portugués, estos tienen formato json y en ese
lugar van los strings que se traducen y su traducción, el cual puede ser más de una
palabra.



## Documentación ##
* La documentación (mockups, entre otros) del proyecto se encuentra en [Google Drive](https://drive.google.com/open?id=0B9GpS951UELJX2pXa3hQMTJnRnM).
* También se dispone una [Wiki](https://bitbucket.org/dappschile/webpage-altura-turismo/wiki/Home) en bitbucket.