const { isMaster } = require('cluster');

class SenkuLogger {
    constructor(client) {
        this.client = client;
    }

    get id() {
        return isMaster ? 'Parent' : process.env.CLUSTER_ID;
    }

    debug(title, message) {
        console.log(`[Process ${process.pid}] [Cluster ${this.id}] [${title}] ${message}`);
    }

    log(title, message) {
        console.log(`[Process ${process.pid}] [Cluster ${this.id}] [${title}] ${message}`);
    }

    error(error) {
        console.error(`[Process ${process.pid}] [Cluster ${this.id}] `, error);
    }
}

module.exports = SenkuLogger;
