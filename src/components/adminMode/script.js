const obj={
    Ord:(notify,values,t,resetForm)=>fetch("/makeNews",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ title:values.title, date:values.date, message:values.message})
    })
    .then((response)=>response.json())
    .then((result)=>{
        if(result.done)
        notify(t("footer.form.field3"))
        else
        notify(t("footer.form.field4"))

        resetForm()
    }),
    show:(e,s,notify,t)=>{
        notify(t("ok"))
        e.target.nextSibling.classList.toggle(`${s.Open}`)
    }
}
export default obj;