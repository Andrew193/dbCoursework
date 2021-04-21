const script={
    selectNews:(e,history)=>history.push(`/news/${e.dataset.newnumber}`),
    backToNewsPage:(history)=> history.goBack()
}
export default script;