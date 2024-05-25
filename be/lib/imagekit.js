const ImageKit = require("imagekit");

let imagekit = new ImageKit({
    publicKey : "public_AO4OxyseHhskRgpVivNttNVOJk4=",
    privateKey : "private_AFDwQOMnPzaJC78rv2oq0fDCwkM=",
    urlEndpoint : "https://ik.imagekit.io/ffznrr"
});

const uploadToImageKit = async (request) => {
    const file = request.file;
    const split = file.originalname.split(".");
    const ext = split[split.length - 1];

    const img = await imagekit.upload({
        file: file.buffer,
        fileName: `IMG_${Date.now()}.${ext}`,
    });
    return img;
}

module.exports = { uploadToImageKit }; // Meng-ekspor fungsi UploadToImageKit dalam objek
