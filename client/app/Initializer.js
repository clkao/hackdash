
module.exports = function(){

  window.hackdash = window.hackdash || {};

  window.hackdash.getQueryVariable = function(variable){
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
      var pair = vars[i].split("=");
      if(pair[0] === variable){return decodeURI(pair[1]);}
    }
    return(false);
  };

  // Set global mode for InlineEditor (X-Editable)
  $.fn.editable.defaults.mode = 'modal';

   // Init Handlebars Helpers
  require('./helpers/handlebars');
  
  //require('./helpers/backboneOverrides');
  //require('./helpers/jQueryOverrides');
  
  window.hackdash.apiURL = "/api/v2";

  window.hackdash.startApp = require('./HackdashApp');
};