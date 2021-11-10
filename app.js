
//npm packages (dependencies)
const express = require('express')
const chalk = require('chalk')

//Variables
const app = express()
const PORT = 3000

//View engine setup
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

//Routes

const user = {
  name: 'Maria',
  lastName: 'Gonzalez',
  admin: false,
  age: 22,
  numbers: [45, 23, 67, 88, 12, 33, 1, 0]
}

app.get('/', (req, res)=>{
  res.render('index.hbs')
})

app.get('/contact', (req, res)=>{
  res.render('contact.hbs', user)
})

app.get('/about', (req, res)=>{
  res.render('about.hbs')
})

//App listener
app.listen(PORT, ()=>{
  console.log(chalk.bgBlue(`Servidor activo en el puerto ${PORT}`))
})

//Pasos para instalar y utilizar hbs:

//1. Instalar hbs: $ npm install hbs
//2. Poner el middleware necesario para indicarle a mi aplicación que voy a utilizar un motor de vistas que se llama hbs (lineas 11 y 12)
//3. Poner contenido html dentro de mi archivo index.hbs
//4. En la ruta GET del home page (/), renderizar la vista (linea 16) utilizando res.render()


// Cuando renderizamos una vista con res.render(), este metodo puede recibir hasta dos argumentos. El primer argumento es el nombre de la vista que queremos renderizar. El segundo argumento puede ser un objeto literal con información que queremos pasarle a la vista para que, posteriormente, esta haga algo con esa info.

