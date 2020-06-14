const AWS = require('aws-sdk');
const util = require('util');
const {
    kMaxLength
} = require('buffer');
const readFile = util.promisify(require('fs').readFile);
class S3Service {

    constructor({
        s3Svc,
        rekoSvc
    }) {
        this._s3Service = s3Svc;
        this._rekoService = rekoSvc;
    }


    async listBuckets() {

        const resultStructure = {}
        const {
            Buckets = []
        } = await this._s3Service.listBuckets().promise();


        return 'Foram encontrados os seguintes buckets: \n' + Buckets.map(bucket => bucket.Name).join('\n');
    }

    /**
     * upload a file for given bucket
     * @param {string} filePath 
     * @param {string} bucket 
     */
    async upload(filePath, bucket) {



        //convert the filePath into a buffer

        const fileBuffer = await readFile(filePath);

        const params = {
            Bucket: bucket,
            Body: fileBuffer,
            Key: 'image-demo.jpeg',
        };


        const {
            Bucket,
            Key
        } = await this._s3Service.upload(params).promise();
        const labels = await this.detectLabels(Bucket, Key);

        return labels;
    }

    async detectLabels(bucket, name) {

        return await
        //  this._rekoService
        new AWS.Rekognition({
                region: 'us-east-1'
            })
            .detectLabels({

                Image: {
                    S3Object: {
                        Bucket: bucket,
                        Name: name,
                    }
                },
            }).promise();
    }
}

const myS3Service = new S3Service({
    s3Svc: new AWS.S3(),
    rekoSvc: new AWS.Rekognition({
        region: 'us-east-1'
    }),
});

module.exports = myS3Service;