# ? 빌드
node scripts/build.js


# ? 난독화
# yarn javascript-obfuscator ./build

# ? 빌드 파일 삭제 (난독화하면 빌드파일 + 난독화 파일 2개가 같이 존재 따라서 빌드 파일을 삭제 해야함)
# ? 그러나 현재 ./rewirte.py이 정상적으로 동작하지 않기 때문에 그냥 빌드한 파일만 올림
# python ./rewrite.py