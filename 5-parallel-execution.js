import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN
export const getDirectorySize = (track, cb) => {
    fs.readdir(track, (_err1, files) => {
        if (_err1) {
            cb(_err1);
            return;
        }
        async.map(files, (file, cb) => {
            let file_track = path.join(track, file);
            fs.stat(file_track, (_err2, stats) => {
                if (_err2) {
                    cb(_err2);
                    return;
                }
                if (stats.isFile()) {
                    cb(null, stats.size)
                } else {
                    cb(null, 0);
                }
            })
        }, (_err3, sizes) => {
            if (_err3) {
                cb(_err3);
                return;
            }
            cb(null, _.sumBy(sizes))
        });
    })
}

export default getDirectorySize;
// END
