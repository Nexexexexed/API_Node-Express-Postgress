const Pool =require('pg').Pool


const pool= new Pool({
    user: "postgres",
    password: "16035226",
    host: "localhost",
    port: 5432,
    database: "node_postgres"
}
)


module.exports=pool
