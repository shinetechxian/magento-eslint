# Magento ESlint使用方法

## 注意： 以下所有命令都要在本项目根目录下执行，以免出错

## 下载本项目代码

```
git clone https://github.com/shinetechxian/magento-eslint.git
```

## 安装nodejs环境

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

source ~/.bashrc
```

安装nodejs

``` nodejs
nvm install 14.16.1
```

``` nodejs
node -v //检查版本

<!-- 配置镜像源 -->
npm config set registry https://registry.npm.taobao.org
npm config get registry
或
yarn config set registry https://registry.npm.taobao.org --global

```

安装pnpm 或者yarn
```
npx pnpm add -g pnpm
或者
npm install -g yarn

source ~/.bashrc
```

## 使用方法pnpm/yarn

1. 安装需要的模块

```
pnpm install
或
yarn 
```

2. 复制需要检测代码的绝对路径

```
比如：/var/www/dockerdemo/app/demo.hp.php9.cc/app/code/HPOLS/Xxxxx
```

1. 根据需要执行js代码检测

```
pnpm [lint|fix] [hp模块的绝对路径]

// 仅js代码检测，不使用自动修复
pnpm lint /var/www/dockerdemo/app/demo.hp.php9.cc/app/code/HPOLS/Xxxxx
yarn lint /var/www/dockerdemo/app/demo.hp.php9.cc/app/code/HPOLS/Xxxxx

// 带eslint自动修复
pnpm fix /var/www/dockerdemo/app/demo.hp.php9.cc/app/code/HPOLS/Xxxxx
yarn fix /var/www/dockerdemo/app/demo.hp.php9.cc/app/code/HPOLS/Xxxxx

```
