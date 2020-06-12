const {
    deepEqual,
} = require('assert');

describe('Suite de testes para o cli de auxilio aos cegos', () => {

    it('Deve fazer o upload de um arquivo para análise e retornar os metadados apurados', () => {

        const expected = {
            statusCode: 200,
            Body: ''
        };

        const response = {};

        deepEqual(response, expected);

    });

    it('deve fazer o upload de uma pasta zipada e retornar uma url assinada do arquivo zipado', () => {

        const expected = {
            statusCode: 200,
            Body: ''
        };

        const response = {};

        deepEqual(response, expected);
    });

    it('Deve zipar arquivos remotos selecionados e retornar uma url assinada para download', () => {

        const expected = {
            statusCode: 200,
            Body: ''
        };

        const response = {};

        deepEqual(response, expected);
    });


    it('Deve retornar uma lista resultados de arquivos com seus metadados com base em um critério de busca, formato json', () => {
        const expected = {
            statusCode: 200,
            Body: ''
        };

        const response = {};

        deepEqual(response, expected);
    });
});