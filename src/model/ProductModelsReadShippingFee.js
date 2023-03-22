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
 * The ProductModelsReadShippingFee model module.
 * @module model/ProductModelsReadShippingFee
 * @version v1.7.1
 */
class ProductModelsReadShippingFee {
    /**
     * Constructs a new <code>ProductModelsReadShippingFee</code>.
     * A shipping fee for a product item.
     * @alias module:model/ProductModelsReadShippingFee
     */
    constructor() { 
        
        ProductModelsReadShippingFee.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductModelsReadShippingFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductModelsReadShippingFee} obj Optional instance to populate.
     * @return {module:model/ProductModelsReadShippingFee} The populated <code>ProductModelsReadShippingFee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductModelsReadShippingFee();

            if (data.hasOwnProperty('Market')) {
                obj['Market'] = ApiClient.convertToType(data['Market'], 'Number');
            }
            if (data.hasOwnProperty('Country')) {
                obj['Country'] = ApiClient.convertToType(data['Country'], 'String');
            }
            if (data.hasOwnProperty('Service')) {
                obj['Service'] = ApiClient.convertToType(data['Service'], 'String');
            }
            if (data.hasOwnProperty('ServiceId')) {
                obj['ServiceId'] = ApiClient.convertToType(data['ServiceId'], 'Number');
            }
            if (data.hasOwnProperty('Fee')) {
                obj['Fee'] = ApiClient.convertToType(data['Fee'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductModelsReadShippingFee</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductModelsReadShippingFee</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Country'] && !(typeof data['Country'] === 'string' || data['Country'] instanceof String)) {
            throw new Error("Expected the field `Country` to be a primitive type in the JSON string but got " + data['Country']);
        }
        // ensure the json data is a string
        if (data['Service'] && !(typeof data['Service'] === 'string' || data['Service'] instanceof String)) {
            throw new Error("Expected the field `Service` to be a primitive type in the JSON string but got " + data['Service']);
        }

        return true;
    }


}



/**
 * The market that the shipping fee is applicable on.
 * @member {Number} Market
 */
ProductModelsReadShippingFee.prototype['Market'] = undefined;

/**
 * The country that the shipping fee is applicable in.
 * @member {String} Country
 */
ProductModelsReadShippingFee.prototype['Country'] = undefined;

/**
 * The shipping service with the current fee.
 * @member {String} Service
 */
ProductModelsReadShippingFee.prototype['Service'] = undefined;

/**
 * The shipping service id with the current fee.
 * @member {Number} ServiceId
 */
ProductModelsReadShippingFee.prototype['ServiceId'] = undefined;

/**
 * The shipping fee.
 * @member {Number} Fee
 */
ProductModelsReadShippingFee.prototype['Fee'] = undefined;






export default ProductModelsReadShippingFee;

