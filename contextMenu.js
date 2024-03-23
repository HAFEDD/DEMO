// 右键菜单功能
var contextMenu = document.getElementById('contextMenu');
var editItem = document.getElementById('editItem');
var deleteItem = document.getElementById('deleteItem');
var currentButton = null;

// 给每个网址按钮添加右键菜单功能
var siteButtons = document.querySelectorAll('.site-button');
siteButtons.forEach(function(button) {
    button.addEventListener('contextmenu', function(event) {
        event.preventDefault(); // 阻止默认右键菜单
        contextMenu.style.display = 'block'; // 显示右键菜单
        contextMenu.style.left = event.pageX + 'px'; // 设置菜单位置
        contextMenu.style.top = event.pageY + 'px';

        // 记录当前右键点击的按钮
        currentButton = button;
    });
});

document.addEventListener('click', function(event) {
    contextMenu.style.display = 'none'; // 点击其他地方关闭菜单
});

editItem.addEventListener('click', function() {
    if (currentButton) {
        var newName = prompt('请输入新的网址名称:', currentButton.querySelector('span').textContent);
        var newUrl = prompt('请输入新的网址:', currentButton.getAttribute('href'));

        if (newName && newUrl) {
            currentButton.querySelector('span').textContent = newName;
            currentButton.setAttribute('href', newUrl);
            updateSiteButton(currentButton, newName, newUrl); // 更新按钮信息
        } else {
            alert('请输入有效的网址名称和网址！');
        }
    }
});


// 更新按钮信息
function updateSiteButton(button, newName, newUrl) {
    var index = Array.from(button.parentNode.children).indexOf(button);
    var siteButtons = JSON.parse(localStorage.getItem('siteButtons')) || [];
    siteButtons[index] = { name: newName, url: newUrl };
    localStorage.setItem('siteButtons', JSON.stringify(siteButtons));
}

// 删除按钮信息
function deleteSiteButton(button) {
  var index = Array.from(button.parentNode.children).indexOf(button);
  var siteButtons = JSON.parse(localStorage.getItem('siteButtons')) || [];
  siteButtons.splice(index, 1); // 从数组中删除相应的按钮数据
  localStorage.setItem('siteButtons', JSON.stringify(siteButtons)); // 更新本地存储数据
}

deleteItem.addEventListener('click', function() {
  if (currentButton) {
      if (confirm('确定删除该网址？')) {
          deleteSiteButton(currentButton); // 删除按钮信息
          currentButton.remove();
          contextMenu.style.display = 'none'; // 删除后隐藏右键菜单
      }
  }
});


window.addEventListener('DOMContentLoaded', function() {
  var savedButtons = JSON.parse(localStorage.getItem('siteButtons')) || [];
  savedButtons.forEach(function(button) {
      if (document.querySelector('.site-button[href="' + button.url + '"]') === null) {
          addSiteButton(button.name, button.url);
      }
  });
});


// 更新本地存储数据
function updateLocalStorage() {
    var buttons = document.querySelectorAll('.site-button');
    var siteButtons = [];
    buttons.forEach(function(button) {
        var name = button.querySelector('span').textContent;
        var url = button.getAttribute('href');
        siteButtons.push({ name: name, url: url });
    });
    localStorage.setItem('siteButtons', JSON.stringify(siteButtons));
}
