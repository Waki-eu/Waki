function Waki() {
    var self = this;
    kango.ui.browserButton.addEventListener(kango.ui.browserButton.event.COMMAND, function() {
        self._onCommand();
    });
}

Waki.prototype = {

    _onCommand: function() {
        kango.browser.tabs.create({url: 'http://www.waki.eu/'});
    }
};

var extension = new Waki();