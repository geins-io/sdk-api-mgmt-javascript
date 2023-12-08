/**
 * Geins Management API
 *  Geins Management API is a RESTful api that powers your applications and helps you manage your Geins services. Geins provides an easy-to-use and scalable solution for managing all aspects of an online store, from product listings and customer information to order processing and payment transactions.   :::tip Tip With this API, you can build custom applications and integrate with third-party systems, feeds, dashboards and other bussiness logic apps. :::    ## Getting started Once you have created an account, you can start using the Management API by creating an `API User`. You can create as many API users as you need. Each `API user` is connected to a specific account so you can keep track of operations and manage keys.   You can find all your API credentials in `Geins Merchant Center`.   ### Fast track Use one of our [SDKs](https://docs.geins.io/docs/sdk/introduction) to get started quickly. The SDKs are available for the most popular programming languages and frameworks.  Or, if you prefer to just take it for a test run:  [![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/25895885-aaf6598f-1a7c-4949-85d7-ba846c42d553?action=collection%2Ffork&collection-url=entityId%3D25895885-aaf6598f-1a7c-4949-85d7-ba846c42d553%26entityType%3Dcollection%26workspaceId%3Da2a179ce-158e-46b0-8d06-e9640f45112c)  ### Authentication Two authentication methods are required:   - `Basic Auth`   - `API Key`    All API credentials can be found in `Geins Merchant Center`.  #### Basic Auth A Basic auth `Authorization` header needs to be included in every request. The value should be `Basic <credentials>` where `<credentials>` is the Base64 encoding of your `API username` and `API password` joined by a single colon `:`.   See [Wikipedia](https://en.wikipedia.org/wiki/Basic_access_authentication) for more information on Basic auth.  #### API Key  An `X-ApiKey` header needs to be included in every request. This header should contain the value of your `API key`.  #### Example ```bash curl -X GET \"https://mgmtapi.geins.io/API/Market/List\" \\ -H \"Authorization: Basic [USER-CREDENTIALS-BASE64-ENCODED]\" \\ -H \"X-ApiKey: [API-KEY]\" ``` 
 *
 * The version of the OpenAPI document: v1.10.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The OrderCaptureRow model module.
 * @module model/OrderCaptureRow
 * @version v1.10.1
 */
class OrderCaptureRow {
    /**
     * Constructs a new <code>OrderCaptureRow</code>.
     * @alias module:model/OrderCaptureRow
     */
    constructor() { 
        
        OrderCaptureRow.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderCaptureRow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderCaptureRow} obj Optional instance to populate.
     * @return {module:model/OrderCaptureRow} The populated <code>OrderCaptureRow</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderCaptureRow();

            if (data.hasOwnProperty('OrderRowId')) {
                obj['OrderRowId'] = ApiClient.convertToType(data['OrderRowId'], 'Number');
            }
            if (data.hasOwnProperty('ItemId')) {
                obj['ItemId'] = ApiClient.convertToType(data['ItemId'], 'Number');
            }
            if (data.hasOwnProperty('ProductId')) {
                obj['ProductId'] = ApiClient.convertToType(data['ProductId'], 'Number');
            }
            if (data.hasOwnProperty('Price')) {
                obj['Price'] = ApiClient.convertToType(data['Price'], 'Number');
            }
            if (data.hasOwnProperty('PriceExVat')) {
                obj['PriceExVat'] = ApiClient.convertToType(data['PriceExVat'], 'Number');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('ProductName')) {
                obj['ProductName'] = ApiClient.convertToType(data['ProductName'], 'String');
            }
            if (data.hasOwnProperty('Variant')) {
                obj['Variant'] = ApiClient.convertToType(data['Variant'], 'String');
            }
            if (data.hasOwnProperty('Brand')) {
                obj['Brand'] = ApiClient.convertToType(data['Brand'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderCaptureRow</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderCaptureRow</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }
        // ensure the json data is a string
        if (data['ProductName'] && !(typeof data['ProductName'] === 'string' || data['ProductName'] instanceof String)) {
            throw new Error("Expected the field `ProductName` to be a primitive type in the JSON string but got " + data['ProductName']);
        }
        // ensure the json data is a string
        if (data['Variant'] && !(typeof data['Variant'] === 'string' || data['Variant'] instanceof String)) {
            throw new Error("Expected the field `Variant` to be a primitive type in the JSON string but got " + data['Variant']);
        }
        // ensure the json data is a string
        if (data['Brand'] && !(typeof data['Brand'] === 'string' || data['Brand'] instanceof String)) {
            throw new Error("Expected the field `Brand` to be a primitive type in the JSON string but got " + data['Brand']);
        }

        return true;
    }


}



/**
 * @member {Number} OrderRowId
 */
OrderCaptureRow.prototype['OrderRowId'] = undefined;

/**
 * @member {Number} ItemId
 */
OrderCaptureRow.prototype['ItemId'] = undefined;

/**
 * @member {Number} ProductId
 */
OrderCaptureRow.prototype['ProductId'] = undefined;

/**
 * @member {Number} Price
 */
OrderCaptureRow.prototype['Price'] = undefined;

/**
 * @member {Number} PriceExVat
 */
OrderCaptureRow.prototype['PriceExVat'] = undefined;

/**
 * @member {String} Name
 */
OrderCaptureRow.prototype['Name'] = undefined;

/**
 * @member {String} ProductName
 */
OrderCaptureRow.prototype['ProductName'] = undefined;

/**
 * @member {String} Variant
 */
OrderCaptureRow.prototype['Variant'] = undefined;

/**
 * @member {String} Brand
 */
OrderCaptureRow.prototype['Brand'] = undefined;






export default OrderCaptureRow;

