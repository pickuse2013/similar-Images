const fs = require('fs');
const imghash = require('imghash');
const leven = require('leven');

//eagle的library
let eagleLibraryFolder = 'D:\\test\\test.library';

//要尋找相似的圖片
let hash = imghash.hash('D:\\Users\\pickuse\\Desktop\\test.png')

eagleLibraryFolder += "\\images";

Promise.all([hash]).then((results) => {
    fs.readdir(eagleLibraryFolder, (err, files) => {
        files.forEach(file => {

            // access json file
            let metadata_json_location = eagleLibraryFolder + '\\' + file + '\\' + 'metadata.json';
            fs.readFile(metadata_json_location, (err, data) => {
                if (err) throw err;

                let metadata = JSON.parse(data);
                let image_location = eagleLibraryFolder + '\\' + file + '\\' + metadata.name + "." + metadata.ext;

                const dist = leven(results[0], metadata.imagehash);

                //console.log(`Distance between images is: ${dist}`);
                if (dist <= 12) {
                    console.log('Images are similar:', image_location);
                }

            });

        });
    });
});