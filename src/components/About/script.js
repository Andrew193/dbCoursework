let clone=null
const script={
    remove:(flag,setFlag)=>{
        clone.remove()
        setFlag(!flag)
    },
    showMore:(e,moreBlock,setFlag,t,flag)=>{
        clone=e.target.cloneNode(true)
        clone.setAttribute("title",t("about.modal"))
        moreBlock.appendChild(clone)
        setFlag(!flag)
    }
}
export default script