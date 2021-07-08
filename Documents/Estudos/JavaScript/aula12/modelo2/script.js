function verificar (){
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.querySelector ('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert ('[ERRO] Verifique seus dados')
    } else {
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement ('img')

        img.setAttribute ('id', 'foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // criança
                img.setAttribute ('src', 'mcrianca.png')

            } else if (idade < 21) {
                //jovem
                img.setAttribute ('src', 'mjovem.png')

            } else if (idade < 60) {
                //adulto
                img. setAttribute ('src', 'madulto.png')

            } else {
                //idoso
                img.setAttribute ('src', 'midoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // criança
                img.setAttribute ('src', 'fcrianca.png')

            } else if (idade < 21) {
                //jovem
                img.setAttribute ('src', 'fjovem.png')

            } else if (idade < 60) {
                //adulto
                img.setAttribute ('src', 'fadulto.png')

            } else {
                //idoso
                img.setAttribute ('src', 'fidoso.png')

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos. <br><br>`
        res.appendChild(img)

    }

}