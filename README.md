INTRODUCCIÓN
Crear una página web con 10 preguntas con al menos 5 tipos diferentes de elementos de formulario.
Crea un archivo XML que contenga el texto de las preguntas, las respuestas correctas y la información que creas necesaria (preguntes.xml)
Codifica JavaScript para dar una solución automatizada al examen (activar compara las respuestas introducidas en el formulario con las respuestas que hay en el archivo XML preguntes.xml)
Debemos hacer una web de una universidad inventada, en mi caso, la cual presenta un formulario.
Previsualización: https://cdn.rawgit.com/arsg93/Preguntas/a868ff7c/index.html
CONTENIDO DEL PROYECTO
•	HTML
o	index.html: Estructura de la web.
•	CSS
o	d.css: Modo horizontal
o	m.css: Modo vertical
o	El cambio de css a otro lo realiza mediante media query dependiendo del tamaño de la pantalla.
•	JS
o	js.js: Se encuentran todas las funcionalidades para el correcto funcionamiento de la página, como extraer los datos del XML, la corrección, etc.
•	IMG
o	Conjunto de imágenes usadas para la web.
•	XML
o	preguntas.xml: Documento .xml donde se encuentra toda la información del formulario
Funcionalidades adicionales principales
•	PÁGINA PRINCIPAL: La web empieza en una primera pantalla donde podemos encontrar lo siguiente:
o	La escuela: Breve introducción sobre la universidad.
o	Normas Test: Se oculta la introducción de la universidad y se muestran las normas del test, si se vuelve a pulsar vuelve a aparecer la introducción.
o	Realizar Test: Botón que permite al usuario empezar el test cuando se encuentre preparado.
•	ASEGURARSE.
o	Al pulsar cualquier botón critico aparecerá si estás seguro.
o	En caso de que falte alguna pregunta por contestar se avisará al usuario cual y se hará focus sobre ella.
Funcionalidades adicionales secundarias
•	ANIMACIONES / HOVER
o	Hover en botones y respuestas de las preguntas.
•	SCROLL PARA MOSTRAR LA CORRECCIÓN
o	La corrección se muestra al inicio de la página, y para mayor comodidad para el usuario se realiza automáticamente un scroll por javascript hasta el inicio de la página.
•	REGRESAR A LA PÁGINA PRINCIPAL
o	Una vez realizado el test y mostrada la corrección el test, en la propia corrección aparece un nuevo botón para volver a la pantalla principal.
