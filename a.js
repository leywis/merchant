/**
 * git 常用命令
 */

 /** 创建版本库 */
 // git init  #初始化本地仓库
 // git clone #克隆项目

 /** 修改和提交 */
 // git status  #查看状态
 // git diff    #比较不同
 // git add   #跟踪文件
 // git commit -m 'desc'  #提交改动

 /** 分支操作 */
 // git branch <name>  #创建新分支
 // git branch           #查看分支
 // git checkout <name>  #切换分支

 /** 撤销 */
 // git reset --hard HEAD  #撤销所有未提交的文件
 // git checkout HEAD <file> #撤销指定文件修改
 // git revert  #撤销指定提交

 /** 合并 */
 // git merge <branch>   #合并指定分支到当前分支
