const fs = require("fs");
const path = require("path");

// 要获取子目录的父目录路径
const directoryPath = "./public/demoPage/"; // 根据需要修改

// 同步方式获取目录下的所有子目录名称
const getDirectories = (src) => {
  return fs.readdirSync(src).filter((file) => {
    return fs.statSync(path.join(src, file)).isDirectory();
  });
};

const directories = getDirectories(directoryPath);

// 遍历每个子目录
directories.forEach((dir) => {
  // 构建子目录的完整路径
  const dirPath = path.join(directoryPath, dir);

  // 查找目录中的 .html 和 .css 文件
  const cssFiles = fs.readdirSync(dirPath).filter((file) => {
    return path.extname(file).toLowerCase() === ".css";
  });
  const jsFiles = fs.readdirSync(dirPath).filter((file) => {
    return path.extname(file).toLowerCase() === ".js";
  });

  const htmlFiles = fs.readdirSync(dirPath).filter((file) => {
    return path.extname(file).toLowerCase() === ".html";
  });

  // 构建 Markdown 文件内容
  let mdContent = `---
title: ${dir}
---

::: code-group\n`;

  if (htmlFiles.length > 0) {
    mdContent += `<<< @/public/demoPage/${dir}/${htmlFiles[0]}\n`;
  }

  cssFiles.forEach((file) => {
    mdContent += `<<< @/public/demoPage/${dir}/${file}\n`;
  });
  jsFiles.forEach((file) => {
    mdContent += `<<< @/public/demoPage/${dir}/${file}\n`;
  });

  mdContent += "\n:::";

  // 写入 Markdown 文件
  const mdFilePath = path.join(__dirname, `source/${dir}.md`);
  fs.writeFile(mdFilePath, mdContent, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log(`Created ${dir}.md`);
    }
  });
});

const dataToWrite = JSON.stringify(
  directories.map((name) => {
    return {
      name,
    };
  }),
  null,
  2
);
fs.writeFile(path.join(__dirname, "CardList.json"), dataToWrite, (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log("CardList.json写入完成");
  }
});

