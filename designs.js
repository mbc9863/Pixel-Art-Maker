const $tableElement = $('#pixelCanvas');
const $inputHeight = $('#inputHeight');
const $inputWidth = $('#inputWidth');
const $colorPicker = $('#colorPicker');

// Select size input
$('#sizePicker').submit(event => {
    event.preventDefault();
    let width = $inputWidth.val();
    let height = $inputHeight.val();

// Clear Grid
// When size is submitted by the user, call makeGrid()
    $tableElement.html('');
    makeGrid(height, width);
    addCellClickListener();
});

// Grid mount function and for loop to add columns and rows
function makeGrid(height, width) {
    for (let i = 0; i < height; i++) {
        $tableElement.append('<tr></tr>');
    };
    for (let i = 0; i < width; i++) {
        $('tr').append('<td></td>');
    };
};

// Select color input and click event to insert color
function addCellClickListener() {
    $('td').click(event => {
        let color = $colorPicker.val();
        $(event.currentTarget).css("background-color", color)
    });
};
