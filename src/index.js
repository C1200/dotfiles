#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const files = path.join(__dirname, "..", "files");

fs.readdirSync(files).forEach(file => {
    const content = fs.readFileSync(path.join(files, file));
    fs.writeFileSync(path.join(process.cwd(), file), content);
});
