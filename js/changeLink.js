// Hide all the body.
$('body').hide().fadeIn(3000);

// Hide all images.
$('img').hide();

// Hide all links.
// $('a').hide();

// Event testing for h1
$('h1').click(hidesection);
function hidesection(){
    $(this).text("Hiding...");
    $('body').children('p').slideToggle();
}

// Testing the for each method
$('a').each(change);
function change(){
    console.log($(this).attr('href'));
    $(this).attr('href', "https://www.google.com");
}

