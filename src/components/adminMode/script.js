// function makeForCor(values){
//     const obj={}
//     values.title!=="" && (obj.title=values.title)
//     values.date!=="" && (obj.date=values.date)
//     values.message!=="" && (obj.message=values.message)
//     values.id!==0 && (obj.id=values.id)
//     return obj
// }
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
        result.done?notify(t("footer.form.field3")):notify(t("footer.form.field4"))
        resetForm()
    }),
    show:(e,s,notify,t)=>{
        notify(t("ok"))
        e.target.nextSibling.classList.toggle(`${s.Open}`)
    },
    comp:(e,password,dispatch)=>{if(e.target.value===password)dispatch({"type":"setAdmin"})},
    OrdCor:(notify,values,t,resetForm)=>fetch("/corNews",{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(values)
    })
    .then((response)=>response.json())
    .then((result)=>{
        result.done?notify(t("footer.form.field3")):notify(t("footer.form.field4"))
        resetForm()
    })
}
export default obj;