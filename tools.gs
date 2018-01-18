function datetostring(date) {
  var mm = date.getMonth() + 1; // getMonth() is zero-based
  var dd = date.getDate();
  return [ (dd>9 ? '' : '0') + dd,(mm>9 ? '' : '0') + mm,date.getFullYear()].join('-');
};

function hourtointervalstring(starthour){
  var endhour = starthour+1;
  return [(starthour>9 ? '' : '0') + starthour+":00",(endhour>9 ? '' : '0') + endhour+":00"].join(' - ');
}