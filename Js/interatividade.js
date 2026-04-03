$(function(){
//ENTRADA

var botoes =$(".botao");
var titulo =$("h1");
var subtitulo =$("h2");
var icones =$(".eita");
var fundo =$("body");
var botao_modoescuro =$("#modoescuro")

var modoEscuro = false

//PROCESSAMENTO

botao_modoescuro.click(()=>{
    if(modoEscuro==false){
    botoes.css("background-color","black");
    botoes.addClass('.modoescuro');
    botoes.css('color','white');

    modoEscuro= true;

    }else{
    botoes.css("background-color","rgb(254, 176, 49)");
    botoes.css('color','rgb(88, 21, 19)');

    modoEscuro=false;    

    }


}

)

})
