'use strict';
var qcloud = require('./vendor/wafer2-client-sdk/index');
var config = require('./config');
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App({
  globalData: {},
  onLaunch: function onLaunch() {},
  onShow: function onShow() {},
  onHide: function onHide() {},
  onLaunch() {
    qcloud.clearSession();
    qcloud.setLoginUrl(config.service.loginUrl);
  },
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC53eGEiXSwibmFtZXMiOlsiZ2xvYmFsRGF0YSIsIm9uTGF1bmNoIiwib25TaG93Iiwib25IaWRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFrQklBLGNBQVksRTtBQUNaQyxVLHNCQUFZLENBQUcsQztBQUNmQyxRLG9CQUFVLENBQUcsQztBQUNiQyxRLG9CQUFVLENBQUciLCJmaWxlIjoiYXBwLnd4YSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb25maWc6IHtcbiAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAnbGF5b3V0LWhlYWQnOiAnbGF5b3V0L2hlYWQnLFxuICAgICAgICAnbGF5b3V0LWZvb3QnOiAnbGF5b3V0L2Zvb3QnXG4gICAgICB9LFxuICAgICAgcGFnZXM6IFtdLFxuICAgICAgd2luZG93OiB7XG4gICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdkYXJrJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2VmZWZlZicsXG4gICAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ3BvdGF0bycsXG4gICAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcbiAgICAgIH0sXG4gICAgICBuZXR3b3JrVGltZW91dDoge1xuICAgICAgICByZXF1ZXN0OiAxMDAwMFxuICAgICAgfVxuICAgIH0sXG4gICAgZ2xvYmFsRGF0YTogeyB9LFxuICAgIG9uTGF1bmNoICgpIHsgfSxcbiAgICBvblNob3cgKCkgeyB9LFxuICAgIG9uSGlkZSAoKSB7IH1cbiAgfSJdfQ==