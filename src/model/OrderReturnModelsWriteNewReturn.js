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
import NewReturnRow from './NewReturnRow';

/**
 * The OrderReturnModelsWriteNewReturn model module.
 * @module model/OrderReturnModelsWriteNewReturn
 * @version v1.10.1
 */
class OrderReturnModelsWriteNewReturn {
    /**
     * Constructs a new <code>OrderReturnModelsWriteNewReturn</code>.
     * @alias module:model/OrderReturnModelsWriteNewReturn
     */
    constructor() { 
        
        OrderReturnModelsWriteNewReturn.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderReturnModelsWriteNewReturn</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderReturnModelsWriteNewReturn} obj Optional instance to populate.
     * @return {module:model/OrderReturnModelsWriteNewReturn} The populated <code>OrderReturnModelsWriteNewReturn</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderReturnModelsWriteNewReturn();

            if (data.hasOwnProperty('ShippingFeeRefund')) {
                obj['ShippingFeeRefund'] = ApiClient.convertToType(data['ShippingFeeRefund'], 'Number');
            }
            if (data.hasOwnProperty('PaymentFeeRefund')) {
                obj['PaymentFeeRefund'] = ApiClient.convertToType(data['PaymentFeeRefund'], 'Number');
            }
            if (data.hasOwnProperty('ReturnFee')) {
                obj['ReturnFee'] = ApiClient.convertToType(data['ReturnFee'], 'Number');
            }
            if (data.hasOwnProperty('AdminUserId')) {
                obj['AdminUserId'] = ApiClient.convertToType(data['AdminUserId'], 'Number');
            }
            if (data.hasOwnProperty('Author')) {
                obj['Author'] = ApiClient.convertToType(data['Author'], 'String');
            }
            if (data.hasOwnProperty('Reference')) {
                obj['Reference'] = ApiClient.convertToType(data['Reference'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('SkipReturnEvents')) {
                obj['SkipReturnEvents'] = ApiClient.convertToType(data['SkipReturnEvents'], 'Boolean');
            }
            if (data.hasOwnProperty('SkipProductEvents')) {
                obj['SkipProductEvents'] = ApiClient.convertToType(data['SkipProductEvents'], 'Boolean');
            }
            if (data.hasOwnProperty('SkipRefundEvents')) {
                obj['SkipRefundEvents'] = ApiClient.convertToType(data['SkipRefundEvents'], 'Boolean');
            }
            if (data.hasOwnProperty('RefundsRequireApproval')) {
                obj['RefundsRequireApproval'] = ApiClient.convertToType(data['RefundsRequireApproval'], 'Boolean');
            }
            if (data.hasOwnProperty('ReturnRows')) {
                obj['ReturnRows'] = ApiClient.convertToType(data['ReturnRows'], [NewReturnRow]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderReturnModelsWriteNewReturn</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderReturnModelsWriteNewReturn</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Author'] && !(typeof data['Author'] === 'string' || data['Author'] instanceof String)) {
            throw new Error("Expected the field `Author` to be a primitive type in the JSON string but got " + data['Author']);
        }
        // ensure the json data is a string
        if (data['Reference'] && !(typeof data['Reference'] === 'string' || data['Reference'] instanceof String)) {
            throw new Error("Expected the field `Reference` to be a primitive type in the JSON string but got " + data['Reference']);
        }
        // ensure the json data is a string
        if (data['Description'] && !(typeof data['Description'] === 'string' || data['Description'] instanceof String)) {
            throw new Error("Expected the field `Description` to be a primitive type in the JSON string but got " + data['Description']);
        }
        if (data['ReturnRows']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['ReturnRows'])) {
                throw new Error("Expected the field `ReturnRows` to be an array in the JSON data but got " + data['ReturnRows']);
            }
            // validate the optional field `ReturnRows` (array)
            for (const item of data['ReturnRows']) {
                NewReturnRow.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * How much of the shipping fee to refund.   Optional.
 * @member {Number} ShippingFeeRefund
 */
OrderReturnModelsWriteNewReturn.prototype['ShippingFeeRefund'] = undefined;

/**
 * How much of the payment fee to refund.   Optional.
 * @member {Number} PaymentFeeRefund
 */
OrderReturnModelsWriteNewReturn.prototype['PaymentFeeRefund'] = undefined;

/**
 * The fee that the customer pays for the return. This value will be deducted from the total refund.  Optional.
 * @member {Number} ReturnFee
 */
OrderReturnModelsWriteNewReturn.prototype['ReturnFee'] = undefined;

/**
 * The id of the admin user that created the return. Leave blank if unsure.   Optional.
 * @member {Number} AdminUserId
 */
OrderReturnModelsWriteNewReturn.prototype['AdminUserId'] = undefined;

/**
 * The name of person or system that created the return.   Optional.
 * @member {String} Author
 */
OrderReturnModelsWriteNewReturn.prototype['Author'] = undefined;

/**
 * An custom reference for the return.   Optional.
 * @member {String} Reference
 */
OrderReturnModelsWriteNewReturn.prototype['Reference'] = undefined;

/**
 * A describing text for the return.   Optional.
 * @member {String} Description
 */
OrderReturnModelsWriteNewReturn.prototype['Description'] = undefined;

/**
 * If set to true, no return events will be sent.
 * @member {Boolean} SkipReturnEvents
 */
OrderReturnModelsWriteNewReturn.prototype['SkipReturnEvents'] = undefined;

/**
 * If set to true, no product events will be sent for restocked products.
 * @member {Boolean} SkipProductEvents
 */
OrderReturnModelsWriteNewReturn.prototype['SkipProductEvents'] = undefined;

/**
 * If set to true, no refund events will be sent.
 * @member {Boolean} SkipRefundEvents
 */
OrderReturnModelsWriteNewReturn.prototype['SkipRefundEvents'] = undefined;

/**
 * If set to true, refunds will require approval before being sent.
 * @member {Boolean} RefundsRequireApproval
 */
OrderReturnModelsWriteNewReturn.prototype['RefundsRequireApproval'] = undefined;

/**
 * The list of return rows to create. Each return row represents an order row that is returned.  Required.
 * @member {Array.<module:model/NewReturnRow>} ReturnRows
 */
OrderReturnModelsWriteNewReturn.prototype['ReturnRows'] = undefined;






export default OrderReturnModelsWriteNewReturn;

