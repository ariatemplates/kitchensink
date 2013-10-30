/*
 * Copyright 2013 Amadeus s.a.s.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var fs = require('fs');

var ImgToBase64 = function (cfg) {
    cfg = cfg || {};
    cfg.files = cfg.files || ['**/*.css'];
    this.config = cfg;
};

ImgToBase64.prototype.onWriteInputFile = function (packaging, outputFile, inputFile) {
    if (!inputFile.isMatch(this.config.files)) {
        return;
    }
    var css = inputFile.getTextContent();

    var files = {};
    css = css.replace(/url\((\S*)\.(png|jpg|jpeg|gif)\)/g, function (match, file, type) {
        var fileName = 'src/' + file + '.' + type;
        var size = fs.statSync(fileName).size;
        if (size > 6144) {
            console.log('Skipping ' + fileName + ' (' + (Math.round(size / 1024 * 100) / 100) + 'k)');
            return match;
        } else {
            var base64 = fs.readFileSync(fileName).toString('base64');
            if (typeof(files[fileName]) !== 'undefined') {
                console.log('Warning: ' + fileName + ' has already been base64 encoded in the css');
            }
            files[fileName] = true;

            var shortName = file + '.' + type;
            shortName = shortName.replace(/\//g, "\\");
            var sourceFiles = packaging.sourceFiles;
            for (var file in sourceFiles) {
                if (sourceFiles.hasOwnProperty(file)) {
                    var curFile = sourceFiles[file];
                    if (curFile.logicalPath == shortName) {
                        delete sourceFiles[file];
                    }
                }
            }

            return 'url("data:image/' + (type === 'jpg' ? 'jpeg' : type) + ';base64,' + base64 + '")';
        }
    });
    inputFile.setTextContent(css);
};

module.exports = ImgToBase64;