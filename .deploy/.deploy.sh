cd ~/ulbiAnvanced
npm run build:prod

rm -rf ~/../var/www/ulbiAdvanced/html
mv ~/ulbiAnvanced/build ~/../var/www/ulbiAdvanced/html
