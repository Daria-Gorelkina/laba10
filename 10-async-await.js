import fsp from 'fs/promises';

// BEGIN
export const exchange = async (track1, track2) => {
    try {
        const data1 = await fsp.readFile(track1, 'utf-8');
        const data2 = await fsp.readFile(track2, 'utf-8');

        await fsp.writeFile(track1, data2);
        await fsp.writeFile(track2, data1);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export default exchange;
// END