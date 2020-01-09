//Scrivi un programma che stampi i numeri da 1 a 100
//per i multipli di 3 stampi “Fizz” al posto del numero
//per i multipli di 5 stampi “Buzz” al posto del numero
//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
//Stampiamo in console e poi su html


alert('FizzBuzzTest');


//stampo i numeri da 1 a 100
for (var i = 0; i <= 100; i++) {
  console.log(i);
  document.getElementById('lista_numeri').innerHTML += '<li>'+ i+ '</li>';

} if (i % 3 == 0 && i % 5 == 0) {
  console.log('FizzBuzz');

} else if (i % 3 == 0) {
  console.log('Fizz');

} else  if (i % 5 == 0)  {
  console.log('Buzz');

}
