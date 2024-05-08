const {envs} = require('./config/env')
const {startServer} = require('./server/server')

const main = () =>{
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}


// funcion agnostica autoconvocada 
//agnostica por que no tienenombre 
// autoconvocada por la ejecucion con los parentecis de lo ultimo
(async ( ) => {
    main()
})()