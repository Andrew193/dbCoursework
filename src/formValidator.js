const validBatch={
    validName:(name)=>{return name===""},
    validPassword:(password)=>{
        const reg=/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
        return reg.test(password)
    }
}
export default validBatch;