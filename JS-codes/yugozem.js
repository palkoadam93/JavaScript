var x = prompt('Hány éves vagy?');

if (x>18) {
  alert("Köszönjük! Elolvashatod ezt a cikket.");
} else if (x==18) {
  alert("Pont 18? Gratulálunk, üdv a felnőttek között! Jó szórakozást a cikkhez!");
} else {
  alert("Sajnáljuk, de ez a cikk csak 18 éven felüliek számára érhető el." );
}