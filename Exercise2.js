
function balikKata(string) {
    dibalik = "";
    for (i = string.length - 1; 0 <= i; i--) {
      dibalik += string[i];
    }
    return dibalik;
  }
  
  console.log(balikKata('Hello World'));