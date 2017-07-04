function Ticket(movie, time, age) {
  var basePrice = 16;
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Ticket.prototype.isMatinee {
  if (time <= 4) {
    return true;
  } else {
    return false;
  }
}

Ticket.prototype.isSenior {
  if (age >= 65) {
    return true;
  } else {
    return false;
  }
}

Ticket.prototype.notNewRelease {
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


  });
});
