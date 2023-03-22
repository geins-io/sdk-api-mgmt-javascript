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
 * The OrderModelsRefund model module.
 * @module model/OrderModelsRefund
 * @version v1.7.1
 */
class OrderModelsRefund {
    /**
     * Constructs a new <code>OrderModelsRefund</code>.
     * Data carrier for a refund
     * @alias module:model/OrderModelsRefund
     */
    constructor() { 
        
        OrderModelsRefund.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderModelsRefund</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderModelsRefund} obj Optional instance to populate.
     * @return {module:model/OrderModelsRefund} The populated <code>OrderModelsRefund</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderModelsRefund();

            if (data.hasOwnProperty('Id')) {
                obj['Id'] = ApiClient.convertToType(data['Id'], 'Number');
            }
            if (data.hasOwnProperty('OrderRowId')) {
                obj['OrderRowId'] = ApiClient.convertToType(data['OrderRowId'], 'Number');
            }
            if (data.hasOwnProperty('PaymentDetailId')) {
                obj['PaymentDetailId'] = ApiClient.convertToType(data['PaymentDetailId'], 'Number');
            }
            if (data.hasOwnProperty('ReturnId')) {
                obj['ReturnId'] = ApiClient.convertToType(data['ReturnId'], 'Number');
            }
            if (data.hasOwnProperty('ArticleNumber')) {
                obj['ArticleNumber'] = ApiClient.convertToType(data['ArticleNumber'], 'String');
            }
            if (data.hasOwnProperty('CreatedAt')) {
                obj['CreatedAt'] = ApiClient.convertToType(data['CreatedAt'], 'Date');
            }
            if (data.hasOwnProperty('Total')) {
                obj['Total'] = ApiClient.convertToType(data['Total'], 'Number');
            }
            if (data.hasOwnProperty('ReasonCode')) {
                obj['ReasonCode'] = ApiClient.convertToType(data['ReasonCode'], 'Number');
            }
            if (data.hasOwnProperty('Reason')) {
                obj['Reason'] = ApiClient.convertToType(data['Reason'], 'String');
            }
            if (data.hasOwnProperty('ToBalance')) {
                obj['ToBalance'] = ApiClient.convertToType(data['ToBalance'], 'Boolean');
            }
            if (data.hasOwnProperty('Vat')) {
                obj['Vat'] = ApiClient.convertToType(data['Vat'], 'Number');
            }
            if (data.hasOwnProperty('ItemId')) {
                obj['ItemId'] = ApiClient.convertToType(data['ItemId'], 'Number');
            }
            if (data.hasOwnProperty('RefundType')) {
                obj['RefundType'] = ApiClient.convertToType(data['RefundType'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderModelsRefund</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderModelsRefund</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ArticleNumber'] && !(typeof data['ArticleNumber'] === 'string' || data['ArticleNumber'] instanceof String)) {
            throw new Error("Expected the field `ArticleNumber` to be a primitive type in the JSON string but got " + data['ArticleNumber']);
        }
        // ensure the json data is a string
        if (data['Reason'] && !(typeof data['Reason'] === 'string' || data['Reason'] instanceof String)) {
            throw new Error("Expected the field `Reason` to be a primitive type in the JSON string but got " + data['Reason']);
        }
        // ensure the json data is a string
        if (data['RefundType'] && !(typeof data['RefundType'] === 'string' || data['RefundType'] instanceof String)) {
            throw new Error("Expected the field `RefundType` to be a primitive type in the JSON string but got " + data['RefundType']);
        }

        return true;
    }


}



/**
 * Unique identifier for this refund
 * @member {Number} Id
 */
OrderModelsRefund.prototype['Id'] = undefined;

/**
 * Reference to the order row that has been refunded
 * @member {Number} OrderRowId
 */
OrderModelsRefund.prototype['OrderRowId'] = undefined;

/**
 * Reference to the payment detail that has been refunded
 * @member {Number} PaymentDetailId
 */
OrderModelsRefund.prototype['PaymentDetailId'] = undefined;

/**
 * Id number of the return. Can be used to group refunds.
 * @member {Number} ReturnId
 */
OrderModelsRefund.prototype['ReturnId'] = undefined;

/**
 * Article number. If the refund is not bound to an order row this field contains an optional refund article number.
 * @member {String} ArticleNumber
 */
OrderModelsRefund.prototype['ArticleNumber'] = undefined;

/**
 * Datetime when the refund was created
 * @member {Date} CreatedAt
 */
OrderModelsRefund.prototype['CreatedAt'] = undefined;

/**
 * Total amount refunded
 * @member {Number} Total
 */
OrderModelsRefund.prototype['Total'] = undefined;

/**
 * Reason code for the refund
 * @member {Number} ReasonCode
 */
OrderModelsRefund.prototype['ReasonCode'] = undefined;

/**
 * Reason for refund
 * @member {String} Reason
 */
OrderModelsRefund.prototype['Reason'] = undefined;

/**
 * Shows if the refund was deposited to the customers balance
 * @member {Boolean} ToBalance
 */
OrderModelsRefund.prototype['ToBalance'] = undefined;

/**
 * Vat percent in decimals for the refunded amount
 * @member {Number} Vat
 */
OrderModelsRefund.prototype['Vat'] = undefined;

/**
 * Item ID (SKU).
 * @member {Number} ItemId
 */
OrderModelsRefund.prototype['ItemId'] = undefined;

/**
 * Refund Type
 * @member {String} RefundType
 */
OrderModelsRefund.prototype['RefundType'] = undefined;






export default OrderModelsRefund;

