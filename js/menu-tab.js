var menu = $('.menu');
var items = $('.menu-item');
var btns = $('.btn-menu');
var anchors = $('.sub-menu a');
var tabAnchors = $('.board ul a');
var tabAct = $('.board section');
var tab = $('.tab');

// 토글 버튼을 클릭했을 때 하위 메뉴를 보이도록 설정할 것
btns.click(function(e){
  e.preventDefault();
  items.removeClass('menu-act');
  $(this).parent().addClass('menu-act');
});

anchors.addClass('icon-dot-circled');
tabAnchors.addClass('icon-dot-circled');

// 탭을 클릭했을 때 클릭한 탭의 목록과 더보기가 보이도록 설정할 것
// 마우스와 키보드가 모두 사용 가능하도록 설정할 것
tab.on('click keyup', function(e){
  e.preventDefault();
  if(e.type === 'click' || (e.type === 'keyup' && e.keyCode === 13)){
    tabAct.removeClass('tab-act');
    $(this).parent().addClass('tab-act');
  }
});