for(i = 1; i <= 5; i++){
  var star = "";
  star = "";
  for(j = i; j < 5; j++){
    star += " ";
  }
  for(h = 0; h < (i * 2) - 1; h++){
    star += "*";
  }
  console.log(star);
}


