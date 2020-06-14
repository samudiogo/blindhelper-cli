const S3Service = require ('./services/s3.service');

async function main() {
    

    try {
        // const result = await  S3Service.upload('./test/image-demo.jpeg', 'aws-serverless-treinamento-dev-us-east-1');
        const result = await S3Service.listBuckets();
        

        console.log(result)
    } catch (error) {
        console.log('error:', error)
    }


}

main();