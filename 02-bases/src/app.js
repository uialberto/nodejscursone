
const {getUUID,getAge} = require('./plugings');
//const templateExports = require('./js-foundation/01-template');
//const { emailTemplate } = require('./js-foundation/01-template');
//require('./js-foundation/02-destructuring');
//const { getUserById } = require('./js-foundation/03-callbacks');
//const { getUserById } = require('./js-foundation/04-arrow');
const {buildMakePerson} = require('./js-foundation/05-factory');
//console.log(emailTemplate);

// const id = 1;
// getUserById( id, (error, user) => {
    
//     if(error) throw new Error(error);

//     console.log(user);
// });

const makePerson = buildMakePerson({getUUID, getAge});

const obj = {name:"Alberto", birthdate: "1987-11-17" };

const alberto = makePerson(obj);

console.log(alberto);