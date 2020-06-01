export default (fn: Function, ...args: any[]) => {
  console.time(fn.name)
  let result = fn(...args);
  console.timeEnd(fn.name)
  return result;
}