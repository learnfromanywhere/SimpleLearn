//id
//roleName
exports.seed=async function(knex){
    await knex('roles').insert([
        {
            id:1,roleName:"Instructor"
        },
        {
            id:2,roleName:"Student"
        },
        {
            id:3,roleName:"Admin"
        }
    ])
}