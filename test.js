const os = require('os-utils');

// تابع برای نمایش میزان مصرف CPU هر ثانیه
setInterval(() => {
    os.cpuUsage((v) => {
        console.log('CPU Usage: ' + v);
    });
}, 1000);
