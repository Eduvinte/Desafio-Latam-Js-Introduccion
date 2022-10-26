

function calcular() {
    var cantidad = document.getElementById("cantidad").value
    var color = document.getElementById("color").value
    var precio = 40000
    var total = cantidad * precio

    document.getElementById("total2").innerHTML = total
    document.getElementById("cantidad2").innerHTML = cantidad
    document.getElementById("color2").style.backgroundColor = color

    
    
   
    
}