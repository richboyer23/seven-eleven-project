$('#submitBtn').click(function (e) {
    e.preventDefault();
    //console.log($('#regForm').serialize());
    $.ajax({
        method:'post',
        url:'/thankyou',
        data:$('#section_form').serialize(),
        dataType:'json',
        error:function (a) {
            console.log(a);
        },
        success:function (response,a) {
            //console.log(response.errorFields);
            //console.log(response.errors);
            //console.log(response+" - "+ a);

            /* $('#form-style-2').slideUp();
             $('#message').html("<h1>Successfully registered!</h1><p>We will inform you to access <b>"+response.name+"</b>.</p>");*/
            if(response.message){
                $("#section_form").slideUp('slow');
                $("#sec1").hide().fadeIn().html("<p class='text-center alert alert-success'><h1>Successfully submitted!</h1></p>"+response.fullname+"")
            }else {

                /*$(".has-error").removeClass("has-error");
                  $.each(response.errors,function (a,b) {
                    $("#"+b).hide().fadeIn().addClass("has-error");

                });*/
                /*$("#err_message").empty();
                $.each(response.errors,function (a,b) {
                    $("#err_message").append(b + "<br>");
                });*/

                $(".has-error").removeClass("has-error");
                $(".error").remove();
                $(".input-field input").css({
                    "border":"1px solid green",
                    "transition":"border-color 500ms ease-out"
                });
                $(".errmsg").fadeOut();
                $.each(response,function (a,b) {
                    console.log("Field: "+a+"- Message: "+b);
                    $(".err_message_"+a).remove();
                    $("#err_message_"+a).hide().fadeIn().addClass(".has-error");
                    $("#"+a).css({
                        "border":"1px solid red",
                        "transition":"border-color 500ms ease-out"
                    })
                    $("#"+a).after('<div style="font-size:12px; color:red;" class="err_message_'+a+' errmsg">'+b+'</div>');
                });

                //$(".error-field:first").focus();

                // for test code
                /*$(".errmsg").hide();



                $.each(response.errorFields,function (a,b) {
                    //$("#"+b).hide().fadeIn().addClass(".has-error");
                    $("#"+b).css({
                        "border":"1px solid red",
                        "transition":"border-color 500ms ease-out"
                    });

                    if ( b == "fullname"){
                        $(".err_message_"+ b).show();
                        $(".err_message_"+ b).text("Name fields should not be empty!")
                                             .css({"font-size":"12px","color":"red"});

                    }else if( b == "email"){
                        $(".err_message_"+ b).show();
                        $(".err_message_"+ b).text("Email fields should not be empty!")
                                             .css({"font-size":"12px","color":"red"});
                    }else if( b =="mobile"){
                        $(".err_message_"+ b).show();
                        $(".err_message_"+ b).text("Mobile fields should not be empty!").css({"font-size":"12px","color":"red"});
                    }

                    //console.log("Errors: "+b);
                });*/


            }
        }

    });
});