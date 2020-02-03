let time = new Date();
console.log(time);
console.log($("currentDay"));
$("#currentDay").text(time);

function storeData(event) {
    document.preventdefault();
    localStorage.setItem("#btn1", text);
};

$(".btnPos").on("click", function() {
    let current = $(this)
    console.log(current)
    console.log("was clicked");
    for (let i = 0; i < 12; i++){
    let currentInfo = $(".form-control").val();
    console.log(currentInfo);
    localStorage.setItem("form-submission",currentInfo);}
    loadData();

});


function loadData() {
    console.log("dataloaded");
    let gotData = localStorage.getItem("form-submission");
    console.log($(this))
    $(this).val(gotData);
};
