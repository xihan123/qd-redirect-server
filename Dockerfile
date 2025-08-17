# syntax=docker/dockerfile:1

# ----------- 构建阶段 -----------
FROM node:22-alpine AS builder
WORKDIR /app

# 只复制依赖文件用于缓存依赖安装层
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# 只复制应用源代码（不拷贝多余文件）
COPY index.js ./

# ----------- 运行阶段 -----------
FROM node:22-alpine

# 只创建运行所需目录，使用非root用户
WORKDIR /app
USER node

# 只拷贝生产依赖和必要文件
COPY --from=builder --chown=node:node /app/node_modules ./node_modules
COPY --from=builder --chown=node:node /app/index.js ./
COPY --from=builder --chown=node:node /app/package.json ./

# Docker最佳实践：不包含锁文件到生产（如需可加）
# COPY --from=builder --chown=node:node /app/package-lock.json ./

# 不暴露无用端口
EXPOSE 3000

# 只定义启动命令
CMD ["node", "index.js"]