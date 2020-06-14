const {
    deepEqual,
} = require('assert');

const S3Service = require('../src/services/s3.service');

describe('Suite de testes para o cli de auxilio aos cegos', () => {


    it('Deve listar todos os buckets cadastrados', async () => {



        const expected = `
Foram encontrados os seguintes buckets: 
aws-serverless-treinamento-dev
aws-serverless-treinamento-dev-us-east-1
codepipeline-sa-east-1-164129412540
document-list-dev-serverlessdeploymentbucket-1aacwqlgm5897
elasticbeanstalk-sa-east-1-095239824842
sdtech.com.br
sdtechapi-images`.trim();

        const response = await S3Service.listBuckets();

        deepEqual(response, expected);
    })

    it('Deve fazer o upload de um arquivo para um bucket s3 para análise e retornar os metadados apurados', () => {

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