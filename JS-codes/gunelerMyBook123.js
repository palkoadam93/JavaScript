var myBook1 = {
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
  'rating': 5,
  'page marker': function () {
    var pageInitial = this.page;
    this.page = prompt('Melyik oldalon tartasz az alábbi könyvben: ' + this.title + '?');
    if (typeof pageInitial === 'undefined') {
      alert('Jelenleg az alábbi oldalon tartasz: ' + this.page + ' az alábbi könyvedben: ' + this.title + '.');
    } else if(this.page-pageInitial<0) {
      alert('Szerintem elírtad az oldalszámot!');
    } else {
      alert('Jelenleg az alábbi oldalon tartasz: ' + this.page + ' az alábbi könyvedben: ' + this.title + '. Legutóbb az alábbi oldalon tartottál: ' + pageInitial + ', így ez alkalommal ' + (this.page - pageInitial) + ' oldalt olvastál.');
    }
  }
};

var myBook2 = {
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
  'rating': 5,
  'page marker': function () {
    var pageInitial = this.page;
    this.page = prompt('Melyik oldalon tartasz az alábbi könyvben: ' + this.title + '?');
    if (typeof pageInitial === 'undefined') {
      alert('Jelenleg az alábbi oldalon tartasz: ' + this.page + ' az alábbi könyvedben: ' + this.title + '.');
    } else if(this.page-pageInitial<0) {
      alert('Szerintem elírtad az oldalszámot!');
    } else {
      alert('Jelenleg az alábbi oldalon tartasz: ' + this.page + ' az alábbi könyvedben: ' + this.title + '. Legutóbb az alábbi oldalon tartottál: ' + pageInitial + ', így ez alkalommal ' + (this.page - pageInitial) + ' oldalt olvastál.');
    }
  }
}

var myBook3 = {
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
  'rating': 5,
  'page marker': function () {
    var pageInitial = this.page;
    this.page = prompt('Melyik oldalon tartasz az alábbi könyvben: ' + this.title + '?');
    if (typeof pageInitial === 'undefined') {
      alert('Jelenleg az alábbi oldalon tartasz: ' + this.page + ' az alábbi könyvedben: ' + this.title + '.');
    } else if(this.page-pageInitial<0) {
      alert('Szerintem elírtad az oldalszámot!');
    } else {
      alert('Jelenleg az alábbi oldalon tartasz: ' + this.page + ' az alábbi könyvedben: ' + this.title + '. Legutóbb az alábbi oldalon tartottál: ' + pageInitial + ', így ez alkalommal ' + (this.page - pageInitial) + ' oldalt olvastál.');
    }
  }
}