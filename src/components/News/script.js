const script={
    selectNews:(e,history)=>{
        history.push(`/news/${e.dataset.newnumber}`)
    }
}
export default script;