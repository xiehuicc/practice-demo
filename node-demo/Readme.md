### git回滚操作
reset还是revert?
1. reset
    如果发现，在第四次修改有错误，需要回滚到第三次修改，就可以用reset命令来回退;使用reset命令，Git会把要回退版本之后提交的修改都删除掉
    git reset --hard 需要回退到的版本号
