# ? s3 버킷에 배포
aws s3 sync ./build s3://www.dsm-dms.com --profile=dms-front --delete

# ? cloudfront invalidation 생성
aws cloudfront create-invalidation --profile=dms-front --distribution-id E2AZYPH6ANMMCX --paths '/*'