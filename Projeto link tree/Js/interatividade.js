$(function(){
//ENTRADA

var botoes =$(".botao");
var titulo =$("h1");
var subtitulo =$("h2");
var icones =$(".eita");
var fundo =$("body");
var botao_modoescuro =$("#modoescuro");
var perfil =$

var modoEscuro = false

//PROCESSAMENTO

botao_modoescuro.click(()=>{
    if(modoEscuro==false){
    botoes.css("background-color",'rgb(88, 21, 19)');
    botoes.addClass('.modoescuro');
    botoes.css('color',"rgb(254, 176, 49)");
    botoes.css("border-color","rgb(254, 176, 49)")
    fundo.css("background-color",'rgb(88, 21, 19)')
    titulo.css("color","rgb(254, 176, 49)")
    subtitulo.css("color","rgb(254, 176, 49)")
    icones.css("fill","rgb(254, 176, 49)")
    modoEscuro= true;

    }else{
    botoes.css("background-color","rgb(254, 176, 49)");
    botoes.css('color','rgb(88, 21, 19)');
    botoes.css("border-color","rgb(88, 21, 19)")
    fundo.css("background-color","rgb(254, 176, 49)")
    titulo.css("color",'rgb(88, 21, 19)')
    subtitulo.css("color",'rgb(88, 21, 19)')
    icones.css("fill",'rgb(88, 21, 19)')
   

    modoEscuro=false;    

    }


}

)

})
