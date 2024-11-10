export default {
    async fetch(request) {
        const url = new URL(request.url);
        const { pathname, search } = url;

        // 解码查询参数
        const decodedSearch = decodeURIComponent(search).replace(/\\/g, '');

        // 确保路径只包含两个斜杠 //
        const correctedPathname = pathname.startsWith('//') ? pathname.replace(/^\/{3,}/, '//') : `//${pathname.replace(/^\/{0,1}/, '')}`

        // 生成重定向的 URL
        const destinationURL = `QDReader:${correctedPathname}${decodedSearch}`;

        // 打印重定向的 URL 进行检查
        console.log(`Redirecting to: ${destinationURL}`);

        // 执行重定向
        return Response.redirect(destinationURL, 301);
    }
};
