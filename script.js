let time = new Date();
console.log(time);
console.log($("currentDay"));
$("#currentDay").text(time);

function storeData(event) {
    document.preventdefault();
    localStorage.setItem("#btn1", text);
};

$("#btn1").on("click", function() {
    console.log("was clicked");
    let currentInfo = $(".form-control").val();
    console.log(currentInfo);
    localStorage.setItem("form submission",currentInfo);

});

function loadData() {
    console.log("dataloaded");
    let gotData = localStorage.getItem("form submission");
    $(".form-control").val() = gotData;
};

loadData();