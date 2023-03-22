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
 * The MarketModelsMarket model module.
 * @module model/MarketModelsMarket
 * @version v1.7.1
 */
class MarketModelsMarket {
    /**
     * Constructs a new <code>MarketModelsMarket</code>.
     * @alias module:model/MarketModelsMarket
     */
    constructor() { 
        
        MarketModelsMarket.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MarketModelsMarket</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MarketModelsMarket} obj Optional instance to populate.
     * @return {module:model/MarketModelsMarket} The populated <code>MarketModelsMarket</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MarketModelsMarket();

            if (data.hasOwnProperty('Id')) {
                obj['Id'] = ApiClient.convertToType(data['Id'], 'Number');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('DisplayName')) {
                obj['DisplayName'] = ApiClient.convertToType(data['DisplayName'], 'String');
            }
            if (data.hasOwnProperty('Currency')) {
                obj['Currency'] = ApiClient.convertToType(data['Currency'], 'String');
            }
            if (data.hasOwnProperty('VatRate')) {
                obj['VatRate'] = ApiClient.convertToType(data['VatRate'], 'Number');
            }
            if (data.hasOwnProperty('MarketPrefix')) {
                obj['MarketPrefix'] = ApiClient.convertToType(data['MarketPrefix'], 'String');
            }
            if (data.hasOwnProperty('CountryId')) {
                obj['CountryId'] = ApiClient.convertToType(data['CountryId'], 'Number');
            }
            if (data.hasOwnProperty('CurrencyId')) {
                obj['CurrencyId'] = ApiClient.convertToType(data['CurrencyId'], 'Number');
            }
            if (data.hasOwnProperty('CurrencyRate')) {
                obj['CurrencyRate'] = ApiClient.convertToType(data['CurrencyRate'], 'Number');
            }
            if (data.hasOwnProperty('LanguageId')) {
                obj['LanguageId'] = ApiClient.convertToType(data['LanguageId'], 'Number');
            }
            if (data.hasOwnProperty('Language')) {
                obj['Language'] = ApiClient.convertToType(data['Language'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MarketModelsMarket</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MarketModelsMarket</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }
        // ensure the json data is a string
        if (data['DisplayName'] && !(typeof data['DisplayName'] === 'string' || data['DisplayName'] instanceof String)) {
            throw new Error("Expected the field `DisplayName` to be a primitive type in the JSON string but got " + data['DisplayName']);
        }
        // ensure the json data is a string
        if (data['Currency'] && !(typeof data['Currency'] === 'string' || data['Currency'] instanceof String)) {
            throw new Error("Expected the field `Currency` to be a primitive type in the JSON string but got " + data['Currency']);
        }
        // ensure the json data is a string
        if (data['MarketPrefix'] && !(typeof data['MarketPrefix'] === 'string' || data['MarketPrefix'] instanceof String)) {
            throw new Error("Expected the field `MarketPrefix` to be a primitive type in the JSON string but got " + data['MarketPrefix']);
        }
        // ensure the json data is a string
        if (data['Language'] && !(typeof data['Language'] === 'string' || data['Language'] instanceof String)) {
            throw new Error("Expected the field `Language` to be a primitive type in the JSON string but got " + data['Language']);
        }

        return true;
    }


}



/**
 * @member {Number} Id
 */
MarketModelsMarket.prototype['Id'] = undefined;

/**
 * @member {String} Name
 */
MarketModelsMarket.prototype['Name'] = undefined;

/**
 * @member {String} DisplayName
 */
MarketModelsMarket.prototype['DisplayName'] = undefined;

/**
 * @member {String} Currency
 */
MarketModelsMarket.prototype['Currency'] = undefined;

/**
 * @member {Number} VatRate
 */
MarketModelsMarket.prototype['VatRate'] = undefined;

/**
 * @member {String} MarketPrefix
 */
MarketModelsMarket.prototype['MarketPrefix'] = undefined;

/**
 * @member {Number} CountryId
 */
MarketModelsMarket.prototype['CountryId'] = undefined;

/**
 * @member {Number} CurrencyId
 */
MarketModelsMarket.prototype['CurrencyId'] = undefined;

/**
 * @member {Number} CurrencyRate
 */
MarketModelsMarket.prototype['CurrencyRate'] = undefined;

/**
 * @member {Number} LanguageId
 */
MarketModelsMarket.prototype['LanguageId'] = undefined;

/**
 * @member {String} Language
 */
MarketModelsMarket.prototype['Language'] = undefined;






export default MarketModelsMarket;
