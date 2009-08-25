(function() {
    jetpack.statusBar.append({
      html: "Boom<i>!</i>",
      width: 45,
      onReady: function(widget){
        $(widget).click(function(){
          console.log( jetpack.tabs );
        });
      }
    });
})();

