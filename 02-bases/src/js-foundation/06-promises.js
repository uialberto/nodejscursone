
const {http} = require('../plugings');

const getPokemonById = async ( id) => {
   
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;


    const pokemon = await http.get(url);
    
    
    return pokemon.name;





    // return fetch(url)
    // .then((res) => res.json())
    // // .then(() => {throw new Error('Pokemon no existe')})
    // .then((pokemon) => pokemon.name );





    // const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    // return fetch(url)
    // .then((res) => res.json())
    // // .then(() => {throw new Error('Pokemon no existe')})
    // .then((pokemon) => pokemon.name );





    // const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    // fetch(url).then((response) => {

    //     response.json().then((pokemon) => {

    //         // console.log(pokemon.name);

    //         callback(pokemon.name);

    //     });                


    // });
    return 10;
}



module.exports = getPokemonById;