#!/bin/bash
cd /home/ec2-user/app
npm install -g pm2
pm2 start app.js || pm2 restart app.js
pm2 save
