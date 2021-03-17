const obj={
    reg:(flag)=>localStorage.setItem("regMode", JSON.stringify({Flag: flag }))
}
export default obj;