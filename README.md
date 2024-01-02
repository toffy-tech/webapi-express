## サーバの起動

npm run dev

## リポジトリの概要

API の開発チュートリアル  
express, node.js を用いる

CRUD 処理を作る

## ホットリロードを適用

npm install nodemon --save-dev で nodemon をプロジェクト内にインストール

```
"scripts": {
    "dev": "node index.js"
  },
```

を

```
"scripts": {
    "dev": "nodemon index.js"
  },
```

に変更
