function contar () {

var inicio = window.document.getElementById ('inicio')
var fim = window.document.getElementById ('fim')
var passo = window.document.getElementById ('passo')
var res = document.querySelector ('div#res')

if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    window.alert ('[ERROR]')
    } else {
        res.innerHTML = 'Contando...'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0){
            window.alert ('Passo inválido!')
        }

        if (i < f){
        for (var c=i ; c <= f ; c += p){
            //contagem crescente
            res.innerHTML += `${c} \u{1F449}`

        }} else {
            //contagem regressiva
        for (var c = i; c >= f; c -= p){
            res.innerHTML += `${c} \u{1F449}`
        }

    } res.innerHTML += `\u{1F3C1}`
        }
    }
