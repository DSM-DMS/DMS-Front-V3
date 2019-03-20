aws s3 sync ./build s3://dsm-dms --profile=dms-front --delete


aws cloudfront create-invalidation --profile=dms-front --distribution-id E22S3FTWFTVRXL --paths '/*'