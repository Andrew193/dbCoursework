const script={
    toTop:()=>{
        const interval=setInterval(()=>{
            window.scrollY>5?window.scrollBy(0,-5):clearInterval(interval)
        },20)
    },
    toBottom:()=>{
        const interval=setInterval(()=>{
            window.scrollY<document.body.scrollHeight-window.innerHeight?window.scrollBy(0,5):clearInterval(interval)
        },20)
    }
}
export default script;