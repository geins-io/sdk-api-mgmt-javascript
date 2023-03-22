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
    instance = new GeinsManagementApiSdkJs.OrderCapture();
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

  describe('OrderCapture', function() {
    it('should create an instance of OrderCapture', function() {
      // uncomment below and update the code to test OrderCapture
      //var instance = new GeinsManagementApiSdkJs.OrderCapture();
      //expect(instance).to.be.a(GeinsManagementApiSdkJs.OrderCapture);
    });

    it('should have the property captureId (base name: "CaptureId")', function() {
      // uncomment below and update the code to test the property captureId
      //var instance = new GeinsManagementApiSdkJs.OrderCapture();
      //expect(instance).to.be();
    });

    it('should have the property orderPaymentId (base name: "OrderPaymentId")', function() {
      // uncomment below and update the code to test the property orderPaymentId
      //var instance = new GeinsManagementApiSdkJs.OrderCapture();
      //expect(instance).to.be();
    });

    it('should have the property orderId (base name: "OrderId")', function() {
      // uncomment below and update the code to test the property orderId
      //var instance = new GeinsManagementApiSdkJs.OrderCapture();
      //expect(instance).to.be();
    });

    it('should have the property externalOrderId (base name: "ExternalOrderId")', function() {
      // uncomment below and update the code to test the property externalOrderId
      //var instance = new GeinsManagementApiSdkJs.OrderCapture();
      //expect(instance).to.be();
    });

    it('should have the property externalId (base name: "ExternalId")', function() {
      // uncomment below and update the code to test the property externalId
      //var instance = new GeinsManagementApiSdkJs.OrderCapture();
      //expect(instance).to.be();
    });

    it('should have the property reference (base name: "Reference")', function() {
      // uncomment below and update the code to test the property reference
      //var instance = new GeinsManagementApiSdkJs.OrderCapture();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "Description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new GeinsManagementApiSdkJs.OrderCapture();
      //expect(instance).to.be();
    });

    it('should have the property processedOn (base name: "ProcessedOn")', function() {
      // uncomment below and update the code to test the property processedOn
      //var instance = new GeinsManagementApiSdkJs.OrderCapture();
      //expect(instance).to.be();
    });

    it('should have the property capturedItemTotal (base name: "CapturedItemTotal")', function() {
      // uncomment below and update the code to test the property capturedItemTotal
      //var instance = new GeinsManagementApiSdkJs.OrderCapture();
      //expect(instance).to.be();
    });

    it('should have the property capturedShippingFee (base name: "CapturedShippingFee")', function() {
      // uncomment below and update the code to test the property capturedShippingFee
      //var instance = new GeinsManagementApiSdkJs.OrderCapture();
      //expect(instance).to.be();
    });

    it('should have the property capturedPaymentFee (base name: "CapturedPaymentFee")', function() {
      // uncomment below and update the code to test the property capturedPaymentFee
      //var instance = new GeinsManagementApiSdkJs.OrderCapture();
      //expect(instance).to.be();
    });

    it('should have the property capturedDiscount (base name: "CapturedDiscount")', function() {
      // uncomment below and update the code to test the property capturedDiscount
      //var instance = new GeinsManagementApiSdkJs.OrderCapture();
      //expect(instance).to.be();
    });

    it('should have the property capturedBalance (base name: "CapturedBalance")', function() {
      // uncomment below and update the code to test the property capturedBalance
      //var instance = new GeinsManagementApiSdkJs.OrderCapture();
      //expect(instance).to.be();
    });

    it('should have the property vatRate (base name: "VatRate")', function() {
      // uncomment below and update the code to test the property vatRate
      //var instance = new GeinsManagementApiSdkJs.OrderCapture();
      //expect(instance).to.be();
    });

    it('should have the property trackingNumber (base name: "TrackingNumber")', function() {
      // uncomment below and update the code to test the property trackingNumber
      //var instance = new GeinsManagementApiSdkJs.OrderCapture();
      //expect(instance).to.be();
    });

    it('should have the property shippingName (base name: "ShippingName")', function() {
      // uncomment below and update the code to test the property shippingName
      //var instance = new GeinsManagementApiSdkJs.OrderCapture();
      //expect(instance).to.be();
    });

    it('should have the property trackingUri (base name: "TrackingUri")', function() {
      // uncomment below and update the code to test the property trackingUri
      //var instance = new GeinsManagementApiSdkJs.OrderCapture();
      //expect(instance).to.be();
    });

    it('should have the property shippingMethod (base name: "ShippingMethod")', function() {
      // uncomment below and update the code to test the property shippingMethod
      //var instance = new GeinsManagementApiSdkJs.OrderCapture();
      //expect(instance).to.be();
    });

    it('should have the property paymentName (base name: "PaymentName")', function() {
      // uncomment below and update the code to test the property paymentName
      //var instance = new GeinsManagementApiSdkJs.OrderCapture();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "Locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instance = new GeinsManagementApiSdkJs.OrderCapture();
      //expect(instance).to.be();
    });

    it('should have the property rows (base name: "Rows")', function() {
      // uncomment below and update the code to test the property rows
      //var instance = new GeinsManagementApiSdkJs.OrderCapture();
      //expect(instance).to.be();
    });

    it('should have the property orderTransactionId (base name: "OrderTransactionId")', function() {
      // uncomment below and update the code to test the property orderTransactionId
      //var instance = new GeinsManagementApiSdkJs.OrderCapture();
      //expect(instance).to.be();
    });

    it('should have the property secondaryOrderTransactionId (base name: "SecondaryOrderTransactionId")', function() {
      // uncomment below and update the code to test the property secondaryOrderTransactionId
      //var instance = new GeinsManagementApiSdkJs.OrderCapture();
      //expect(instance).to.be();
    });

  });

}));