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
 * The ProductModelsWriteProductItem model module.
 * @module model/ProductModelsWriteProductItem
 * @version v1.10.1
 */
class ProductModelsWriteProductItem {
    /**
     * Constructs a new <code>ProductModelsWriteProductItem</code>.
     * A product item belonging to a product.
     * @alias module:model/ProductModelsWriteProductItem
     */
    constructor() { 
        
        ProductModelsWriteProductItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductModelsWriteProductItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductModelsWriteProductItem} obj Optional instance to populate.
     * @return {module:model/ProductModelsWriteProductItem} The populated <code>ProductModelsWriteProductItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductModelsWriteProductItem();

            if (data.hasOwnProperty('ItemId')) {
                obj['ItemId'] = ApiClient.convertToType(data['ItemId'], 'Number');
            }
            if (data.hasOwnProperty('ArticleNumber')) {
                obj['ArticleNumber'] = ApiClient.convertToType(data['ArticleNumber'], 'String');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Shelf')) {
                obj['Shelf'] = ApiClient.convertToType(data['Shelf'], 'String');
            }
            if (data.hasOwnProperty('Weight')) {
                obj['Weight'] = ApiClient.convertToType(data['Weight'], 'Number');
            }
            if (data.hasOwnProperty('Length')) {
                obj['Length'] = ApiClient.convertToType(data['Length'], 'Number');
            }
            if (data.hasOwnProperty('Width')) {
                obj['Width'] = ApiClient.convertToType(data['Width'], 'Number');
            }
            if (data.hasOwnProperty('Height')) {
                obj['Height'] = ApiClient.convertToType(data['Height'], 'Number');
            }
            if (data.hasOwnProperty('Gtin')) {
                obj['Gtin'] = ApiClient.convertToType(data['Gtin'], 'String');
            }
            if (data.hasOwnProperty('Active')) {
                obj['Active'] = ApiClient.convertToType(data['Active'], 'Boolean');
            }
            if (data.hasOwnProperty('ExternalId')) {
                obj['ExternalId'] = ApiClient.convertToType(data['ExternalId'], 'String');
            }
            if (data.hasOwnProperty('DateIncoming')) {
                obj['DateIncoming'] = ApiClient.convertToType(data['DateIncoming'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductModelsWriteProductItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductModelsWriteProductItem</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ArticleNumber'] && !(typeof data['ArticleNumber'] === 'string' || data['ArticleNumber'] instanceof String)) {
            throw new Error("Expected the field `ArticleNumber` to be a primitive type in the JSON string but got " + data['ArticleNumber']);
        }
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }
        // ensure the json data is a string
        if (data['Shelf'] && !(typeof data['Shelf'] === 'string' || data['Shelf'] instanceof String)) {
            throw new Error("Expected the field `Shelf` to be a primitive type in the JSON string but got " + data['Shelf']);
        }
        // ensure the json data is a string
        if (data['Gtin'] && !(typeof data['Gtin'] === 'string' || data['Gtin'] instanceof String)) {
            throw new Error("Expected the field `Gtin` to be a primitive type in the JSON string but got " + data['Gtin']);
        }
        // ensure the json data is a string
        if (data['ExternalId'] && !(typeof data['ExternalId'] === 'string' || data['ExternalId'] instanceof String)) {
            throw new Error("Expected the field `ExternalId` to be a primitive type in the JSON string but got " + data['ExternalId']);
        }

        return true;
    }


}



/**
 * Id of the product item.
 * @member {Number} ItemId
 */
ProductModelsWriteProductItem.prototype['ItemId'] = undefined;

/**
 * The article number for the product item.
 * @member {String} ArticleNumber
 */
ProductModelsWriteProductItem.prototype['ArticleNumber'] = undefined;

/**
 * The name of the product item.
 * @member {String} Name
 */
ProductModelsWriteProductItem.prototype['Name'] = undefined;

/**
 * The shelf name where the product item can be found.
 * @member {String} Shelf
 */
ProductModelsWriteProductItem.prototype['Shelf'] = undefined;

/**
 * The weight of the item in grams (g).
 * @member {Number} Weight
 */
ProductModelsWriteProductItem.prototype['Weight'] = undefined;

/**
 * The length of the item in millimeters (mm).
 * @member {Number} Length
 */
ProductModelsWriteProductItem.prototype['Length'] = undefined;

/**
 * The width of the item in millimeters (mm).
 * @member {Number} Width
 */
ProductModelsWriteProductItem.prototype['Width'] = undefined;

/**
 * The height of the item in millimeters (mm).
 * @member {Number} Height
 */
ProductModelsWriteProductItem.prototype['Height'] = undefined;

/**
 * The <a href=\"http://www.gtin.info/\">GTIN number</a> for the item.    Also known as EAN, UCC or UPS number.
 * @member {String} Gtin
 */
ProductModelsWriteProductItem.prototype['Gtin'] = undefined;

/**
 * The current state of the item.
 * @member {Boolean} Active
 */
ProductModelsWriteProductItem.prototype['Active'] = undefined;

/**
 * External Id of the product item.
 * @member {String} ExternalId
 */
ProductModelsWriteProductItem.prototype['ExternalId'] = undefined;

/**
 * The date the item will be in stock again.
 * @member {Date} DateIncoming
 */
ProductModelsWriteProductItem.prototype['DateIncoming'] = undefined;






export default ProductModelsWriteProductItem;

