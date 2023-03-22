/**
 * geins-management-api-sdk-js
 *  Geins Management API is an RESTful api to power your applications who manages your geins services. Geins provides an easy-to-use and scalable solution for managing all aspects of an online store, from product listings and customer information to order processing and payment transactions.   :::tip With this API, you can build custom applications and integrate with third-party systems, dashboards and other bussiness logic apps. :::    ## Getting started Once you have created an account, you can start using the Management API by creating an `API key`. You can create as many API keys as you need. Each `API key` is connected to a specific account so you can keep track of operations and manage keys. You can find your `API key` in the `geins merchant center`.   ### Fast track Use one of our [SDKs](https://docs.geins.io/docs/sdk/introduction) to get started quickly. The SDKs are available for the most popular programming languages and frameworks.  Or, if you prefer to just take it for a test run:  [![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/25895885-aaf6598f-1a7c-4949-85d7-ba846c42d553?action=collection%2Ffork&collection-url=entityId%3D25895885-aaf6598f-1a7c-4949-85d7-ba846c42d553%26entityType%3Dcollection%26workspaceId%3Da2a179ce-158e-46b0-8d06-e9640f45112c)  ### Authentication Two authentication methods are supported:   - `API Key`   - `Basic Auth` 
 *
 * The version of the OpenAPI document: v1.7.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GeinsManagementApiSdkJs);
  }
}(this, function(expect, GeinsManagementApiSdkJs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GeinsManagementApiSdkJs.EnvelopeProductParameterModelsReadProductParameterPredefinedValue();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('EnvelopeProductParameterModelsReadProductParameterPredefinedValue', function() {
    it('should create an instance of EnvelopeProductParameterModelsReadProductParameterPredefinedValue', function() {
      // uncomment below and update the code to test EnvelopeProductParameterModelsReadProductParameterPredefinedValue
      //var instance = new GeinsManagementApiSdkJs.EnvelopeProductParameterModelsReadProductParameterPredefinedValue();
      //expect(instance).to.be.a(GeinsManagementApiSdkJs.EnvelopeProductParameterModelsReadProductParameterPredefinedValue);
    });

    it('should have the property message (base name: "Message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new GeinsManagementApiSdkJs.EnvelopeProductParameterModelsReadProductParameterPredefinedValue();
      //expect(instance).to.be();
    });

    it('should have the property details (base name: "Details")', function() {
      // uncomment below and update the code to test the property details
      //var instance = new GeinsManagementApiSdkJs.EnvelopeProductParameterModelsReadProductParameterPredefinedValue();
      //expect(instance).to.be();
    });

    it('should have the property resource (base name: "Resource")', function() {
      // uncomment below and update the code to test the property resource
      //var instance = new GeinsManagementApiSdkJs.EnvelopeProductParameterModelsReadProductParameterPredefinedValue();
      //expect(instance).to.be();
    });

    it('should have the property pageResult (base name: "PageResult")', function() {
      // uncomment below and update the code to test the property pageResult
      //var instance = new GeinsManagementApiSdkJs.EnvelopeProductParameterModelsReadProductParameterPredefinedValue();
      //expect(instance).to.be();
    });

  });

}));
