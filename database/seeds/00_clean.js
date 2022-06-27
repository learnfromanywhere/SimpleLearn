exports.seed=async function(knex){
    await knex('roles').truncate()
 //   await knex('users').truncate()
 //   await knex('classes').truncate()
}