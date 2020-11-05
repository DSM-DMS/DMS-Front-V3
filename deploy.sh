aws s3 sync ./build s3://www.dsm-dms.com --profile=dms-front --delete


 aws cloudfront create-invalidation --profile=dms-front --distribution-id E2AZYPH6ANMMCX --paths '/*'