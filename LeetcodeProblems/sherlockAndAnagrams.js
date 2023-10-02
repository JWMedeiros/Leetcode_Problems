//With the help of Chat GPT

function sherlockAndAnagrams(s) {
    const map = {}; // Store the frequency of each substring
  
    // Iterate over all substrings of 's'
    for (let i = 0; i < s.length; i++) {
      let substring = "";
      for (let j = i; j < s.length; j++) {
        // Sort the substring in alphabetical order
        substring = substring + s[j];
        const sortedSubstring = substring.split("").sort().join("");
  
        // Increment the count of this sorted substring in the map
        if (map[sortedSubstring]) {
          map[sortedSubstring]++;
        } else {
          map[sortedSubstring] = 1;
        }
      }
    }
  
    let count = 0;
    // Count the number of pairs of anagram substrings
    for (const key in map) {
      const occurrences = map[key];
      count += (occurrences * (occurrences - 1)) / 2;
    }
  
    return count;
  }