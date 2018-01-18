function createForm() {
  var Title = "Evaluation ";
  var Description = "L'application s'appelle ";
  var formulaire = new formClass();
  var start = new Date();
  var end = new Date(new Date(start).setMonth(start.getMonth()+1));
  var optiondates = [];
  //Start iteration between dates
  var newDate = start;
  while(newDate < end){
    newDate.setDate(newDate.getDate() + 1);
    if (newDate.getDay() == 4){ //1: lundi; 2: mardi ....
      Logger.log(newDate);
      optiondates.push(newDate);
      Logger.log(optiondates)
    }
  }
  
  //Logger.log(optiondates);
  
  //formulaire.formprepare(Title,Description);
  //formulaire.formfill("Email",{title: "Adresse Email",helptext:"Veuillez entrer une adresse email valide"});
  //formulaire.formfill("Radio",{title: "Dates",  choices : ["Date1","Date2"]});
}
