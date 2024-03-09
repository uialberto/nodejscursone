const users = [
    {
        id:1,
        name:"Alberto"
    },
    {
        id:2,
        name:"Laura"
    }
]

const getUserById = ( id, callback) => {
const user = users.find( (user) => user.id == id );

   // console.log({ user});
   
   ( user )
   ? callback(null, user)
   : callback(`USUARIO no encontrado. Id: ${id}`);

}

//getUserById(1);

module.exports = {
    getUserById,
}