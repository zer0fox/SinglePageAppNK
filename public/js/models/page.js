const PageModel = function() {
    this.pageTitle = "ECG basics";
    this.breadcrumb = [
        {url: "#Cardiovascular", name: "Cardiovascular"},
        {url: "#Physiology", name: "Physiology: Cardiovascular Physiology"},
        {url: "#Electrocardiography", name: "Electrocardiography"}
    ];
    this.upNextList = [
        {url: "#n1", img: "next1.png", title: "Blood pressure, blood flow and resistance", source: "Osmosis"}
    ];
    this.memoryAnchorsList = [
        {url: "#1", img: "ma1.png", title: "Electrocardiography Handwritten", source: "Youtube"},
        {url: "#2", img: "ma2.png", title: "Electrocardiography Khan", source: "Youtube"},
        {url: "#3", img: "ma3.jpg", title: "12 Lead Contiguous Leads - Lateral Wall MI", source: "Picmonic"},
        {url: "#4", img: "ma4.jpg", title: "12 Lead Contiguous Leads - Lateral Wall MI", source: "Picmonic"}
    ];
    this.flashcards = 26;
    this.questions = 0;
};