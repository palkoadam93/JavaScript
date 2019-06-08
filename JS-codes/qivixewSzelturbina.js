var y;

for(var i=1; i<=25; i++){
  if(i<=10){
    y = i*2000;
    console.log('A(z) '+i+'. számú szélturbina teljes fordulaton működik, 2000 MWh áramot termelve. A farm összteljesítménye jelenleg '+y+' MWh.');
  } else if(i<=20){
    y += 1000;
    console.log('A(z) '+i+'. számú szélturbina fél fordulaton működik, 1000 MWh áramot termelve. A farm összteljesítménye jelenleg '+y+' MWh.');
  } else {
    console.log('A(z) '+i+'. számú szélturbina áll, 0 MWh áramot termelve. A farm összteljesítménye jelenleg '+y+' MWh.');
  }
}