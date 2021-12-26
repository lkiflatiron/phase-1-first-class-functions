function receivesAFunction(cb) {
  return cb()
}

function returnsANamedFunction() {
  return function Named () {
    console.log ("Puddlie")
  }
}

function returnsAnAnonymousFunction () {
  return tester => console.log(tester)
}