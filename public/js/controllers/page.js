const PageViewModel = function(first, last) {
    this.pageTitle = ko.observable(pageModel.pageTitle);
    //this.lastName = ko.observable(last);
};

ko.applyBindings(new PageViewModel());