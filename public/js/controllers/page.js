const PageViewModel = function (model) {
    this.pageTitle = ko.observable(model.pageTitle);
    this.breadcrumb = ko.observable(model.breadcrumb);
    this.upNextList = ko.observable(model.upNextList);
    this.memoryAnchorsList = ko.observable(model.memoryAnchorsList);

    this.getSourceIcon = (source) => {
        let icon = "";
        switch (source) {
            case "Youtube": icon = "youtube.png"; break;
            case "Picmonic": icon = "ologo.png"; break;
            case "Osmosis": icon = "plogo.png"; break;
        }
        return "images/"+icon;
    };
};

ko.applyBindings(new PageViewModel(new PageModel()));