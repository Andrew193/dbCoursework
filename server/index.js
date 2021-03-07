const Express = require("express")
const MySql = require("mysql2")
const path =require("path")
const App=Express();
const jsonParser = Express.json()
const Connection=MySql.createConnection({
    host: "localhost",
    database: "dbcoursework",
    password: "radeongraphics",
    user: "root",
}).promise();
App.use(Express.static(path.join(__dirname, "..", "build")));
App.use(Express.static("public"))
App.use(jsonParser)

App.post("/RegPerson",(req,res)=>{
    Connection.query(`INSERT INTO players(FullName,Password) values(?,?) ON DUPLICATE KEY UPDATE FullName = FullName`, [req.body.Name, req.body.Password])
    .then((result,error)=>{  error?res.json({"done":false}):res.json({"done":true})  })
})
App.get("/LogPerson?*",(req,res)=>{
    Connection.query(`SELECT * FROM players WHERE FullName='${req.query.Name}' AND  Password='${req.query.Password}'`).
    then((result,error)=>{
        if(error ||result[0].length==0){
            res.json({"done":false})
        } else res.json({"done":true})
    })
})


App.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"))
});
App.listen(5000, "localhost", () => {
    console.log("started");
})