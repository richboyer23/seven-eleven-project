/*
var i = 0;

function timedCount() {

    i = i + 1;
    postMessage(i);
    self.postMessage('<div id="conversation"> User conversations says: ' + i + '</div>');

    setTimeout("timedCount()",500);
}

timedCount();
*/

var i = 0;
function appendDiv() {


    self.postMessage('<div class="conversation"> User conversations says: ' + ++i + '</div>');


    setTimeout("appendDiv()",500);

}

appendDiv();


