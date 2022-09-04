# space-apps-kushimoto.github.io

このリポジトリは Space Apps Kushimoto の公式サイトのリポジトリです。

https://space-apps-kushimoto.github.io/

## ブログの書き方
1. GitHub上でこのリポジトリをフォーク。

2. フォークしたリポジトリ上で、`/_posts/`ディレクトリに移動。
    - 例：`https://github.com/[your-name]/space-apps-kushimoto.github.io/tree/master/_posts`

3. [Create New File] をクリック
    - <img width="500" alt="スクリーンショット 2019-07-30 13 36 34" src="https://user-images.githubusercontent.com/8760841/62172910-f59d1e00-b36e-11e9-96c5-5281461ccf9f.png">
 
4. 記事を書く。

5. プルリクエストを送る。

### 投稿形式
- ファイル名を`YYYY-MM-DD-name-of-post.md`の形式で保存。
- 最初の行に下の形式でメタデータを追加。
    - https://github.com/ndrewtl/airspace-jekyll/blame/master/_posts/2016-05-20-welcome-to-jekyll.md#L1-L7
- マークダウン形式で記述。

## 開発者向け

```
$ git clone git@github.com:space-apps-kushimoto/space-apps-kushimoto.github.io.git
$ cd space-apps-kushimoto.github.io
$ bundle install --path vendor
```

ローカル環境の起動

```
$ bundle exec jekyll serve --watch --baseurl=""
```

## 参考

https://github.com/ndrewtl/airspace-jekyll
