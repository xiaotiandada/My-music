(function () {
    'use strict';

    var tabList = document.getElementById('tab-list');
    var aList = tabList.getElementsByTagName('span');
    var sList = document.getElementsByClassName('MenuItem');
    var contents = document.getElementsByClassName('tab-content');
    for(var i =0;i<aList.length;i++){
        aList[i].index = i;

        aList[i].onmousemove= function () {
            for(var j=0;j<aList.length;j++){
                aList[j].className = 'MenuItem';
            }
            this.className = 'MenuItem tab-active';

            for(var j=0;j<contents.length;j++){
                contents[j].className='itemTwoLeftContent tab-content tab-hide';
            }
            contents[this.index].className = 'itemTwoLeftContent tab-content tab-show';
        }
    }
})();