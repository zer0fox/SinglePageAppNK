const ViewModel = function(first, last) {
    this.pageTitle = ko.observable("ECG basics");
    this.lastName = ko.observable(last);
};

ko.applyBindings(new ViewModel());