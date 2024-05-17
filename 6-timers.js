import fs from 'fs';

// BEGIN
export const watch = (track, period, cb) => {
    let time_check = Date.now();
    return setInterval(() => {
        fs.stat(track, (_err, stats) => {
            if (_err) {
                cb(_err);
                return;
            }
            if (stats.mtimeMs > time_check) {
                time_check = stats.mtimeMs;
                cb(null);
            }
        })
    }, period);
}

export default watch;
// END
