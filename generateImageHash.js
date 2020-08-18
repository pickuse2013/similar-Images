const fs = require('fs');
const imghash = require('imghash');

let eagleLibraryFolder = 'D:\\test\\test.library';
eagleLibraryFolder += '\\images';

fs.readdir(eagleLibraryFolder, (err, files) => {
    files.forEach(file => {

        // access json file
        let metadata_json_location = eagleLibraryFolder + '\\' + file + '\\' + 'metadata.json';
        fs.readFile(metadata_json_location, (err, data) => {
            if (err) throw err;

            let metadata = JSON.parse(data);

            let image_location = eagleLibraryFolder + '\\' + file + '\\' + metadata.name + "." + metadata.ext;

            imghash.hash(image_location).then((hash) => {
                console.log(hash); // '1000100010000010'

                metadata.imagehash = hash
                metadata = JSON.stringify(metadata);
                fs.writeFileSync(metadata_json_location, metadata);
            });;
        });

    });
});