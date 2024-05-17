import fs from 'fs';

// BEGIN
export const write = (track, data, cb) => {
    fs.writeFile(track, data, cb);
}

export default write;
// END