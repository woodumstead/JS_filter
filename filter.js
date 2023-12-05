const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];


//-------------------------  FILTER  -------------------
//1. Get characters with mass greater than 100
const above100 = characters.filter( characters => {
    return characters.mass > 100;
});
console.log(above100);

//2. Get characters with height less than 200
const shorter = characters.filter(characters => {
    return characters.height < 200
});
console.log(shorter)

//3. Get all male characters
const males = characters.filter(characters => {
    return characters.gender === "male"
});
console.log(males);

//4. Get all female characters
const females = characters.filter(characters => {
    return characters.gender === "female"
});
console.log(females)
