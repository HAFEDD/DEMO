// 显示时间
function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridiem = "AM"; // 初始化

    // 转换为12小时制
    if (hours > 12) {
        hours = hours - 12;
        meridiem = "PM";
    }
    // 0时转为12时
    if (hours === 0) {
        hours = 12;
    }

    // 补零
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // 显示时间
    var timeDiv = document.getElementById('time');
    timeDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
}

// 更新时间
setInterval(updateTime, 1000);
