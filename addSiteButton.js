// 添加网址按钮
function addSiteButton(name, url) {
    var navigation = document.getElementById('navigation');
    var button = document.createElement('a');
    button.setAttribute('href', url);
    button.setAttribute('target', '_blank');
    button.className = 'site-button';
  
    // 获取网站的favicon
    getFavicon(url, function(faviconUrl) {
      if (faviconUrl) {
        var icon = document.createElement('img');
        icon.className = 'site-icon';
        icon.setAttribute('src', faviconUrl);
        icon.setAttribute('alt', name);
        button.appendChild(icon);
      }
  
      var text = document.createElement('span');
      text.textContent = name;
      button.appendChild(text);
      navigation.appendChild(button);
  
      // 给每个按钮添加右键菜单
      button.addEventListener('contextmenu', function(event) {
        event.preventDefault(); // 阻止默认右键菜单
        contextMenu.style.display = 'block'; // 显示右键菜单
        contextMenu.style.left = event.pageX + 'px'; // 设置菜单位置
        contextMenu.style.top = event.pageY + 'px';
  
        // 记录当前右键点击的按钮
        currentButton = button;
      });
    });
  }
  
  // 获取网站的favicon
  function getFavicon(url, callback) {
    var faviconUrl = "https://www.google.com/s2/favicons?sz=64&domain_url=" + encodeURIComponent(url);
    var img = new Image();
    img.onload = function() {
      callback(faviconUrl);
    };
    img.onerror = function() {
      callback(null);
    };
    img.src = faviconUrl;
  }
  