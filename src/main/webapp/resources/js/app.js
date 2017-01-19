/**
 * Created by JPMPC-B214 on 11/24/2016.
 */
/*

var n = 23;
var y = 3;
var sum = n+y;
//alert("The sum is: " + sum);
document.getElementById("result").innerHTML = 'The sum is: ' + sum;

*/
/*
var mySubmitBtn = document.getElementById("submitBtn");

mySubmitBtn.onclick = function (event) {
    event.preventDefault();
    mySubmitBtn.style.display = "none";

}
*/

//Jquery

//$("section").fadeOut();

//endJQuery



var myAud = document.getElementById("myAudio");
var myVid = document.getElementById("myVideo");
var clickVideoStop = document.getElementById("playPauseVid");
var clickAudioStop = document.getElementById("playPauseAud");

/*var $myAud = $("#myAudio");
var $myVid = $("#myVideo");
var $clickVideoStop = $("#playPauseAud");
var $clickAudioStop = $("#playPauseVid");*/

function changeText() {
    if (clickAudioStop.innerText=="Play")
    {
        clickAudioStop.innerText = "Pause";
        myAud.play();
    }
    else
    {
        clickAudioStop.innerText = "Play";
        myAud.pause();
    }
}
function stopAud() {
    myAud.currentTime = 0;
    myAud.pause();
    clickAudioStop.innerText = "Play";
}

function changeName() {

    if (clickVideoStop.innerText=="Play")
    {
        clickVideoStop.innerText = "Pause";
        myVid.play();
    }
    else
    {
        clickVideoStop.innerText = "Play";
        myVid.pause();
    }

}
function stopVid() {
    myVid.currentTime = 0;
    myVid.pause();
    clickVideoStop.innerText = "Play";
}
function fullVid() {
    myVid.webkitRequestFullscreen();
}



$("#click").click(function () {
    findDivs();

    setInterval(function(){
        findDivs();

    },1000);

});


    function findDivs(){

        var $colorList= Array("yellow","red","blue","green")

        var $divClick =$("div");

        for(var i = 0; i <= $divClick.length; i++){
            var $shuffle = Math.floor(Math.random()*4);
            var $divRun = Math.floor(Math.random()*$divClick.length);

             $divClick[$divRun].style.backgroundColor=$colorList[$shuffle];

            //$divClick.item(this).css({background:colors[$shuffle]});

        }
    }




    //JQUERY

$(document).on("click",".actions a", function (e) {
    e.preventDefault();
});

/*$("#demo-btn").click (function () {*/
    

$.ajax({
    method:"GET",
    url: "js/facebook.json",
    dataType:'json',
    error:function(a,b,c){  //note: input parameters,  a -> 404 =status of file, b->display error, c-> display not-found
        console.log(a);
    },
    success:function (data){

       /* native javascript
            for(var x=0; x < data.employees.length; x++){

            $("#demo-div").append("<br>" + data.employees[x].firstName + " " + data.employees[x].lastName + "</br>");
        }*/

       //jquery code
       /*$.each(data.employees, function(index, field){
            $("#demo-div").append("<br>" + field.firstName + " " + field.lastName + "</br>");
           //alert(index);
        });*/


        $.each(data.data, function(index, field){

            $("#demo-div").append("<div id="+ field.id +" class='div-feeds'>" +

                                        /*"<div class='from'>" + field.from.name + "<span class='f-right'>"+
                                        "Posted on:" + field.created_time +" </span> "+"</div>"+*/
                                        "<div class='from'>" + field.from.name + "<span class='f-right'><a data-id ="+ field.id +" id ='remove-div'  href='#' title='remove'> X </a></span> "+"</div>"+
                                        "<div class='message'>" + field.message +"</div>"+
                                        "<div class='actions'>"+
                                                "<ul>"+
                                                    "<li><a href="+ field.actions[1].link +">" + field.actions[1].name + "</a></li>"+
                                                    "<li>|</li>"+
                                                    "<li><a href="+ field.actions[0].link +">" + field.actions[0].name + "</a></li>"+
                                                "</ul>"+
                                        "</div>"+

                                  "</div>");


            /*result += "<div class='boxResult'><div class=\"boxResIn\"><span class='label'>ID:</span>"
                +field.id+"<br/><span class='label'>FROM:</span> "+
                field.from.name+
                field.from.id+
                "<br/><span class='label'>MESSAGE</span>: "+field.message+
                "<br/><span class='label'>ACTIONS:</span> "+
                " "+ field.actions[0].name+
                " "+ field.actions[1].link+
                "<br/><span class='label'>TYPE:</span> "+field.type+
                "<br/><span class='label'>CREATED TIME:</span> "+ field.created_time+
                "<br/><span class='label'>UPDATED TIME:</span> "+field.updated_time


                +"</div></div><br/>";*/
        });
        //$('#demo-btn').html(result);


    }
});

$(document).on("click","#remove-div",function (event) {

    event.preventDefault();
    var unique_id = $(this).attr("data-id");

    $("#"+unique_id).fadeOut();
});

/* Hide button if the local storage has a value*/
if(typeof (localStorage.getItem("name"))){
    $("#submitBtn").show();

}else{
    $("#submitBtn").show();
}


/* put out side the onclick so that the button will hide*/


$(document).on("click","#submitBtn",function (e) {
    e.preventDefault();

        // Store
        localStorage.setItem("name", $("#name-field").val());
        localStorage.setItem("email", $("#email-field").val());
        localStorage.setItem("mobile", $("#mobile-field").val());
        // Retrieve
        document.getElementsByClassName("form-submit-button").innerHTML = localStorage.getItem("name" + "email" + "mobile");

        //$("#submitBtn").hide();



        /*if (typeof(Storage) !== "undefined") {
            // Store
            localStorage.setItem("name", $("#name-field").val());
            // Retrieve
            //document.getElementById("result").innerHTML = localStorage.getItem("name");
            $("#submitBtn").hide();
        } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
            $("#submitBtn").show();
        }*/



});
/*});*/

/*$(document).ready(function(){
    $("#demo").click(function(){
        $.getJSON("ajax_info.json", function(result){
            $.each(result, function(i, field){
                $("div").append(field + " ");
            });
        });
    });
});*/




