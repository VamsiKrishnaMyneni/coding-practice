const delay = (duration) => new Promise((resolve) => setTimeout(resolve, duration));

const promiseDelay = delay(1000).then(() => console.log('Hello!'));