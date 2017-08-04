"use strict";

$(function() {
    var t = $("#toggleDiv"), i = $("#displayDiv");
    t.on("click", function(t) {
        t.preventDefault(), i.toggleClass("show");
    });
});
//# sourceMappingURL=bundle.js.map