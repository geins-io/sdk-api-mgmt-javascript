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
import OrderValidateOrderCreationRequestStockItem from './OrderValidateOrderCreationRequestStockItem';

/**
 * The OrderValidateOrderCreationRequest model module.
 * @module model/OrderValidateOrderCreationRequest
 * @version v1.7.1
 */
class OrderValidateOrderCreationRequest {
    /**
     * Constructs a new <code>OrderValidateOrderCreationRequest</code>.
     * @alias module:model/OrderValidateOrderCreationRequest
     */
    constructor() { 
        
        OrderValidateOrderCreationRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderValidateOrderCreationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderValidateOrderCreationRequest} obj Optional instance to populate.
     * @return {module:model/OrderValidateOrderCreationRequest} The populated <code>OrderValidateOrderCreationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderValidateOrderCreationRequest();

            if (data.hasOwnProperty('OrderId')) {
                obj['OrderId'] = ApiClient.convertToType(data['OrderId'], 'Number');
            }
            if (data.hasOwnProperty('UserId')) {
                obj['UserId'] = ApiClient.convertToType(data['UserId'], 'Number');
            }
            if (data.hasOwnProperty('Email')) {
                obj['Email'] = ApiClient.convertToType(data['Email'], 'String');
            }
            if (data.hasOwnProperty('Phone')) {
                obj['Phone'] = ApiClient.convertToType(data['Phone'], 'String');
            }
            if (data.hasOwnProperty('Currency')) {
                obj['Currency'] = ApiClient.convertToType(data['Currency'], 'String');
            }
            if (data.hasOwnProperty('SumIncVat')) {
                obj['SumIncVat'] = ApiClient.convertToType(data['SumIncVat'], 'Number');
            }
            if (data.hasOwnProperty('BalanceIncVat')) {
                obj['BalanceIncVat'] = ApiClient.convertToType(data['BalanceIncVat'], 'Number');
            }
            if (data.hasOwnProperty('Items')) {
                obj['Items'] = ApiClient.convertToType(data['Items'], [OrderValidateOrderCreationRequestStockItem]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderValidateOrderCreationRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderValidateOrderCreationRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Email'] && !(typeof data['Email'] === 'string' || data['Email'] instanceof String)) {
            throw new Error("Expected the field `Email` to be a primitive type in the JSON string but got " + data['Email']);
        }
        // ensure the json data is a string
        if (data['Phone'] && !(typeof data['Phone'] === 'string' || data['Phone'] instanceof String)) {
            throw new Error("Expected the field `Phone` to be a primitive type in the JSON string but got " + data['Phone']);
        }
        // ensure the json data is a string
        if (data['Currency'] && !(typeof data['Currency'] === 'string' || data['Currency'] instanceof String)) {
            throw new Error("Expected the field `Currency` to be a primitive type in the JSON string but got " + data['Currency']);
        }
        if (data['Items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['Items'])) {
                throw new Error("Expected the field `Items` to be an array in the JSON data but got " + data['Items']);
            }
            // validate the optional field `Items` (array)
            for (const item of data['Items']) {
                OrderValidateOrderCreationRequestStockItem.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * @member {Number} OrderId
 */
OrderValidateOrderCreationRequest.prototype['OrderId'] = undefined;

/**
 * @member {Number} UserId
 */
OrderValidateOrderCreationRequest.prototype['UserId'] = undefined;

/**
 * @member {String} Email
 */
OrderValidateOrderCreationRequest.prototype['Email'] = undefined;

/**
 * @member {String} Phone
 */
OrderValidateOrderCreationRequest.prototype['Phone'] = undefined;

/**
 * @member {String} Currency
 */
OrderValidateOrderCreationRequest.prototype['Currency'] = undefined;

/**
 * @member {Number} SumIncVat
 */
OrderValidateOrderCreationRequest.prototype['SumIncVat'] = undefined;

/**
 * @member {Number} BalanceIncVat
 */
OrderValidateOrderCreationRequest.prototype['BalanceIncVat'] = undefined;

/**
 * @member {Array.<module:model/OrderValidateOrderCreationRequestStockItem>} Items
 */
OrderValidateOrderCreationRequest.prototype['Items'] = undefined;






export default OrderValidateOrderCreationRequest;
