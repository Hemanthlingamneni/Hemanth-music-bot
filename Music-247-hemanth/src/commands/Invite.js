/* eslint-disable linebreak-style */
const Command = require('../abstract/Command.js');
const util = require('../../util');

class Clear extends Command {
    get name() {
        return 'invite';
    }

    get usage() {
        return 'invite';
    }

    get description() {
        return 'bot invite';
    }

    async run(msg) {
      msg.channel.send('https://discord.com/api/oauth2/authorize?client_id=857319268499980338&permissions=8&scope=bot')
    }
}
module.exports = Clear;
