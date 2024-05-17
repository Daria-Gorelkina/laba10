import fs from 'fs';

// BEGIN
export const compareFileSizes = (track1, track2, cb) => {
    fs.stat(track1, (_err, stats1) => fs.stat(track2, (_err, stats2) => {const result = Math.sign(stats1.size - stats2.size);
        cb(null, result)}));
}

export default compareFileSizes;
// END