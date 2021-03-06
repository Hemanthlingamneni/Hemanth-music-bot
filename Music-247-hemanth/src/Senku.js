/* eslint-disable no-unused-vars */
const { Client, Util } = require('discord.js');
const SenkuLogger = require('./modules/SenkuLogger.js');
const ShoukakuHandler = require('./modules/ShoukakuHandler.js');
const SettingsManager = require('./modules/SettingsManager.js');
const Queue = require('./modules/Queue.js');
const CommandHandler = require('./modules/CommandHandler.js');
const EventHandler = require('./modules/EventHandler.js');

const defaults = require('../misc.json');
const { token } = require('../config.json');

class Senku extends Client {
    constructor(...args) {
        super(...args);
        Object.defineProperty(this, 'location', { value: process.cwd() });
        Object.defineProperty(this, 'color', { value: 0x7E686C });

        this.logger = new SenkuLogger(this);
        this.settings = new SettingsManager(this);
        this.shoukaku = new ShoukakuHandler(this);
        this.queue = new Queue(this);

        new CommandHandler(this).build();
        new EventHandler(this).build();

        Object.defineProperty(this, 'quitting', { value: false, writable: true });
        ['beforeExit', 'SIGUSR1', 'SIGUSR2', 'SIGINT', 'SIGTERM'].map(event => process.once(event, this.exit.bind(this)));
    }

    get getDefaultConfig() {
        return defaults;
    }
    
    async login() {
        await super.login(token);
        return this.constructor.name;
    }

    exit() {
        if (this.quitting) return;
        this.quitting = true;
        this.destroy();
    }
}

module.exports = Senku;
