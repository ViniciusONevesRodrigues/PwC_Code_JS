import { assert } from 'chai';

import { simpleAddress, isForeignAddress } from '../js/functions.js';

describe('Testes para as funções', function () {
    it('Teste para simpleAddress', function () {
        const result = simpleAddress("Miritiba 339");
        assert.deepEqual(result, '{"Miritiba", "339"}');
    });

    it('Teste para biggerAddress', function () {
        const result = simpleAddress("Rio Branco 23");
        assert.deepEqual(result, '{"Rio Branco", "23"}');
    });

    it('Teste para foreignAddress', function () {
        const result = simpleAddress("Calle Sagasta, 26");
        assert.deepEqual(result, '{"Calle Sagasta", "26"}');
    });

    it('Teste para isForeignAddress', function () {
        const result = isForeignAddress(["Calle", "44", "No", "1991"]);
        assert.equal(result, 4);
    });
})
