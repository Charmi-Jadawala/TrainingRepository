'use strict';

/**
 * global-key-value service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-key-value.global-key-value');
