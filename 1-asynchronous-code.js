import fs from 'fs';

// BEGIN
export const print = (track) => {
    const callback = (_error, data) => console.log(data);
    fs.readFile(track, 'utf-8', callback);
}

export default print;
// END
