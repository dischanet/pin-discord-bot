#!/bin/bash

cd /home/ec2-user/repos/js-discord-bot

sudo ./hooks/set-environment.sh
sudo ln -s ./hooks/js-discord-bot.service /etc/systemd/system/js-discord-bot.service
sudo /usr/bin/systemctl enable js-discord-bot