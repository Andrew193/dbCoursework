import Valid from "../formValidator"
import Errors from "../errorMessages"
const obj = {
    Reg: (name, password) =>
        fetch("/RegPerson", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ Name: name, Password: password })
        })
            .then((response) => response.json())
            .then((result) => result),
    Log: (name, password) =>
        fetch("/LogPerson?"+new URLSearchParams({"Name": name,"Password": password }))
            .then((response) => response.json())
            .then((result) => result),
    validate:(values) => {
        let errors = {}
        if (Valid.validName(values.name)) errors.name = Errors.nameError
        if (!Valid.validPassword(values.password)) errors.password = Errors.passwordError
        return errors
      },
      adder:(parametr,resetForm,values,notify) => {
        if (parametr.done) {
          localStorage.setItem("user", JSON.stringify({ Name: values.name, Flag: true }))
          notify()
          window.location.reload();
        } 
          resetForm()
      },
    submit:(values,notify,resetForm) => {
        if (JSON.parse(localStorage.getItem("regMode")).Flag) {
            obj.Reg(values.name, values.password).then((parametr)=>obj.adder(parametr,resetForm,values,notify))
        } else{
            obj.Log(values.name, values.password).then((parametr)=>obj.adder(parametr,resetForm,values,notify))
        }
        localStorage.removeItem("regMode")
      }
}
export default obj;