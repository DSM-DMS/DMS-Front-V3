import os
import glob
import time
import io

dir_path = os.getcwd()
os.chdir(dir_path + '/build')

for file in list(glob.glob('*-obfuscated*.js')):
    obReader = io.open(file, 'r', encoding='UTF8')
    Reader = io.open(file.replace("-obfuscated",""), 'w', encoding='UTF8')

    Reader.write(obReader.read())
    Reader.close()
    obReader.close()

    # os.remove(os.getcwd()+"\\\\"+file)
    os.remove(os.getcwd()+"/"+file)


os.chdir(dir_path + '/build/static/js')


for file in list(glob.glob('*-obfuscated*.js')):
    obReader = io.open(file, 'r', encoding='UTF8')
    Reader = io.open(file.replace("-obfuscated",""), 'w', encoding='UTF8')

    Reader.write(obReader.read())
    Reader.close()
    obReader.close()

    os.remove(os.getcwd()+"\\\\"+file)