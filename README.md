# 学生信息管理系统

基于 Vue 3 + Vite 构建的学生信息管理系统，支持用户登录、学生信息的增删改查功能。

## How to Run

```bash
# 构建并启动容器
docker-compose up --build -d

# 查看运行状态
docker-compose ps

# 查看日志
docker-compose logs -f frontend-admin

# 停止服务
docker-compose down
```

本地开发运行：

```bash
cd frontend-admin
npm install
npm run dev
```

## Services

| 服务名称 | 端口 | 说明 |
|---------|------|------|
| frontend-admin | 8081 | 学生信息管理系统前端服务 |

访问地址：http://localhost:8081

## 测试账号

| 用户名 | 密码 |
|--------|------|
| admin | 123456 |

## 题目内容

新建一个vue3项目，

1. 用户登录界面
   - 验证用户名和密码（admin/123456）
   - 登录成功跳转到首页

2. 学生信息展示首页
   - 顶部显示系统标题和退出按钮
   - 提供添加学生表单：包含姓名、专业、年级字段，自动生成学生ID，添加后立即更新列表
   - 以表格形式展示学生列表：显示字段为ID、姓名、专业、年级，支持删除学生信息

3. 简单的路由导航
   - 配置登录页和首页路由
   - 实现路由跳转和重定向

4. 学生信息管理系统界面设计参考：
   - 登陆界面
   - 学生信息展示首页

一、项目设计要求
1. 使用Vue 3 Composition API
2. 实现组件化开发，至少包含登录组件和首页组件
3. 使用Vue Router实现页面路由
4. 实现表单数据绑定和验证
5. 使用条件渲染和列表渲染
6. 应用样式绑定和事件处理

项目要求为:
1. 必须提供 README.md，除了要包含你的项目介绍，需要在最前面增加三个二级标题 1 How to Run 2 Services 3 测试账号 4 题目内容(上述的项目需求)
2. 编写一个Dockerfile（需要包含编译过程、基础镜像要选用跨平台版本 同时支持 ARM 和 X86）
3. 前端项目的对外映射端口为 8081，如有两个就是 8081、8082
4. 根目录增加 docker-compose.yml 和 .gitignore 和 README.md
5. 项目目录清晰禁止所有逻辑堆在单一文件中
6. 视觉分层：必须通过背景色、卡片阴影、边框区分功能区。禁止页面元素平铺在纯白背景上。布局与对齐：严格遵守栅格或 Flex 布局，间距（Padding/Margin）需统一（如 8px/16px/24px）。渲染完整性：图片使用占位符，图标使用 Icon 组件，确保无破损显示。交互反馈：按钮需有 Hover 效果和 Loading 状态；操作成功/失败需有 Toast/Message 提示。风格统一：字体颜色、字号、圆角风格必须保持全站一致。

---

## 技术栈

- Vue 3 (Composition API)
- Vue Router 4
- Vite 5
- Docker + Nginx

## 项目结构

```
├── frontend-admin/                 # 前端管理后台
│   ├── public/                     # 静态资源
│   │   └── vite.svg
│   ├── src/
│   │   ├── components/             # 公共组件
│   │   │   ├── BaseButton.vue      # 按钮组件
│   │   │   ├── BaseInput.vue       # 输入框组件
│   │   │   ├── BaseModal.vue       # 弹窗组件
│   │   │   ├── BaseSelect.vue      # 下拉选择组件
│   │   │   ├── ConfirmDialog.vue   # 确认对话框组件
│   │   │   ├── DataTable.vue       # 数据表格组件
│   │   │   └── Toast.vue           # 消息提示组件
│   │   ├── composables/            # 组合式函数
│   │   │   ├── useAuth.js          # 认证逻辑
│   │   │   ├── useStudents.js      # 学生数据管理
│   │   │   └── useToast.js         # 消息提示逻辑
│   │   ├── router/                 # 路由配置
│   │   │   └── index.js
│   │   ├── styles/                 # 全局样式
│   │   │   └── global.css
│   │   ├── views/                  # 页面组件
│   │   │   ├── Home.vue            # 首页
│   │   │   └── Login.vue           # 登录页
│   │   ├── App.vue                 # 根组件
│   │   └── main.js                 # 入口文件
│   ├── Dockerfile                  # Docker 构建文件
│   ├── index.html                  # HTML 入口
│   ├── nginx.conf                  # Nginx 配置
│   ├── package.json                # 项目配置
│   └── vite.config.js              # Vite 配置
├── .gitignore                      # Git 忽略文件
├── docker-compose.yml              # Docker Compose 配置
└── README.md                       # 项目说明文档
```

## 功能特性

- ✅ 用户登录/登出
- ✅ 路由守卫（未登录自动跳转登录页）
- ✅ 学生信息 CRUD（增删改查）
- ✅ 表单验证
- ✅ 消息提示（Toast）
- ✅ 自定义弹窗组件
- ✅ 自定义下拉选择组件
- ✅ 响应式布局
- ✅ Element Plus 风格 UI
- ✅ 按钮 Hover/Loading 状态
- ✅ Docker 容器化部署（支持 ARM64 和 X86）
