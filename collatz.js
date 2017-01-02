function collatz(n){
  var num = n;
  var con = [n];
  var count = 1;

  while (num !== 1) {
    num = num % 2 === 0 ? (num / 2) : ((num * 3) + 1);
    con.push(num);
    count++;
  }
  
  // console.log(con);
  console.log('initial number: ' + n);
  console.log('length: ' + count);
  console.log('max reach: ' + Math.max.apply(null, con));
}

collatz(34);