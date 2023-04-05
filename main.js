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

function shownumber()
{
    let number= document.getElementById("num-1")+("num-2")= getElementById("resultado-1");
}