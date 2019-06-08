function bernardTheLetterCounter(){
  var sentence = prompt('Write a sentence to me for analyze:');
  var letter = prompt('What letter do you want to count in the sentence?');
  var many=0;
  for(var i=0; i<=sentence.length; i++){
    if(letter==sentence.charAt(i)){many++;}
  }
  alert('The letter '+letter+' occurs '+many+' times in this sentence.');
  
  return;
}

bernardTheLetterCounter();