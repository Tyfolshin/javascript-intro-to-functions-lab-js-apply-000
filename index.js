function shout(string){
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  console.log(shout(string))
}
function logWhisper(string){
  console.log(whisper(string))
}
function sayHiToGrandma(string){
  if(string.toUpperCase() === string){ 
  return "YES INDEED!"
  }
  if(string.toLowerCase() === string){
    return "I can't hear you!"
  }
<<<<<<< HEAD
  if("I love you, Grandma."=== string){
=======
  if(string === "I love you, Grandma"){
>>>>>>> 51e8b0da59910b903b915671155a74f3b11e8e27
    return "I love you, too."
  }
}