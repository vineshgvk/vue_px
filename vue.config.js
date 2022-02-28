// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue_px/'
    : '/'
}
(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
  (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
})(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-K0EYK7ZWBNRU-2");