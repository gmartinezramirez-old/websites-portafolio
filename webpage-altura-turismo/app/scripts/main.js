var idsLangEs = "#lang-espanol, #lang-espanol-nl";
var idsLangGb = "#lang-ingles, #lang-ingles-nl";
var idsLangPt = "#lang-portugues, #lang-portugues-nl";


$( document ).ready(function() {

    if($(document).width() <= 915){
        $('.nav a.click').on('click', function(){
            $('.navbar-toggle').click() //bootstrap 3.x by Richard
        });
    }

    if(!esMovil()){
        $("#header-tours .dropdown-toggle").attr("href", "#tours");
        $("#header-tours .dropdown-toggle").addClass("disabled");
    }

    if($.localScroll)
        $('#body').localScroll({duration:800});

    openDropdownOnHover("#idiomas-dropdown");
    openDropdownOnHover("#header-tours");

    var lang = new Lang();

    lang.dynamic('en', 'langs/en.json');
    lang.dynamic('pt', 'langs/pt.json');

    var lenguaje = obtenerLenguajeBrowser();

    lang.init({
        defaultLang: 'es',
    });

    window.lang = lang;
    cambiarBandera();

    //carrusel atractivos
    $('.pgwSlideshow').pgwSlideshow({
    	transitionEffect : 'fading',
    	});
});

function openDropdownOnHover(idDropdown){
    if(!esMovil()){
        $(idDropdown).hover(
            function() {
                $(idDropdown).addClass("open");
            }, function(){
                $(idDropdown).removeClass("open");
            }
        );
    }
}

function obtenerLenguajeBrowser(){
    var userLang = navigator.language || navigator.userLanguage;
    if(userLang.toLowerCase().indexOf('es') >= 0){
        return "es";
    }
    else if(userLang.toLowerCase().indexOf('en') >= 0){
        return "en";
    }
    else if(userLang.toLowerCase().indexOf('pt') >= 0){
        return "pt";
    }
    else{
        return "en";
    }

}

function cambiarBandera(){
    var idioma = Cookies.get("langCookie");
    if(idioma == undefined){
        agregarBandera(window.lang.currentLang);
        activarDropdown(obtenerLangActivo(window.lang.currentLang));
    }else{
        agregarBandera(idioma);
        activarDropdown(obtenerLangActivo(idioma));
    }
}

function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            header = document.querySelector("header");
        if (distanceY > shrinkOn) {
            $("header").addClass("smaller");

            $("#navbar-logo").addClass("esconder-fondo-logo");
        } else {
            if ($("header").hasClass("smaller")) {
                $("header").removeClass("smaller");

                setTimeout(
                        function()
                        {
                            $("#navbar-logo").removeClass("esconder-fondo-logo");
                        }, 200);

            }
        }
    });
}

window.onload = init();

function activarDropdown(id){
    $(id).addClass( "active" );
}
function desactivarDrondown(id){
  $(id).removeClass( "active" );
}

function obtenerLangActivo(idioma){
  var lang = window.lang.currentLang;
  if(idioma){
      lang = idioma;
  }else{
      lang = window.lang.currentLang;
  }
  if(lang == 'es'){
    return idsLangEs;
  }
  else if(lang == 'en'){
    return idsLangGb;
  }
  else if(lang == 'pt'){
    return idsLangPt;
  }
}

function quitarBandera(idioma){
  if(idioma == 'es'){
    $("#idioma").removeClass("flag-icon-es");
  }
  else if(idioma == 'en'){
    $("#idioma").removeClass("flag-icon-gb");
  }
  else if(idioma == 'pt'){
    $("#idioma").removeClass("flag-icon-br");
  }
}

function agregarBandera(idioma) {
  if(idioma == 'es'){
    $("#idioma").addClass("flag-icon-es");
  }
  else if(idioma == 'en'){
    $("#idioma").addClass("flag-icon-gb");
  }
  else if(idioma == 'pt'){
    $("#idioma").addClass("flag-icon-br");
  }
}

function cambiarIdioma(idioma){
  if(window.lang.currentLang == idioma){
    return;
  }
  quitarBandera(window.lang.currentLang);
  if(idioma == 'es'){
    activarDropdown(idsLangEs);
    desactivarDrondown(obtenerLangActivo());
    agregarBandera('es');
  }
  else if(idioma == 'en'){
    activarDropdown(idsLangGb);
    agregarBandera('en');
    desactivarDrondown(obtenerLangActivo());
  }
  else if(idioma == 'pt'){
    activarDropdown(idsLangPt);
    agregarBandera('pt');
    desactivarDrondown(obtenerLangActivo());
  }
  window.lang.change(idioma);
}


//obtenido de:
//http://stackoverflow.com/questions/3514784/what-is-the-best-way-to-detect-a-mobile-device-in-jquery
function esMovil(){
    var isMobile = false; //initiate as false
    // device detection
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
    return isMobile;
}


