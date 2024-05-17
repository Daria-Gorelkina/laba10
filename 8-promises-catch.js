import fsp from 'fs/promises';

// BEGIN
import { promises as fsPromises } from 'fs';
export const touch = (track) => {
    return fsPromises.access(track).catch((err) => {
        if (err.code === 'ENOENT') {
            fsp.writeFile(track, '');
        } else {
            throw err;
        }
    })
}

export default touch;
// END