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
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended'],
  rules: {
    "indent": ["error", 4],
    "eqeqeq": "off",
    "no-useless-escape": "off",
    "brace-style": 0,
    "curly": ["error", "all"],
    "no-new": "off",
    "no-return-assign": "warn",
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
    "object-curly-newline": ["error", "always"],
    "linebreak-style": ["error", "windows"],
    "eol-last": ["error", "windows"],
    "object-property-newline": ["error", {}]
  }
}
```