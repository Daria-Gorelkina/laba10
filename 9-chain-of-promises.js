import fsp from 'fs/promises';

// BEGIN
import { promises as fsPromises } from 'fs';
export const getTypes = (track) => {
    const promises = track.map(path =>
        fsPromises.stat(path)
            .then(stats => {
                if (stats.isDirectory()) {
                    return 'directory';
                } else {
                    return 'file';
                }
            })
            .catch(() => null)
    );
    return Promise.all(promises);
}

export default getTypes;
// END