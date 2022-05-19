function TextToBin(str) {
    var binArray = []
    for (let i = 0; i < str.length; i++) {
        binArray.push(str.charCodeAt(i).toString(2))
    }
    binArray = binArray.join(" ")
    return binArray
}

function BinToText(str) {
    var binArray = str.split(" ")
    var txt = []
    binArray.map(char => {
        txt.push(String.fromCharCode(parseInt(char, 2)))
    })
    txt = txt.join("")
    return txt
}
