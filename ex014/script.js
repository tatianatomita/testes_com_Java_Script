
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 12
    msg.innerHTML = `Agora são ${hora} horas.`


    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src='fotomanha.png'
        document.body.style.background ='#dba9ac'
         
    } else if(hora <18){
        //Boa tarde
        img.src='fototarde.png'
        document.body.style.background = '#b86936'

    }else{
        //boa noite
        img.src='fotonoite.png'
        document.body.style.background = '#40314e'
    }
}