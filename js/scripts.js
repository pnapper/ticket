function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.basePrice = 16;
}

Ticket.prototype.isMatinee = function() {
  if (time <= 4) {
    return true;
  } else {
    return false;
  }
}

Ticket.prototype.isSenior = function() {
  if (age >= 65) {
    return true;
  } else {
    return false;
  }
}

Ticket.prototype.notNewRelease = function() {
  if (movie > 2) {
    return true;
  } else {
    return false;
  }
}

$(document).ready(function() {
  // anyone 65 and over is a senior discounted prices

  // tickets 4 and before are matinee

  // base ticket = $16
  // matinee = senior discount - 4 dollars

  // non-new-release - 2 dollars



  $("form").submit(function(event) {
    event.preventDefault();

    var movie = parseInt($(".movie").val());
    var time = parseInt($(".time").val());
    var age = parseInt($("#age").val());

    var movieTicket = new Ticket(movie, time, age);
    alert(movieTicket.basePrice);
    if (movieTicket.isMatinee || movieTicket.isSenior) {
      movieTicket.basePrice -= 4;
    }
    if (movieTicket.notNewRelease) {
      movieTicket.basePrice -= 2;
    }

    $("#ticketInfo").text("Your ticket price is: " + movieTicket.basePrice);

  });

});
