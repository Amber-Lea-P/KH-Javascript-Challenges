const users =  `id,first_name,last_name,email,designation,registeredOn
1,Kata,Petrollo,Kata@jscorp.co,Budget/Accounting Analyst IV,1586786455
2,Rafaellle,Francescone,Rafaellle@jscorp.co,Quality Engineer,1591762193
3,Hort,Shufflebotham,Hort@jscorp.co,Paralegal,1604920379
4,Raimundo,Beddingham,Raimundo@jscorp.co,Librarian,1590530472
5,Jamaal,Hyde,Jamaal@jscorp.co,Quality Engineer,1606653657
3,Hort,Shufflebotham,Hort@jscorp.co,Paralegal,1604920379
1,Kata,Petrollo,Kata@jscorp.co,Budget/Accounting Analyst IV,1586786455`
;

const csvToRows = csv => {
    let output = [];
    csv.split('\n').forEach((row) => output.push(row));
    return output;
};
//console.log(csvToRows(users));


 let csvRows = csvToRows(users)
   
function removeDuplicates(csvRows) {
    return csvRows.filter((item,
        index) => csvRows.indexOf(item) === index);
    }
 
console.log(removeDuplicates(csvRows));
 