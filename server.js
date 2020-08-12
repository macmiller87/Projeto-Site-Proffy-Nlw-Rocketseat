

// Servidor //
 const express = require('express') 
 const server = express()

 const {
    pagelanding,
    pagestudy,
    pagegiveclasses,
    saveClasses
 } = require('./pages')

// configurar nunjucks (template engine) //
 const nunjucks = require('nunjucks')
 nunjucks.configure('src/views', {
     express: server,
    
     nocache: true,
 })

 // Inicio e configiração do servidor //
 server
// Receber os dados do req body
.use(express.urlencoded({extended: true}))
// configurar arquivos estáticos (css, javascrip, imagens)
.use(express.static("public"))
.use(express.static("views"))

// rotas de aplicação //
 .get("/", pagelanding)
 .get("/study", pagestudy)
 .get("/give-classes", pagegiveclasses)
 .post("/save-classes", saveClasses)

 // Start do servidor //
 .listen(5500)
