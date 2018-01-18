function doGet(e) {
  var Title = "Evaluation ";
  var Description = "L'application s'appelle ";
  var formulaire = new formClass();
  var start = new Date();
  var end = new Date(new Date(start).setMonth(start.getMonth()+1));
  var optiondates = [];
  var starthour = 19;
  var endhour = 21;
  //Start iteration between dates
  var newDate = start;
  while(newDate < end){
    newDate.setDate(newDate.getDate() + 1);
    //var dummydate = new Date(newDate); //Without the dummy date, when you set the new Date in the var newDate it also updates the dates inside optiondates and therefore all the dates are the same. So it doesn't push the value but the pointer to the value
    if (newDate.getDay() == 4 || newDate.getDay()==2){ //1: lundi; 2: mardi ....
      //iteration between hours
      for (var i = starthour; i < endhour; i++){
        optiondates.push("Date : "+datetostring(newDate)+" / Heure : "+hourtointervalstring(i));
      }
    }
  }
  formulaire.formprepare(Title,Description);
  formulaire.formfill("Email",{title: "Adresse Email",helptext:"Veuillez entrer une adresse email valide"});
  formulaire.formfill("Checkbox",{title: "Dates",  choices : optiondates,showother:true,isrequired:true});
  formulaire.formfill("Champ Libre",{title: "Commentaires"});
  
  response = {formurl:formulaire.getUrl()};
  
  return HtmlService.createHtmlOutput(JSON.stringify(response));
}


