const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

let translator = new Translator

suite('Unit Tests', () => {

  const spanO = '<span class="highlight">'
  const spanC = '</span>'
  
  test('1. Mangoes are my favorite fruit.', function(done) {
    assert.equal(translator.americanToBritish("Mangoes are my favorite fruit."), `Mangoes are my ${spanO}favourite${spanC} fruit.`)
    done()
  })
  
  test('2. I ate yogurt for breakfast.', function(done) {
    assert.equal(translator.americanToBritish("I ate yogurt for breakfast."), `I ate ${spanO}yoghurt${spanC} for breakfast.`)
    done()
  })
  
  test('3. We had a party at my friend\'s condo.', function(done) {
    assert.equal(translator.americanToBritish("We had a party at my friend's condo."), `We had a party at my friend's ${spanO}flat${spanC}.`)
    done()
  })
  
  test('4. Can you toss this in the trash for me?', function(done) {
    assert.equal(translator.americanToBritish("Can you toss this in the trash for me?"), `Can you toss this in the ${spanO}rubbish${spanC} for me?`)
    done()
  })
  
  test('5. The parking lot was full.', function(done) {
    assert.equal(translator.americanToBritish("The parking lot was full."), `The ${spanO}car park${spanC} was full.`)
    done()
  })
  
  test('6 Like a high tech Rube Goldberg machine.', function(done) {
    assert.equal(translator.americanToBritish("Like a high tech Rube Goldberg machine."), `Like a high tech ${spanO}Heath Robinson device${spanC}.`)
    done()
  })
  
  test('7. To play hooky means to skip class or work.', function(done) {
    assert.equal(translator.americanToBritish("To play hooky means to skip class or work."), `To ${spanO}bunk off${spanC} means to skip class or work.`)
    done()
  })
  
  test('8.  No Mr. Bond, I expect you to die.', function(done) {
    assert.equal(translator.americanToBritish("No Mr. Bond, I expect you to die."), `No ${spanO}Mr${spanC} Bond, I expect you to die.`)
    done()
  })
  
  test('9. Dr. Grosh will see you now.', function(done) {
    assert.equal(translator.americanToBritish("Dr. Grosh will see you now."), `${spanO}Dr${spanC} Grosh will see you now.`)
    done()
  })
  
  test('10. Lunch is at 12:15 today.', function(done) {
    assert.equal(translator.americanToBritish("Lunch is at 12:15 today."), `Lunch is at ${spanO}12.15${spanC} today.`)
    done()
  })

  test('11. We watched the footie match for a while.', function(done) {
    assert.equal(translator.britishToAmerican("We watched the footie match for a while."), `We watched the ${spanO}soccer${spanC} match for a while.`)
    done()
  })

  test('12. Paracetamol takes up to an hour to work.', function(done) {
    assert.equal(translator.britishToAmerican("Paracetamol takes up to an hour to work."), `${spanO}Tylenol${spanC} takes up to an hour to work.`)
    done()
  })

  test('13. First, caramelise the onions.', function(done) {
    assert.equal(translator.britishToAmerican("First, caramelise the onions."), `First, ${spanO}caramelize${spanC} the onions.`)
    done()
  })

  test('14. I spent the bank holiday at the funfair.', function(done) {
    assert.equal(translator.britishToAmerican("I spent the bank holiday at the funfair."), `I spent the ${spanO}public holiday${spanC} at the ${spanO}carnival${spanC}.`)
    done()
  })

  test('15. I had a bicky then went to the chippy.', function(done) {
    assert.equal(translator.britishToAmerican("I had a bicky then went to the chippy."), `I had a ${spanO}cookie${spanC} then went to the ${spanO}fish-and-chip shop${spanC}.`)
    done()
  })

  test('16. I\'ve just got bits and bobs in my bum bag.', function(done) {
    assert.equal(translator.britishToAmerican("I've just got bits and bobs in my bum bag."), `I've just got ${spanO}odds and ends${spanC} in my ${spanO}fanny pack${spanC}.`)
    done()
  })

  test('17. The car boot sale at Boxted Airfield was called off.', function(done) {
    assert.equal(translator.britishToAmerican("The car boot sale at Boxted Airfield was called off."), `The ${spanO}swap meet${spanC} at Boxted Airfield was called off.`)
    done()
  })

  test('18. Have you met Mrs Kalyani?', function(done) {
    assert.equal(translator.britishToAmerican("Have you met Mrs Kalyani?"), `Have you met ${spanO}Mrs.${spanC} Kalyani?`)
    done()
  })

  test('19. Prof Joyner of King\'s College, London.', function(done) {
    assert.equal(translator.britishToAmerican("Prof Joyner of King's College, London."), `${spanO}Prof.${spanC} Joyner of King's College, London.`)
    done()
  })

  test('20. Tea time is usually around 4 or 04.30.', function(done) {
    assert.equal(translator.britishToAmerican("Tea time is usually around 4 or 04.30."), `Tea time is usually around 4 or ${spanO}04:30${spanC}.`)
    done()
  })

  test('21. Highlight in Mangoes are my favorite fruit.', function(done) {
    assert.include(translator.americanToBritish("Mangoes are my favorite fruit."), `${spanO}`)
    done()
  })

  test('22. Highlight in I ate yogurt for breakfast.', function(done) {
    assert.include(translator.americanToBritish("I ate yogurt for breakfast."), `${spanO}`)
    done()
  })

  test('23. Highlight in We watched the footie match for a while.', function(done) {
    assert.include(translator.britishToAmerican("We watched the footie match for a while."), `${spanO}`)
    done()
  })

  test('24. Highlight in Paracetamol takes up to an hour to work.', function(done) {
    assert.include(translator.britishToAmerican("Paracetamol takes up to an hour to work."), `${spanO}`)
    done()
  })

});
