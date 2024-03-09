



const buildPerson = ({name,birthdate}) => {

    return {
        id: new Date().getTime(),
        name: name,
        birthdate: birthdate,
        age: new Date().getFullYear() - new Date(birthdate).getFullYear(),
    }
}


const obj = {name:"Alberto", birthdate: "1987-11-17" };

const alberto = buildPerson(obj);

console.log(alberto);