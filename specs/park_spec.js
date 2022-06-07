const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park 
  let dinosaur_1
  let dinosaur_2
  let dinosaur_3
  beforeEach(function () {
    park = new Park('Codeclan Park', 10)
    dinosaur_1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur_2 = new Dinosaur('velociraptor', 'carnivore', 30)
    dinosaur_3 = new Dinosaur('diplodocus', 'herbivore', 40)
  })

  it('should have a name', function(){
    const actual = park.name;
    const expected = 'CodeclanPark';
    assert.strictEqual(actual, 'Codeclan Park')
  })

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    const expected = 10;
    assert.strictEqual(actual, 10)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDino(dinosaur_1)
    const actual = park.numOfDinos();
    assert.strictEqual(actual, 1)

  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDino(dinosaur_1);
    park.addDino(dinosaur_2);
    park.removeDinoByName(dinosaur_1);
    const expected = [dinosaur_2];
    const actual = park.dinosaurs
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDino(dinosaur_1);
    park.addDino(dinosaur_2);
    park.addDino(dinosaur_3);
    actual = park.mostVisitedDino();
    assert.deepStrictEqual(actual, dinosaur_1);
  });

  it('should be able to find all dinosaurs of a particular species');


  it('should be able to calculate the total number of visitors per day', function() {
    park.addDino(dinosaur_1);
    park.addDino(dinosaur_2);
    park.addDino(dinosaur_3);
    actual = park.dailyVisitors();
    assert.strictEqual(actual, 120);
  });


  it('should be able to calculate the total number of visitors per year', function() {
    park.addDino(dinosaur_1);
    park.addDino(dinosaur_2);
    park.addDino(dinosaur_3);
    actual = park.annualVisitors();
    assert.strictEqual(actual, 43800);
  });


  it('should be able to calculate total revenue for one year', function() {
    actual = park.annualRevenue();
    assert.strictEqual(actual,438000)
  });

});
