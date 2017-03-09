# INTRODUCCIÓN
* 	Crear una página web con 10 preguntas con al menos 5 tipos diferentes de elementos de formulario.
* 	Crea un archivo XML que contenga el texto de las preguntas, las respuestas correctas y la información que creas necesaria (preguntes.xml)
* 	Codifica JavaScript para dar una solución automatizada al examen (activar compara las respuestas introducidas en el formulario con las respuestas que hay en el archivo XML preguntes.xml)
* 	Debemos hacer una web de una universidad inventada, en mi caso, la cual presenta un formulario.
* Previsualización: https://cdn.rawgit.com/arsg93/Preguntas/a868ff7c/index.html
* Versión Indent en el branch master,  la versión minify se en cuentra en el branch minify.

# CONTENIDO DEL PROYECTO
##HTML
* 	index.html: Estructura de la web.

##CSS
* 	d.css: Modo horizontal
* 	m.css: Modo vertical
* 	El cambio de css a otro lo realiza mediante media query dependiendo del tamaño de la pantalla.

##JS
* 	js.js: Se encuentran todas las funcionalidades para el correcto funcionamiento de la página, como extraer los datos del XML, la corrección, etc.

##IMG
* 	Conjunto de imágenes usadas para la web.

##XML
* 	preguntas.xml: Documento .xml donde se encuentra toda la información del formulario

# Funcionalidades adicionales principales
##PÁGINA PRINCIPAL: 
*   La web empieza en una primera pantalla donde podemos encontrar lo siguiente:
*  	La escuela: Breve introducción sobre la universidad.
* 	Normas Test: Se oculta la introducción de la universidad y se muestran las normas del test, si se vuelve a pulsar vuelve a aparecer la introducción.
*	Realizar Test: Botón que permite al usuario empezar el test cuando se encuentre preparado.

##ASEGURARSE.
*	Al pulsar cualquier botón critico aparecerá si estás seguro.
*	En caso de que falte alguna pregunta por contestar se avisará al usuario cual y se hará focus sobre ella.

# Funcionalidades adicionales secundarias
##ANIMACIONES / HOVER
*	Hover en botones y respuestas de las preguntas.

##SCROLL PARA MOSTRAR LA CORRECCIÓN
*	La corrección se muestra al inicio de la página, y para mayor comodidad para el usuario se realiza automáticamente un scroll por javascript hasta el inicio de la página.

##REGRESAR A LA PÁGINA PRINCIPAL
*	Una vez realizado el test y mostrada la corrección el test, en la propia corrección aparece un nuevo botón para volver a la pantalla principal.
