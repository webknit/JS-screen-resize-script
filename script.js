// Variables
var $window = $(window);
var box = $('#box');
var screenSize = $('#screensize');
var id;

// Each time the user resized the window call this
$window.resize(function () {

	// Reset the timeout
    clearTimeout(id);
    
    // Call the function after it has stopped being resized
    id = setTimeout(screenResize, 500);
    
});


// Call the function
function screenResize() {

	var boxSize = box.outerWidth(true);
	screenSize.empty().append(boxSize);
	
}