'use strict';

require('console-stamp')(console);

const VirtualAssistant = require('virtual-assistant').VirtualAssistant;

let featureList = [
        //require('./fsm/regexchallenge/regexchallengefsm'),
        require('virtual-assistant-plugin-tictactoe'),
        //require('./fsm/configuration/configurationfsm')
    ],
    options = {
        slack: { token: process.env.SLACK_TOKEN }
    };

let assistant = new VirtualAssistant(featureList, options);
assistant.run();


