const assert = require('assert');
const roman = require('../app');

describe('Converts decimals to roman number', function() {

    it('1000 is M', function() {
        assert.equal(roman(1000), 'M');
        assert.equal(roman(2000), 'MM');
    });

    it('1 is I', function() {
        assert.equal(roman(1), 'I');
        assert.equal(roman(3), 'III');
    });

    it('1496 is MCDXCVI', function() {
        assert.equal(roman(1496), 'MCDXCVI');
    });

    it('0 is nothing', function() {
        assert.equal(roman(0), '');
    });

});
