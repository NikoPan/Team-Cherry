(function () {
    var wi = $(window).width();
    if (wi > 640) {
        var $allSections = $('section');
        var $allList = $('aside nav ul li');
        hideAll(0);
        for (var i = 0; i < $allList.length; i++) {
            // adding onclick function to all buttons
            $allList[i].onclick = function (e) {
                hideAll(1000);
                var which = $(this).index();
                $($allSections.get(which)).show(1000);
            }
        }
        
    }
    function hideAll(sec) {
        for (var i = 0; i < $allSections.length; i++) {
            $($allSections.get(i)).hide(sec);
        }
    }
}());