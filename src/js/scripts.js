var socket = io('http://localhost');

$(document).keydown(function(event) {
	var direction;
        switch (event.keyCode) {
            case 37:
                    var image = document.getElementById('arrow_left');
                        image.src = "images/arrow_left_press.png";
                        direction = 2;
                        break;
            case 38:
                    var image = document.getElementById('arrow_up');
                        image.src = "images/arrow_up_press.png";
                        direction = 1;
                 break;
            case 39:
                    var image = document.getElementById('arrow_right');
                        image.src = "images/arrow_right_press.png";
                        direction = 3;
                 break;
            case 40:
                    var image = document.getElementById('arrow_down');
                        image.src = "images/arrow_down_press.png";
                        direction = 4;
                 break;
        }
        socket.emit('direction', direction);
        console.log(direction);
});
$(document).keyup(function(event) {
        switch (event.keyCode) {
            case 37:
                    var image = document.getElementById('arrow_left');
                        image.src = "images/arrow_left.png";
                break;
            case 38:
                    var image = document.getElementById('arrow_up');
                        image.src = "images/arrow_up.png";
                 break;
            case 39:
                    var image = document.getElementById('arrow_right');
                        image.src = "images/arrow_right.png";
                 break;
            case 40:
                    var image = document.getElementById('arrow_down');
                        image.src = "images/arrow_down.png";
                 break;
        }
    });
