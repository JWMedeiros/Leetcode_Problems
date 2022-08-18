var isPalindrome = function(head) {
    let str = ""
    while (head){
        str+=head.val
        head=head.next;
    }
    
    let reversedString = str
    .split("")
    .reverse()
    .join("");

  if (reversedString === str) {
    return true;
  } else {
    return false;
  }
};