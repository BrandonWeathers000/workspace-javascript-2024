// Test object
var test = {
    fname: "Brandon",
    lname: "Weathers",
    age: 19,
    display: function(){
        console.log("in function");
        return this.fname + " " + this.lname;
    } 
};
// console.log(test.display());

// Hotel reservation
var guestgroup = new Array();
$('#hotelSubmit').click(reservation);
function reservation(){
    var guest = {
        name: $('#hotelName').val(),
        checkIn: $('#checkin').val(),
        checkOut: $('#checkout').val(),
        numGuests: $('#num').val(),
        roomType: $('#room').val()
    };

    console.log(guest.name + " reserve a room.");
    guestgroup.push(guest);
    console.log(guestgroup);
}