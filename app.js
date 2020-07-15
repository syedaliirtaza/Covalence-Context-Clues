// page first loads, insert 100 h3 elements onto the page

$(document).ready(function(){

    // Clicking on an h3 element should display an alert that says a statement
    var friends = ['will','matt','irtaza','charlie','alpha'];
    var loc = ['Pak','Iran','Usa','Uk','Paris','Spain','itlay','germany','Iceland','Barmuda'];
    var weapons = ['knife','Gun','Pestol','Drone','Shotgun','Assault','Rifle','kar98','Groza','m4','m249','m41A6','tank','Laser','Robot','sniper','Airburst','starship','blade','f16'];
    
    for(var i=0;i<=100;i++){
        // $('<h3>accusation ' + i + ':</h3>').appendTo('body');
        var $h3 = $('<h3>accusation ' + i + ':</h3>');
        $($h3).appendTo('body');
        $($h3).click(getStatment(i));
    }
    function getStatment(i) {
        var friend = friends[i % 5];
        var location = loc[i % 10];
        var weapon = weapons[i % 20];
        function statmentAlert(){
            alert('Accusation ' + i + ': I Accuse ' + friend + ' with the ' + weapon + ' in ' + location + ' !');
        }
        return statmentAlert; 
    }




});