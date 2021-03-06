/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');
var msRest = require('ms-rest');
var WebResource = msRest.WebResource;

/**
 * @class
 * AvailabilitySets
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the AutoRestParameterFlattening.
 * Initializes a new instance of the AvailabilitySets class.
 * @constructor
 *
 * @param {AutoRestParameterFlattening} client Reference to the service client.
 */
function AvailabilitySets(client) {
  this.client = client;
}

/**
 * Updates the tags for an availability set.
 *
 * @param {string} resourceGroupName The name of the resource group.
 * 
 * @param {string} avset The name of the storage availability set.
 * 
 * @param {object} tags A set of tags. A description about the set of tags.
 * 
 * @param {object} [options] Optional Parameters.
 * 
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 * 
 * @param {function} callback
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {null} [result]   - The deserialized result object.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
AvailabilitySets.prototype.update = function (resourceGroupName, avset, tags, options, callback) {
  var client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
      throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
    }
    if (avset === null || avset === undefined || typeof avset.valueOf() !== 'string') {
      throw new Error('avset cannot be null or undefined and it must be of type string.');
    }
    if (avset !== null && avset !== undefined) {
      if (avset.length > 80)
      {
        throw new Error('"avset" should satisfy the constraint - "MaxLength": 80');
      }
    }
    if (tags === null || tags === undefined || typeof tags !== 'object') {
      throw new Error('tags cannot be null or undefined and it must be of type object.');
    }
    for(var valueElement in tags) {
      if (tags[valueElement] !== null && tags[valueElement] !== undefined && typeof tags[valueElement].valueOf() !== 'string') {
        throw new Error('tags[valueElement] must be of type string.');
      }
    }
  } catch (error) {
    return callback(error);
  }
  var tags1;
  if (tags !== null && tags !== undefined) {
      tags1 = new client.models['AvailabilitySetUpdateParameters']();
      tags1.tags = tags;
  }

  // Construct URL
  var baseUrl = this.client.baseUri;
  var requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'parameterFlattening/{resourceGroupName}/{availabilitySetName}';
  requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
  requestUrl = requestUrl.replace('{availabilitySetName}', encodeURIComponent(avset));

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'PATCH';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  // Serialize Request
  var requestContent = null;
  var requestModel = null;
  try {
    if (tags1 !== null && tags1 !== undefined) {
      var requestModelMapper = new client.models['AvailabilitySetUpdateParameters']().mapper();
      requestModel = client.serialize(requestModelMapper, tags1, 'tags1');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    var serializationError = new Error(util.format('Error "%s" occurred in serializing the ' + 
        'payload - "%s"', error.message, util.inspect(tags1, {depth: null})));
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 200) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          var internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          if (parsedErrorResponse.code) error.code = internalError ? internalError.code : parsedErrorResponse.code;
          if (parsedErrorResponse.message) error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody ' + 
                         '- "%s" for the default response.', defaultError.message, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = null;
    if (responseBody === '') responseBody = null;

    return callback(null, result, httpRequest, response);
  });
};


module.exports = AvailabilitySets;
