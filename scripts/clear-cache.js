const fs = require('fs');
const path = require('path');

const nodeModulesCacheFolder = path.resolve(__dirname, '..', 'node_modules', '.cache');

async function deleteFolder(folderPath) {
    try {
        await fs.rm(
            folderPath,
            { },
            (err) => {
                if (err) {
                    console.error(`[POSTINSTALL]\n Error removing folder: ${err}`);
                    // throw new Error(err);
                } else {
                    console.log('[POSTINSTALL]\n Folder removed successfully');
                }
            },
        );
    } catch (err) {
        console.error(`Error deleting folder "${folderPath}":`, err);
    }
}

deleteFolder(nodeModulesCacheFolder);
