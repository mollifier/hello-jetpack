jetpack.statusBar.append({
  html: "Hello",
  width: 45,
  onReady: function(widget){
    $(widget).click(function() {
      jetpack.notifications.show("Hello Jetpack!");
    });
  }
});

// vim:set ts=2 sw=2:
