const TodoViewModel = (data) => {
  this.name = ko.observable(data.name);
  this.complete = ko.observable(data.complete);
};

var PageViewModel = () => {
  this.memoryAnchors = ko.observableArray();
  this.upNext = ko.observableArray();

  this.refresh = ko.command(() => {
      //make a call to the server...
      return $.getJSON('/api/todos');
    })
    .done((items) => {
      var newItems = [];
      for (var i = 0; i < items.length; i++) {
        newItems.push(new TodoViewModel(items[i]));
      }
      this.memoryAnchors(newItems);
    });

  //refresh immediately to load initial data
  this.refresh();
};