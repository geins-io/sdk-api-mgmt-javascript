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
 * The PriceListModelsWritePriceListPrice model module.
 * @module model/PriceListModelsWritePriceListPrice
 * @version v1.7.1
 */
class PriceListModelsWritePriceListPrice {
    /**
     * Constructs a new <code>PriceListModelsWritePriceListPrice</code>.
     * A price for a product on a specific price list.
     * @alias module:model/PriceListModelsWritePriceListPrice
     */
    constructor() { 
        
        PriceListModelsWritePriceListPrice.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PriceListModelsWritePriceListPrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PriceListModelsWritePriceListPrice} obj Optional instance to populate.
     * @return {module:model/PriceListModelsWritePriceListPrice} The populated <code>PriceListModelsWritePriceListPrice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PriceListModelsWritePriceListPrice();

            if (data.hasOwnProperty('PriceListId')) {
                obj['PriceListId'] = ApiClient.convertToType(data['PriceListId'], 'Number');
            }
            if (data.hasOwnProperty('Price')) {
                obj['Price'] = ApiClient.convertToType(data['Price'], 'Number');
            }
            if (data.hasOwnProperty('ProductId')) {
                obj['ProductId'] = ApiClient.convertToType(data['ProductId'], 'String');
            }
            if (data.hasOwnProperty('Currency')) {
                obj['Currency'] = ApiClient.convertToType(data['Currency'], 'String');
            }
            if (data.hasOwnProperty('StaggeredCount')) {
                obj['StaggeredCount'] = ApiClient.convertToType(data['StaggeredCount'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PriceListModelsWritePriceListPrice</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PriceListModelsWritePriceListPrice</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ProductId'] && !(typeof data['ProductId'] === 'string' || data['ProductId'] instanceof String)) {
            throw new Error("Expected the field `ProductId` to be a primitive type in the JSON string but got " + data['ProductId']);
        }
        // ensure the json data is a string
        if (data['Currency'] && !(typeof data['Currency'] === 'string' || data['Currency'] instanceof String)) {
            throw new Error("Expected the field `Currency` to be a primitive type in the JSON string but got " + data['Currency']);
        }

        return true;
    }


}



/**
 * The price list id.
 * @member {Number} PriceListId
 */
PriceListModelsWritePriceListPrice.prototype['PriceListId'] = undefined;

/**
 * The price in the currency of the associated price list.
 * @member {Number} Price
 */
PriceListModelsWritePriceListPrice.prototype['Price'] = undefined;

/**
 * The id of the product that this price applies to.
 * @member {String} ProductId
 */
PriceListModelsWritePriceListPrice.prototype['ProductId'] = undefined;

/**
 * The 3-letter ISO 4217 currency code for this price. If ommitted the price will be updated on the default market.
 * @member {String} Currency
 */
PriceListModelsWritePriceListPrice.prototype['Currency'] = undefined;

/**
 * Staggered count for this price. Defaults to 1.
 * @member {Number} StaggeredCount
 */
PriceListModelsWritePriceListPrice.prototype['StaggeredCount'] = undefined;






export default PriceListModelsWritePriceListPrice;
