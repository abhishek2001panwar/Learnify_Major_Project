const isanagaram = function (s, r) {
  s = s.toString().split('').sort().join("") 
  r = r.toString().split('').sort().join("")

  if (s === r) {
    console.log("anagram");
  } else {
    console.log("not anagram ");
  }
};

console.log(isanagaram("cat", "brbrbr"));
