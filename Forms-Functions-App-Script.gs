var formClass = function(){
  
  this.formprepare = function (title,description){
    //I Create and Open the form
    this.form = FormApp.create(title)
    .setTitle(title)
    .setDescription(description)
    .setConfirmationMessage('Merci de votre réponse')
    .setAllowResponseEdits(false)
    .setShowLinkToRespondAgain(false)
    .setRequireLogin(false)
    .setAcceptingResponses(true);
    //.collectsEmail(true) It doesn't work, I don't know why
 
    //set all the variables and create the response spreadsheet
    var responsess = SpreadsheetApp.create(this.form.getId());
    // Update the form's response destination.
    this.form.setDestination(FormApp.DestinationType.SPREADSHEET, responsess.getId());  
    
    //I have to move the file because they are created at the root of the Drive by default
    //moveFile(form.getId(),"0BzWLWb2JQXdPd2M3NlR6TzMtWEU");
    //moveFile(responsess.getId(),"0BzWLWb2JQXdPd2M3NlR6TzMtWEU");
    //this.formobject = form;
    //this.responsessobject = responsess;
    
    this.responseid = responsess;
  };
  
  this.getUrl = function(){
    return this.form.getPublishedUrl();
  }
  
  this.formfill = function (type,data){
    
    switch(type){
      case "Email":
        var textItem = this.form.addTextItem().setTitle(data.title).setRequired(true);
        var textValidation = FormApp.createTextValidation()
        .setHelpText(data.helptext)
        .requireTextIsEmail()
        .build();
        textItem.setValidation(textValidation);
        break;
      case "Radio": //In case of a radiobox
        var item = this.form.addMultipleChoiceItem()
        .setTitle(data.title);
        var choicearray = []; //array of form items to add
        for (var i=0; i < data.choices.length; i++ ) {
          choicearray.push(item.createChoice(data.choices[i]));
        }
        item.setChoices(choicearray)
        .showOtherOption(data.showother)
        .setRequired(data.isrequired);
        break;
      case "Checkbox": //In case of a radiobox
        var item = this.form.addCheckboxItem()
        .setTitle(data.title);
        var choicearray = []; //array of form items to add
        for (var i=0; i < data.choices.length; i++ ) {
          choicearray.push(item.createChoice(data.choices[i]));
        }
        item.setChoices(choicearray)
        .showOtherOption(data.showother)
        .setRequired(data.isrequired);
        break;
      
      case "Multiple": //In case of a Slider from 1 to X
        var item = form.addScaleItem();
        item.setTitle(row[0])
        .setBounds(parseInt(row[3]), parseInt(row[4]))
        .setLabels(row[5], row[6])
        break;
      case "Champ Libre": //In case of a TextArea
        var item = this.form.addParagraphTextItem();
        item.setTitle(data.title)
        break;
    }
    
   }
}
