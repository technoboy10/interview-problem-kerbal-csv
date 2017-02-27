// This solution uses NodeJS 6.x
const fs = require('fs');

const unTransform = function (x) {
    const k = Math.PI/(100 - (Math.PI/2)); // derived from formula on the git repo
    let actual = Math.atan(x) * k;
    if (x < 0) { // Negative numbers need to be shifted up by 100 due to quirks with atan
        actual += 100;
    }

    return Math.round(actual); // Change back to integer percent
}

// Brief refresher of file I/O in node from https://docs.nodejitsu.com/articles/file-system/how-to-read-files-in-nodejs/
fs.readFile('kerbals.csv', 'utf8', function (err, data) {
    if (err) {
        console.log(err); // shouldn't get here, but good to check anyway
    }

    let rows = data.split('\n'); // split CSV into rows
    let result = []; // initialize the result array
    const headers = rows[0].split(',')

    for (let row = 1; row < rows.length - 1; row++) { // Last item in rows is a blank string
        let parsed = rows[row].split(',');
        let currentKerbal = {};
        for (let col = 0; col < parsed.length; col++) { // Last item in parsed is a blank string
            // Tips from https://stackoverflow.com/questions/24932345/removing-all-instances-of-a-character-from-a-string
            if (col == 6 || col == 7) {
                // If we're parsing Courage or Stupidity, unTransform the value before adding it to the object
                currentKerbal[headers[col].replace(/"/g, '')] = unTransform(Number(parsed[col].replace(/"/g, ''))).toString();
            } else {
                currentKerbal[headers[col].replace(/"/g, '')] = parsed[col].replace(/"/g, '');
            }
        }
        result.push(currentKerbal);
    }
    console.log(JSON.stringify(result));
});
