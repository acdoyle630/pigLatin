/*jshint esversion: 6*/

const chai = require('chai');
const expect = chai.expect;

const pig = require('../js/app.js');


describe('pig latin function',() => {
  let myPigModule = null;
  beforeEach(() => {
    myPigModule = pig();
  }) ;
  it('should be a function',() => {
    expect(pig).to.be.a('function');
  });
  it('should return a string',() => {
    expect(myPigModule.piggy('Doyle')).to.be.a('string');
  });
  it('should throw error for non string',()=> {
    expect(myPigModule.piggy.bind(null, 555)).to.throw(Error);
  });
  it('should pigify string',() => {
    expect(myPigModule.piggy('snow')).to.be.equal('ow-snay');
    expect(myPigModule.piggy('doyle')).to.be.equal('oyle-day');
    expect(myPigModule.piggy('basketball')).to.be.equal('asketball-bay');
    expect(myPigModule.piggy('tupac')).to.be.equal('upac-tay');
  });
  it('should return words with no vowels unaltered',() => {
    expect(myPigModule.piggy('why')).to.be.equal('why');
    expect(myPigModule.piggy('ffttyyqwz')).to.be.equal('ffttyyqwz');
  });

});

describe('unpig',() => {
  beforeEach(() => {
    myPigModule = pig();
  });
  it('should unpig pigified words', ()=>{
    expect(myPigModule.unPig('oyle-day')).to.be.equal('doyle');
    expect(myPigModule.unPig('ow-snay')).to.be.equal('snow');
    expect(myPigModule.unPig('upac-tay')).to.be.equal('tupac');
    expect(myPigModule.unPig('adddd-snsnay')).to.be.equal('snsnadddd');
  });
});