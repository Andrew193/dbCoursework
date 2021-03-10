const obj={
    Ord:(notify,values,t,resetForm,url)=>fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ itemName:values.ItemName, count:values.itemCount, address
        :values.ad, date:values.date, person:values.person })
    }).then((response)=>response.json())
    .then((result)=>{
        if(result.done)
        notify(t("footer.form.field3"))
        else
        notify(t("footer.form.field4"))

        resetForm()
    })
}
export default obj;