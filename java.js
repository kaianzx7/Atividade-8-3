alert("Primeiramente digite quatro números para ser feita a soma e média destes números: " )

var limite= 4;
var total= 0;
var media;
var x;

for(var i=0; i < limite; i++){
    x= parseInt(prompt("Digite o "+ (i+1) + "° valor" ))
    total+= x;
}
document.write(`Soma: ${total}<br>`)
media= total/limite
document.write(`Média: ${media}<br><hr>`)

limite = parseInt(prompt("Agora defina um novo limite de números a serem digitados para o cáclculo da soma e média: "))
media= total = 0;

for(var i=0; i < limite; i++){
    x= parseInt(prompt("Digite o "+ (i+1) + "° valor" ))
    total+= x;
}
document.write(`Soma: ${total}<br>`)
media= total/limite
document.write(`Média: ${media}<br>`)

