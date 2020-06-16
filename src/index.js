const S3Service = require('./services/s3.service');
const program = require('commander');
const package = require('../package.json');
const inquirer = require('inquirer');
const fs = require('fs');
program.version(package.version);

program
    .command('list')
    .description('List all buckets allowed')
    .action(async () => {
        const result = await S3Service.listBuckets();
        console.log(result);
    });


program
    .command('upload [filePath]')
    .requiredOption('-b, --bucket [value]', 's3 bucket')
    .description('upload image to S3 and returns object key')
    .action(async (filePath, options) => {

        let anwsers;
        if (!filePath || typeof filePath !== 'string') {

            anwsers = await inquirer.prompt([{
                type: 'input',
                name: 'filePath',
                message: 'Which file are you giving me to upload?',
                validate: (value) => {

                    if (!value) return 'Empty value not allowed.';

                    if (!fs.existsSync(value)) return 'The file not exist or we do not have permission to access it, try sudo.'

                    return true;
                }
            }]);

        }

        try {
            console.log('uploading your file....');
            // const result = await  S3Service.upload('./test/image-demo.jpeg', 'aws-serverless-treinamento-dev-us-east-1');
            const result = await S3Service.upload(filePath || anwsers.filePath, options.bucket);
            console.log(result);
        } catch (error) {
            console.log('Ops :( An error occurred. We were unable to upload your file. check if your bucket is correct and try again!');
            console.log('\n\n', error);

        }

    });


program
    .command('analyse')
    .requiredOption('-k, --key [key]', 'filename')
    .requiredOption('-b, --bucket [bucket]', 'bucket')
    .description('analyse image to detect labels')
    .action(async (options) => {
        console.log('Analysing your file...')
        const result = await S3Service.detectLabels(options.bucket, options.key);
        console.log(result);

    });


program.parse(process.argv);