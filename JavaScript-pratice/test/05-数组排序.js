var reA = /[^a-zA-Z]/g;
var reN = /[^0-9]/g;

function sortAlphaNum(a, b) {
  var aA = a.roomId.replace(reN, "");
  console.log(aA)
  var bA = b.roomId.replace(reN, "");
  return aA > bA ? 1 : -1;
}

let arr = [

  {roomId: "2364b02a6d85273cc88b68fe",
  item: 1
},
{roomId: "22364b02a6d85273cc88b68f4",
item: 4
},
{
  roomId: "132bbbcf860d06a6dcf6afb5",
  item : 2
},
{roomId: "6364b02a6d85273cc88b68fe",
item: 5},
]
console.log(arr.sort(sortAlphaNum))