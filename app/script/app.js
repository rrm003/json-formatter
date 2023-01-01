
function format() {
    let text = ''
    try {
        text = JSON.parse(document.getElementById("input").value)
    } catch (e) {
        alert(e)
    }

    let pretty = JSON.stringify(text, null, 4)
    console.log(pretty)
    document.getElementById("output").innerHTML = pretty
}

function copy() {
    let data = document.getElementById("output").innerHTML
    navigator.clipboard.writeText(data)
    alert("copied")
}
