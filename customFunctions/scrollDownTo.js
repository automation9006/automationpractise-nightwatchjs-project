exports.command = function(element) {
  const ele = element;
  return this.perform(function() {
    this.api.getLocationInView(ele, function(result) {
      console.log(result.value)
      this.execute('scroll(0, ' + result.value.y + ')');
    });
  });
};
