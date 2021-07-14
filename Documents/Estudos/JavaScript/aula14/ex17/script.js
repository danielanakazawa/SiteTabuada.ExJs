function tabuada () {

var num = document.getElementById('num')
var tab = document.getElementById('tab')

if (num.value.length == 0){
    //valida se número foi inserido
    window.alert ("[ERROR] Por favor, digite um número.")
} else {
    var n = Number (num.value)
    
    for (var c = 0; c <= 10 ; c++){
        var item = document.createElement('option')
        var cal = Number (n*c)

        //aparecer tabuada no select
        item.text = `${n} x ${c} = ${cal}`
        tab.appendChild(item)
    }
}
}