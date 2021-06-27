/* eslint-disable linebreak-style */

const Command = require('../abstract/Command.js');
const util = require('../../util');
const misc = require('../../misc.json');

class Help extends Command {
    get name() {
        return 'help';
    }

    get usage() {
        return 'help';
    }

    get description() {
        return 'help';
    }


    async run(msg) {

        const embed = util.embed()
            .setTitle('>  <a:gvt_rsarrow:858688317680123945> Music-Boat  Commands List')
            .setDescription(`My Prefix is ${misc.prefix}`)
            .addField('** <a:music:858688829169991720> ❯ Music**:','`Play`,`Forward`, `Rewind`, `Lyrics`, `Pause`, `Queue`, `Replay`, `Search`, `Seek`, `Seek2`, `Skip`, `Skipto`, `Stop`, `Ping`, `Remove`, `Removedupes`, `Clear`,  `Volume`, `Shuffle`, `Nowplaying`, `Move`')
            .addField('** <a:flash:858693006978580482> ❯  Filters**:','`Bassboost`, `Rate`, `Pitch`, `Speed`, `Rotation`, `Nightcore`, `Vaporwave`,`ClearFilters`')
            .addField('** <a:seetings:858691489185005588> ❯  Utility**','`help`,`invite`,`stats`')
            .setImage("https://cdn.discordapp.com/attachments/770921484142903316/846088276988788766/standard_1.gif")
        msg.channel.send(embed);
                
    }
}
module.exports = Help;
