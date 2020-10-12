function Scrabble()
{
  var score = 0
  var sana = document.getElementById('sana').value;
  for(var i = 0; i < sana.length; i++)
switch (sana[i]) {
  case 'a':
  case 'e':
  case 'i':
  case 'n':
  case 's':
  case 't':
  case 'A':
  case 'E':
  case 'I':
  case 'N':
  case 'S':
  case 'T':
      score +=1; break;
  case 'o':
  case 'ä':
  case 'k':
  case 'l':
  case 'O':
  case 'Ä':
  case 'K':
  case 'L':
      score +=2; break;
  case 'u':
  case 'm':
  case 'U':
  case 'M':
        score +=3; break;
  case 'y':
  case 'h':
  case 'j':
  case 'p':
  case 'r':
  case 'v':
  case 'Y':
  case 'H':
  case 'J':
  case 'P':
  case 'R':
  case 'V':
        score +=4; break;
  case 'ö':
  case 'd':
  case 'Ö':
  case 'D':
        score +=7; break;
  case 'b':
  case 'f':
  case 'g':
  case 'B':
  case 'F':
  case 'G':
        score +=8; break;
  case 'c':
  case 'C':
        score +=10; break;
      }
      document.write("Sanan " + sana + " pisteet ovat: " + score);
    }
    function lottonumerot()
    {
      var lottopotto = [];
      var temp;
      for(var lotto = 0; lotto < 7; lotto++)
{
    temp = Math.floor(Math.random()*40)+1;
    lottopotto[lotto] = temp;
  }
document.getElementById('lottopotto').innerHTML = '<p>'+ lottopotto +'</p>';
}
