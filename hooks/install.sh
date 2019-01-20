#!/bin/bash

cd /home/ec2-user/repos/pin-discord-bot

usr/bin/npm install --production

REGION=$(curl -s 169.254.169.254/latest/meta-data/local-hostname | cut -d '.' -f2)
PARAMETER_NAME=PIN_DISCORD_BOT_SECRET
echo "DISCORD_BOT_TOKEN=$(aws --region ${REGION} ssm get-parameter --name ${PARAMETER_NAME} --query "Parameter.Value" --output text)" > environment

cp ./hooks/pin-discord-bot.service /etc/systemd/system/pin-discord-bot.service
/usr/bin/systemctl enable pin-discord-bot
