function oscarTheLifetimeSupplier(){
  var age = prompt('How old are you?');
  var long = prompt('How do you think, how long will you live?');
  var snack = prompt('What\'s your favourite snack?');
  var perWeek = prompt('How much do you eat this in a week?');
  
  var years = long-age;
  var quantity = years*52*perWeek;
  
  alert('Your favourite snack is '+snack+', and you need '+quantity+' from this until you\'re '+long);
  
  return;
}

oscarTheLifetimeSupplier();