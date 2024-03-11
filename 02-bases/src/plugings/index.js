const { getUUID } = require('../plugings/get-id.plugin');
const { getAge } = require('../plugings/get-age.plugin');
const { http } = require('../plugings/http-client.plugin');

const buildLogger = require('../plugings/logger.plugin');

module.exports = {
    getUUID,
    getAge,
    http,
    buildLogger,
}