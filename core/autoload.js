const fs = require("fs");
const path = require("path");

/**
 * Autoload class is responsible for recursively reading all the filenames and store it in the object having key value pair. This class
 * has the significance of loading required modules and returning the paths which is necessary for dynamic loading of all the directories
 * and subdirectories. Since, no multiple new autoload instances can be dealt so the instance of this class is made singleton using 
 * Singleton Design Pattern.   
 */
class Autoload {

    /**
     * @constructor
     */
    constructor() {
        this.fileObject = {};
    }

    /**
     * Get the singleton instance of the Autoload class.
     * @returns {Object} The Autoload instance.
     */
    static getInstance() {
        if (!Autoload.instance) {
            Autoload.instance = new Autoload();
        }
        return Autoload.instance;
    }

    /**
     * This function takes root path as an input, recursively iterates it and loads the file object with paths.
     * It is using the file system module which has the method readdirSync for synchronously reading the directories
     * and subdirectories using the recursive call.
     * @param {string} dirPath 
     */
    getAllFiles(dirPath) {
        let self = this;
        let excludeFiles = [".git", ".nyc_output", "coverage", "cypress", "docs", "node_modules", "test", "autoload.js", ".gitlab-ci.yml", ".nycrc.json", "cypress.json", "package-lock.json", "jsdoc.json", "package.json"];
        let files = fs.readdirSync(dirPath);

        files.forEach(function (file) {

            if (excludeFiles.includes(file)) { return; }
            if (fs.statSync(dirPath + "/" + file).isDirectory()) {
                self.getAllFiles(dirPath + "/" + file);
            } else {
                let fileName = file.substring((file.lastIndexOf("/")) + 1, file.lastIndexOf("."));
                self.fileObject[fileName] = path.join(dirPath, "/", file);
            }
        })
    }

    /**
     * Returns the path specified in the parameter.
     * @param {string} fileName 
     * @returns {string} the module path.
     */
    getFileName(fileName) {
        this.getAllFiles(process.env.PWD);
        return require(this.fileObject[fileName]);
    }
}

module.exports = Autoload;