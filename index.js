const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    const {originalUrl} = req;
    const url = new URL(`http://localhost${originalUrl}`);
    const {pathname, search} = url;

    // 解码查询参数并去掉 转义的'\'
    const decodedSearch = decodeURIComponent(search).replace(/\\/g, '');

    // 确保路径只包含两个斜杠
    const correctedPathname = pathname.startsWith('//') ? pathname.replace(/^\/{3,}/, '//') : `//${pathname.replace(/^\/{0,1}/, '')}`

    // 生成重定向的 URL
    const destinationURL = `QDReader:${correctedPathname}${decodedSearch}`;

    // 打印重定向的 URL 进行检查
    console.log(`Redirecting to: ${destinationURL}`);

    // 执行重定向
    res.redirect(301, destinationURL);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
