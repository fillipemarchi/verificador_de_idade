function verificar(){
    let data = new Date
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    let resfoto = document.getElementById('resfoto')

    if (fano.value.lenght == 0 || Number(fano.value) > ano){
        window.alert('[Erro] Verifique seus dados e tente novamente.')
    } else{
        let fsex=document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''

        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero= 'Homem'

                if (idade >=0 && idade < 11){
                    //criança
                    img.setAttribute('src','homemcrianca.png')
                } else if (idade<21){
                    //Jovem
                    img.setAttribute('src','homemjovem.png')
                } else if (idade <60){
                    //Adulto
                    img.setAttribute('src','homemadulto.png')
                } else {
                    //idoso
                    img.setAttribute('src','homemvelho.png')
                }
        } else if (fsex[1].checked){
            genero = 'Mulher'

            if (idade >=0 && idade < 11){
                //criança
                img.setAttribute('src','mulhercrianca.png')
            } else if (idade<21){
                //Jovem
                img.setAttribute('src','mulherjovem.png')
            } else if (idade <60){
                //Adulto
                img.setAttribute('src','mulheradulta.png')
            } else {
                //idoso
                img.setAttribute('src','mulhervelha.png')
            }
        }
        res.innerHTML=`Detectamos <b>${genero}</b> com <b>${idade}</b> anos.</br>`
        resfoto.innerHTML=``
        resfoto.appendChild(img)
    }

}