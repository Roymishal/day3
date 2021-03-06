(function () {

    var rows = 10;
    var cols = 10;
    var posX = 0;
    var posY = 0;
    
    var matrix = initMatrix(rows, cols, posX, posY);

    function drawMatrix(rows, cols, matrix) {
        var stage = $('#stage').html('');
        for (var r = 0; r < rows; r += 1) {
            var row = $('<div class="row"></div>').appendTo(stage);
            for (var c = 0; c < cols; c += 1) {
                var col = $('<div class="col"></div>').appendTo(row);
                if (matrix[r][c] == true) {
                    col.addClass('black');
                }
            }
        }
    }

    function initMatrix(rows, cols, posX, posY) {
        var matrix = [];
        for (var r = 0; r < rows; r++) {
            var row = [];
            for (var c = 0; c < cols; c++) {
                if (r == posY && c == posX) {
                    row.push(true);
                }
                else {
                    row.push(false);
                }
            }
            matrix.push(row);
        }
        return matrix;
    }

    function movePixel(posX, posY) {

        matrix = initMatrix(rows, cols, posX, posY);
        drawMatrix(rows, cols, matrix);
        
    }

    $(document).ready(function () {
        drawMatrix(rows, cols, matrix);
    });

    $(window).on('keydown', function (e) {
        if (e.keyCode == 37) {
            posX -= 1;
        }
        if (e.keyCode == 38) {
            posY -= 1;
        }
        if (e.keyCode == 39) {
            posX += 1;
        }
        if (e.keyCode == 40) {
            posY += 1;
        }
        movePixel(posX, posY);
    });
})()