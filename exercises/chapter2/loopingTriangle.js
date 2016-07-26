/*
Write a loop that makes seven calls to console.log and outputs:

#
##
###
####
#####
######
#######
*/

var hash = "#";
for(var i = 0; i < 7; i++){
  console.log(hash);
  hash += "#";
}

// More Eloquent Solution

for(var hash="#"; hash.length <= 7; hash += "#"){
  console.log(hash);
}
