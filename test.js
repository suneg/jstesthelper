function testHelper1() {
  console.log('testHelper1 called');
  return 1;
}

function testHelper2(param) {
  console.log('testHelper2 called');

  return 2 + param;
}


// call function 1
testHelper1();
