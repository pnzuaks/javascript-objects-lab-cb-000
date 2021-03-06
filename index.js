var recipes = {'key':'value'}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({},object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value})
}

function deleteFromObjectByKey(object, key) {
  var newRecipe = Object.assign({}, object)
  newRecipe
  delete newRecipe[key]
  return newRecipe
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
