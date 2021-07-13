var contador = 0;
var limite = 5;
console.log('### WHILE');
while (confirmado && limite >0)
{
    //inserido para fazer debug
    console.log(limite);
    limite--;
}

contador =1;
console.log('### DO WHILE');
do {
    console.log(contador);
    contador++;
} while(contador <=limite);
