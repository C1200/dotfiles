#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const noDot = ["gitignore"]
const files = path.join(__dirname, "..", "files");

fs.readdirSync(files).forEach(file => {
    const content = fs.readFileSync(path.join(files, file)).replace(/\$YEAR/g, new Date().getFullYear());
    fs.writeFileSync(path.join(process.cwd(), (noDot.includes(file) ? "." : "") + file), content);
});
