# 相似圖片 Similar Images 

## 執行方式

```
node <js file name>
```

## 檔案說明
### generateImageHash.js
產生哈希值並保存至 Eagle 素材庫中的 metadata

修改以下路徑至library中
```
let eagleLibraryFolder = 'D:\\test\\test.library';
```

### searchImageByImage.js
搜尋相似的圖片

修改以下路徑至library中
```
let eagleLibraryFolder = 'D:\\test\\test.library';
```

修改以下變數路徑至要找相似度的圖片
```
let hash = imghash.hash('D:\\Users\\pickuse\\Desktop\\test.png')
```

