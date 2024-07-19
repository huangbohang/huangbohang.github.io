---
outline: deep
title: Web 应用中的存储方式
titleTemplate: 黄博航的博客
---

## 一、日期处理

#### 1. 检查日期是否有效

```js
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());

isDateValid("December 17, 1995 03:24:00"); // true
```

#### 2. 计算两个日期之间的间隔

```js
const dayDif = (date1, date2) =>
  Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);

dayDif(new Date("2021-11-3"), new Date("2022-2-1")); // 90
```

#### 3. 查找日期位于一年中的第几天

```js
const dayOfYear = (date) =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

dayOfYear(new Date()); // 307
```

#### 4. 时间格式化

```js
const timeFromDate = (date) => date.toTimeString().slice(0, 8);

timeFromDate(new Date(2021, 11, 2, 12, 30, 0)); // 12:30:00
timeFromDate(new Date()); // 返回当前时间 09:00:00
```

## 二、字符串处理

#### 1. 字符串首字母大写

```js
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

capitalize("hello world"); // Hello world
```

#### 2. 翻转字符串

```js
const reverse = (str) => str.split("").reverse().join("");

reverse("hello world"); // 'dlrow olleh'
```

#### 3. 随机字符串

```js
const randomString = () => Math.random().toString(36).slice(2);

randomString();
```

#### 4. 截断字符串

```js
const truncateString = (string, length) =>
  string.length < length ? string : `${string.slice(0, length - 3)}...`;

truncateString("Hi, I should be truncated because I am too loooong!", 36); // 'Hi, I should be truncated because...'
```

#### 5. 去除字符串中的 HTML

```js
const stripHtml = (html) =>
  new DOMParser().parseFromString(html, "text/html").body.textContent || "";
```

## 三、数组处理

#### 1. 从数组中移除重复项

```js
const removeDuplicates = (arr) => [...new Set(arr)];

console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 4, 5, 5, 6]));
```

#### 2. 判断数组是否为空

```js
const isNotEmpty = (arr) => Array.isArray(arr) && arr.length > 0;

isNotEmpty([1, 2, 3]); // true
```

#### 3. 合并两个数组

```js
const merge = (a, b) => a.concat(b);

const merge = (a, b) => [...a, ...b];
```

## 四、数字操作

#### 1. 判断一个数是奇数还是偶数

```js
const isEven = (num) => num % 2 === 0;

isEven(996);
```

#### 2. 获得一组数的平均值

```js
const average = (...args) => args.reduce((a, b) => a + b) / args.length;

average(1, 2, 3, 4, 5); // 3
```

#### 3. 获取两个整数之间的随机整数

```js
const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

random(1, 50);
```

#### 4. 指定位数四舍五入

```js
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);

round(1.005, 2); //1.01
round(1.555, 2); //1.56
```

## 五、颜色操作

#### 1. 将 RGB 转化为十六机制

```js
const rgbToHex = (r, g, b) =>
  "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

rgbToHex(255, 255, 255); // '#ffffff'
```

#### 2. 获取随机十六进制颜色

```js
const randomHex = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0")}`;

randomHex();
```

## 六、浏览器操作

#### 1. 复制内容到剪切板

```js
const copyToClipboard = (text) => navigator.clipboard.writeText(text);

copyToClipboard("Hello World");
```

#### 2. 清除所有 cookie

```js
const clearCookies = document.cookie
  .split(";")
  .forEach(
    (cookie) =>
      (document.cookie = cookie
        .replace(/^ +/, "")
        .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`))
  );
```

#### 3. 获取选中的文本

```js
const getSelectedText = () => window.getSelection().toString();

getSelectedText();
```

#### 4. 检测是否是黑暗模式

```js
const isDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

console.log(isDarkMode);
```

#### 5. 滚动到页面顶部

```js
const goToTop = () => window.scrollTo(0, 0);

goToTop();
```

#### 6. 判断当前标签页是否激活

```js
const isTabInView = () => !document.hidden;
```

#### 7. 判断当前是否是苹果设备

```js
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);

isAppleDevice();
```

#### 8. 是否滚动到页面底部

```js
const scrolledToBottom = () =>
  document.documentElement.clientHeight + window.scrollY >=
  document.documentElement.scrollHeight;
```

#### 9. 重定向到一个 URL

```js
const redirect = (url) => (location.href = url);

redirect("https://www.google.com/");
```

#### 10. 打开浏览器打印框

```js
const showPrintDialog = () => window.print();
```

## 七、其他操作

#### 1. 随机布尔值

```js
const randomBoolean = () => Math.random() >= 0.5;

randomBoolean();
```

#### 2. 获取变量的类型

```js
const trueTypeOf = (obj) =>
  Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();

trueTypeOf(""); // string
trueTypeOf(0); // number
trueTypeOf(); // undefined
trueTypeOf(null); // null
trueTypeOf({}); // object
trueTypeOf([]); // array
trueTypeOf(0); // number
trueTypeOf(() => {}); // function
```

#### 3. 华氏度和摄氏度之间的转化

```js
const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

celsiusToFahrenheit(15); // 59
celsiusToFahrenheit(0); // 32
celsiusToFahrenheit(-20); // -4
fahrenheitToCelsius(59); // 15
fahrenheitToCelsius(32); // 0
```

#### 4. 检测对象是否为空

```js
const isEmpty = (obj) =>
  Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;
```
