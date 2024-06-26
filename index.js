const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Success from Promise 1'), 1000);
  // setTimeout(() => reject('Failure from Promise 1'), 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Success from Promise 2'), 2000);
  // setTimeout(() => reject('Failure from Promise 2'), 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Success from Promise 3'), 3000);
  // setTimeout(() => reject('Failure from Promise 3'), 3000);
});

(async () => {
  // .all()
  const all = await Promise.all([promise1, promise2, promise3]);
  console.log('all', all);
  // .allSettled()
  const allSettled = await Promise.allSettled([promise1, promise2, promise3]);
  console.log('allSettled', allSettled);
  // .any()
  const any = await Promise.any([promise1, promise2, promise3]);
  console.log('any', any);
  // .race()
  const race = await Promise.race([promise1, promise2, promise3]);
  console.log('race', race);  
})(); // IIFE Immediately Invoked Function Expression
