const fs = require('fs');
const TransformStream = require('stream').Transform;

const readStream = fs.createReadStream(__dirname + '/demo.txt');
const fileWriteStream = fs.createWriteStream(__dirname + '/writeDemo.txt');

const transformedStream = new TransformStream({
    transform(chunk, enc, cb) {
        this.push(chunk.toString());
        setTimeout(cb, 1000);
    }
})

const writeStream = process.stdout;

const outputStream = readStream.pipe(transformedStream);

outputStream.pipe(writeStream);
outputStream.pipe(fileWriteStream);

// readStream.pipe(transformedStream).pipe(writeStream);