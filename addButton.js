document.getElementById('addButton').addEventListener('click', function(event) {
  event.preventDefault(); // 阻止默认的表单提交行为

  // 创建一个遮罩层，用于覆盖整个页面
  var overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);

  // 创建输入框容器
  var inputBox = document.createElement('div');
  inputBox.classList.add('input-box');

  // 创建网址名称输入框
  var nameLabel = document.createElement('label');
  nameLabel.textContent = '名称:';
  var nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameLabel.appendChild(nameInput);

  // 创建网址输入框
  var urlLabel = document.createElement('label');
  urlLabel.textContent = '网址:';
  var urlInput = document.createElement('input');
  urlInput.setAttribute('type', 'text');
  urlLabel.appendChild(urlInput);

  // 创建确定按钮
  var okButton = document.createElement('button');
  okButton.textContent = '确定';

  // 创建取消按钮
  var cancelButton = document.createElement('button');
  cancelButton.textContent = '取消';
  cancelButton.addEventListener('click', function() {
      document.body.removeChild(overlay);
      document.body.removeChild(inputBox);
  });

  // 将输入框和按钮添加到输入框容器
  inputBox.appendChild(nameLabel);
  inputBox.appendChild(urlLabel);
  inputBox.appendChild(okButton);
  inputBox.appendChild(cancelButton);

  // 将输入框容器添加到页面中央
  document.body.appendChild(inputBox);
  inputBox.style.top = '50%';
  inputBox.style.left = '50%';
  inputBox.style.transform = 'translate(-50%, -50%)';

  // 确定按钮点击事件处理
  okButton.addEventListener('click', function() {
      var name = nameInput.value;
      var url = urlInput.value;
      
      if (name && url) {
          // 检查url是否以"http://"或"https://"开头，如果没有，则添加
          if (!url.startsWith("http://") && !url.startsWith("https://")) {
              url = "http://" + url;
          }
          addSiteButton(name, url);
          saveSiteButton(name, url); // 保存按钮信息
          document.body.removeChild(overlay);
          document.body.removeChild(inputBox);
      } else {
          alert('请输入有效的网址名称和网址！');
      }
  });
});

// 点击遮罩层关闭输入框
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('overlay')) {
      document.body.removeChild(document.querySelector('.overlay'));
      document.body.removeChild(document.querySelector('.input-box'));
  }
});


// 添加按钮样式和排列
var addButton = document.getElementById('addButton');
addButton.className = 'site-button'; // 使用网址按钮样式
var navigation = document.getElementById('navigation');
navigation.appendChild(addButton); // 将添加按钮放置在网址按钮容器的末尾
