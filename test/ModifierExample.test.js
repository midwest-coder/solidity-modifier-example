const { assert } = require('chai');
const ModifierExample = artifacts.require('ModifierExample')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('ModifierExample', () => {
  let modifierExample

  before(async () => {
    // Load Contracts
    modifierExample = await ModifierExample.new()
  })

  describe('Modifier Example Contract', async () => {
      it('Has a name', async () => {
          const name = await modifierExample.name()
            assert.equal(name, 'Solidity modifier example')
      })

      it('Has a function with a modifier that requires the number variable to be 4', async () => {
          const before = await modifierExample.worked();
          await modifierExample.checkModifier();
          const after = await modifierExample.worked();
          assert.notEqual(before == after)
      })
  })
})