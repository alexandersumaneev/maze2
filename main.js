var maze = [], n = 100, cellSize = 16, drawType = 0, canvas, ctx;
var shipX=0,shipY=0,exitX=10,exitY=10;

function showCanvas() {
    document.getElementById('open').style.display = 'none';
    document.getElementById('save').style.display = 'none';
    document.getElementById('preference').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('author').style.display = 'none';
    document.getElementById('canvas').style.display = 'inherit';
}

function openOpen() {
    document.getElementById('open').style.display = 'inherit';
    document.getElementById('save').style.display = 'none';
    document.getElementById('preference').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('author').style.display = 'none';
    document.getElementById('canvas').style.display = 'none';
}

function saveOpen() {
    document.getElementById('open').style.display = 'none';
    document.getElementById('save').style.display = 'inherit';
    document.getElementById('preference').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('author').style.display = 'none';
    document.getElementById('canvas').style.display = 'none';
}

function prefOpen() {
    document.getElementById('open').style.display = 'none';
    document.getElementById('save').style.display = 'none';
    document.getElementById('preference').style.display = 'inherit';
    document.getElementById('about').style.display = 'none';
    document.getElementById('author').style.display = 'none';
    document.getElementById('canvas').style.display = 'none';
}

function aboutOpen() {
    document.getElementById('open').style.display = 'none';
    document.getElementById('save').style.display = 'none';
    document.getElementById('preference').style.display = 'none';
    document.getElementById('about').style.display = 'inherit';
    document.getElementById('author').style.display = 'none';
    document.getElementById('canvas').style.display = 'none';
}

function authorOpen() {
    document.getElementById('open').style.display = 'none';
    document.getElementById('save').style.display = 'none';
    document.getElementById('preference').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('author').style.display = 'inherit';
    document.getElementById('canvas').style.display = 'none';
}

function onLoadPage() {
    showCanvas();
    initGrid();
    drawMaze();
    var mouse = {x: 0, y: 0};
    var draw = false;
    ctx.fillStyle = "rgba(0, 0, 100, 0.5)";
    canvas.addEventListener("mousedown", function (e) {

        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        draw = true;
        var x0 = Math.floor(mouse.x / cellSize);
        var y0 = Math.floor(mouse.y / cellSize);
        if (maze[x0][y0] == 1)
            drawType = 0;
        else
            drawType = 1;
    });
    canvas.addEventListener("mousemove", function (e) {

        if (draw == true) {

            mouse.x = e.pageX - this.offsetLeft;
            mouse.y = e.pageY - this.offsetTop;
            var x0 = Math.floor(mouse.x / cellSize);
            var y0 = Math.floor(mouse.y / cellSize);
            if (drawType == 0) {
                maze[x0][y0] = 0;
                ctx.clearRect(cellSize * x0 + 1, cellSize * y0 + 1, cellSize - 1, cellSize - 1);

            }
            else {
                if (maze[x0][y0] != 1)
                    ctx.fillRect(cellSize * x0 + 1, cellSize * y0 + 1, cellSize - 1, cellSize - 1);
                maze[x0][y0] = 1;
            }

        }
    });
    canvas.addEventListener("mouseup", function (e) {

        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        draw = false;
    });
}

function initGrid() {
    for (var i = 0; i < n; i++) {
        maze[i] = [];
        for (var j = 0; j < 100; j++) {
            maze[i][j] = 1;
        }
    }
}


function createMaze() {

}

function drawMaze() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgba(0, 0, 100, 0.5)";
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (maze[i][j] == 1)
                ctx.fillRect(cellSize * i + 1, cellSize * j + 1, cellSize - 1, cellSize - 1);
        }
    }
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}