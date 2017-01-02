# jarvis

This is my chat bot based on https://github.com/denouche/virtual-assistant

To add features to the bot, just add the npm dependencies and import the plugins to the bot.

## Try it in local

To run the bot in local:

```
npm install
SLACK_TOKEN="xoxb-your-slack-bot-token" npm start
```

## Run with docker

```
make image
docker run -d --restart=always -e "SLACK_TOKEN=xoxb-your-slack-bot-token" denouche/jarvis
```

## Contribute

If you want to add features to the bot, you can contribute by creating feature-plugins based on https://github.com/denouche/virtual-assistant or also develop your private plugins also based on this library for your own needs.
