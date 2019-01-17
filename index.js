var recipes = {'key':'value'}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({},object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value})
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
