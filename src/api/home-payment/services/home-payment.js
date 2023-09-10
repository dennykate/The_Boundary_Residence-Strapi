'use strict';

/**
 * home-payment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-payment.home-payment');
