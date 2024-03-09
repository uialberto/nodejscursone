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

function getUserById( id, callback) {
const user = users.find(function(user)
    {
        return user.id == id;
    });

   // console.log({ user});

   if( !user ){
     return callback(`USUARIO no encontrado. Id: ${id}`);
   }

   return callback(null, user);
}

//getUserById(1);

module.exports = {
    getUserById,
}