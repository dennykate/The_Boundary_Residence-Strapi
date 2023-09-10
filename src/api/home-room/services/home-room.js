'use strict';

/**
 * home-room service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-room.home-room');
