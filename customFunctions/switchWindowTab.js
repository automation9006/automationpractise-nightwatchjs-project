exports.command = function(tabIndex) {
  return this.perform(function() {
    this.api.windowHandles(function(res) {
      this.switchWindow(res.value[tabIndex]);
    });
  });
};
