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
    instance = new GeinsManagementApiSdkJs.UserModelsWriteUserProfile();
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

  describe('UserModelsWriteUserProfile', function() {
    it('should create an instance of UserModelsWriteUserProfile', function() {
      // uncomment below and update the code to test UserModelsWriteUserProfile
      //var instance = new GeinsManagementApiSdkJs.UserModelsWriteUserProfile();
      //expect(instance).to.be.a(GeinsManagementApiSdkJs.UserModelsWriteUserProfile);
    });

    it('should have the property userId (base name: "UserId")', function() {
      // uncomment below and update the code to test the property userId
      //var instance = new GeinsManagementApiSdkJs.UserModelsWriteUserProfile();
      //expect(instance).to.be();
    });

    it('should have the property siteId (base name: "SiteId")', function() {
      // uncomment below and update the code to test the property siteId
      //var instance = new GeinsManagementApiSdkJs.UserModelsWriteUserProfile();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "Email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new GeinsManagementApiSdkJs.UserModelsWriteUserProfile();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "Password")', function() {
      // uncomment below and update the code to test the property password
      //var instance = new GeinsManagementApiSdkJs.UserModelsWriteUserProfile();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "FirstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new GeinsManagementApiSdkJs.UserModelsWriteUserProfile();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "LastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new GeinsManagementApiSdkJs.UserModelsWriteUserProfile();
      //expect(instance).to.be();
    });

    it('should have the property phoneNr (base name: "PhoneNr")', function() {
      // uncomment below and update the code to test the property phoneNr
      //var instance = new GeinsManagementApiSdkJs.UserModelsWriteUserProfile();
      //expect(instance).to.be();
    });

    it('should have the property mobilePhoneNr (base name: "MobilePhoneNr")', function() {
      // uncomment below and update the code to test the property mobilePhoneNr
      //var instance = new GeinsManagementApiSdkJs.UserModelsWriteUserProfile();
      //expect(instance).to.be();
    });

    it('should have the property company (base name: "Company")', function() {
      // uncomment below and update the code to test the property company
      //var instance = new GeinsManagementApiSdkJs.UserModelsWriteUserProfile();
      //expect(instance).to.be();
    });

    it('should have the property userTypeId (base name: "UserTypeId")', function() {
      // uncomment below and update the code to test the property userTypeId
      //var instance = new GeinsManagementApiSdkJs.UserModelsWriteUserProfile();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "Address")', function() {
      // uncomment below and update the code to test the property address
      //var instance = new GeinsManagementApiSdkJs.UserModelsWriteUserProfile();
      //expect(instance).to.be();
    });

    it('should have the property address2 (base name: "Address2")', function() {
      // uncomment below and update the code to test the property address2
      //var instance = new GeinsManagementApiSdkJs.UserModelsWriteUserProfile();
      //expect(instance).to.be();
    });

    it('should have the property address3 (base name: "Address3")', function() {
      // uncomment below and update the code to test the property address3
      //var instance = new GeinsManagementApiSdkJs.UserModelsWriteUserProfile();
      //expect(instance).to.be();
    });

    it('should have the property doorCode (base name: "DoorCode")', function() {
      // uncomment below and update the code to test the property doorCode
      //var instance = new GeinsManagementApiSdkJs.UserModelsWriteUserProfile();
      //expect(instance).to.be();
    });

    it('should have the property personalId (base name: "PersonalId")', function() {
      // uncomment below and update the code to test the property personalId
      //var instance = new GeinsManagementApiSdkJs.UserModelsWriteUserProfile();
      //expect(instance).to.be();
    });

    it('should have the property birthyear (base name: "Birthyear")', function() {
      // uncomment below and update the code to test the property birthyear
      //var instance = new GeinsManagementApiSdkJs.UserModelsWriteUserProfile();
      //expect(instance).to.be();
    });

    it('should have the property zip (base name: "Zip")', function() {
      // uncomment below and update the code to test the property zip
      //var instance = new GeinsManagementApiSdkJs.UserModelsWriteUserProfile();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "City")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new GeinsManagementApiSdkJs.UserModelsWriteUserProfile();
      //expect(instance).to.be();
    });

    it('should have the property careOf (base name: "CareOf")', function() {
      // uncomment below and update the code to test the property careOf
      //var instance = new GeinsManagementApiSdkJs.UserModelsWriteUserProfile();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "Country")', function() {
      // uncomment below and update the code to test the property country
      //var instance = new GeinsManagementApiSdkJs.UserModelsWriteUserProfile();
      //expect(instance).to.be();
    });

    it('should have the property countryId (base name: "CountryId")', function() {
      // uncomment below and update the code to test the property countryId
      //var instance = new GeinsManagementApiSdkJs.UserModelsWriteUserProfile();
      //expect(instance).to.be();
    });

    it('should have the property gender (base name: "Gender")', function() {
      // uncomment below and update the code to test the property gender
      //var instance = new GeinsManagementApiSdkJs.UserModelsWriteUserProfile();
      //expect(instance).to.be();
    });

    it('should have the property newsletter (base name: "Newsletter")', function() {
      // uncomment below and update the code to test the property newsletter
      //var instance = new GeinsManagementApiSdkJs.UserModelsWriteUserProfile();
      //expect(instance).to.be();
    });

    it('should have the property hasExternalAuth (base name: "HasExternalAuth")', function() {
      // uncomment below and update the code to test the property hasExternalAuth
      //var instance = new GeinsManagementApiSdkJs.UserModelsWriteUserProfile();
      //expect(instance).to.be();
    });

  });

}));
