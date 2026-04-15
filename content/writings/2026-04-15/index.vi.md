+++
date = '2026-04-17T20:55:41+07:00'
draft = false
title = 'VSCode setup for AEM Development'
+++

## Extension


|     |    Extension                        |     Author      |
| --- | -------------------------- | --------- |
|     | Extension Package for Java | Microsoft |
|     | AEM Sync                   | Yinkai15  |
|     | SCSS IntelliSense          | mrmlnc    |
|     | SCSS Formatter             | Sibiraj   |

## Vscode Settings json

```json
{
    "files.autoSave": "afterDelay",
    "editor.fontSize": 16,
    "editor.fontFamily": "'FiraCode Nerd Font Mono', consolas, monospace",
    // Language server
    "java.jdt.ls.vmargs": "-XX:+UseParallelGC -XX:GCTimeRatio=4 -XX:AdaptiveSizePolicyWeight=90 -Dsun.zip.disableMemoryMapping=true -Xmx6G -Xms512m -Xlog:disable",
    "java.gradle.buildServer.enabled": "off",
    // scope search, index
    "files.exclude": {
        "**/.vlt": true,
        "**/.vlt-sync": true,
        "**/target": true,
        "**/node_modules": true,
        "**/.git": true,
        "**/.svn": true,
        "**/.hg": true,
        "**/.DS_Store": true,
        "**/Thumbs.db": true
    },
    "search.exclude": {
        "**/target": true,
        "**/node_modules": true,
        "**/.vlt": true,
        "**/.vlt-sync": true,
        "**/bower_components": true,
        "**/*.code-search": true
    },
    // 3. optimize build system
    "java.configuration.updateBuildConfiguration": "interactive",
    "java.autobuild.enabled": true,
    "java.maxConcurrentBuilds": 1,
    // 4. config for AEM
    "emmet.includeLanguages": {
        "html": "htl",
    },
    "files.associations": {
        "*.content.xml": "xml",
        "*.dialog.xml": "xml",
        "*.htl": "html",
        "*.html": "html",
        "_cq_dialog/.content.xml": "xml"
    },
    "[scss]": {
        "editor.tabSize": 2,
        "editor.insertSpaces": true
    },
    "[html]": {
        "editor.defaultFormatter": "vscode.html-language-features"
    },
    "[java]": {
        "editor.tabSize": 4
    },
    "aemsync.syncDelay": 300,
    "[jsonc]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }   
}
```