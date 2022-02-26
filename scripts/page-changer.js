

function LinkOpen(proj){
   const Active = proj.getAttribute("class");
    console.log(Active);
    if(Active == "card current--card"){
const Data_type =proj.getAttribute("data-project-type"); 
var Card = Data_type + ".html";
console.log(Card);
    window.location.href = Card;
}else{
    null;
}
}


 