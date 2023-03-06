
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var dino = {
    x: 10,
    y: 200,
    width: 50,
    height: 50,
    draw() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}


class Cactus {
    constructor() {
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}


var cactus = new Cactus();
cactus.draw();


var timer = 0;
var cactus여러개 = [];
var 점프timer = 0;
var request;

function 프레임마다실행() {
    request = requestAnimationFrame(프레임마다실행)
    timer++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (timer % 120 === 0) {
        var cactus = new Cactus();
        cactus여러개.push(cactus);

    }
    // dino.x++;
    // cactus.x++;

    cactus여러개.forEach((a, i, o) => {
        if (a.x < 0) {
            o.splice(i, 1)
        }
        a.x -= 4;
        충돌하나(dino, a);
        a.draw();
    })

    if (점프중 == true) {
        dino.y -= 6;
        점프timer++;
    }

    if (점프중 == false) {
        if (dino.y < 200) {
            dino.y += 4;
        }
    }

    if (점프timer > 20) {
        점프중 = false;
        점프timer = 0;
    }
    dino.draw();

}

프레임마다실행()

function 충돌하나(dino, cactus) {
    var x축차이 = cactus.x - (dino.x + dino.width);
    var y축차이 = cactus.y - (dino.y + dino.height);
    if (x축차이 < 0 && y축차이 < 0) {
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(request)
    }
}


var 점프중 = false;
document.addEventListener('keydown', function (e) {
    if (e.code === 'Space') {
        점프중 = true;
    }
})