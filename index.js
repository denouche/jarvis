'use strict';

require('console-stamp')(console);

const VirtualAssistant = require('virtual-assistant').VirtualAssistant;

let featureList = [
        require('virtual-assistant-plugin-tictactoe'),
        require('virtual-assistant-plugin-regexp-challenge'),
        require('virtual-assistant-plugin-hello-world')
    ],
    options = {
        slack: { token: process.env.SLACK_TOKEN }
    };

let assistant = new VirtualAssistant(featureList, options);
assistant.run();

