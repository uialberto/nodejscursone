
const {getUUID,getAge} = require('./plugings');
//const templateExports = require('./js-foundation/01-template');
//const { emailTemplate } = require('./js-foundation/01-template');
//require('./js-foundation/02-destructuring');
//const { getUserById } = require('./js-foundation/03-callbacks');
//const { getUserById } = require('./js-foundation/04-arrow');
// const {buildMakePerson} = require('./js-foundation/05-factory');
//console.log(emailTemplate);



const getPokemonById = require('./js-foundation/06-promises');



getPokemonById(1)
.then((pokemon) => console.log({pokemon}))
.catch((error) => console.log('Ha ocurrido un error.'))
.finally(() => console.log('Finalmente'));



//Token de Acceso
//Publicas





// ! Referencia a la funcion factory y uso.
// const id = 1;
// getUserById( id, (error, user) => {
    
//     if(error) throw new Error(error);

//     console.log(user);
// });


// const makePerson = buildMakePerson({getUUID, getAge});

// const obj = {name:"Alberto", birthdate: "1987-11-17" };

// const alberto = makePerson(obj);

// console.log(alberto);