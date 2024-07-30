// function func1(params) {
//     document.getElementById('img1').style.width="500px";
// }

$('document').ready(function (params) {
    $('button').click(func1)
    function func1(params) {
        $('#img1').css('width','500px');
       
    } ;
    $('#img1').mouseenter(function (params) {
        $('#img1,').css('width','500px');
    });
    $('#img1').mouseleave(function (params) {
        $('#img1').css('width','250px');
    });
     $('#img2').mouseenter(function (params) {
        $('#img2').css('width','500px');
    });
    $('#img2').mouseleave(function (params) {
        $('#img2').css('width','250px');
    });
    $('#img3').mouseenter(function (params) {
        $('#img3').css('width','500px');
    });
    $('#img3').mouseleave(function (params) {
        $('#img3').css('width','250px');
    });
});
