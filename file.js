import  fs  from "fs"; //pegando a pasta nativa fs que faz manipulação de arquivos

// const dir = "./upload";
// const dir = `./${process.argv[2]}`;
const dir = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

//se não existe o diretorio
if (!fs.existsSync(dir)) {
    //cria esse diretório
    fs.mkdirSync(dir);
    console.log(`Diretório: ${dir} criado com sucesso!`);
}

// fs.writeFile(`${dir}/newFile.txt`, "Começando com NodeJS", (err) => {
//     if(err){
//         //comando para estourar o erro e parar o código.
//         throw err;
//     }
//     console.log("Arquivo criado com sucesso! Bem vindos ao NodeJS");
// });





fs.writeFile(`${dir}/${file}`,`${content}`, (err) => {
    if(err){
        throw err;
    }
    console.log("Arquivo criado com sucesso! Bem vindos ao NodeJS");
});

const newContent = process.argv.map((item, index) =>{
    if(index >= 5) {
        return item;
    }
});
console.log(newContent);





