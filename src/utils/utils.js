export default {
  install (Vue, options) {
    Vue.prototype.util = {
      helloAction(val) {
        console.log(`😀 hello ${val}`, options)
      }
    }
  }
}
