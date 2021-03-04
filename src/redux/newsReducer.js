const text=` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odio vero itaque, quae cupiditate labore maiores ab quo illo, beatae nemo quos nobis iure recusandae, dignissimos at! Sed, aut et!
Odio quae in optio quas fugit harum. Maiores ipsa nisi, officiis eligendi eos debitis, quam in deleniti, alias amet eveniet vel! Earum quos iusto deleniti non culpa quam ratione repudiandae?
Blanditiis dolorem voluptate excepturi officiis rem culpa saepe error pariatur modi voluptatibus sit repellendus enim, ut magni eligendi, neque sed consequuntur ipsam doloremque. Modi minima incidunt quod in aliquid! Voluptas?`
const title=`Lorem ipsum dolor`
const initNews=new Array(4)
initNews.fill({"title":title,"date":`${new Date().toLocaleDateString()}`,
"message":text})

function NewsReducer(state=initNews,action) {
    switch (action.type) {
        case "ADD POST":{
            state.push(action.toAdd)
            return JSON.parse(JSON.stringify(state))
        }
        default:
            return JSON.parse(JSON.stringify(state))
    }
}
export default NewsReducer;