// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require("fs")

const date = new Date()

const start = date.getTime()

setTimeout(() => {
    console.log(`SetTimeout of 1 second`);
},1000)


fs.readFile("a.txt", "utf-8", (err, data) => {

    console.log("Inside Read File Method - Task 1");

    if (err) {
        console.log("Error Occured in Read a File: ",err);
    }
    else {
        console.log(data);
        console.log(typeof (data));
        
        const arr = data.split("\n")

        console.log(arr);

    }
    const end = date.getTime()
    
    console.log(`start: ${start} \nEnd: ${end} \nTime taken to read a file: ${end-start}`);
})

for (let i = 0; i < 1000; i++) {
}
console.log("After For Loop - Task 2");





