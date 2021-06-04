// Your code here

function mapToNegativize(sourceArray) {
    const negArray = []; 
    for(let element of sourceArray){
        negArray.push(element = element * -1) 
    }
    return negArray;

    // return sourceArray.map(element => element * -1);
};


function mapToNoChange(sourceArray) {
    
    return sourceArray
    
    // return sourceArray.map(element => element)
};

function mapToDouble(sourceArray) {
    
    const newArray = [];
    
    for(let element of sourceArray){
        newArray.push(element = element * 2) 
    }
    return newArray;
    // return sourceArray.map(element => element * 2);

};



function mapToSquare(sourceArray) {
    
    const newArray = [];
    
    for(let element of sourceArray){
        newArray.push(element = Math.pow(element,2)) 
    }
    return newArray;
    // return sourceArray.map(element => Math.pow(element,2));
};



function reduceToTotal(sourceArray, startingPoint=0){
    let total = startingPoint;
    // for(let num of sourceArray){
    //     total = total + num 
    // }

    for(let i = 0; i < sourceArray.length; i++ ){
        total = sourceArray[i] + total;
    }
    return total;
};

function reduceToAllTrue(sourceArray){
    let value = true;
    for(let item of sourceArray){
        if (item === false){
            value = false 
         }
    }
return value 
};


function reduceToAnyTrue(sourceArray){
    let value = false;
    for (let item of sourceArray){
        if (item === true) {
            value = true
        }
    }
    return value;
};




// solution presented by the following lab

// function mapToNegativize(src) {
//     let r = []
//     for (let i = 0; i < src.length; i++ ) {
//       r.push(-1 * src[i]) // Unique work
//     }
//     return r
//   }
  
//   function mapToNoChange(src) {
//     let r = []
//     for (let i = 0; i < src.length; i++ ) {
//       r.push(src[i]) // Unique work
//     }
//     return r
//   }
  
//   function mapToDouble(src) {
//     let r = []
//     for (let i = 0; i < src.length; i++ ) {
//       r.push(2 * src[i]) // Unique work
//     }
//     return r
//   }
  
//   function mapToSquare(src) {
//     let r = []
//     for (let i = 0; i < src.length; i++ ) {
//       r.push(src[i] * src[i]) // Unique work
//     }
//     return r
//   } 