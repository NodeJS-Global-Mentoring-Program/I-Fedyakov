import fs from 'fs';
import csv from 'csvtojson';

const sourceFilePath = './csv/books.csv';
const readable = fs.createReadStream(sourceFilePath, {
	highWaterMark: 64,
	encoding: 'utf-8'
});

const targetFilePath = './books.txt';
const writable = fs.createWriteStream(targetFilePath, 'utf-8');

const csvConfig = {headers: ['book', 'author', 'price']}
readable.pipe(csv(csvConfig)).pipe(writable);

readable.on('error', err => console.log(new Error(err).message));
writable.on('error', err => console.log(new Error(err).message));