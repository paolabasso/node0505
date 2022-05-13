const hello = (chocolate)=>{
    console.log(`Parâmetro: ${chocolate}`);
}

for (let i = 2; i < process.argv.length; i++) {
    hello(process.argv[i]);
}


