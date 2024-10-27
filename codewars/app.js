//Create a function which answers the question "Are you playing banjo?".


function playingBanjo(name){
  if (name[0] === 'R' || name[0] === 'r'){
    return name + ' plays banjo';
  } else {
    return name + ' does not play banjo';
  }
}
