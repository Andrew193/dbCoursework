let clone=null
const script={
    showMore:(e,moreBlock,setFlag,t,flag)=>{
        clone=e.target.cloneNode(true)
        clone.setAttribute("title",t("about.modal"))
        moreBlock.appendChild(clone)
        setFlag(!flag)
    },
    remove:(flag,setFlag)=>{
        clone.remove()
        setFlag(!flag)
    }
}
export default script