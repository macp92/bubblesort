describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([5, 3, 9, 7, 4]) ).toEqual( [[5, 3], [9, 7, 4]] );
    // your code here
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge([3, 5] ,[4, 71]) ).toEqual( [3, 4, 5, 71] );
    // test the merging algorithm
  });
});

describe('MergeSort function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( mergeSort([3, 5, 4, 7]) ).toEqual( [3, 4, 5, 7] );
    expect( mergeSort([5, 18, 2, 6, 13, 20, 4]) ).toEqual( [2, 4, 5, 6, 13, 18, 20] )
    // test the merging algorithm
  });
});

