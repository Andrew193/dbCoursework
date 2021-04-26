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
        result.done?notify(t("footer.form.field3")):notify(t("footer.form.field4"))
        resetForm()
    }),
    ToRound:function decimalAdjust(value) {
        let clone=value
        if(clone%10!=0){
            while (clone%10!=0) 
            clone+=1
        }
        return clone/10
      },
    confirmInput:(value,maxAvailable,setInputValue)=>{
        parseInt(value)<1?setInputValue(1):parseInt(value)>=maxAvailable?setInputValue(maxAvailable):setInputValue(value)
    }
}
export default obj;