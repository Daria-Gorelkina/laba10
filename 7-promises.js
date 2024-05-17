import fsp from 'fs/promises';

// BEGIN
export const reverse = (track) => {
    return fsp.readFile(track, 'utf-8')
        .then((data) => {
        const lines = data.trim().split('\n').reverse().join('\n');
        return fsp.writeFile(track, lines);
    })
}

export default reverse;

// END