for d in */ ; do
    cd $d
    pwd
    mkdir v1data
    mv * v1data/
    cd ..
done