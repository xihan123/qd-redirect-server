# 项目说明 / Project Description

## 功能概述 / Overview

该项目使用 Express 框架创建了一个服务器，用于对 URL 进行重定向。服务器监听 3000 端口，并通过中间件处理请求和重定向。

This project creates a server using the Express framework to perform URL redirection. The server listens on port 3000
and processes requests and redirections through middleware.

## 功能特性 / Features

- 使用 Express 框架创建服务器
- 监听 3000 端口
- 实现中间件对请求进行处理和重定向
- 重定向 URL 格式为 `QDReader:<corrected_pathname><decoded_search>`
- 确保路径只包含两个斜杠
- 解码查询参数并去掉转义的 `\`

- Create a server using the Express framework
- Listen on port 3000
- Implement middleware to process requests and redirections
- Redirect URL format as `QDReader:<corrected_pathname><decoded_search>`
- Ensure the path contains only two slashes
- Decode query parameters and remove escaped `\`

## 使用方法 / Usage

1. 克隆项目到本地
2. 进入项目目录
3. 运行 `npm install` 安装依赖
4. 运行 `npm start` 启动服务器
5. 访问 `http://localhost:3000` 测试重定向功能

1. Clone the project to your local machine
2. Navigate to the project directory
3. Run `npm install` to install dependencies
4. Run `npm start` to start the server
5. Access `http://localhost:3000` to test the redirection functionality

## 测试地址 / Test URLs

- https://redirect.qidian.lat
- https://redirect.qidian.lat/app/showBook?query=%7B%22bookId%22:1036370336%7D
- https://redirect.xihan.website
- https://redirect.xihan.website/app/showBook?query=%7B%22bookId%22:1036370336%7D

## Docker 使用 / Docker Usage

1. 构建 Docker 镜像：`docker build -t your-image-name .`
2. 运行 Docker 容器：`docker run -p 3000:3000 your-image-name`

1. Build the Docker image: `docker build -t your-image-name .`
2. Run the Docker container: `docker run -p 3000:3000 your-image-name`

## 文件说明 / File Description

- `Dockerfile`: 用于构建 Docker 镜像的配置文件
- `index.js`: 服务器的主要代码文件
- `.gitignore`: Git 忽略文件配置
- `README.md`: 项目说明文档

- `Dockerfile`: Configuration file for building the Docker image
- `index.js`: Main code file for the server
- `.gitignore`: Git ignore file configuration
- `README.md`: Project description document

## 许可证 / License

此项目使用 GPL 3.0 许可证。详情请参阅 [LICENSE](LICENSE)。

This project is licensed under the GPL 3.0 License. See the [LICENSE](LICENSE) file for details.