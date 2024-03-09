
// const {getUUID,getAge} = require('../plugings');

const buildMakePerson = ({getUUID, getAge}) =>{
   return ({name,birthdate}) => {

        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        }
    }
}







// console.log(alberto);

module.exports = {
    buildMakePerson,    
}