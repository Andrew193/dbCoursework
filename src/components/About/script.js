let clone=null
const script={
    remove:(flag,setFlag)=>{
        clone.remove()
        setFlag(!flag)
    },
    showMore:(e,moreBlock,setFlag,t,flag)=>{
        clone=e.target.cloneNode(true)
        clone.setAttribute("title",t("about.modal"))
        clone.addEventListener("click",(e)=>e.target.parentNode.children[0].click())
        moreBlock.appendChild(clone)
        setFlag(!flag)
    }
}
export default script