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
 * The OrderModelsOrderQuery model module.
 * @module model/OrderModelsOrderQuery
 * @version v1.7.1
 */
class OrderModelsOrderQuery {
    /**
     * Constructs a new <code>OrderModelsOrderQuery</code>.
     * Data carrying class for order queries
     * @alias module:model/OrderModelsOrderQuery
     */
    constructor() { 
        
        OrderModelsOrderQuery.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderModelsOrderQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderModelsOrderQuery} obj Optional instance to populate.
     * @return {module:model/OrderModelsOrderQuery} The populated <code>OrderModelsOrderQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderModelsOrderQuery();

            if (data.hasOwnProperty('Updated')) {
                obj['Updated'] = ApiClient.convertToType(data['Updated'], 'Date');
            }
            if (data.hasOwnProperty('StatusList')) {
                obj['StatusList'] = ApiClient.convertToType(data['StatusList'], 'String');
            }
            if (data.hasOwnProperty('MarketId')) {
                obj['MarketId'] = ApiClient.convertToType(data['MarketId'], 'Number');
            }
            if (data.hasOwnProperty('PaymentName')) {
                obj['PaymentName'] = ApiClient.convertToType(data['PaymentName'], 'String');
            }
            if (data.hasOwnProperty('ParcelGroupId')) {
                obj['ParcelGroupId'] = ApiClient.convertToType(data['ParcelGroupId'], 'Number');
            }
            if (data.hasOwnProperty('CustomerId')) {
                obj['CustomerId'] = ApiClient.convertToType(data['CustomerId'], 'Number');
            }
            if (data.hasOwnProperty('Email')) {
                obj['Email'] = ApiClient.convertToType(data['Email'], 'String');
            }
            if (data.hasOwnProperty('Include')) {
                obj['Include'] = ApiClient.convertToType(data['Include'], 'String');
            }
            if (data.hasOwnProperty('ExternalOrderStatus')) {
                obj['ExternalOrderStatus'] = ApiClient.convertToType(data['ExternalOrderStatus'], 'Number');
            }
            if (data.hasOwnProperty('CombineProductContainerRows')) {
                obj['CombineProductContainerRows'] = ApiClient.convertToType(data['CombineProductContainerRows'], 'Boolean');
            }
            if (data.hasOwnProperty('PackingLocationId')) {
                obj['PackingLocationId'] = ApiClient.convertToType(data['PackingLocationId'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderModelsOrderQuery</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderModelsOrderQuery</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['StatusList'] && !(typeof data['StatusList'] === 'string' || data['StatusList'] instanceof String)) {
            throw new Error("Expected the field `StatusList` to be a primitive type in the JSON string but got " + data['StatusList']);
        }
        // ensure the json data is a string
        if (data['PaymentName'] && !(typeof data['PaymentName'] === 'string' || data['PaymentName'] instanceof String)) {
            throw new Error("Expected the field `PaymentName` to be a primitive type in the JSON string but got " + data['PaymentName']);
        }
        // ensure the json data is a string
        if (data['Email'] && !(typeof data['Email'] === 'string' || data['Email'] instanceof String)) {
            throw new Error("Expected the field `Email` to be a primitive type in the JSON string but got " + data['Email']);
        }
        // ensure the json data is a string
        if (data['Include'] && !(typeof data['Include'] === 'string' || data['Include'] instanceof String)) {
            throw new Error("Expected the field `Include` to be a primitive type in the JSON string but got " + data['Include']);
        }

        return true;
    }


}



/**
 * Given a date, only orders updated after the provided date will be returned.
 * @member {Date} Updated
 */
OrderModelsOrderQuery.prototype['Updated'] = undefined;

/**
 * Comma separated list of statuses to filter on.
 * @member {String} StatusList
 */
OrderModelsOrderQuery.prototype['StatusList'] = undefined;

/**
 * Id of a market.
 * @member {Number} MarketId
 */
OrderModelsOrderQuery.prototype['MarketId'] = undefined;

/**
 * Name of a payment method
 * @member {String} PaymentName
 */
OrderModelsOrderQuery.prototype['PaymentName'] = undefined;

/**
 * Id of a parcel group.
 * @member {Number} ParcelGroupId
 */
OrderModelsOrderQuery.prototype['ParcelGroupId'] = undefined;

/**
 * The ID of a customer
 * @member {Number} CustomerId
 */
OrderModelsOrderQuery.prototype['CustomerId'] = undefined;

/**
 * The email of a customer
 * @member {String} Email
 */
OrderModelsOrderQuery.prototype['Email'] = undefined;

/**
 * Comma separated list of child-collections to also include in the query result.
 * @member {String} Include
 */
OrderModelsOrderQuery.prototype['Include'] = undefined;

/**
 * This status can be used by external systems to change the status of an order. Such as failed or done.
 * @member {Number} ExternalOrderStatus
 */
OrderModelsOrderQuery.prototype['ExternalOrderStatus'] = undefined;

/**
 * If true, will combine all order rows that are part of a container into a single container row.
 * @member {Boolean} CombineProductContainerRows
 */
OrderModelsOrderQuery.prototype['CombineProductContainerRows'] = undefined;

/**
 * The packing place to get orders from.
 * @member {Number} PackingLocationId
 */
OrderModelsOrderQuery.prototype['PackingLocationId'] = undefined;






export default OrderModelsOrderQuery;

