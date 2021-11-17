/*
Author: Sohinee Saha
Email: stsaha@ucsc.edu
Assignment: Art 101, Lab 12
Created: November 2021
*/

function sortingHat(str)
{
    len = str.length;
    mod = len % 4;
    if (mod == 0)
    {
      return "Gryffindor! Your house was found by Godric Gryffindor! Your house crest is a lion and wears the colors of red and gold! Though you may often act imupsively, you are courageous, chivalrous, and an adamant fighter for the good against the evil!"
    }
    if (mod == 1)
    {
      return "Ravenclaw! Your house was found by Rowena Ravenclaw! Your house crest is an eagle and wears the colors of blue and bronze! Though you may often isolate yourself, your unwavering curiousity and ability to hold your ground speak to your strong, confidant personality!"
    }
    if (mod == 2)
    {
      return "Slytherin! Your house was founded by Salazar Slytherin! Your house crest is a snake and wears the colors of green and silver! Though your desire for power and authority may often blind you, your steadfast ambition and resourcefulness make you one who can reach beyond the realm of possibilities!"
    }
    if (mod == 3)
    {
      return "Hufflepuff! Your house was found by Helga Hufflepuff! Your house crest is a badger and wears the colors of black and yellow! Though your naivety may often be a source of prey, your loyalty, dedication, and willingness to only see the good is undeniable!"
    }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function()
{
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
  document.getElementById("output").innerHTML = newText;
})
