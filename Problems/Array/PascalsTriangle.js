

// Approach 1
// Runtime: 52 ms
// Memory Usage: 33.8 MB
var generate = function (numRows) {
    // check for the corner case
    if (numRows == 0) return []

    let pascalTriangle = [[1]]
    // add the first element of the pascalTriangle


    // logic for the next enteries

    for (let i = 1; i < numRows; i++) {
        let previousRow = pascalTriangle[i - 1]
        let row = [1]

        for (let j = 1; j < i; j++) {
            row.push(previousRow[j - 1] + previousRow[j])

        }

        row.push(1);
        pascalTriangle.push(row)
    }

    return pascalTriangle;

}


// Approach 2
// Runtime: 52 ms
// Memory Usage: 33.9 MB

var generate1 = function(numRows){
    // edge case

    if (numRows == 0) return [];

    let triangle = []; // List[List[int]]

    for(let i=0; i< numRows; i++){
        let subArr = [];

        for(let j=0; j<=i; j++){
            if(j == 0 || j == i){
                subArr.push(1);
            }
            else{
                subArr[j] = triangle[i-1][j] + triangle[i-1][j-1]
            }
        }
        triangle.push(subArr)
    }

    return triangle;
}

// Approach 3
// Runtime: 64 ms
// Memory Usage: 33.9 MB

var generate2 = function(numRows){
    if (numRows == 0) return [];

    let triangle = [];

    for(let i=0; i< numRows; i++){
        let sub = [];
        for(let j=0; j <=i; j++){
            sub.push(1)
        }
        triangle.push(sub)
    }
    for(let i=1; i< numRows; i++){
        
        for(let j=1; j <i; j++){
            triangle[i][j] = triangle[i-1][j] + triangle[i-1][j-1]
        }
        
    }

    // console.log(triangle)
    return triangle;
    
}



let a = generate1(4);
let b = generate2(4);


console.log(a)
console.log(b)