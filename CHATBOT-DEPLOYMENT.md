# Chatbot 部署说明 / Chatbot Deployment Guide

## 中文

### 问题诊断
如果在GitHub Pages上看不到chatbot，可能的原因：

1. **缓存问题** - 浏览器缓存了旧版本
   - 解决方法：按 Ctrl+F5 (Windows) 或 Cmd+Shift+R (Mac) 强制刷新

2. **部署延迟** - GitHub Pages需要时间更新
   - 解决方法：等待3-5分钟后重新访问

3. **iframe安全策略** - 某些浏览器阻止第三方iframe
   - 解决方法：检查浏览器控制台是否有错误信息

### 验证步骤
1. 访问你的GitHub Pages网站
2. 点击导航栏中的"Chatbot"链接
3. 滚动到Chatbot区域
4. 如果看到白色框但没有chatbot，等待10秒
5. 如果显示"暂时不可用"，点击"在新窗口中打开"链接

### 备用方案
如果chatbot无法正常显示，访客可以：
- 点击"在新窗口中打开聊天机器人"直接访问
- 使用Contact区域的联系方式直接联系

---

## English

### Troubleshooting
If you can't see the chatbot on GitHub Pages, possible causes:

1. **Browser Cache** - Browser cached old version
   - Solution: Press Ctrl+F5 (Windows) or Cmd+Shift+R (Mac) to force refresh

2. **Deployment Delay** - GitHub Pages needs time to update
   - Solution: Wait 3-5 minutes and revisit

3. **iframe Security Policy** - Some browsers block third-party iframes
   - Solution: Check browser console for error messages

### Verification Steps
1. Visit your GitHub Pages website
2. Click "Chatbot" link in navigation
3. Scroll to Chatbot section
4. If you see white box but no chatbot, wait 10 seconds
5. If shows "temporarily unavailable", click "open in new window"

### Fallback Options
If chatbot doesn't display properly, visitors can:
- Click "Open chatbot in new window" for direct access
- Use Contact section for direct communication

### Technical Implementation
- The chatbot is embedded using iframe from Chatbase
- Fallback mechanism shows alternative if iframe fails
- Mobile responsive design included
- Bilingual support (English/Chinese)