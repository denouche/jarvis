'use strict';

require('console-stamp')(console);

const VirtualAssistant = require('virtual-assistant').VirtualAssistant;

let featureList = [
        require('virtual-assistant-plugin-tictactoe'),
        require('virtual-assistant-plugin-regexp-challenge'),
        require('virtual-assistant-plugin-sed-challenge'),
        require('virtual-assistant-plugin-hello-world')
    ],
    options = {
        slack: {
            token: process.env.SLACK_TOKEN,
            administrators: ['U2Q4ALC6B' /* eli */, 'U0DHA6T5L' /* group */]
        }
    };

let assistant = new VirtualAssistant(featureList, options);
assistant.run();

