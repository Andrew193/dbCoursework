const Script = require("./script"),
    Express = require("express"),
    MySql = require("mysql2"),
    path = require("path"),
    { graphqlHTTP } = require('express-graphql'),
    App = Express(),
    Connection = MySql.createConnection(Script.init).promise(),
    schema = Script.Schema,
    jsonParser = Express.json(),
    confirm=require("./Confirm");
App.use('/getinfo', graphqlHTTP({
    schema: schema,
    rootValue:{
        getAllAuthors: () =>
            Connection.query("SELECT * FROM authors where isshow=true").
                then((result, error) => confirm.v1(result, error)),
        getNews: (params) => {
            if (!params.parametr || params.parametr === 1) {
                return Connection.query(`SELECT * FROM news WHERE idnews between 0 and 10 and isshow=true`).
                    then((result, error) => confirm.v1(result, error))
            } else {
                return Connection.query(`SELECT * FROM news WHERE idnews
                between "${(params.parametr * 10) -9}" and "${(params.parametr * 10)}" and isshow=true`).
                    then((result, error) => confirm.v1(result, error))
            }
        },
        getItems: (params) => {
            if (!params.parametr || params.parametr === 1) {
                return Connection.query(`SELECT * FROM production 
                WHERE idProduction between 0 and 10 GROUP BY Name`).
                    then((result, error) => confirm.v1(result, error))
            } else {
                return Connection.query(`SELECT * FROM production WHERE
                 idProduction between "${(params.parametr * 10) + 1}" and "${(params.parametr * 10) + 11}"`).
                    then((result, error) => confirm.v1(result, error))
            }
        }, getSelectedNews: (params) =>
            Connection.query(`select * from news where idnews="${params.number}"`).
                then((result, error) => {
                    if (!error && result[0].length != 0)
                        return result[0][0]
                }),
        getAllPerson: (params) => {
            if (!params.name || params.name === "" || params.queryMod) {
                return Connection.query("SELECT * FROM players").
                    then((result, error) => confirm.v1(result, error))
            }
            return Connection.query(`SELECT * FROM players WHERE FullName="${params.name}"`).
                then((result, error) => confirm.v1(result, error))
        },
        getSize: () =>
            Connection.query("SELECT MAX(idProduction) as MaxId FROM production").
                then((result, error) =>    confirm.confirmSize(error,result)
                ),
        getSizeOfNews: () =>
            Connection.query("SELECT MAX(idnews) as MaxId FROM news").
            then((result, error) =>    confirm.confirmSize(error,result))
    },
    graphiql: true,
}));
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
            confirm.v2(result, res, error)
        })
})
App.post("/changeVis",(req,res)=>{
    Connection.query(`update news set isshow=not isshow where idnews="${req.body.id}"`). 
    then((result, error) => {
        confirm.v2(result, res, error)
    })
})
App.post("/makeOrOrder", (req, res) => {
    Connection.query(`INSERT INTO ordinaryorders(itemName, count, address, date, person)
    values(?,?,?,?,?)`, [req.body.itemName, req.body.count, req.body.address,
    req.body.date, req.body.person]).then((result, error) => {
        confirm.v2(result, res, error)
    })
})
App.post("/makeUnOrder", (req, res) => {
    Connection.query(`INSERT INTO unordinaryorders(itemName, count, address, date, person)
    values(?,?,?,?,?)`, [req.body.itemName, req.body.count, req.body.address,
    req.body.date, req.body.person]).then((result, error) => {
        confirm.v2(result, res, error)
    })
})
App.post("/sendResponse", (req, res) => {
    Connection.query("INSERT INTO questions(message,feedback) values(?,?)", Object.values(req.body)).then((result, error) => {
        confirm.v2(result, res, error)
    })
})
App.post("/makeNews", (req, res) => {
    Connection.query("INSERT INTO news(title, date, message) values(?,?,?)", Object.values(req.body)).then((result, error) => {
        confirm.v2(result, res, error)
    })
})
App.put("/corNews", (req, res) => {
    const Values = Object.values(req.body)
    if (Object.getOwnPropertyNames(req.body).length !== 0) {
        Connection.query(`update news set title='${Values[0]}',date='${Values[1]}',message='${Values[2]}' where idnews='${req.body.id}'`)
            .then((result, error) => {
                confirm.v2(result, res, error)
            })
    }
})
App.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"))
});
App.listen(5000, "localhost", () => {
    console.log("started");
})