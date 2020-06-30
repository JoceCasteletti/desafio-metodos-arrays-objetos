
var radiologia = [
  {
    hora: '11:00',
    especialista: 'IGNACIO SCHULZ',
    paciente: 'FRANCISCA ROJAS',
    rut: '9878782-1',
    prevision: 'FONASA'
  },
  {
    hora: '11:30',
    especialista: 'FEDERICO SUBERCASEAUX',
    paciente: 'PAMELA ESTRADA',
    rut: '15345241-3',
    prevision: 'ISAPRE'
  },
  {
    hora: '15:00',
    especialista: 'FERNANDO WURTHZ',
    paciente: 'ARMANDO LUNA',
    rut: '16445345-9',
    prevision: 'ISAPRE'
  },
  {
    hora: '15:30',
    especialista: 'ANA MARIA GODOY',
    paciente: 'MANUEL GODOY',
    rut: '17666419-0',
    prevision: 'FONASA'
  },
  {
    hora: '16:00',
    especialista: 'PATRICIA SUAZO',
    paciente: 'RAMON ULLOA',
    rut: '14989389-K',
    prevision: 'FONASA'
  },
];

var traumatologia = [
  {
    hora: '08:00',
    especialista: 'MARIA PAZ ALTUZARRA',
    paciente: 'PAULA SANCHEZ',
    rut: '15554774-5',
    prevision: 'FONASA'
  },
  {
    hora: '10:00',
    especialista: 'RAUL ARAYA',
    paciente: 'ANGÉLICA NAVAS',
    rut: '15444147-9',
    prevision: 'ISAPRE'
  },
  {
    hora: '10:30',
    especialista: 'MARIA ARRIAGADA',
    paciente: 'ANA KLAPP',
    rut: '17879423-9',
    prevision: 'ISAPRE'
  },
  {
    hora: '11:00',
    especialista: 'ALEJANDRO BADILLA',
    paciente: 'FELIPE MARDONES',
    rut: '1547423-6',
    prevision: 'ISAPRE'
  },
  {
    hora: '11:30',
    especialista: 'CECILIA BUDNIK',
    paciente: 'DIEGO MARRE',
    rut: '16554741-K',
    prevision: 'FONASA'
  },
  {
    hora: '12:00',
    especialista: 'ARTURO CAVAGNARO',
    paciente: 'CECILIA MENDEZ',
    rut: '9747535-8',
    prevision: 'ISAPRE'
  },
  {
    hora: '12:30',
    especialista: 'ANDRES KANACRI',
    paciente: 'MARCIAL SUAZO',
    rut: '11254785-5',
    prevision: 'ISAPRE'
  },
];

var dental = [
  {
    hora: '08:30',
    especialista: 'ANDREA ZUÑIGA',
    paciente: 'MARCELA RETAMAL',
    rut: '11123425-6',
    prevision: 'ISAPRE'
  },
  {
    hora: '11:00',
    especialista: 'MARIA PIA ZAÑARTU',
    paciente: 'ANGEL MUÑOZ',
    rut: '9878789-2',
    prevision: 'ISAPRE'
  },
  {
    hora: '11:30',
    especialista: 'SCARLETT WITTING',
    paciente: 'MARIO KAST',
    rut: '7998789-5',
    prevision: 'FONASA'
  },
  {
    hora: '13:00',
    especialista: 'FRANCISCO VON TEUBER',
    paciente: 'KARIN FERNANDEZ',
    rut: '18887662-K',
    prevision: 'FONASA'
  },
  {
    hora: '13:30',
    especialista: 'EDUARDO VIÑUELA',
    paciente: 'HUGO SANCHEZ',
    rut: '17665461-4',
    prevision: 'FONASA'
  },
  {
    hora: '14:00',
    especialista: 'RAQUEL VILLASECA',
    paciente: 'ANA SEPULVEDA',
    rut: '14441281-0',
    prevision: 'ISAPRE'
  },
];

//referencia id item3 html
var item3 = document.getElementById('item3');
var item4 = document.getElementById('item4');

//declarar varieble generate con la lista y el nombre de la especialidad
var generate = (list, specialty) => {
  var temp = '';

  //se imprime el título de la tabla y los nombres de los campos
  temp += `
  <h2>${specialty}</h2>
  <div class="table-responsive">
    <table class="table">
        <thead class="thead-inverse">
          <tr>
            <th>Hora</th>
            <th>Especialista</th>
            <th>Paciente</th>
            <th>Rut</th>
            <th>Previsión</th>
          </tr>
        </thead>
        <tbody id="list">
  `;

  //se recorre la lista y se llena con la información de cada campo
  list.forEach(x => {
    temp += `
    <tr>
      <td>${x.hora}</td>
      <td>${x.especialista}</td> 
      <td>${x.paciente}</td> 
      <td>${x.rut}</td> 
      <td>${x.prevision}</td> 
    </tr>`
  });

  //imprime después de la tabla la especialidad y la cantidad de atenciones con la propiedad length
  temp += `<tr><td colspan="5">Cantidad de atenciones para ${specialty}: ${list.length}<td></tr>
        </tbody>
      </table>
    </div>
  `;

  return temp;
}

//declaración de nuevos elementos que seran agregados en tabla traumatología
var newPatients = [
  {
    hora: '09:00',
    especialista: 'RENÉ POBLETE',
    paciente: 'ANA GELLONA',
    rut: '13123329-7',
    prevision: 'ISAPRE'
  },
  {
    hora: '09:30',
    especialista: 'MARIA SOLAR',
    paciente: 'RAMIRO ANDRADE',
    rut: '12221451-K',
    prevision: 'FONASA'
  },
  {
    hora: '10:00',
    especialista: 'RAUL LOYOLA',
    paciente: 'CARMEN ISLA',
    rut: '10112348-3',
    prevision: 'ISAPRE'
  },
  {
    hora: '10:30',
    especialista: 'ANTONIO LARENAS',
    paciente: 'PABLO LOAYZA',
    rut: '13453234-1',
    prevision: 'ISAPRE'
  },
  {
    hora: '12:00',
    especialista: 'MATIAS ARAVENA',
    paciente: 'SUSANA POBLETE',
    rut: '14345656-6',
    prevision: 'FONASA'
  }];


// 1- agregar elementos en tabla traumatología con método push
newPatients.forEach(x => traumatologia.push(x));
item3.innerHTML = generate(traumatologia, 'Traumatología')

// var newElement = traumatologia.concat(newPatients);
console.log(`Nuevos pacientes en traumatología ${traumatologia.map(x => x.rut)}`);


// 2- eliminar primero elemento de array radiología
var copyRadioDeleteFirst = radiologia.slice();
var deleteFirst = copyRadioDeleteFirst.shift();
console.log(`Radiología metodo shift ${deleteFirst.rut}`);
console.log(`Radiología sin el primer elemento ${copyRadioDeleteFirst.map(x => x.rut)}`)


// 2- eliminar último elemento de array radiología
var copyRadioDeleteLast = radiologia.slice();
var deleteLast = copyRadioDeleteLast.pop();
console.log(`radiologia metodo pop' ${deleteLast.rut}`);
console.log(`Radiología sin el ultimo elemento ${copyRadioDeleteLast.map(x => x.rut)}`)


// 3- Imprimir lista de consultas médicas dental, método map entrega un nuevo arreglo y join une los elementos con <br>
item4.innerHTML += `
<p> Lista consultas médicas Dental: <br> 
  ${dental.map(x => `${x.hora} - ${x.especialista} - ${x.paciente} - ${x.rut} - ${x.prevision}`).join('<br>')}</p>
`;


//4- Imprime lista con todos los nombres con método concat los agrupa luego con map retorna una nueva lista y los une con join
var group = radiologia.concat(traumatologia.concat(dental));
item4.innerHTML += `<p> Pacientes centro médico Ñuñoa: <br> ${group.map(x => x.paciente).join('<br>')}</p>`;


//5-Modificar isapre por fonasa y viceversa con método map se obtiene nuevo arreglo 
//si la condicion es fonasa si es verdadero imprimir isapre si es falso imprimir fonasa
var prevision = dental.map(x => {
  x.prevision = x.prevision === 'FONASA' ? 'ISAPRE' : 'FONASA';
  return x;
});
item4.innerHTML += `<p> Cambio de previsión dental: <br> ${prevision.map(x => ` ${x.prevision};${x.paciente}`).join('<br>')} </p>`;