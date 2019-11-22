const PageViewModel = function (model) {
    this.pageTitle = ko.observable(model.pageTitle);
    this.breadcrumb = ko.observableArray(model.breadcrumb);
    this.upNextList = ko.observableArray(model.upNextList);
    this.memoryAnchorsList = ko.observableArray(model.memoryAnchorsList);

    this.getSourceIcon = (source) => {
        let icon = "";
        switch (source) {
            case "Youtube": icon = "youtube.png"; break;
            case "Picmonic": icon = "ologo.png"; break;
            case "Osmosis": icon = "plogo.png"; break;
        }
        return "images/"+icon;
    };

    this.flashcards = ko.observable(model.flashcards);
    this.questions = ko.observable(model.questions);

    this.click = (data, event)=>{
        this.sendMessage("Click!");
    };

    this.searchValue = ko.observable("");
    this.search = (data, event)=>{
        if(event.code && event.code !== "Enter") return; // key was pressed and it was not enter
        this.sendMessage("Search for: " + this.searchValue());
    };

    // just for fun :D
    this.message = ko.observable("");
    this.timer = null;
    this.sendMessage = (m)=>{
        this.message(m);
        if(this.timer) clearTimeout(this.timer);
        this.timer = setTimeout(()=>{this.message("");}, 1000);
    };
};

ko.applyBindings(new PageViewModel(new PageModel()));