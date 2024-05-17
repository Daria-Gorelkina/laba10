import fs from 'fs';

// BEGIN
export const move = (track, new_track, cb) => {
    fs.readFile(track, 'utf-8', (error1, data1) => {
        if (error1) {
            cb(error1);
            return;
        }
        fs.writeFile(new_track, data1, (error2) => {
            if (error2) {
                cb(error2);
                return;
            }
            fs.unlink(track, (error3) => {
                if (error3) {
                    cb(error3);
                    return;
                }
                cb(null);
            })
        })
    })
}

export default move;
// END
