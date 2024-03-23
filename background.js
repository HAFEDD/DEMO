// 设置背景图
document.getElementById('background').style.backgroundImage = "url('photo/background.jpg')";

// 自适应调整背景图大小
function resizeBackground() {
  var bg = document.getElementById('background');
  var img = new Image();
  img.onload = function() {
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;
    var imgRatio = img.width / img.height;
    var winRatio = winWidth / winHeight;

    if (winRatio > imgRatio) {
      // 窗口更宽，按高度适应
      bg.style.width = 'auto';
      bg.style.height = '100%';
    } else {
      // 窗口更高，按宽度适应
      bg.style.width = '100%';
      bg.style.height = 'auto';
    }
  };
  img.src = "photo/background.jpg"; // 图片路径
}
