/*
Question: How would you reverse words in a sentence?

Answer: Check for white space and iterate through the string. Take into account multiple whitespaces.
*/


//have a tailing white space
//fix this later
//now i m sleepy
function reverseWords(str){
 var rev = [], 
     wordLen = 0;
 for(var i = str.length-1; i>=0; i--){
   if(str[i]==' ' || i==0){
     rev.push(str.substr(i,wordLen+1));
     wordLen = 0;
   }
   else
     wordLen++;
 }
 return rev.join(' ');
}

//with methods
function reverseWords(str){
  return str.split(' ').reverse();
}
  
