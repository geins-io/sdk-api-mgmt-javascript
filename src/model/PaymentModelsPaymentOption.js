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
 * The PaymentModelsPaymentOption model module.
 * @module model/PaymentModelsPaymentOption
 * @version v1.10.1
 */
class PaymentModelsPaymentOption {
    /**
     * Constructs a new <code>PaymentModelsPaymentOption</code>.
     * @alias module:model/PaymentModelsPaymentOption
     */
    constructor() { 
        
        PaymentModelsPaymentOption.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaymentModelsPaymentOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentModelsPaymentOption} obj Optional instance to populate.
     * @return {module:model/PaymentModelsPaymentOption} The populated <code>PaymentModelsPaymentOption</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentModelsPaymentOption();

            if (data.hasOwnProperty('PaymentId')) {
                obj['PaymentId'] = ApiClient.convertToType(data['PaymentId'], 'Number');
            }
            if (data.hasOwnProperty('PaymentGroupId')) {
                obj['PaymentGroupId'] = ApiClient.convertToType(data['PaymentGroupId'], 'Number');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('DisplayName')) {
                obj['DisplayName'] = ApiClient.convertToType(data['DisplayName'], 'String');
            }
            if (data.hasOwnProperty('Fee')) {
                obj['Fee'] = ApiClient.convertToType(data['Fee'], 'Number');
            }
            if (data.hasOwnProperty('Icon')) {
                obj['Icon'] = ApiClient.convertToType(data['Icon'], 'String');
            }
            if (data.hasOwnProperty('Sort')) {
                obj['Sort'] = ApiClient.convertToType(data['Sort'], 'Number');
            }
            if (data.hasOwnProperty('Period')) {
                obj['Period'] = ApiClient.convertToType(data['Period'], 'Number');
            }
            if (data.hasOwnProperty('TermsLink')) {
                obj['TermsLink'] = ApiClient.convertToType(data['TermsLink'], 'String');
            }
            if (data.hasOwnProperty('InfoLink')) {
                obj['InfoLink'] = ApiClient.convertToType(data['InfoLink'], 'String');
            }
            if (data.hasOwnProperty('PersonalIdRequired')) {
                obj['PersonalIdRequired'] = ApiClient.convertToType(data['PersonalIdRequired'], 'Boolean');
            }
            if (data.hasOwnProperty('RegisteredAddressRequired')) {
                obj['RegisteredAddressRequired'] = ApiClient.convertToType(data['RegisteredAddressRequired'], 'Boolean');
            }
            if (data.hasOwnProperty('HouseNumberRequired')) {
                obj['HouseNumberRequired'] = ApiClient.convertToType(data['HouseNumberRequired'], 'Boolean');
            }
            if (data.hasOwnProperty('HouseExtensionShown')) {
                obj['HouseExtensionShown'] = ApiClient.convertToType(data['HouseExtensionShown'], 'Boolean');
            }
            if (data.hasOwnProperty('GenderRequired')) {
                obj['GenderRequired'] = ApiClient.convertToType(data['GenderRequired'], 'Boolean');
            }
            if (data.hasOwnProperty('BirthdateRequired')) {
                obj['BirthdateRequired'] = ApiClient.convertToType(data['BirthdateRequired'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaymentModelsPaymentOption</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaymentModelsPaymentOption</code>.
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
        if (data['Icon'] && !(typeof data['Icon'] === 'string' || data['Icon'] instanceof String)) {
            throw new Error("Expected the field `Icon` to be a primitive type in the JSON string but got " + data['Icon']);
        }
        // ensure the json data is a string
        if (data['TermsLink'] && !(typeof data['TermsLink'] === 'string' || data['TermsLink'] instanceof String)) {
            throw new Error("Expected the field `TermsLink` to be a primitive type in the JSON string but got " + data['TermsLink']);
        }
        // ensure the json data is a string
        if (data['InfoLink'] && !(typeof data['InfoLink'] === 'string' || data['InfoLink'] instanceof String)) {
            throw new Error("Expected the field `InfoLink` to be a primitive type in the JSON string but got " + data['InfoLink']);
        }

        return true;
    }


}



/**
 * @member {Number} PaymentId
 */
PaymentModelsPaymentOption.prototype['PaymentId'] = undefined;

/**
 * @member {Number} PaymentGroupId
 */
PaymentModelsPaymentOption.prototype['PaymentGroupId'] = undefined;

/**
 * @member {String} Name
 */
PaymentModelsPaymentOption.prototype['Name'] = undefined;

/**
 * @member {String} DisplayName
 */
PaymentModelsPaymentOption.prototype['DisplayName'] = undefined;

/**
 * @member {Number} Fee
 */
PaymentModelsPaymentOption.prototype['Fee'] = undefined;

/**
 * @member {String} Icon
 */
PaymentModelsPaymentOption.prototype['Icon'] = undefined;

/**
 * @member {Number} Sort
 */
PaymentModelsPaymentOption.prototype['Sort'] = undefined;

/**
 * @member {Number} Period
 */
PaymentModelsPaymentOption.prototype['Period'] = undefined;

/**
 * @member {String} TermsLink
 */
PaymentModelsPaymentOption.prototype['TermsLink'] = undefined;

/**
 * @member {String} InfoLink
 */
PaymentModelsPaymentOption.prototype['InfoLink'] = undefined;

/**
 * @member {Boolean} PersonalIdRequired
 */
PaymentModelsPaymentOption.prototype['PersonalIdRequired'] = undefined;

/**
 * @member {Boolean} RegisteredAddressRequired
 */
PaymentModelsPaymentOption.prototype['RegisteredAddressRequired'] = undefined;

/**
 * @member {Boolean} HouseNumberRequired
 */
PaymentModelsPaymentOption.prototype['HouseNumberRequired'] = undefined;

/**
 * @member {Boolean} HouseExtensionShown
 */
PaymentModelsPaymentOption.prototype['HouseExtensionShown'] = undefined;

/**
 * @member {Boolean} GenderRequired
 */
PaymentModelsPaymentOption.prototype['GenderRequired'] = undefined;

/**
 * @member {Boolean} BirthdateRequired
 */
PaymentModelsPaymentOption.prototype['BirthdateRequired'] = undefined;






export default PaymentModelsPaymentOption;

