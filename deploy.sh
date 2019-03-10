aws s3 sync ./build s3://dms.istruly.sexy --profile=dms-front --delete


aws cloudfront create-invalidation --profile=dms-front --distribution-id E21TKAFAH9QAXZ --paths '/*'