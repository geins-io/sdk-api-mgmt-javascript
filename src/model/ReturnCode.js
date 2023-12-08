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
 * The ReturnCode model module.
 * @module model/ReturnCode
 * @version v1.10.1
 */
class ReturnCode {
    /**
     * Constructs a new <code>ReturnCode</code>.
     * A code used to identify the reason for a return and suggested default behaviour.
     * @alias module:model/ReturnCode
     */
    constructor() { 
        
        ReturnCode.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReturnCode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReturnCode} obj Optional instance to populate.
     * @return {module:model/ReturnCode} The populated <code>ReturnCode</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReturnCode();

            if (data.hasOwnProperty('Code')) {
                obj['Code'] = ApiClient.convertToType(data['Code'], 'Number');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('AddToStock')) {
                obj['AddToStock'] = ApiClient.convertToType(data['AddToStock'], 'Boolean');
            }
            if (data.hasOwnProperty('DefaultReturnAction')) {
                obj['DefaultReturnAction'] = ApiClient.convertToType(data['DefaultReturnAction'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReturnCode</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReturnCode</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }

        return true;
    }


}



/**
 * The numerical code for the return code.
 * @member {Number} Code
 */
ReturnCode.prototype['Code'] = undefined;

/**
 * The name of the return code.
 * @member {String} Name
 */
ReturnCode.prototype['Name'] = undefined;

/**
 * If true, any return using this code is suggested to restock the product.   This is just used to suggest default behaviour - the actual choice is entirely up to the author of the return.
 * @member {Boolean} AddToStock
 */
ReturnCode.prototype['AddToStock'] = undefined;

/**
 * The default return action for this return code. This is used to determine what type of refund should be created when a return is created using this return code.  This is just used to suggest default behaviour - the actual choice is entirely up to the author of the return.
 * @member {Number} DefaultReturnAction
 */
ReturnCode.prototype['DefaultReturnAction'] = undefined;






export default ReturnCode;

