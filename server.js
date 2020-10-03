//passo-a-passo
//1- importar app
//2- declarar a variavel 'port' e substituir o valor
//3- 'escutar' o app mostrado no console qual caminho esta usando

const app = require('./src/app');
const port = 3000

app.listen(port, () => {
    console.log(`Executando em http://localhost: ${port}`)
})
