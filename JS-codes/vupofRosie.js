function rosieTheFortuneTeller(){
  var Q = prompt('Hi, dear! My name is Rosie and I am an expert fortune teller. What is your name?');
  var C = prompt('Yes, I have seen that you would come to me, '+Q+'. Now please, choose one from the following and type it in the box: turtle, rose, teacup, moon.');
  alert('Hmm... '+C+'. Excellent choice. Let us see what your future holds.');
  if(C=='turtle'){
    alert('Here is your fortune: Don\'t panic.');
  } else if(C=='rose'){
    alert('Here is your fortune: You will find a thing. It may be important.');
  } else if(C=='teacup'){
    alert('Here is your fortune: The end is near, might as well have dessert.');
  } else if(C=='moon'){
    alert('Here is your fortune: Look before you leap. Or wear a parachute.');
  } else {
    alert('I am sorry, '+Q+'. I do not think I understand you correctly. Are you sure you typed in one of the offered possibilities?');
  }
  return;
}

rosieTheFortuneTeller();