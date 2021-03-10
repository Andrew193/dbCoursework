const obj={
    sendResponse:(e,flag,setFlag,form,notify,t)=>{
        e.preventDefault()
        console.log(form);
        fetch("/sendResponse",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ message:form.elements[0].value, feedback:
                form.elements[1].value })
        }).then(response=>response.json())
        .then((result=>{
            if(result.done){
                notify(t("footer.form.field3"))
            } else{
                notify(t("footer.form.field4"))
            }
            setFlag(!flag)
        }))
    }
}
export default obj;