// postcss 用来对编译好的css进行优化
const autoprefixer = require('autoprefixer')

module.exports = {
    plugins: [
        autoprefixer()
    ]
}