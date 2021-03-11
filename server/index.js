const Express = require("express")
const MySql = require("mysql2")
const path =require("path")
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const App=Express();
const Connection=MySql.createConnection({
    host: "localhost",
    database: "dbcoursework",
    password: "radeongraphics",
    user: "root",
}).promise();
const schema = buildSchema(`
  type Query {
    getNews:[News],
    getItems:[Items],
    getSelectedNews(number:Int):News,
    getAllPerson(name:String):[Person]
  }
  type News{
      title:String,
      date:String,
      message:String
  }
  type Person{
    FullName:String, 
    Password:String
  }
  type Items{
      Name:String,
      AuthorName:String
  }
  `);
var root = {
    getNews: () =>
     Connection.query("SELECT * FROM news").
     then((result,error)=>{
        if(!error && result[0].length!=0)
        return result[0]
     }),
     getItems: () =>
     Connection.query("SELECT * FROM production").
     then((result,error)=>{
        if(!error && result[0].length!=0)
        return result[0]
     }),
     getSelectedNews:(params)=>
     Connection.query(`select * from news where idnews="${params.number}"`).
     then((result,error)=>{
        if(!error && result[0].length!=0)
        return result[0][0]
     }),
     getAllPerson:(params)=>{
     if(!params.name){
     return Connection.query("SELECT * FROM players").
     then((result,error)=>{
        if(!error && result[0].length!=0)
        return result[0]
     })} 
         return Connection.query(`SELECT * FROM players WHERE FullName="${params.name}"`).
         then((result,error)=>{
            if(!error && result[0].length!=0)
            return result[0]
         })
    }
};
App.use('/getinfo', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
const jsonParser = Express.json()
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
App.post("/makeOrOrder",(req,res)=>{
    Connection.query(`INSERT INTO ordinaryorders(itemName, count, address, date, person)
    values(?,?,?,?,?)`,[req.body.itemName,req.body.count,req.body.address,
    req.body.date,req.body.person]).then((result,error)=>{
        if(error ||result[0].length==0){
            res.json({"done":false})
        } else res.json({"done":true})
    })
})
App.post("/makeUnOrder",(req,res)=>{
    Connection.query(`INSERT INTO unordinaryorders(itemName, count, address, date, person)
    values(?,?,?,?,?)`,[req.body.itemName,req.body.count,req.body.address,
    req.body.date,req.body.person]).then((result,error)=>{
        if(error ||result[0].length==0){
            res.json({"done":false})
        } else res.json({"done":true})
    })
})
App.post("/sendResponse",(req,res)=>{
   Connection.query("INSERT INTO questions(message,feedback) values(?,?)",Object.values(req.body)).then((result,error)=>{
       if(error)
       res.json({"done":false})
       else 
       res.json({"done":true})
   })
})
App.post("/makeNews",(req,res)=>{
    Connection.query("INSERT INTO news(title, date, message) values(?,?,?)",Object.values(req.body)).then((result,error)=>{
        if(error)
        res.json({"done":false})
        else 
        res.json({"done":true})
    })
})

App.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"))
});
App.listen(5000, "localhost", () => {
    console.log("started");
})