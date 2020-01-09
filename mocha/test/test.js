const operation = require('../lib/calculadora')
const assert = require('assert')

it('should return true', () => {
  console.log(operation);
  assert.equal(operation.add(1,3),4);
})
it ('should resturn true', () =>{
  console.log(operation);
  assert.equal(operation.resta(1,4),3);
})
it ('should return true', () => {
  console.log(operation);
  assert.equal(operation.multiplicacion(2,2),4);
})
it ('should return true', () => {
  console.log(operation);
  assert.equal(operation.divicion(4,4),1);
})
//validacion de entradas invalidas
it('indicates failure when a string is used instead of a number', () => {
  assert.equal(operation.validateNumbers('sammy', 5), false)
})

it('indicates failure when two strings is used instead of numbers', () => {
  assert.equal(operation.validateNumbers('sammy', 'sammy'), false)
})

it('successfully runs when two numbers are used', () => {
  assert.equal(operation.validateNumbers(5, 5), true)
})