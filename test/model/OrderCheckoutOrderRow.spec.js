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
    instance = new GeinsManagementApiSdkJs.OrderCheckoutOrderRow();
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

  describe('OrderCheckoutOrderRow', function() {
    it('should create an instance of OrderCheckoutOrderRow', function() {
      // uncomment below and update the code to test OrderCheckoutOrderRow
      //var instance = new GeinsManagementApiSdkJs.OrderCheckoutOrderRow();
      //expect(instance).to.be.a(GeinsManagementApiSdkJs.OrderCheckoutOrderRow);
    });

    it('should have the property sku (base name: "Sku")', function() {
      // uncomment below and update the code to test the property sku
      //var instance = new GeinsManagementApiSdkJs.OrderCheckoutOrderRow();
      //expect(instance).to.be();
    });

    it('should have the property productId (base name: "ProductId")', function() {
      // uncomment below and update the code to test the property productId
      //var instance = new GeinsManagementApiSdkJs.OrderCheckoutOrderRow();
      //expect(instance).to.be();
    });

    it('should have the property externalId (base name: "ExternalId")', function() {
      // uncomment below and update the code to test the property externalId
      //var instance = new GeinsManagementApiSdkJs.OrderCheckoutOrderRow();
      //expect(instance).to.be();
    });

    it('should have the property discountRate (base name: "DiscountRate")', function() {
      // uncomment below and update the code to test the property discountRate
      //var instance = new GeinsManagementApiSdkJs.OrderCheckoutOrderRow();
      //expect(instance).to.be();
    });

    it('should have the property cartRowId (base name: "CartRowId")', function() {
      // uncomment below and update the code to test the property cartRowId
      //var instance = new GeinsManagementApiSdkJs.OrderCheckoutOrderRow();
      //expect(instance).to.be();
    });

    it('should have the property productContainerBuildId (base name: "ProductContainerBuildId")', function() {
      // uncomment below and update the code to test the property productContainerBuildId
      //var instance = new GeinsManagementApiSdkJs.OrderCheckoutOrderRow();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "Message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new GeinsManagementApiSdkJs.OrderCheckoutOrderRow();
      //expect(instance).to.be();
    });

    it('should have the property articleNumber (base name: "ArticleNumber")', function() {
      // uncomment below and update the code to test the property articleNumber
      //var instance = new GeinsManagementApiSdkJs.OrderCheckoutOrderRow();
      //expect(instance).to.be();
    });

    it('should have the property gtin (base name: "Gtin")', function() {
      // uncomment below and update the code to test the property gtin
      //var instance = new GeinsManagementApiSdkJs.OrderCheckoutOrderRow();
      //expect(instance).to.be();
    });

    it('should have the property brand (base name: "Brand")', function() {
      // uncomment below and update the code to test the property brand
      //var instance = new GeinsManagementApiSdkJs.OrderCheckoutOrderRow();
      //expect(instance).to.be();
    });

    it('should have the property categories (base name: "Categories")', function() {
      // uncomment below and update the code to test the property categories
      //var instance = new GeinsManagementApiSdkJs.OrderCheckoutOrderRow();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new GeinsManagementApiSdkJs.OrderCheckoutOrderRow();
      //expect(instance).to.be();
    });

    it('should have the property variant (base name: "Variant")', function() {
      // uncomment below and update the code to test the property variant
      //var instance = new GeinsManagementApiSdkJs.OrderCheckoutOrderRow();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "Quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instance = new GeinsManagementApiSdkJs.OrderCheckoutOrderRow();
      //expect(instance).to.be();
    });

    it('should have the property priceIncVat (base name: "PriceIncVat")', function() {
      // uncomment below and update the code to test the property priceIncVat
      //var instance = new GeinsManagementApiSdkJs.OrderCheckoutOrderRow();
      //expect(instance).to.be();
    });

    it('should have the property priceExVat (base name: "PriceExVat")', function() {
      // uncomment below and update the code to test the property priceExVat
      //var instance = new GeinsManagementApiSdkJs.OrderCheckoutOrderRow();
      //expect(instance).to.be();
    });

    it('should have the property expectedTotalPriceIncVat (base name: "ExpectedTotalPriceIncVat")', function() {
      // uncomment below and update the code to test the property expectedTotalPriceIncVat
      //var instance = new GeinsManagementApiSdkJs.OrderCheckoutOrderRow();
      //expect(instance).to.be();
    });

    it('should have the property discountIncVat (base name: "DiscountIncVat")', function() {
      // uncomment below and update the code to test the property discountIncVat
      //var instance = new GeinsManagementApiSdkJs.OrderCheckoutOrderRow();
      //expect(instance).to.be();
    });

    it('should have the property discountExVat (base name: "DiscountExVat")', function() {
      // uncomment below and update the code to test the property discountExVat
      //var instance = new GeinsManagementApiSdkJs.OrderCheckoutOrderRow();
      //expect(instance).to.be();
    });

    it('should have the property expectedTotalDiscountIncVat (base name: "ExpectedTotalDiscountIncVat")', function() {
      // uncomment below and update the code to test the property expectedTotalDiscountIncVat
      //var instance = new GeinsManagementApiSdkJs.OrderCheckoutOrderRow();
      //expect(instance).to.be();
    });

    it('should have the property productUrl (base name: "ProductUrl")', function() {
      // uncomment below and update the code to test the property productUrl
      //var instance = new GeinsManagementApiSdkJs.OrderCheckoutOrderRow();
      //expect(instance).to.be();
    });

    it('should have the property imageUrl (base name: "ImageUrl")', function() {
      // uncomment below and update the code to test the property imageUrl
      //var instance = new GeinsManagementApiSdkJs.OrderCheckoutOrderRow();
      //expect(instance).to.be();
    });

    it('should have the property weight (base name: "Weight")', function() {
      // uncomment below and update the code to test the property weight
      //var instance = new GeinsManagementApiSdkJs.OrderCheckoutOrderRow();
      //expect(instance).to.be();
    });

    it('should have the property height (base name: "Height")', function() {
      // uncomment below and update the code to test the property height
      //var instance = new GeinsManagementApiSdkJs.OrderCheckoutOrderRow();
      //expect(instance).to.be();
    });

    it('should have the property width (base name: "Width")', function() {
      // uncomment below and update the code to test the property width
      //var instance = new GeinsManagementApiSdkJs.OrderCheckoutOrderRow();
      //expect(instance).to.be();
    });

    it('should have the property length (base name: "Length")', function() {
      // uncomment below and update the code to test the property length
      //var instance = new GeinsManagementApiSdkJs.OrderCheckoutOrderRow();
      //expect(instance).to.be();
    });

    it('should have the property campaignIds (base name: "CampaignIds")', function() {
      // uncomment below and update the code to test the property campaignIds
      //var instance = new GeinsManagementApiSdkJs.OrderCheckoutOrderRow();
      //expect(instance).to.be();
    });

    it('should have the property campaignGroupData (base name: "CampaignGroupData")', function() {
      // uncomment below and update the code to test the property campaignGroupData
      //var instance = new GeinsManagementApiSdkJs.OrderCheckoutOrderRow();
      //expect(instance).to.be();
    });

    it('should have the property campaignNames (base name: "CampaignNames")', function() {
      // uncomment below and update the code to test the property campaignNames
      //var instance = new GeinsManagementApiSdkJs.OrderCheckoutOrderRow();
      //expect(instance).to.be();
    });

    it('should have the property productPriceCampaignId (base name: "ProductPriceCampaignId")', function() {
      // uncomment below and update the code to test the property productPriceCampaignId
      //var instance = new GeinsManagementApiSdkJs.OrderCheckoutOrderRow();
      //expect(instance).to.be();
    });

    it('should have the property productPriceListId (base name: "ProductPriceListId")', function() {
      // uncomment below and update the code to test the property productPriceListId
      //var instance = new GeinsManagementApiSdkJs.OrderCheckoutOrderRow();
      //expect(instance).to.be();
    });

  });

}));