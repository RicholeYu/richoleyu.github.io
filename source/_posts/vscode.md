---
title: Vscode 配置
date: 2019-04-04 17:26:16
tags:
---
错误：无法提交处理 (无效或已损坏的软件包 (PGP 签名))
修改/etc/pacman.conf
设置SigLevel = Never

```
# msys2 常用环境配置

# 安装命令
pacman -S 
# 卸载命令
pacman -Rs 

# node、git、npm等命令不要用pacman安装，修改.bashrc 新增环境变量使用windows同一套命令
export PATH=/c/git:$PATH

# VSCODE 集成MSYS2 终端 设置 settings.json
"terminal.integrated.shell.windows": "D:\\program\\msys64\\usr\\bin\\bash.exe",
"terminal.integrated.shellArgs.windows": [
    "--login"
],
"terminal.integrated.env.windows": {
    "CHERE_INVOKING": "1"
},
```

.editorconfig (需要安装EditorConfig vscode插件)
```
root = true
[*]
charset = utf-8
indent_style = space
indent_size = 4
end_of_line = crlf
insert_final_newline = true
trim_trailing_whitespace = true
```

.eslintrc.js (Eslintrc vue 默认配置)
[Eslint 文档](https://cloud.tencent.com/developer/chapter/12618)
```
module.exports = {
    root: true,
    // parser: "babel-eslint",
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    env: {
        browser: true,
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: ["standard", "eslint:recommended", "plugin:vue/essential"],
    // required to lint *.vue files
    plugins: [
        "vue"
    ],
    // add your custom rules here
    "rules": {
        //"off"或0 -关闭规则
        //"warn" 或1 - 开启规则, 使用警告 程序不会退出
        //"error"或2 - 开启规则, 使用错误 程序退出
        "indent": ["error", 4],
        //分号
        "eqeqeq": "off",
        "no-useless-escape": "off",
        "brace-style": 0,//大括号风格
        "curly": ["error", "all"], //[2, "all"],//必须使用 if(){} 中的{}
        "no-new": "off",
        "no-return-assign": "warn",//return 语句中不能有赋值表达式

        "handle-callback-err": 0,
        "padded-blocks": 0,
        "no-duplicate-imports": 0,
        "operator-linebreak": 0,
        "no-extend-native": 0,
        "no-sequences": 0,

        "no-debugger": 0,
        "no-eval": 0,
        "comma-dangle": ["error", "never"],
        "arrow-spacing": ["error", { "before": true, "after": true }],
        "no-undef": "error",
        "no-console": 0,
        "space-before-function-paren": ["error", "always"],
        "keyword-spacing": ["error", { "before": true, "after": true }],
        "space-before-blocks": ["error", "always"],
        "spaced-comment": ["error", "always", {"exceptions": ['-', '+']}],
        "quotes": ["error", "double"],
        "semi": ["error", "never"],
        "no-multiple-empty-lines": ["error", {"max": 1}],
        "generator-star-spacing": ["error", { "before": true, "after": true }],
        "object-curly-newline": ["error", {
            "ObjectPattern": {
                "multiline": true
            }
        }],
        "object-curly-spacing": ["error", "always"],
        "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
        "linebreak-style": ["error", "windows"],
		"eol-last": ["error", "windows"],
        "object-property-newline": ["error", {}],
        "vue/html-indent": ["error", 4, {
            "attribute": 1,
            "baseIndent": 1,
            "closeBracket": 0,
            "alignAttributesVertically": true,
            "ignores": []
        }],
        // "vue/html-closing-bracket-newline": ["error", {
        //     "multiline": "always"
        // }],
        // "vue/max-attributes-per-line": ["error", {
        //     "singleline": 100,
        //     "multiline": {
        //       "max": 1,
        //       "allowFirstLine": true
        //     }
        // }]
    },
    globals: {
        "_": true,
        "arguments": true,
        "ActiveXObject": true
    }
}

```