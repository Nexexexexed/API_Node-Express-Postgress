const db =require('../db.js')

class userController{
    async createUser(req,res){
        const {name,second_name} = req.body
        const  newPerson = await db.query('INSERT INTO person (name,second_name) values ($1, $2) RETURNING *', [name,second_name])
        res.json(newPerson.rows)
    }

    async getUser(req,res){
        const users = await db.query('SELECT * FROM person ')
        res.json(users.rows)
    }

    async getOneUser(req,res){
        const id = req.params.id;
        const user = await db.query('SELECT * FROM person where id=$1',[id])
        res.json(user.rows[0])
    }

    async updateUser(req,res){
        const {id,name,second_name} = req.body
        const user = await db.query("UPDATE person set name=$1, second_name=$2 where id = $3 RETURNING *",[name,second_name,id])
        res.json(user.rows[0])
    }

    async deleteUser(req,res){
        const id = req.params.id;
        const user = await db.query('DELETE FROM person where id=$1',[id])
        res.json(user.rows[0])
    }
}

module.exports = new userController()