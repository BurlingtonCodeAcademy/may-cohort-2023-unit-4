/* 
!   Promise
    Is an object that may produce a singular value in the future.

    3 states:
        - pending
        - fulfilled
        - rejected

    Takes in two parameters:
        - Resolve
        - Reject
    
    Always returns an object
*/

// function getData() {
//     setTimeout(() => {
//         // console.log('data');
//         return "some data";
//     }, 3000);
// }

// let data = getData(); // the value comes "late" - 3 seconds
// console.log(data); // We get an undefined because the info is delayed when compiled.

//* Callback - functions that get executed after the end of a process.
function getData(cb) {
    setTimeout(() => {
        cb("some data");
    }, 3000);
}

getData(data => console.log(data));

// setTimeout(() => {
    getData(data => {
        let newString = data + " and more data...";
        console.log(newString);
    });
// }, 2000);
console.log("Hello");

/* 
* A promise is an object that produce a singular value in the future.

    - Resolved
    - Rejected
        - These detail what to do depending on the results.
*/

function returnData() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true) {
                resolve('some data from Promise');
                // resolve(10);
                // resolve({
                //     key: 10,
                //     newkey: 20
                // });
            } else {
                reject('This is rejected');
            }

        }, 2000);
    });

}

console.log(returnData());
/* 
    - When returned, the returnData() func. will give us a string instead of a Promise Object.

    - Chained with a resolver
        - Keyword:
            - .then() - if successful
                - can be chained together
            - .catch() - if there is an error
            - Take in CB functions
            - note: only put semicolor (;) after the LAST resolver.
*/

returnData()
    .then(data => console.log("From Response: ", data))
    .then(() => console.log('from second .then()'))
    .catch(function(err) {
        console.error(err); // provides our rejection results
    });

/*  
    The Process:
        - Creating a new Promise.
            - resolve / reject are paramters of a cb function.
        - setTimeout acting as our "waiting" for a response.
        - resolve() or reject() said promise
        - When returned, returns a promise - not a string
        - use of resolvers (.then() / .catch()) with cb function to help extrapolate the info from that promise.
*/
