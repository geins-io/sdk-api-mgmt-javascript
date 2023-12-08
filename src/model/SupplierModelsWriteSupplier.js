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
 * The SupplierModelsWriteSupplier model module.
 * @module model/SupplierModelsWriteSupplier
 * @version v1.10.1
 */
class SupplierModelsWriteSupplier {
    /**
     * Constructs a new <code>SupplierModelsWriteSupplier</code>.
     * A product supplier.
     * @alias module:model/SupplierModelsWriteSupplier
     */
    constructor() { 
        
        SupplierModelsWriteSupplier.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SupplierModelsWriteSupplier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SupplierModelsWriteSupplier} obj Optional instance to populate.
     * @return {module:model/SupplierModelsWriteSupplier} The populated <code>SupplierModelsWriteSupplier</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SupplierModelsWriteSupplier();

            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Address1')) {
                obj['Address1'] = ApiClient.convertToType(data['Address1'], 'String');
            }
            if (data.hasOwnProperty('Address2')) {
                obj['Address2'] = ApiClient.convertToType(data['Address2'], 'String');
            }
            if (data.hasOwnProperty('Address3')) {
                obj['Address3'] = ApiClient.convertToType(data['Address3'], 'String');
            }
            if (data.hasOwnProperty('ZipCode')) {
                obj['ZipCode'] = ApiClient.convertToType(data['ZipCode'], 'String');
            }
            if (data.hasOwnProperty('Country')) {
                obj['Country'] = ApiClient.convertToType(data['Country'], 'String');
            }
            if (data.hasOwnProperty('ContactPerson')) {
                obj['ContactPerson'] = ApiClient.convertToType(data['ContactPerson'], 'String');
            }
            if (data.hasOwnProperty('Phone1')) {
                obj['Phone1'] = ApiClient.convertToType(data['Phone1'], 'String');
            }
            if (data.hasOwnProperty('Phone2')) {
                obj['Phone2'] = ApiClient.convertToType(data['Phone2'], 'String');
            }
            if (data.hasOwnProperty('Email')) {
                obj['Email'] = ApiClient.convertToType(data['Email'], 'String');
            }
            if (data.hasOwnProperty('ExternalId')) {
                obj['ExternalId'] = ApiClient.convertToType(data['ExternalId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SupplierModelsWriteSupplier</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SupplierModelsWriteSupplier</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }
        // ensure the json data is a string
        if (data['Address1'] && !(typeof data['Address1'] === 'string' || data['Address1'] instanceof String)) {
            throw new Error("Expected the field `Address1` to be a primitive type in the JSON string but got " + data['Address1']);
        }
        // ensure the json data is a string
        if (data['Address2'] && !(typeof data['Address2'] === 'string' || data['Address2'] instanceof String)) {
            throw new Error("Expected the field `Address2` to be a primitive type in the JSON string but got " + data['Address2']);
        }
        // ensure the json data is a string
        if (data['Address3'] && !(typeof data['Address3'] === 'string' || data['Address3'] instanceof String)) {
            throw new Error("Expected the field `Address3` to be a primitive type in the JSON string but got " + data['Address3']);
        }
        // ensure the json data is a string
        if (data['ZipCode'] && !(typeof data['ZipCode'] === 'string' || data['ZipCode'] instanceof String)) {
            throw new Error("Expected the field `ZipCode` to be a primitive type in the JSON string but got " + data['ZipCode']);
        }
        // ensure the json data is a string
        if (data['Country'] && !(typeof data['Country'] === 'string' || data['Country'] instanceof String)) {
            throw new Error("Expected the field `Country` to be a primitive type in the JSON string but got " + data['Country']);
        }
        // ensure the json data is a string
        if (data['ContactPerson'] && !(typeof data['ContactPerson'] === 'string' || data['ContactPerson'] instanceof String)) {
            throw new Error("Expected the field `ContactPerson` to be a primitive type in the JSON string but got " + data['ContactPerson']);
        }
        // ensure the json data is a string
        if (data['Phone1'] && !(typeof data['Phone1'] === 'string' || data['Phone1'] instanceof String)) {
            throw new Error("Expected the field `Phone1` to be a primitive type in the JSON string but got " + data['Phone1']);
        }
        // ensure the json data is a string
        if (data['Phone2'] && !(typeof data['Phone2'] === 'string' || data['Phone2'] instanceof String)) {
            throw new Error("Expected the field `Phone2` to be a primitive type in the JSON string but got " + data['Phone2']);
        }
        // ensure the json data is a string
        if (data['Email'] && !(typeof data['Email'] === 'string' || data['Email'] instanceof String)) {
            throw new Error("Expected the field `Email` to be a primitive type in the JSON string but got " + data['Email']);
        }
        // ensure the json data is a string
        if (data['ExternalId'] && !(typeof data['ExternalId'] === 'string' || data['ExternalId'] instanceof String)) {
            throw new Error("Expected the field `ExternalId` to be a primitive type in the JSON string but got " + data['ExternalId']);
        }

        return true;
    }


}



/**
 * The name of the supplier.
 * @member {String} Name
 */
SupplierModelsWriteSupplier.prototype['Name'] = undefined;

/**
 * The first address line of the supplier.
 * @member {String} Address1
 */
SupplierModelsWriteSupplier.prototype['Address1'] = undefined;

/**
 * The second address line of the supplier.
 * @member {String} Address2
 */
SupplierModelsWriteSupplier.prototype['Address2'] = undefined;

/**
 * The third address line of the supplier.
 * @member {String} Address3
 */
SupplierModelsWriteSupplier.prototype['Address3'] = undefined;

/**
 * The zip code of the supplier.
 * @member {String} ZipCode
 */
SupplierModelsWriteSupplier.prototype['ZipCode'] = undefined;

/**
 * The country of the supplier.
 * @member {String} Country
 */
SupplierModelsWriteSupplier.prototype['Country'] = undefined;

/**
 * The contact person of the supplier.
 * @member {String} ContactPerson
 */
SupplierModelsWriteSupplier.prototype['ContactPerson'] = undefined;

/**
 * The primary phone number of the supplier.
 * @member {String} Phone1
 */
SupplierModelsWriteSupplier.prototype['Phone1'] = undefined;

/**
 * The secondary phone number of the supplier.
 * @member {String} Phone2
 */
SupplierModelsWriteSupplier.prototype['Phone2'] = undefined;

/**
 * The email address of the supplier.
 * @member {String} Email
 */
SupplierModelsWriteSupplier.prototype['Email'] = undefined;

/**
 * External Id of the supplier.
 * @member {String} ExternalId
 */
SupplierModelsWriteSupplier.prototype['ExternalId'] = undefined;






export default SupplierModelsWriteSupplier;

