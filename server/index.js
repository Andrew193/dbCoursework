const Express = require("express")
const MySql = require("mysql2")
const path = require("path")
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const App = Express();
const Connection = MySql.createConnection({
    host: "localhost",
    database: "dbcoursework",
    password: "radeongraphics",
    user: "root",
}).promise();
const schema = buildSchema(`
  type Query {
    getNews:[News],
    getItems(parametr:Int):[Items],
    getSelectedNews(number:Int):News,
    getAllPerson(name:String):[Person],
    getSize:Size,
    getAllAuthors:[Author]
  }
  type Author{
      Name:String,
      age:Int,
      phone:String,
      adress:String
  }
  type Size{
    Size:Int
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
      AuthorName:String,
      pagesCount:Int,
      circulation:Int,
      itemCode:String,
  }
  `);
const root = {
    getAllAuthors:()=>
    Connection.query("SELECT * FROM authors").
    then((result, error) => {
        if (!error && result[0].length != 0)
            return result[0]
    }),
    getNews: () =>
        Connection.query("SELECT * FROM news").
            then((result, error) => {
                if (!error && result[0].length != 0)
                    return result[0]
            }),
    getItems: (params) => {
        if (!params.parametr || params.parametr===1) {
            return Connection.query(`SELECT * FROM production 
            WHERE idProduction between 0 and 10 GROUP BY Name`).
                then((result, error) => {
                    if (!error && result[0].length != 0)
                        return result[0]
                })
        } else{
            return Connection.query(`SELECT * FROM production WHERE
             idProduction between "${(params.parametr *10)+1}" and "${(params.parametr *10)+11}"`).
                then((result, error) => {
                    if (!error && result[0].length != 0)
                        return result[0]
                })
        }
    }, getSelectedNews: (params) =>
        Connection.query(`select * from news where idnews="${params.number}"`).
            then((result, error) => {
                if (!error && result[0].length != 0)
                    return result[0][0]
            }),
    getAllPerson: (params) => {
        if (!params.name) {
            return Connection.query("SELECT * FROM players").
                then((result, error) => {
                    if (!error && result[0].length != 0)
                        return result[0]
                })
        }
        return Connection.query(`SELECT * FROM players WHERE FullName="${params.name}"`).
            then((result, error) => {
                if (!error && result[0].length != 0)
                    return result[0]
            })
    },
    getSize:()=>
    Connection.query("SELECT MAX(idProduction) as MaxId FROM production").
    then((result, error) => {
        if (!error && result[0].length != 0)
            return {"Size":result[0][0].MaxId}
    })
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

App.post("/RegPerson", (req, res) => {
    Connection.query(`INSERT INTO players(FullName,Password) values(?,?) ON DUPLICATE KEY UPDATE FullName = FullName`, [req.body.Name, req.body.Password])
        .then((result, error) => { error ? res.json({ "done": false }) : res.json({ "done": true }) })
})
App.get("/LogPerson?*", (req, res) => {
    Connection.query(`SELECT * FROM players WHERE FullName='${req.query.Name}' AND  Password='${req.query.Password}'`).
        then((result, error) => {
            if (error || result[0].length == 0) {
                res.json({ "done": false })
            } else res.json({ "done": true })
        })
})
App.post("/makeOrOrder", (req, res) => {
    Connection.query(`INSERT INTO ordinaryorders(itemName, count, address, date, person)
    values(?,?,?,?,?)`, [req.body.itemName, req.body.count, req.body.address,
    req.body.date, req.body.person]).then((result, error) => {
        if (error || result[0].length == 0) {
            res.json({ "done": false })
        } else res.json({ "done": true })
    })
})
App.post("/makeUnOrder", (req, res) => {
    Connection.query(`INSERT INTO unordinaryorders(itemName, count, address, date, person)
    values(?,?,?,?,?)`, [req.body.itemName, req.body.count, req.body.address,
    req.body.date, req.body.person]).then((result, error) => {
        if (error || result[0].length == 0) {
            res.json({ "done": false })
        } else res.json({ "done": true })
    })
})
App.post("/sendResponse", (req, res) => {
    Connection.query("INSERT INTO questions(message,feedback) values(?,?)", Object.values(req.body)).then((result, error) => {
        if (error)
            res.json({ "done": false })
        else
            res.json({ "done": true })
    })
})
App.post("/makeNews", (req, res) => {
    Connection.query("INSERT INTO news(title, date, message) values(?,?,?)", Object.values(req.body)).then((result, error) => {
        if (error)
            res.json({ "done": false })
        else
            res.json({ "done": true })
    })
})

App.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"))
});
App.listen(5000, "localhost", () => {
    console.log("started");
})