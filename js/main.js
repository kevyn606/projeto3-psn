
$(document).ready(function() {
    $("#ps-preto").hide();

    $("#dark").click(function() {
      $("#ps-branco").hide();
      $("#ps-preto").show();
      $("body").addClass("dark-mode");
    });

    $("#Day").click(function() {
      $("#ps-preto").hide();
      $("#ps-branco").show();
      $("body").removeClass("dark-mode");
    });
  });



  $(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000'),
    
    $('form').validate({
        rules:{
            nome: {
                minlength: 10,
                minWords: 2
            },
            telefone:{
                minlength: 14,
            }
            

        },

         messages:{
            nome:'<span class="error-message">Por favor, insira o seu nome completo</span>',
            email:'<span class="error-message">Por favor, insira o seu email compeleto</span>',
            telefone:'<span class="error-message">Por favor, insira o seu telefone</span>',
        },submitHandler: function(form) {
            alert("Enviado!!!")
            form('')
        },
        invalidHandler: function(evento,validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                
                alert(`Existem ${camposIncorretos} campos incorretos`) 
            }
        }
        
       
    })})