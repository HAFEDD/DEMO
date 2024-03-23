// 保存按钮信息到本地存储
function saveSiteButton(name, url) {
    var siteButtons = JSON.parse(localStorage.getItem('siteButtons')) || [];
    siteButtons.push({name: name, url: url});
    localStorage.setItem('siteButtons', JSON.stringify(siteButtons));
  }
  // 在页面加载时加载保存的按钮信息
window.addEventListener('DOMContentLoaded', function() {
    var savedButtons = JSON.parse(localStorage.getItem('siteButtons')) || [];
    savedButtons.forEach(function(button) {
      addSiteButton(button.name, button.url);
    });
  });