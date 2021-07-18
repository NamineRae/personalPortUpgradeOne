import { people } from './people.js';
import { starships } from './starships.js';

console.log(starships[0])

//people data we want to use
// birthday
// homeworld
// name

//startshipts data we want to use
// name
// manufacture
// model

let arrowFuncExample = (params) => {
    //do stuff
}

let tradFuctionExampl = function(params) {
    //do suff
}

//build information array

let simplePeopleArray = people.map((person) => {
    return {
        fullName: person.name,
        birthday: person.birth_year,
        homeWorld: person.homeworld
    }
})

let simpleStarshipArray = starships.map((starship) => {
    return {
        name: starship.name,
        manufacture: starship.manufacturer,
        model: starship.model
    }
})



//Build element functions

//display the information onto the webpage

simplePeopleArray.forEach((person) => {
    let nameElement = document.createElement('p');

    let nameElementOne = document.createElement('p');

    let nameElementTwo = document.createElement('p');

    nameElement.innerHTML = person.fullName;

    nameElementOne.innerHTML = person.birthday;

    nameElementTwo.innerHTML = person.homeWorld;
    
    let peopleDiv = document.querySelector('#peopleDiv');

    nameElement.append(nameElementOne, nameElementTwo);

    peopleDiv.append(nameElement);

})


simpleStarshipArray.forEach((starship) => {
    let unnamedElement = document.createElement('p')
    
    let unnamedElementOne = document.createElement('p')

    let unnamedElementTwo = document.createElement('p')

    unnamedElement.innerHTML = starship.name;

    unnamedElementOne.innerHTML = starship.manufacture;

    unnamedElementTwo.innerHTML = starship.model;
    
    let starshipDiv = document.querySelector('#starshipDiv');

    unnamedElement.append(unnamedElementOne, unnamedElementTwo);

    starshipDiv.append(unnamedElement);

})
//build rendering loop
