const script={
    leave:()=>{
    localStorage.removeItem("user")
    //optional
    // localStorage.removeItem("langMode")
    // localStorage.removeItem("colorMode")
    window.location.reload()
}}
export default script