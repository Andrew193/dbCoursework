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
            .then((result) => result)
}
export default obj;