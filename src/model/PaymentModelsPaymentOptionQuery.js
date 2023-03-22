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

import ApiClient from '../ApiClient';

/**
 * The PaymentModelsPaymentOptionQuery model module.
 * @module model/PaymentModelsPaymentOptionQuery
 * @version v1.7.1
 */
class PaymentModelsPaymentOptionQuery {
    /**
     * Constructs a new <code>PaymentModelsPaymentOptionQuery</code>.
     * @alias module:model/PaymentModelsPaymentOptionQuery
     */
    constructor() { 
        
        PaymentModelsPaymentOptionQuery.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaymentModelsPaymentOptionQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentModelsPaymentOptionQuery} obj Optional instance to populate.
     * @return {module:model/PaymentModelsPaymentOptionQuery} The populated <code>PaymentModelsPaymentOptionQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentModelsPaymentOptionQuery();

            if (data.hasOwnProperty('SiteId')) {
                obj['SiteId'] = ApiClient.convertToType(data['SiteId'], 'Number');
            }
            if (data.hasOwnProperty('Email')) {
                obj['Email'] = ApiClient.convertToType(data['Email'], 'String');
            }
            if (data.hasOwnProperty('CustomerTypeId')) {
                obj['CustomerTypeId'] = ApiClient.convertToType(data['CustomerTypeId'], 'Number');
            }
            if (data.hasOwnProperty('CountryId')) {
                obj['CountryId'] = ApiClient.convertToType(data['CountryId'], 'Number');
            }
            if (data.hasOwnProperty('Sum')) {
                obj['Sum'] = ApiClient.convertToType(data['Sum'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaymentModelsPaymentOptionQuery</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaymentModelsPaymentOptionQuery</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Email'] && !(typeof data['Email'] === 'string' || data['Email'] instanceof String)) {
            throw new Error("Expected the field `Email` to be a primitive type in the JSON string but got " + data['Email']);
        }

        return true;
    }


}



/**
 * @member {Number} SiteId
 */
PaymentModelsPaymentOptionQuery.prototype['SiteId'] = undefined;

/**
 * Customer email address
 * @member {String} Email
 */
PaymentModelsPaymentOptionQuery.prototype['Email'] = undefined;

/**
 * @member {Number} CustomerTypeId
 */
PaymentModelsPaymentOptionQuery.prototype['CustomerTypeId'] = undefined;

/**
 * @member {Number} CountryId
 */
PaymentModelsPaymentOptionQuery.prototype['CountryId'] = undefined;

/**
 * @member {Number} Sum
 */
PaymentModelsPaymentOptionQuery.prototype['Sum'] = undefined;






export default PaymentModelsPaymentOptionQuery;

