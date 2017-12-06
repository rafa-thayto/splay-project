var $imageDescription = $("#image-description");
var $differentialTitle = $("#image-description h3");
var $differentialText = $("#image-description p");
//
var $differentials = $("#splay-differentials .container img");
$differentials.each(function (a, b) {
    $(b).on("click", function () {
        var title = $(this).attr("diff-title");
        var text = $(this).attr("alt");
        //
        $imageDescription.css({
            "opacity": "0"
        });
        //
        $differentialTitle.text(title);
        $differentialText.text(text);
        //
        $imageDescription.animate({
            "opacity": "1"
        }, 500);
    });
});