express = require('express');
const os = require('os');
const path = require('path');
const names = require('./components/names');
const hello = require('./components/hello');
const app = express();
const {readFileSync, writeFileSync} = require('fs');

const write = writeFileSync('./components/file.txt',`hellow file has written ${hello.func1(names.naveen)}`);

const read = readFileSync('./components/file.txt','utf8');

console.log(read);