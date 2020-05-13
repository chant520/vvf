module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'import',
      { 
        libraryName: 'vant',
        libraryDirectory: 'es', 
        style: true //(name) => `${name}/style/2x` 
      },
      'vant'
    ]
  ]
};