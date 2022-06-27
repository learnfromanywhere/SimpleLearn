/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    try{
        await knex.schema.createTable('roles',table=>{
            table.increments();
            table.string('roleName',255)
            .notNullable();
            table.timestamp('timestamp');
        })
        console.log("Successfully created 'roles' table")
    }catch(err){
        console.log('Failed to create "roles" table')
    }
    finally{
        if(knex){
            knex.destroy()
        }
    }
    
    try{
        await knex.schema.createTable('users',table=>{
            table.increments('userId');
            table.string('firstName',255)
            .notNullable();
            table.string('lastName',255)
            .notNullable()
            table.string('email',255)
            .notNullable()
            .unique()
            .index('email')
            table.string('phoneNumber',255)
            .notNullable()
            table.string('password',255)
            .notNullable()
            table.integer('roleId')
            .unsigned()
            .references('roles.id')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    
        });
        console.log('Successfully created "users" table');
    }
    catch(err){
        console.log("Failed to create 'users' table");
    }
    finally{
        if(knex){
            knex.destroy();
        }
    }
    await knex.schema.createTable('classes',table=>{
        table.increments('classId');
        table.string('className',255)
        .notNullable();
        table.string('classDescription',255)
        .notNullable()
        table.float('price')
        .notNullable();
        table.string('classUrl',800)
        .notNullable();
        table.date('date')
        .notNullable();
        table.time('time')
        .notNullable();
        table.string('level')
        .notNullable();
        table.integer('userId')
        .unsigned()
        .references('users.userId')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        table.timestamp('timestamp')
        
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('classes');  
  await knex.schema.dropTableIfExists('users');
  await knex.schema.dropTableIfExists('roles')
};
