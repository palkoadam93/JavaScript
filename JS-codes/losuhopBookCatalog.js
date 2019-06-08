var bookCatalog = {
  'myBook1': {
    'title': 'The Man in the High Castle',
    'author': 'Philip K. Dick',
    'genre': 'alternate history',
    'year of publication': 1962,
    'has been read': true,
    'main characters': ['Juliana Crain', 'John Smith', 'Nobusuke Tagomi'],
    'quotes': {
      'p13': 'Bár kétségkívül volt valami humoros abban a képben, hogy egykedvű, mogorva németek sétálnak a Marson a vörös homokban, ahol még sosem járt ember előttük.',
      'p114': 'Ekkor, egy pillanatra, megbékélt a szíve. Itt volt az ajándék, vagy ahogy a Ji King nevezte, az áldozat.',
      'p164': 'Mr. Tagomit felettébb meglepné, gondolta rossz szájízzel, ha ilyen súlyos tudás és felelősség nehezedne hirtelen a vállára.'
    },
    'borrowed by': undefined,
    'rating': 5
  },
  
  'myBook2': {
    'title': 'American Gods',
    'author': 'Neil Gaiman',
    'genre': 'fantasy',
    'year of publication': 2001,
    'has been read': true,
    'main characters': ['Shadow Moon','Laura Moon','Wednesday'],
    'quotes': {
      'p101': 'Chicago lassan gyülemlett fel körülöttük, mint egy migrénes fejfájás.',
      'p226': 'Ibis úr az óraláncára akasztott kulcsok egyikével kinyitotta a kétszárnyú hátsó ajtót, és beléptek egy hatalmas, fűtetlen terembe, ahol két ember tartózkodott.',
      'p322': 'Eltelt három hideg nap. A hőmérő higanyszála még nappal sem tudott mínusz tizenhét fok fölé emelkedni.'
    },
    'borrowed by': undefined,
    'rating': 5
  },
  
  'myBook3': {
    'title': '2312',
    'author': 'Kim Stanley Robinson',
    'genre': 'science-fiction',
    'year of publication': 2012,
    'has been read': true,
    'main characters': ['Swan Er Hong','Fritz Wahram','Jean Genette'],
    'quotes': {
      'p64': 'A város a negyedik gyűrű tetején helyezkedett el; immár a harmadik és az ötödik gyűrűkön is elkezdtek városokat építeni.',
      'p183': 'Swan ügyet sem vetett rá, és olyan dolgokról motyogott, amelyek elromolhatnak, amíg ők a föld alatt haladtak.',
      'p345': 'Az Accelerando sietségében elkövetett hibák a későbbi korszakokon is otthagyták a nyomukat.'
    },
    'borrowed by': undefined,
    'rating': 5
  },
  
  'page marker': function(book) {
    var pageInitial = this[book].page;
    this[book].page = prompt('Melyik oldalon tartasz az alábbi könyvben: '+this[book].title+'?');
    if (typeof pageInitial === 'undefined') {
      alert('Jelenleg az alábbi oldalon tartasz: '+this[book].page+' az alábbi könyvedben: '+this[book].title+'.');
    } else if(this[book].page-pageInitial<0) {
      alert('Szerintem elírtad az oldalszámot!');
    } else {
      alert('Jelenleg az alábbi oldalon tartasz: '+this[book].page+' az alábbi könyvedben: '+this[book].title+'. Legutóbb az alábbi oldalon tartottál: '+pageInitial+', így ez alkalommal '+(this[book].page-pageInitial)+' oldalt olvastál.');
    }
  },
  
  'unread': function() {
    var booksToRead = [];
    for (var book in this) {
      if (this[book]['has been read'] === false) {
        booksToRead.push(this[book].title);
      }
    }
    if (booksToRead.length === 0) {
      console.log('Elolvastad az összes könyvedet.');
    } else {
      console.log('Nem olvastad még el az alábbi könyveket: '+booksToRead);
    }
  },
  
  'change property': function(book,propName){
    this[book][propName] = prompt('Mi a \"'+propName+'\" tulajdonság új értéke a '+this[book].title+' könyvben?');
    alert('A \"'+propName+'\" tulajdonság új értéke a '+this[book].title+' könyvben: '+this[book][propName]);
  },
  
  'add quote': function(book,page){
    /*this.push(this[book].quotes[page]);*/
    this[book].quotes[page] = prompt('Írd ide az idézetet:');
    alert('A '+book+' könyv '+page+' oldalán ez áll: '+this[book].quotes[page]);
  },
  
  'borrowed': function(){
    var borrowedBooks = [];
    for (var x in this){
      if(typeof this[x] !== 'function'){
        if(this[x]['borrowed by'] !== null){
          borrowedBooks.push(this[x].title);
        }
      }
    }
    if (borrowedBooks.length === 0){
      console.log('Egyik könyved sincs kölcsönadva épp.');
    } else {
      console.log('Kölcsönadott könyvek: '+borrowedBooks);
    }
  }
};