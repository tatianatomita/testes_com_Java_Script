function verificar (){
    //window.alert("funcionou!")
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        //window.alert('tudo ok')
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade>=0 && idade<10){
                //criança
                img.setAttribute('src', 'meninocrianca.jpg')    
            }else if(idade<21){
                //adolescente
                img.setAttribute('src', 'adolescentemenino.jpg')
            }else if(idade<50){
                //adulto
                img.setAttribute('src','homemjoven.jpg')
            }else{
                //idoso
                img.setAttribute('src','homemsenhor.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade>=0 && idade<10){
                //criança
                img.setAttribute('src','meninacrianca.jpg')
            }else if(idade<21){
                //adolescente
                img.setAttribute('src','adolescentemenina.jpg')
            }else if(idade<50){
                //adulto
                img.setAttribute('src', 'mulherjovem.jpg')
            }else{
                //idoso
                img.setAttribute('src','mulhersenhora.jpg')
            }

        }
        res.style.textAlign ='center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}