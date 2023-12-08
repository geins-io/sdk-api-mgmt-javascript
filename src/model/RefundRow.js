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
 * The RefundRow model module.
 * @module model/RefundRow
 * @version v1.10.1
 */
class RefundRow {
    /**
     * Constructs a new <code>RefundRow</code>.
     * A refund row.
     * @alias module:model/RefundRow
     */
    constructor() { 
        
        RefundRow.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RefundRow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RefundRow} obj Optional instance to populate.
     * @return {module:model/RefundRow} The populated <code>RefundRow</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RefundRow();

            if (data.hasOwnProperty('OrderId')) {
                obj['OrderId'] = ApiClient.convertToType(data['OrderId'], 'Number');
            }
            if (data.hasOwnProperty('RefundRowId')) {
                obj['RefundRowId'] = ApiClient.convertToType(data['RefundRowId'], 'Number');
            }
            if (data.hasOwnProperty('OrderRowId')) {
                obj['OrderRowId'] = ApiClient.convertToType(data['OrderRowId'], 'Number');
            }
            if (data.hasOwnProperty('RefundAmount')) {
                obj['RefundAmount'] = ApiClient.convertToType(data['RefundAmount'], 'Number');
            }
            if (data.hasOwnProperty('ToBalance')) {
                obj['ToBalance'] = ApiClient.convertToType(data['ToBalance'], 'Boolean');
            }
            if (data.hasOwnProperty('Settled')) {
                obj['Settled'] = ApiClient.convertToType(data['Settled'], 'Boolean');
            }
            if (data.hasOwnProperty('SettledOn')) {
                obj['SettledOn'] = ApiClient.convertToType(data['SettledOn'], 'Date');
            }
            if (data.hasOwnProperty('CreatedOn')) {
                obj['CreatedOn'] = ApiClient.convertToType(data['CreatedOn'], 'Date');
            }
            if (data.hasOwnProperty('Investigation')) {
                obj['Investigation'] = ApiClient.convertToType(data['Investigation'], 'Boolean');
            }
            if (data.hasOwnProperty('RefundType')) {
                obj['RefundType'] = ApiClient.convertToType(data['RefundType'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RefundRow</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RefundRow</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * 
 * @member {Number} OrderId
 */
RefundRow.prototype['OrderId'] = undefined;

/**
 * 
 * @member {Number} RefundRowId
 */
RefundRow.prototype['RefundRowId'] = undefined;

/**
 * The order row id that this refund row belongs to, if any.
 * @member {Number} OrderRowId
 */
RefundRow.prototype['OrderRowId'] = undefined;

/**
 * The refund amount. This can be different than the corresponding order row value.
 * @member {Number} RefundAmount
 */
RefundRow.prototype['RefundAmount'] = undefined;

/**
 * If true, the refund amount of this refund row is added to the customer's balance.
 * @member {Boolean} ToBalance
 */
RefundRow.prototype['ToBalance'] = undefined;

/**
 * If true, the refund row is marked as settled.
 * @member {Boolean} Settled
 */
RefundRow.prototype['Settled'] = undefined;

/**
 * The date when the refund row was marked as settled.
 * @member {Date} SettledOn
 */
RefundRow.prototype['SettledOn'] = undefined;

/**
 * The date the refund row was created.
 * @member {Date} CreatedOn
 */
RefundRow.prototype['CreatedOn'] = undefined;

/**
 * If true, the refund row is marked for investigation.
 * @member {Boolean} Investigation
 */
RefundRow.prototype['Investigation'] = undefined;

/**
 * The kind of source transaction the refund is derived from.  0 = Default. A regular refund of the order or order row.  1 = InstanceCost. Return cost type, used in drawing cost for instance.  2 = Shipping. Refund shipping type, used to refund shipping.  3 = InvoiceFee. Refund invoice fee.    0 = Default. A regular refund of the order or order row.    1 = InstanceCost. Return cost type, used in drawing cost for instance.    2 = Shipping. Refund shipping type, used to refund shipping.    3 = InvoiceFee. Refund invoice fee.
 * @member {module:model/RefundRow.RefundTypeEnum} RefundType
 */
RefundRow.prototype['RefundType'] = undefined;





/**
 * Allowed values for the <code>RefundType</code> property.
 * @enum {Number}
 * @readonly
 */
RefundRow['RefundTypeEnum'] = {

    /**
     * value: 0
     * @const
     */
    "0": 0,

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
    "3": 3
};



export default RefundRow;
