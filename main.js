document.addEventListener("click",showcolor);

document.getElementById("botao").addEventListener("click",showname);

function showcolor()
{
    document.body.style.backgroundColor = "red";
}
function showname()
{
    let usuario = document.getElementById("nome").value;
    document.getElementById("mensagem").innerText = "Meu nome é:" + usuario;
    document.getElementById("nome").value = "";
}

document.getElementById("somar").addEventListener("click",shownumber);

function shownumber()
{
    let num1 = document.getElementById("num-1")
    let num2= document.getElementById("num-2")
    document.getElementById("resultado-1").value = "num-1" + "num-2";
    

}