const PageViewModel = function(model) {
    this.pageTitle = ko.observable(model.pageTitle);
    //this.lastName = ko.observable(last);
};

ko.applyBindings(new PageViewModel(new PageModel()));