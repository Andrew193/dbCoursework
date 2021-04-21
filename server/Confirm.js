function confirmResult(result,error) {
    if (!error && result[0].length != 0)
        return result[0];
}
function confirmResultVersion2(result,res,error) {
    if (error || result[0].length == 0) {
        res.json({ "done": false });
    } else res.json({ "done": true })
}
function confirmSize(error,result) {
    if (!error && result[0].length != 0)
    return { "Size": result[0][0].MaxId }
}
module.exports={v1:confirmResult,v2:confirmResultVersion2,confirmSize:confirmSize}