/* @flow */

function promiseDefer<T>(): { promise: Promise<T>, resolve: Function, reject: Function } {
  let reject
  let resolve
  const promise = new Promise(function(givenResolve, givenReject) {
    resolve = givenResolve
    reject = givenReject
  })
  // $FlowIgnore: We have set the values in promise constructor, but flow doesn't know
  return { promise, resolve, reject }
}

module.exports = promiseDefer
