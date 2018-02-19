exports.command = function(selector, data) {
  this.execute(
    function(selector, optionToFind) {
      var dropDown = window.document.querySelector(selector);

      if (!dropDown) return false;
      const option = Array.from(dropDown.options).find(o => {
        return o.text.toLowerCase() === optionToFind.toLowerCase();
      });

      if (!option) return false;

      dropDown.value = option.value;

      // trigger updating of app state
      const event = document.createEvent('HTMLEvents');
      event.initEvent('change', true, true);
      dropDown.dispatchEvent(event);
    },
    [selector, data]
  );

  return this;
};
