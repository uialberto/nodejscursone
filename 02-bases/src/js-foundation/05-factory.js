
const {getUUID,getAge} = require('../plugings');



const buildPerson = ({name,birthdate}) => {

    return {
        id: getUUID(),
        name: name,
        birthdate: birthdate,
        age: getAge(birthdate),
    }
}


const obj = {name:"Alberto", birthdate: "1987-11-17" };

const alberto = buildPerson(obj);

console.log(alberto);