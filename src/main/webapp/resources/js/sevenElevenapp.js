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
            console.log(response.errorFields);
            console.log(response.errors);
            console.log(response+" - "+ a);

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

                $(".errmsg").hide();

                $.each(response.errorFields,function (a,b) {
                    $("#"+b).css({"border":"1px solid red"}).hide().fadeIn().addClass("has-error");
                    //$("#"+b).hide().fadeIn().addClass(".has-error");
                    //console.log(b);

                    if ( b === "fullname"){
                        $(".err_message_"+ b).show();
                        $(".err_message_"+ b).text("Name fields should not be empty!");
                    }else if( b === "email"){
                        $(".err_message_"+ b).show();
                        $(".err_message_"+ b).text("Email fields should not be empty!");
                    }else if( b ==="mobile"){
                        $(".err_message_"+ b).show();
                        $(".err_message_"+ b).text("Mobile fields should not be empty!");
                    }
                });

            }
        }

    });
});