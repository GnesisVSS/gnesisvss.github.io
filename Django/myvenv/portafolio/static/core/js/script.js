const config = require('./config.js');
const rest = new (require('rest-mssql-nodejs'))({
    user: 'DESKTOP-2TDR0SA',
    password: '',
    server: 'DESKTOP-2TDR0SA',
    database: 'Recetas'
});

setTimeout(async () => {
    const resultado = await rest.executeQuery('select * from usuario');

    console.log(resultado);
}, 1500)