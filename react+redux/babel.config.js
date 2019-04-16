const babelConfig = {
    presets: [
        [
            "@babel/preset-react", {
                useBuiltIns: "entry",
                corejs: 2
            }
        ],
        "@babel/preset-env",
        ["@babel/preset-typescript"]
    ],
    plugins: [
        "@babel/plugin-syntax-dynamic-import",
        ["import", {
            "libraryName": "antd",
            "libraryDirectory": "es",
            "style": true // `style: true` 会加载 less 文件
          }],
         ['@babel/plugin-transform-runtime'],
         '@babel/plugin-proposal-class-properties',
         '@babel/plugin-proposal-unicode-property-regex'
    ]
}
/**
 * useBuiltIns是关键属性，它会根据 browserlist 是否转换新语法与 polyfill 新 AP业务代码使用到的新 API 按需进行 polyfill
 *  false : 不启用polyfill, 如果 import '@babel/polyfill', 会无视 browserlist 将所有的 polyfill 加载进来
    entry : 启用，需要手动 import '@babel/polyfill', 这样会根据 browserlist 过滤出 需要的 polyfill
    usage : 不需要手动import '@babel/polyfill'(加上也无妨，构造时会去掉), 且会根据 browserlist +
    注：经测试usage无法支持IE，推荐使用entry，虽然会大几十K。


    @babel/plugin-transform-runtime和@babel/runtime-corejs2，前者是开发时候使用，后者是生产环境使用。
    主要功能：避免多次编译出helper函数：Babel转义后的代码想要实现和原来代码一样的功能需要借助一些帮助函数。
    还可以解决@babel/polyfill提供的类或者实例方法污染全局作用域的情况。
 * */
module.exports = babelConfig;