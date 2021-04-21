const { buildSchema } = require("graphql");
const obj={
    Schema:buildSchema(`
    type Query {
      getNews(parametr:Int):[News],
      getItems(parametr:Int):[Items],
      getSelectedNews(number:Int):News,
      getAllPerson(name:String,queryMod:Boolean):[Person],
      getSize:Size,
      getAllAuthors:[Author],
      getSizeOfNews:Size,
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
        idnews:Int
        title:String,
        date:String,
        message:String,
        show:Boolean
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
    `),
    init:{
        host: "localhost",
        database: "dbcoursework",
        password: "radeongraphics",
        user: "root",
    }
}
module.exports=obj;