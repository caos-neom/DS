function exebir(nome,idade){
    return "o seu nome é "+nome+" e sua iadade é " +idade
}

// function contar(inicial,final){
//     for(var i=inicial;i<=final,i++){
//         document.writeln(i+"<br>")
//     }
// }

function contarLetras(palavra,letra){
    var contador = 0;
palavra = palavra.toLowerCase();

for(var i=0; i<palavras.lenght;i++)
    if(palavra.charAt(i)==letra){
        contador++
    }
    return contador
}