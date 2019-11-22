const PageModel = function() {
    this.pageTitle = "ECG basics";
    this.breadcrumb = [
        {url: "#", name: "Cardiovascular"},
        {url: "#", name: "Physiology: Cardiovascular Physiology"},
        {url: "#", name: "Electrocardiography"}
    ];
    this.upNextList = [
        {url: "#", img: "next1.png", title: "Blood pressure, blood flow and resistance", source: "Osmosis"}
    ];
    this.memoryAnchorsList = [
        {url: "#", img: "ma1.png", title: "Electrocardiography Handwritten", source: "Youtube"},
        {url: "#", img: "ma2.png", title: "Electrocardiography Khan", source: "Youtube"},
        {url: "#", img: "ma3.jpg", title: "12 Lead Contiguous Leads - Lateral Wall MI", source: "Picmonic"},
        {url: "#", img: "ma4.jpg", title: "12 Lead Contiguous Leads - Lateral Wall MI", source: "Picmonic"}
    ];
};