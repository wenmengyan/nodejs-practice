function test(n) {
  //代码
  console.log(n);
}
for (let i = 0; i < 100; i++) {
  const n = parseInt(Math.random() * 10);
  test(n);
}

