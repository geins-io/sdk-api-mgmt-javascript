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
 * The PriceListModelsReadPriceListPrice model module.
 * @module model/PriceListModelsReadPriceListPrice
 * @version v1.10.1
 */
class PriceListModelsReadPriceListPrice {
    /**
     * Constructs a new <code>PriceListModelsReadPriceListPrice</code>.
     * A price for a product on a specific price list.
     * @alias module:model/PriceListModelsReadPriceListPrice
     */
    constructor() { 
        
        PriceListModelsReadPriceListPrice.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PriceListModelsReadPriceListPrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PriceListModelsReadPriceListPrice} obj Optional instance to populate.
     * @return {module:model/PriceListModelsReadPriceListPrice} The populated <code>PriceListModelsReadPriceListPrice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PriceListModelsReadPriceListPrice();

            if (data.hasOwnProperty('ProductId')) {
                obj['ProductId'] = ApiClient.convertToType(data['ProductId'], 'Number');
            }
            if (data.hasOwnProperty('PriceListId')) {
                obj['PriceListId'] = ApiClient.convertToType(data['PriceListId'], 'Number');
            }
            if (data.hasOwnProperty('PriceListName')) {
                obj['PriceListName'] = ApiClient.convertToType(data['PriceListName'], 'String');
            }
            if (data.hasOwnProperty('PriceIncVat')) {
                obj['PriceIncVat'] = ApiClient.convertToType(data['PriceIncVat'], 'Number');
            }
            if (data.hasOwnProperty('PriceExVat')) {
                obj['PriceExVat'] = ApiClient.convertToType(data['PriceExVat'], 'Number');
            }
            if (data.hasOwnProperty('VatRate')) {
                obj['VatRate'] = ApiClient.convertToType(data['VatRate'], 'Number');
            }
            if (data.hasOwnProperty('Country')) {
                obj['Country'] = ApiClient.convertToType(data['Country'], 'String');
            }
            if (data.hasOwnProperty('Currency')) {
                obj['Currency'] = ApiClient.convertToType(data['Currency'], 'String');
            }
            if (data.hasOwnProperty('StaggeredCount')) {
                obj['StaggeredCount'] = ApiClient.convertToType(data['StaggeredCount'], 'Number');
            }
            if (data.hasOwnProperty('ValidFrom')) {
                obj['ValidFrom'] = ApiClient.convertToType(data['ValidFrom'], 'Date');
            }
            if (data.hasOwnProperty('ValidTo')) {
                obj['ValidTo'] = ApiClient.convertToType(data['ValidTo'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PriceListModelsReadPriceListPrice</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PriceListModelsReadPriceListPrice</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['PriceListName'] && !(typeof data['PriceListName'] === 'string' || data['PriceListName'] instanceof String)) {
            throw new Error("Expected the field `PriceListName` to be a primitive type in the JSON string but got " + data['PriceListName']);
        }
        // ensure the json data is a string
        if (data['Country'] && !(typeof data['Country'] === 'string' || data['Country'] instanceof String)) {
            throw new Error("Expected the field `Country` to be a primitive type in the JSON string but got " + data['Country']);
        }
        // ensure the json data is a string
        if (data['Currency'] && !(typeof data['Currency'] === 'string' || data['Currency'] instanceof String)) {
            throw new Error("Expected the field `Currency` to be a primitive type in the JSON string but got " + data['Currency']);
        }

        return true;
    }


}



/**
 * The id of the product that this price applies to.
 * @member {Number} ProductId
 */
PriceListModelsReadPriceListPrice.prototype['ProductId'] = undefined;

/**
 * The id of the price list that this price is associated with.
 * @member {Number} PriceListId
 */
PriceListModelsReadPriceListPrice.prototype['PriceListId'] = undefined;

/**
 * The name of the price list that this price is associated with.
 * @member {String} PriceListName
 */
PriceListModelsReadPriceListPrice.prototype['PriceListName'] = undefined;

/**
 * The price, inc VAT, in the currency of the associated price list.
 * @member {Number} PriceIncVat
 */
PriceListModelsReadPriceListPrice.prototype['PriceIncVat'] = undefined;

/**
 * The price, ex VAT, in the currency of the associated price list.
 * @member {Number} PriceExVat
 */
PriceListModelsReadPriceListPrice.prototype['PriceExVat'] = undefined;

/**
 * The VAT Rate.
 * @member {Number} VatRate
 */
PriceListModelsReadPriceListPrice.prototype['VatRate'] = undefined;

/**
 * The 2-letter ISO country code for this price.
 * @member {String} Country
 */
PriceListModelsReadPriceListPrice.prototype['Country'] = undefined;

/**
 * The <a href=\"https://en.wikipedia.org/wiki/ISO_4217\">3-letter ISO 4217 currency code</a> for this price.
 * @member {String} Currency
 */
PriceListModelsReadPriceListPrice.prototype['Currency'] = undefined;

/**
 * Staggered count for this price. Defaults to 1.    This field is ignored for prices on default (Ordinary, Sale and Campaign) price lists.
 * @member {Number} StaggeredCount
 */
PriceListModelsReadPriceListPrice.prototype['StaggeredCount'] = undefined;

/**
 * The date the price is valid from.    No start boundary if null.
 * @member {Date} ValidFrom
 */
PriceListModelsReadPriceListPrice.prototype['ValidFrom'] = undefined;

/**
 * The date the price is valid to.    No end boundary if null.
 * @member {Date} ValidTo
 */
PriceListModelsReadPriceListPrice.prototype['ValidTo'] = undefined;






export default PriceListModelsReadPriceListPrice;

