function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('ano_nasc').value
    var idade = ano - nasc
    var res = document.getElementById('res')
    var img =  document.getElementById('img')
    var sexo = document.getElementsByName('radsex')

    if (nasc == ''){
        window.alert('Voce precisa informar sua data de nascimento')
    
    }else if (idade >= 0 && idade <=5){
        if (sexo[0].checked){
            img.src = './source/img/bebe_menino.jpg'
            res.innerText = 'Acho que voce esta mentindo!! Você é um bebe ainda, como esta conseguindo digitar???'
        }else{
            img.src = './source/img/bebe_menina.jpg'
            res.innerText = 'Acho que voce esta mentindo!! Você é um bebe ainda, como esta conseguindo digitar???'
        }
    
    }else if (idade > 5 && idade <=13){
        if (sexo[0].checked){
        img.src = './source/img/criança_menino.jpg'
        res.innerText = `Voce tem ${idade} anos`
        }else{
            img.src = './source/img/criança_menina.jpg'
            res.innerText = `Voce tem ${idade} anos`
        }

    }else if (idade > 13 && idade <=17){
        if (sexo[0].checked){
            img.src = './source/img/adolescente_menino.png'
            res.innerText = `voce tem ${idade} anos`
        }else {
            img.src = './source/img/adolescente_menina.jpg'
            res.innerText = `voce tem ${idade} anos`
        }

    }else if (idade > 17 && idade <=27){
        if (sexo[0].checked){
            img.src = './source/img/homem.png'
            res.innerText = `voce tem ${idade} anos`
        }else{
            img.src = './source/img/mulher.jpg'
            res.innerText = `voce tem ${idade} anos`
        }
    }else if (idade > 27){
        if (sexo[0].checked){
            img.src = './source/img/idoso.png'
            res.innerText = `Nossa, voce ja tem ${idade} anos... Ta velho hein, deveria estar no asilo`
        }else{
            img.src = './source/img/idosa.png'
            res.innerText = `Nossa, voce ja tem ${idade} anos... Ta velha hein, deveria estar no asilo`
        }
    }
}