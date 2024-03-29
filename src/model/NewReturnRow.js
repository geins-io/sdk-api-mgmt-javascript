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
 * The NewReturnRow model module.
 * @module model/NewReturnRow
 * @version v1.10.1
 */
class NewReturnRow {
    /**
     * Constructs a new <code>NewReturnRow</code>.
     * Contains all information needed for a new return row when creating a new return.
     * @alias module:model/NewReturnRow
     */
    constructor() { 
        
        NewReturnRow.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NewReturnRow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewReturnRow} obj Optional instance to populate.
     * @return {module:model/NewReturnRow} The populated <code>NewReturnRow</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewReturnRow();

            if (data.hasOwnProperty('OrderRowId')) {
                obj['OrderRowId'] = ApiClient.convertToType(data['OrderRowId'], 'Number');
            }
            if (data.hasOwnProperty('ReturnCode')) {
                obj['ReturnCode'] = ApiClient.convertToType(data['ReturnCode'], 'Number');
            }
            if (data.hasOwnProperty('ReturnAction')) {
                obj['ReturnAction'] = ApiClient.convertToType(data['ReturnAction'], 'Number');
            }
            if (data.hasOwnProperty('RefundAmount')) {
                obj['RefundAmount'] = ApiClient.convertToType(data['RefundAmount'], 'Number');
            }
            if (data.hasOwnProperty('Restock')) {
                obj['Restock'] = ApiClient.convertToType(data['Restock'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NewReturnRow</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NewReturnRow</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * The order row that this return row represents.  Required.
 * @member {Number} OrderRowId
 */
NewReturnRow.prototype['OrderRowId'] = undefined;

/**
 * The return code for this return row. The return code is used to tag the return row with a reason.  Required.
 * @member {Number} ReturnCode
 */
NewReturnRow.prototype['ReturnCode'] = undefined;

/**
 * The return action for this return row. The return action decides what type of refund should be created.  Required.  1 = Investigate. The return row is refunded, but is marked for investigation.  2 = NoRefund. No refund is made for the return row.  3 = RegularRefund. The return row is refunded normally.  4 = RefundToBalance. The return row is refunded to the customer's balance.    1 = Investigate. The return row is refunded, but is marked for investigation.    2 = NoRefund. No refund is made for the return row.    3 = RegularRefund. The return row is refunded normally.    4 = RefundToBalance. The return row is refunded to the customer's balance.
 * @member {module:model/NewReturnRow.ReturnActionEnum} ReturnAction
 */
NewReturnRow.prototype['ReturnAction'] = undefined;

/**
 * The refund amount for this return row. The refund amount must be less than or equal to the order row value.  Required.
 * @member {Number} RefundAmount
 */
NewReturnRow.prototype['RefundAmount'] = undefined;

/**
 * Set to true if the product corresponding to this return row should be automatically restocked when the return is created.
 * @member {Boolean} Restock
 */
NewReturnRow.prototype['Restock'] = undefined;





/**
 * Allowed values for the <code>ReturnAction</code> property.
 * @enum {Number}
 * @readonly
 */
NewReturnRow['ReturnActionEnum'] = {

    /**
     * value: 1
     * @const
     */
    "1": 1,

    /**
     * value: 2
     * @const
     */
    "2": 2,

    /**
     * value: 3
     * @const
     */
    "3": 3,

    /**
     * value: 4
     * @const
     */
    "4": 4
};



export default NewReturnRow;

