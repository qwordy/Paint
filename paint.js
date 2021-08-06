function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function getRandomInt(min, max) {
    var len = max - min;
    min += len * 0.3;
    max -= len * 0.3;
    return Math.random() * (max - min) + min;
}

function main() {
    console.log("Hello!")

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext('2d');
    
    var x0 = 0, x1 = 1500, y0 = 0, y1 = 1000;
    
    for (i = 0; i <= 200; i++) {
        ctx.fillStyle = getRandomColor();
        ctx.fillRect(x0, y0, x1, y1);
        console.log(x0, x1, y0, y1);
        console.log(ctx.fillStyle);
        if (i % 2 == 0) {
            var xMid = getRandomInt(x0, x1);
            if (xMid - x0 > x1 - xMid) {
                x1 = xMid;
            } else {
                x0 = xMid;
            }
        } else {
            var yMid = getRandomInt(y0, y1);
            if (yMid - y0 > y1 - yMid) {
                y1 = yMid;
            } else {
                y0 = yMid;
            }
        }
    }
}

main();
