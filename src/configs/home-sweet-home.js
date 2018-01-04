'use strict';

module.exports = {
  'locale': process.env.LOCALE || 'en',
  'netgear': {
    'username': process.env.NETGEAR_USERNAME || 'username',
    'password': process.env.NETGEAR_PASSWORD || 'password',
  },
  'yahooWeather': {
    'key': process.env.YAHOO_WEATHER_API_KEY || '',
    'secret': process.env.YAHOO_WEATHER_API_SECRET || '',

    'location': process.env.YAHOO_WEATHER_LOCATION || 'Paris, FR',
    'temperature_unit': process.env.YAHOO_WEATHER_TEMPERATURE_UNIT || 'celsius',
  },
  'googleMaps': {
    'key': process.env.GOOGLE_MAPS_API_KEY || '',
    'directions': JSON.parse(process.env.GOOGLE_MAPS_DIRECTIONS)
  },
  'vigicrue': {
    levelUrl: process.env.VIGICRUE_LEVEL_URL || '',
    attentionUrl: process.env.VIGICRUE_ATTENTION_URL || ''
  },
  'netatmo': {
    'clientId': process.env.NETATMO_CLIENT_ID,
    'clientSecret': process.env.NETATMO_CLIENT_SECRET
  }
};
