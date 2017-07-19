//Basic Algorithm Scripting:

//reverse a string
function reverseString(str) {
 return str.split('').reverse().join('');
}

reverseString("hello");


//factorialize a number
function factorialize(num) {
  if (num < 2) {
    return 1;
  }
  return num * factorialize(num - 1);
}

factorialize(5);


//check for palindromes

//find the longest word in a string
function findLongestWord(str) {
  return str.split(' ').sort((curr, next)=> curr.length < next.length)[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");


//return largest numbers in arrays
function largestOfFour(arr) {
  // You can do this!
   return arr.map((list) => list.reduce((a, b) => a > b ? a : b));
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


//confirm the ending
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var re = new RegExp(target + '$');
  return re.test(str);
  
}

confirmEnding("Bastian", "n");


//repeat a string repeat a string
function repeatStringNumTimes(str, num) {
  // repeat after me
  var array=[];
  for(var i=0;i<num;i++){
     array.push(str);
  }
  str = array.join("");
  return str;
}

repeatStringNumTimes("abc", 3);


//Truncate a String//Truncate a String
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(num>3 && str.length>num) {
    str = str.slice(0,num)+'...';
  } else if(num<=3) {
    str = str.slice(0,num)+'...';
}
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);


//Finders Keepers//Finders Keepers
function findElement(arr, func) {
  var num = 0;
  return arr.filter(func)[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });


//chunky monkey//chunky monkey
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arr2 = [];
  for (var i = 0; i < arr.length; i += size) {
    arr2.push(arr.slice(i, size + i));
  }
  return arr2;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);


//slaherFlick//slasherFlick
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);


//BooWho//BooWho//BooWho//BooWho
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return bool === true || bool === false;
}

booWho(null);


//Title Case a Sentence//Title Case a Sentence
function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(/(\w)/, (match, p1) => p1.toUpperCase());
  }).join(' ');
}

titleCase("I'm a little tea pot");


//falsy bouncer // falsy bouncer

//Where do I belong

//Mutations

