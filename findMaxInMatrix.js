// find maximum in matrix;

function maxInMatrix(mat){
    let max = Number.MIN_VALUE;
    for(let i=0; i<mat.length; i++){
        for(let j=0; j<mat.length; j++){
            if(mat[i][j] > max){
                max = mat[i][j];
            }
        }
    };
    return max
}

console.log(maxInMatrix([[ 1, 2, 3, 4 ],
             [ 45, 6, 7, 8 ],
             [ 9, 10, 11, 12 ],
             [ 13, 14, 15, 16 ]]
             ))