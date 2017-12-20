

/*console.log("Hola world");
console.log("hola mundo".length);
*/

const pi=3.1416182432;
//const pi="cebolla";

//console.log(pi);
var variable1="Hola Mundo";
var variable2 = true;
var variable3 = 4;

//console.log (variable1 + variable3);
//console.log("dos por 3 = " + " " + 2*3);
//console.log(respuesta);

/*for (let i=100;i>0;i--) {
  if (i%2==0)
    {console.log(i + " es un número par");}
  else {
    console.log(i + " NO ES UN NUMERO PAR");
  }
}
*/

/*var V1= confirm("Primer operador");
var V2= confirm("Segundo operador");

confirm("Resultado de " + V1 + " por " + V2 + " es " + V1*V2 + " unidades");*/

// tres iguales compara el valor en si, y el tipo de la variable.
//console.log(5<<7);

/*if (("Xavi".length=10) && (variable3==4)){
  console.log("nombre corto");
}*/

/*let edad=50;

if (edad>60)
  { console.log("abuelo")0
  }
else
  {console.log("Chaval")
}*/

//Se le da punto de inicio , y punto final, en valores absolutos
//console.log("Santiago Llop".substring(9,13));

/*alert("mensaje por pantalla");
let result=confirm("Eres guapo???");
console.log(result);*/


/*let nombre = prompt ("¿Como te llamas?");
let anyo=prompt("¿Que año naciste?");
var cantidad=2017-anyo;
console.log(nombre , ", tienes " , cantidad , " años");
//confirm(nombre , ", tienes " , cantidad , " años")
*/
//console.log("Numero aleatorio",Math.random());

let ValorOrdenador=Math.floor(Math.random()*3)+1;
console.log("El ordenador elige" ,ValorOrdenador);

let ValorElegido=0;
let nombre= prompt("Introduce tu juego");
console.log(nombre);

if (nombre=="Piedra")
  {ValorElegido=1};

if (nombre=="Papel")
    {ValorElegido=2};

if (nombre=="Tijera")
    {ValorElegido=3};

if (ValorElegido==ValorOrdenador)
    { console.log("empate");    }

/*if ((ValorElegido==1) && (ValorOrdenador==3))
{  console.log("gana el ordenador");}*/

if (ValorElegido==1) // Nosotros elegimos Piedra
{
  if (ValorOrdenador==1) console.log("empate");
  if (ValorOrdenador==2) console.log("Gana ordenador");
  if (ValorOrdenador==3) console.log("Ganamos nosotros");
}

if (ValorElegido==2) // Nosotros elegimos Papel
{
  if (ValorOrdenador==1) console.log("Ganamos nosotros");
  if (ValorOrdenador==2) console.log("empate");
  if (ValorOrdenador==3) console.log("Gana ordenador");
}

if (ValorElegido==3) // Nosotros elegimos Tijera
{
  if (ValorOrdenador==1) console.log("Gana ordenador");
  if (ValorOrdenador==2) console.log("Ganamos nosotros");
  if (ValorOrdenador==3) console.log("Empate");
}


console.log("valor:" + ValorElegido);



//console.log("Numero aleatorio", " " ,Math.floor(Math.random()*3)+1);
