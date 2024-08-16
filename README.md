# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


EN ESTE PROYECTO
estoy haciendo el demo de como voy a implementar la libreria de emojis llamada emoji-mart a un servicio de email lo cual consiste en hacer que salga una especie de isla dinamica con los emojis y despues el emoji seleccionado salga en la cajita de texto

1. para empezar cree la carpeta donde voy a desarrollar el demo con el comando mkdir
2. luego de esto accedi a la carpeta usando cd demo_cx el cual es el nombre de la carpeta 
3. una vez en la carpeta que va a ser mi entorno de trabajo creo mi proyecto de react con el  comando npx create-react-app .
4. una vez creado el poryecto de react me voy a visual studio code 
5.  antes de empezar a elaborar mi proyecto elimino todos los archivos y carpetas que no nesesito
6. despues de eso si puedo instalar primero tailwindcss el cual voy a usar para darle los respectivos estilos a la pagina 
7. instalo tailwind con este comando npm install -D tailwindcss
8. cuando lo instale ejecuto el comando npx tailwindcss init para que me cree una carpeta donde puedo editar parametros de tailwind css
9. en la carpeta de tailwind que se creo vamos a instalar el contenido de los modulos que vamos a usar 
con esta linea de codigo
10. aprovechando que estamos en la carpeta de tailwind vamos a definir unos para parametros los cuales van a ser 
los siguientes primero en extended vamos a poner unos colores con el siguiente codigo el cual se copia dentro de extend
    extend: {
      colors: {
        todo: "rgba(58, 58, 67, 0.98)",
        bodyBg: "rgb(32, 32, 42)",
      },
ademas en extend tambien vamos a predefinir el espaciado
            spacing: {
        "2rem": "2rem",
        "3rem": "3rem",
      },
y por ultimo el tamaño de la letra
          fontSize: {
        2: "2rem",
      },      
11. luego hacemos la instalacion de la libreria de emojis que vamos a  usar en nuestro caso emoji-mart y la instalamos con el comando npm install --save emoji-mart @emoji-mart/data @emoji-mart/react
12. instalamos react-icons con el comando npm i react-icons