$(".btn_card").on("click", function() {

    var card = "#" + $(this).attr("id") + "_card";

    if ($(this).hasClass("active")) {
        $(card).hide();
        $(this).text($(this).attr("name") + "OFF");
    } else {
        $(card).show();
        $(this).text($(this).attr("name") + "ON");
    }

    $(this).button('toggle');

})
