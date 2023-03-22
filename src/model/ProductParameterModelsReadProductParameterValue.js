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
import SharedModelsLocalizableContent from './SharedModelsLocalizableContent';

/**
 * The ProductParameterModelsReadProductParameterValue model module.
 * @module model/ProductParameterModelsReadProductParameterValue
 * @version v1.7.1
 */
class ProductParameterModelsReadProductParameterValue {
    /**
     * Constructs a new <code>ProductParameterModelsReadProductParameterValue</code>.
     * A parameter value for a product.
     * @alias module:model/ProductParameterModelsReadProductParameterValue
     */
    constructor() { 
        
        ProductParameterModelsReadProductParameterValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductParameterModelsReadProductParameterValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductParameterModelsReadProductParameterValue} obj Optional instance to populate.
     * @return {module:model/ProductParameterModelsReadProductParameterValue} The populated <code>ProductParameterModelsReadProductParameterValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductParameterModelsReadProductParameterValue();

            if (data.hasOwnProperty('ParameterValueId')) {
                obj['ParameterValueId'] = ApiClient.convertToType(data['ParameterValueId'], 'Number');
            }
            if (data.hasOwnProperty('ProductId')) {
                obj['ProductId'] = ApiClient.convertToType(data['ProductId'], 'Number');
            }
            if (data.hasOwnProperty('ParameterId')) {
                obj['ParameterId'] = ApiClient.convertToType(data['ParameterId'], 'Number');
            }
            if (data.hasOwnProperty('ParameterName')) {
                obj['ParameterName'] = ApiClient.convertToType(data['ParameterName'], 'String');
            }
            if (data.hasOwnProperty('GroupId')) {
                obj['GroupId'] = ApiClient.convertToType(data['GroupId'], 'Number');
            }
            if (data.hasOwnProperty('GroupName')) {
                obj['GroupName'] = ApiClient.convertToType(data['GroupName'], 'String');
            }
            if (data.hasOwnProperty('ParameterType')) {
                obj['ParameterType'] = ApiClient.convertToType(data['ParameterType'], 'Number');
            }
            if (data.hasOwnProperty('Value')) {
                obj['Value'] = ApiClient.convertToType(data['Value'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('LocalizedDescriptions')) {
                obj['LocalizedDescriptions'] = ApiClient.convertToType(data['LocalizedDescriptions'], [SharedModelsLocalizableContent]);
            }
            if (data.hasOwnProperty('InternalIdentifier')) {
                obj['InternalIdentifier'] = ApiClient.convertToType(data['InternalIdentifier'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductParameterModelsReadProductParameterValue</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductParameterModelsReadProductParameterValue</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ParameterName'] && !(typeof data['ParameterName'] === 'string' || data['ParameterName'] instanceof String)) {
            throw new Error("Expected the field `ParameterName` to be a primitive type in the JSON string but got " + data['ParameterName']);
        }
        // ensure the json data is a string
        if (data['GroupName'] && !(typeof data['GroupName'] === 'string' || data['GroupName'] instanceof String)) {
            throw new Error("Expected the field `GroupName` to be a primitive type in the JSON string but got " + data['GroupName']);
        }
        // ensure the json data is a string
        if (data['Value'] && !(typeof data['Value'] === 'string' || data['Value'] instanceof String)) {
            throw new Error("Expected the field `Value` to be a primitive type in the JSON string but got " + data['Value']);
        }
        // ensure the json data is a string
        if (data['Description'] && !(typeof data['Description'] === 'string' || data['Description'] instanceof String)) {
            throw new Error("Expected the field `Description` to be a primitive type in the JSON string but got " + data['Description']);
        }
        if (data['LocalizedDescriptions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['LocalizedDescriptions'])) {
                throw new Error("Expected the field `LocalizedDescriptions` to be an array in the JSON data but got " + data['LocalizedDescriptions']);
            }
            // validate the optional field `LocalizedDescriptions` (array)
            for (const item of data['LocalizedDescriptions']) {
                SharedModelsLocalizableContent.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['InternalIdentifier'] && !(typeof data['InternalIdentifier'] === 'string' || data['InternalIdentifier'] instanceof String)) {
            throw new Error("Expected the field `InternalIdentifier` to be a primitive type in the JSON string but got " + data['InternalIdentifier']);
        }

        return true;
    }


}



/**
 * The unique identifier of this parameter value.
 * @member {Number} ParameterValueId
 */
ProductParameterModelsReadProductParameterValue.prototype['ParameterValueId'] = undefined;

/**
 * The product id of the parameter.
 * @member {Number} ProductId
 */
ProductParameterModelsReadProductParameterValue.prototype['ProductId'] = undefined;

/**
 * The unique identifier of the parameter that this value belongs to.
 * @member {Number} ParameterId
 */
ProductParameterModelsReadProductParameterValue.prototype['ParameterId'] = undefined;

/**
 * The non-localized name of the parameter.
 * @member {String} ParameterName
 */
ProductParameterModelsReadProductParameterValue.prototype['ParameterName'] = undefined;

/**
 * The unique identifier of the group that this parameter belongs to.
 * @member {Number} GroupId
 */
ProductParameterModelsReadProductParameterValue.prototype['GroupId'] = undefined;

/**
 * The name of the group that this parameter belongs to.
 * @member {String} GroupName
 */
ProductParameterModelsReadProductParameterValue.prototype['GroupName'] = undefined;

/**
 * The type of parameter.
 * @member {module:model/ProductParameterModelsReadProductParameterValue.ParameterTypeEnum} ParameterType
 */
ProductParameterModelsReadProductParameterValue.prototype['ParameterType'] = undefined;

/**
 * The identifying value of the parameter.
 * @member {String} Value
 */
ProductParameterModelsReadProductParameterValue.prototype['Value'] = undefined;

/**
 * The non-localized description of the parameter.
 * @member {String} Description
 */
ProductParameterModelsReadProductParameterValue.prototype['Description'] = undefined;

/**
 * The localized descriptions of the parameter.
 * @member {Array.<module:model/SharedModelsLocalizableContent>} LocalizedDescriptions
 */
ProductParameterModelsReadProductParameterValue.prototype['LocalizedDescriptions'] = undefined;

/**
 * The internal identifier of the parameter.
 * @member {String} InternalIdentifier
 */
ProductParameterModelsReadProductParameterValue.prototype['InternalIdentifier'] = undefined;





/**
 * Allowed values for the <code>ParameterType</code> property.
 * @enum {Number}
 * @readonly
 */
ProductParameterModelsReadProductParameterValue['ParameterTypeEnum'] = {

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
    "4": 4,

    /**
     * value: 5
     * @const
     */
    "5": 5,

    /**
     * value: 6
     * @const
     */
    "6": 6,

    /**
     * value: 7
     * @const
     */
    "7": 7
};



export default ProductParameterModelsReadProductParameterValue;
