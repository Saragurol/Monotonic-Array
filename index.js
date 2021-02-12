// O(n) - Time | O(1) - Space
function isMonotonic(array) {
  let first = array[0];
  let last = array[array.length-1];
  // ascending
  if(first < last){
    for(let i = 0; i < array.length-1; i++){
      if(array[i] > array[i + 1]) return false;
    }
  }
  // descending
  else if(first > last){
    for(let j = 0; j < array.length-1; j++){
      if(array[j] < array[j + 1]) return false;
    }
  }
  // unchanged
  else if(first === last){
    for(let k = 0; k < array.length-1; k++){
      if(array[k] !== array[k + 1]) return false;
    }
  }
  return true
}
isMonotonic([-1,-5,-10,-1100,-1100,-1101,-9001])