const { execSync } = require('child_process');
const program = require('commander');
console.log()

var start, end;
program
    .arguments('<start> <end>')
    .action(function (s, e) {
        start = s
        end = e
    })
program.parse(process.argv)
var i = start;
function cap() {
    console.log(`正在抓取页码：${i}`)
    execSync("adb shell /system/bin/screencap -p /sdcard/book/" + i + ".png");
    execSync("adb shell input tap 950 950");
    if (++i <= end) {
        setTimeout(cap, 1000)
    }
}
cap()