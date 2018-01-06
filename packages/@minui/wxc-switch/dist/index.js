'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Component({
  behaviors: [],
  properties: {
    checked: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    activeColor: {
      type: String,
      value: '#ff5777'
    }
  },
  data: {},
  methods: {
    switch: function _switch() {
      var data = this.data;
      var checked = data.checked;
      var loading = data.loading;
      var disabled = data.disabled;

      if (loading || disabled) return false;

      this.setData({
        checked: !checked
      });

      this.triggerEvent('switch', {
        checked: this.data.checked
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4YyJdLCJuYW1lcyI6WyJiZWhhdmlvcnMiLCJwcm9wZXJ0aWVzIiwiY2hlY2tlZCIsInR5cGUiLCJCb29sZWFuIiwidmFsdWUiLCJkaXNhYmxlZCIsImFjdGl2ZUNvbG9yIiwiU3RyaW5nIiwiZGF0YSIsIm1ldGhvZHMiLCJzd2l0Y2giLCJsb2FkaW5nIiwic2V0RGF0YSIsInRyaWdnZXJFdmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBSUVBLGFBQVcsRTtBQUNYQyxjQUFZO0FBQ1ZDLGFBQVM7QUFDUEMsWUFBTUMsT0FEQztBQUVQQyxhQUFPO0FBRkEsS0FEQztBQUtWQyxjQUFVO0FBQ1JILFlBQU1DLE9BREU7QUFFUkMsYUFBTztBQUZDLEtBTEE7QUFTVkUsaUJBQWE7QUFDWEosWUFBTUssTUFESztBQUVYSCxhQUFPO0FBRkk7QUFUSCxHO0FBY1pJLFFBQU0sRTtBQUNOQyxXQUFTO0FBQ1BDLFlBQVEsbUJBQVc7QUFDakIsVUFBSUYsT0FBTyxLQUFLQSxJQUFoQjtBQUNBLFVBQUlQLFVBQVVPLEtBQUtQLE9BQW5CO0FBQ0EsVUFBSVUsVUFBVUgsS0FBS0csT0FBbkI7QUFDQSxVQUFJTixXQUFXRyxLQUFLSCxRQUFwQjs7QUFFQSxVQUFJTSxXQUFXTixRQUFmLEVBQXlCLE9BQU8sS0FBUDs7QUFFekIsV0FBS08sT0FBTCxDQUFhO0FBQ1hYLGlCQUFTLENBQUNBO0FBREMsT0FBYjs7QUFJQSxXQUFLWSxZQUFMLENBQWtCLFFBQWxCLEVBQTRCO0FBQzFCWixpQkFBUyxLQUFLTyxJQUFMLENBQVVQO0FBRE8sT0FBNUI7QUFHRDtBQWhCTSIsImZpbGUiOiJpbmRleC53eGMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGNvbmZpZzoge1xuICAgIHVzaW5nQ29tcG9uZW50czoge31cbiAgfSxcbiAgYmVoYXZpb3JzOiBbXSxcbiAgcHJvcGVydGllczoge1xuICAgIGNoZWNrZWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9LFxuICAgIGRpc2FibGVkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSxcbiAgICBhY3RpdmVDb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcjZmY1Nzc3J1xuICAgIH1cbiAgfSxcbiAgZGF0YToge30sXG4gIG1ldGhvZHM6IHtcbiAgICBzd2l0Y2g6IGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgICBsZXQgY2hlY2tlZCA9IGRhdGEuY2hlY2tlZDtcbiAgICAgIGxldCBsb2FkaW5nID0gZGF0YS5sb2FkaW5nO1xuICAgICAgbGV0IGRpc2FibGVkID0gZGF0YS5kaXNhYmxlZDtcblxuICAgICAgaWYgKGxvYWRpbmcgfHwgZGlzYWJsZWQpIHJldHVybiBmYWxzZTtcblxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgY2hlY2tlZDogIWNoZWNrZWRcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnc3dpdGNoJywge1xuICAgICAgICBjaGVja2VkOiB0aGlzLmRhdGEuY2hlY2tlZFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59Il19