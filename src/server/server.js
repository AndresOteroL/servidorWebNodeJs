const express = require('express')
const path = require('path')



 const startServer = (options) =>{
    const {port, public_path = 'public'} = options
    
    const app = express();

    // para usar los middlewares seu usa la palabra use  (express)
    app.use(express.static(public_path)) // bes para poner el contenido estatico 

    app.get('*', (req, res) =>{
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html` )
        res.sendFile(indexPath)
    })

    app.listen(port, () =>{

    })

   
}

module.exports={
    startServer
}