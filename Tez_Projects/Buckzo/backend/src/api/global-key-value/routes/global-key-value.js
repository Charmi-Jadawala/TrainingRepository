'use strict';

/**
 * global-key-value router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::global-key-value.global-key-value');
