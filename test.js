const testHelper1 = function () {
  console.log('testHelper1 called');
  return 1;
}

const testHelper2 = function(param) {
  console.log('testHelper2 called');

  return 2 + param;
}


// call function 1
testHelper1();
