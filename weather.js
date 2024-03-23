// 使用天气 API 的示例 URL，根据实际情况修改为你选择的 API 和相应的 API Key
var weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=CityName&appid=YourApiKey';

// 获取天气信息并显示
function getWeather() {
  // 使用 fetch API 发送 HTTP 请求获取天气数据
  fetch(weatherApiUrl)
    .then(response => response.json())
    .then(data => {
      var weatherInfo = '天气: ' + data.weather[0].description + ', 温度: ' + (data.main.temp - 273.15).toFixed(1) + '°C';
      document.getElementById('weather').textContent = weatherInfo;
    })
    .catch(error => {
      console.error('获取天气信息时出现错误:', error);
      document.getElementById('weather').textContent = '天气信息暂不可用';
    });
}

// 页面加载时初始化天气信息
getWeather();
