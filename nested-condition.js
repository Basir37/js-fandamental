var danishPrice = 50;
var butterBunPrice = 25;
var toastBiscuitPrice = 10;
var myBudget = 100;

var packedwell = false;

// if(danishPrice < myBudget) {
//     console.log('Danish kheye danish jabo');
// }
// else if(butterBunPrice < myBudget) {
//     console.log('Butter bon diye cha khamu');
// }
// else if(toastBiscuitPrice < myBudget) {
//     console.log('Toast biscuit khamu');
// }
// else{
//      console.log('Batasha diye cha khamu');
// }

if(danishPrice < myBudget) {
    if(packedwell == true) {
        console.log('Danish khabo')
    } 
    else{
        console.log('Danish khamu na !! karon age machi kheye fekse ordhek')
    }
}
else{
    console.log('Btash dea khabo')
}