const fs = require('fs');

if(!fs.existsSync('./My Files')) {
    fs.mkdir('./My Files', (err) => {
        if(err) {
            console.log(err);
        }
    });
}

if(fs.existsSync('./My Files')) {
    fs.readdirSync('./My Files').map((file) => {
        fs.stat(`./My Files/${file}`, (err, stats) => {
            if(err) {
                console.log(err);
            }
            else {
                var fileDate = `${stats.mtime.getDate()} / ${stats.mtime.getMonth() + 1} / ${stats.mtime.getFullYear()}`;
                var date = new Date();
                var currentDate = `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`;
                if(fileDate != currentDate) {
                    fs.unlink(`./My Files/${file}`, (error) => {
                        if(error) {
                            console.log(err);
                        }
                        else {
                            console.log(`${file} deleted...`);
                        }
                    });
                }
            }
        });
    });
    console.log('Folder is up to date...');
}
