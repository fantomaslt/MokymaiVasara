// //  Pirma uzduotis 
// var maryte = 5;
// var jonukas =12;
// var bendrai = maryte + jonukas ;

// console.log(bendrai);

// console.log(bendrai+=5);

// console.log(bendrai-=2);


// if (maryte > jonas) {
//     console.log("Maryte turi daugiau obuoliu nei Jonas")
// } else if ( jonas >maryte) {
//     console.log("Jonas turi daugiau oboliu nei Maryte")
// }else {
//     console.log("atiduokim obolius Editai")
// }

//  switch(bendrai) {

//      case 9: 
//      console.log("Jus turite " + bendrai + "Obuoliu")

//      case 10:
//         console.log("Jus turite " + bendrai + "Obuoliu")

//      case 11:
//          console.log("Jus turite " + bendrai + "Obuoliu")

//     default:
//         console.log("nera oboliu isvis")

//  }


//  var array=['obolys', 'kriause', 'vysnia', 'bananas', 'slyva', 'braske'];

//  console.log(array[4], array[2]);


//  for (i=0; i<=6; i++) {
//      console.log(array[i]);
//  }
    

// document.getElementById("moku").style.background = "green";
// document.getElementById("moku").style.width = "300px";
// document.getElementById("moku").style.height = "300px";
// // document.getElementById("moku").createElement('div');

// let div = document.createElement('div');
// div.id = 'moku2';
// div.innerHTML = 'Valio pavyko';
// document.body.appendChild(div);

// document.getElementById("moku2").style.width = "300px";
// document.getElementById("moku2").style.height = "300px";
// document.getElementById("moku2").style.textAlign = "center";


// var btn = document.createElement("BUTTON");  
// btn.id = 'spaudaliukas';
// btn.innerHTML = "CLICK ME";                 
// document.body.appendChild(btn); 


// document.getElementById("spaudaliukas").addEventListener("click", function () {
//     var elem = document.getElementById("moku2");
//     elem.parentNode.removeChild(elem);
//     var divas = document.getElementById("spaudaliukas");
//     divas.parentNode.removeChild(divas);
// });






// var button = document.createElement("button");
// button.innerHTML = "Do Something";
// button.id = 'KARAMBA';
// var body = document.getElementsByTagName("body")[0];
// body.appendChild(button);

// document.getElementById('KARAMBA').addEventListener("click", function () {

//     var iframe = document.createElement("iframe");
//     iframe.src =src="https://www.youtube.com/embed/Zj2L1a-m2h8";
//     iframe.style.width = "600px";
//     iframe.style.height = "400px";
//     document.body.appendChild(iframe);

    

// });

// function Penkioskainos (kaina, pavadinimas) {

//     var kaina = kaina * 5;
//     return  pavadinimas + " 5 vnt kainuos " + kaina;

// };

// Penkioskainos(5,'bananas');
// document.write("<br>" + "<br>" +  Penkioskainos(5, 'bananas'), "<br>");










function  penkios (kaina, pavadinimas) {

    var kaina = document.getElementById('kaina').value;
    var pavadinimas2 = document.getElementById('vaisius').value;
    var quantity = document.getElementById('kiekis').value;

    var kainuos = kaina * quantity;

    return document.getElementById("atsakymas").innerHTML = pavadinimas2 + " " + quantity + " vnt kainuos " + kainuos;
  

}


// heroju masyvas 

const herojai = [
  { id: 'ragana', savybe: 'skrenda'},
  { id: 'slibinas', savybe: 'trigalvis'},
  { id: 'parsiukai', savybe: 'roziniai'},
  { id: 'supermenas', savybe: 'skrenda'},
  { id: 'Hulck', savybe: 'stiprus'}

]
// forech atvaizduoti elementa 
// herojai.forEach((element))=> cpmsp;else.log(element);

herojai.forEach( function(element, index) {

    var arlyginis = index + 1;
    if (arlyginis % 2 == 0) {
        console.log(arlyginis, element);
        var divas = document.createElement('div')
        divas.innerHTML = element.id + ' ' + element.savybe;
        divas.style.color = 'white';
        divas.style.backgroundColor = 'blue';
        document.body.appendChild(divas);
     } else { 
       var divas = document.createElement('div');
       divas.innerHTML = element.id + ' ' + element.savybe;
       document.body.appendChild(divas);
     }
    
    console.log(element,index);

});


//  atvaizduoti i ekrana 



// nuspalvinti lyginius 



herojai.forEach(herojus => { document.getElementById('as').innerHTML += 

  `
  <br>
    <li>
      ${herojus.id} - ${herojus.savybe}
    </li>
  `
})













var futbolininkas = 
  { begimo_greitis: 10, vardas: 'tomas', pavarde: 'blabla', ugis: 180, amzius: 25 }
  
 
const futbolininkai = [
{ id: 'futbolininkas1', begimo_greitis: 10, vardas: 'tomas', pavarde: 'blabla', ugis: 180, amzius: 25 },
{ id: 'futbolininkas2', begimo_greitis: 11, vardas: 'petras', pavarde: 'blabla1', ugis: 185, amzius: 30 },
{ id: 'futbolininkas3', begimo_greitis: 15, vardas: 'Jona', pavarde: 'blabla2', ugis: 175, amzius: 35 }

]


futbolininkai.forEach(futbolinika => {
    document.getElementById('futbolininkas1').innerHTML +=   `
  <br>
    <li>
      <strong>vardas</strong> ${futbolinika.vardas} - <strong>Pavarde</strong> ${futbolinika.pavarde}
    </li>
  `
})

console.log(futbolininkas.vardas);

document.getElementById('futbolininkas').innerHTML = futbolininkas.vardas + ' ' + futbolininkas.pavarde;


// futbolininkai.forEach(function (id, vardas) {

//     console.log(id);
//     document.getElementById('futbolininkas3').innerHTML = ;


// 	// return document.getElementById('futbolininkas3').innerHTML = id + ' ' + vardas

// });

// //   document.getElementById('futbolininkas3').innerHTML = futbolininka.vardas + ' ' + futbolininka.pavarde;



var txt = "";
// var person = {fname:"John", lname:"Doe", age:25}; 
var vardas;
for (vardas in futbolininkai) {
  txt += futbolininkai[vardas] + " "
}

let result = futbolininkai.map(a => a.vardas)

console.log(result);

document.getElementById("demo").innerHTML = result;