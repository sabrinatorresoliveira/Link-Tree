$(function(){
//ENTRADA

var botoes =$(".botao");
var titulo =$("h1");
var subtitulo =$("h2");
var icones =$(".eita");
var fundo =$("body");

//PROCESSAMENTO

titulo.click(()=>{
    botoes.css("background-color","black");
    botoes.css("color" , "white");
});


titulo.dblclick(()=>{
fundo.html("<h1> Alterado pelo js</h1>");

})

subtitulo.click(()=>{

    icones.css("fill","black");


})



})

