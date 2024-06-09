function calcularSuma(){
    var valor1= parseFloat(document.getElementById("v1").value)
    var valor2= parseFloat(document.getElementById("v2").value)
    var h3=document.getElementById("res")
    
    if(isNaN(valor1) || isNaN(valor2)){
        if(isNaN(valor1)){
            h3.innerHTML="El valor 1 no es valido"
            document.getElementById("v1").focus()
        }else{
            h3.innerHTML="El valor 2 no es valido"
            document.getElementById("v2").focus()
        }
        return
    }

    var resultado=valor1+valor2
    
    h3.innerHTML=resultado
}

function calcularResta(){
    var valor1= parseFloat(document.getElementById("v1").value)
    var valor2= parseFloat(document.getElementById("v2").value)
    var h3=document.getElementById("res")
    
    if(isNaN(valor1) || isNaN(valor2)){
        if(isNaN(valor1)){
            h3.innerHTML="El valor 1 no es valido"
            document.getElementById("v1").focus()
        }else{
            h3.innerHTML="El valor 2 no es valido"
            document.getElementById("v2").focus()
        }
        return
    }

    var resultado=valor1-valor2
    
    h3.innerHTML=resultado
}

function calcularMulti(){
    var valor1= parseFloat(document.getElementById("v1").value)
    var valor2= parseFloat(document.getElementById("v2").value)
    var h3=document.getElementById("res")
    
    if(isNaN(valor1) || isNaN(valor2)){
        if(isNaN(valor1)){
            h3.innerHTML="El valor 1 no es valido"
            document.getElementById("v1").focus()
        }else{
            h3.innerHTML="El valor 2 no es valido"
            document.getElementById("v2").focus()
        }
        return
    }

    var resultado=valor1 * valor2
    
    h3.innerHTML=resultado
}

function calcularDivi(){
    var valor1= parseFloat(document.getElementById("v1").value)
    var valor2= parseFloat(document.getElementById("v2").value)
    var h3=document.getElementById("res")
    
    if(isNaN(valor1) || isNaN(valor2)){
        if(isNaN(valor1)){
            h3.innerHTML="El valor 1 no es valido"
            document.getElementById("v1").focus()
        }else{
            h3.innerHTML="El valor 2 no es valido"
            document.getElementById("v2").focus()
        }
        return
    }

    var resultado=valor1 / valor2
    
    h3.innerHTML=resultado
}