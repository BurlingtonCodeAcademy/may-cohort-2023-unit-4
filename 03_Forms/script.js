//* Global Variables
const form = document.querySelector('form');
const table = document.querySelector('tbody');
let animals = [];
// console.log(form.name);
// console.log(Object.values(form));
// console.log(form.name.placeholder);
// console.log(form[0].placeholder);

//* Event Listener
form.addEventListener("submit", e => {
    e.preventDefault(); // stops the default refresh of the form.
    // console.log(e);

    const animal = {
        name: form.name.value,
        sex: form.sex.value,
        species: form.species.value,
    }

    animals.push(animal);
    // console.log(animals);
    form.reset(); // points to our form and clears it.
    form[0].focus(); // targets the first input within the form when it is "new"
    //* alt: form.species.focus();

    displayTable();
});

// form.name.addEventListener('keyup', () => {
//     console.log(form.name.value)
// })


//* Display to Table (function)
function displayTable() {
    // console.log('table: ', animals)
    // const t = document.querySelector('tbody');
    // console.log(t.childNodes);
    while(table.firstChild) {
        // console.log(table.firstChild);
        table.removeChild(table.firstChild);
    }

    animals.forEach((animal, i) => {
        // console.log(animal, i);

        //* Create
        let tr = document.createElement('tr'); // parent element
        let id = document.createElement('td');
        let name = document.createElement('td');
        let sex = document.createElement('td');
        let species = document.createElement('td');

        //* Assign
        id.textContent = i + 1;
        name.textContent = animal.name;
        sex.textContent = animal.sex;
        species.textContent = animal.species;

        //* Append
        tr.appendChild(id);
        tr.appendChild(name);
        tr.appendChild(sex);
        tr.appendChild(species);
        table.appendChild(tr);
    })
}