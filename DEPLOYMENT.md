# GitHub Pages 部署指南 / GitHub Pages Deployment Guide

[English](#english) | [中文](#中文)

---

## 中文

### 概述
这是李曼瑶的个人学术作品集网站，专为GitHub Pages部署而设计的纯静态网站版本。网站支持中英文双语，无需构建过程即可直接部署。

### 部署步骤

#### 1. 准备GitHub仓库
1. 在GitHub上创建新仓库（建议命名为 `manyao-li-portfolio` 或 `portfolio`）
2. 将项目代码上传到仓库的主分支（main或master）

#### 2. 启用GitHub Pages
1. 进入GitHub仓库的 **Settings** 页面
2. 在左侧菜单中找到 **Pages** 选项
3. 在 **Source** 设置中选择：
   - **Source**: Deploy from a branch
   - **Branch**: main（或master）
   - **Folder**: `/docs`
4. 点击 **Save** 保存设置

#### 3. 配置自动部署（推荐）
项目已包含GitHub Actions配置文件（`.github/workflows/deploy.yml`），支持自动部署：

1. 确保仓库的 **Actions** 权限已启用
2. 进入 **Settings > Pages**
3. 将 **Source** 设置为 **GitHub Actions**
4. 每次推送代码到主分支时，网站将自动更新

#### 4. 访问网站
部署完成后，您的网站将可通过以下地址访问：
```
https://您的用户名.github.io/仓库名称
```

### 自定义域名（可选）
如果您拥有自定义域名：
1. 在 `docs` 文件夹中创建 `CNAME` 文件
2. 在文件中输入您的域名（如：`manyaoli.com`）
3. 在DNS提供商处配置CNAME记录指向 `您的用户名.github.io`

### 文件结构
```
docs/
├── index.html          # 主页面
├── styles.css          # 样式表
├── script.js           # 交互功能
├── images/
│   └── profile.jpg     # 个人照片
└── CNAME              # 自定义域名（可选）
```

### 更新内容
要更新网站内容：
1. 直接编辑 `docs/` 文件夹中的文件
2. 提交并推送更改到GitHub
3. 网站将自动更新（如使用GitHub Actions）

---

## English

### Overview
This is ManYao Li's personal academic portfolio website, designed as a pure static website for GitHub Pages deployment. The site supports bilingual content (English/Chinese) and can be deployed directly without any build process.

### Deployment Steps

#### 1. Prepare GitHub Repository
1. Create a new repository on GitHub (suggested name: `manyao-li-portfolio` or `portfolio`)
2. Upload the project code to the main branch (main or master)

#### 2. Enable GitHub Pages
1. Go to your GitHub repository's **Settings** page
2. Find **Pages** in the left sidebar
3. Configure the **Source** settings:
   - **Source**: Deploy from a branch
   - **Branch**: main (or master)
   - **Folder**: `/docs`
4. Click **Save**

#### 3. Configure Automatic Deployment (Recommended)
The project includes a GitHub Actions configuration file (`.github/workflows/deploy.yml`) for automatic deployment:

1. Ensure **Actions** permissions are enabled for your repository
2. Go to **Settings > Pages**
3. Set **Source** to **GitHub Actions**
4. Your website will automatically update whenever you push code to the main branch

#### 4. Access Your Website
After deployment, your website will be available at:
```
https://yourusername.github.io/repository-name
```

### Custom Domain (Optional)
If you own a custom domain:
1. Create a `CNAME` file in the `docs` folder
2. Enter your domain name in the file (e.g., `manyaoli.com`)
3. Configure a CNAME record with your DNS provider pointing to `yourusername.github.io`

### File Structure
```
docs/
├── index.html          # Main page
├── styles.css          # Stylesheet
├── script.js           # Interactive functionality
├── images/
│   └── profile.jpg     # Profile photo
└── CNAME              # Custom domain (optional)
```

### Updating Content
To update website content:
1. Edit files directly in the `docs/` folder
2. Commit and push changes to GitHub
3. Website will automatically update (if using GitHub Actions)

### Features
- **Bilingual Support**: Toggle between English and Chinese
- **Responsive Design**: Works on all devices
- **Professional Layout**: Academic portfolio focused
- **No Build Process**: Pure HTML/CSS/JavaScript
- **Fast Loading**: Optimized for performance
- **SEO Friendly**: Proper meta tags and structure

### Troubleshooting
- **Images not loading**: Ensure `profile.jpg` is in `docs/images/`
- **Pages not updating**: Check Actions tab for deployment status
- **404 errors**: Verify repository settings and file paths
- **Language toggle not working**: Check browser console for JavaScript errors

### Support
For questions or issues with this portfolio template, please check the repository's Issues section.