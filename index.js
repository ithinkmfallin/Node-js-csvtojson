const fs = require('fs')
const path = require('path')
const csvFilePath='customer-data.csv'
const csv=require('csvtojson')

csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
    	console.log('Creating JSON Day-tuh')
        fs.writeFileSync(path.join(__dirname, 'customer-data.json'), JSON.stringify(jsonObj,null,2))
        console.log('Done')
})