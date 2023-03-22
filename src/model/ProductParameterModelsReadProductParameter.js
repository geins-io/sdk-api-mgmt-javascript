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
 * The ProductParameterModelsReadProductParameter model module.
 * @module model/ProductParameterModelsReadProductParameter
 * @version v1.7.1
 */
class ProductParameterModelsReadProductParameter {
    /**
     * Constructs a new <code>ProductParameterModelsReadProductParameter</code>.
     * An existing product parameter.
     * @alias module:model/ProductParameterModelsReadProductParameter
     */
    constructor() { 
        
        ProductParameterModelsReadProductParameter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductParameterModelsReadProductParameter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductParameterModelsReadProductParameter} obj Optional instance to populate.
     * @return {module:model/ProductParameterModelsReadProductParameter} The populated <code>ProductParameterModelsReadProductParameter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductParameterModelsReadProductParameter();

            if (data.hasOwnProperty('ParameterId')) {
                obj['ParameterId'] = ApiClient.convertToType(data['ParameterId'], 'Number');
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
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductParameterModelsReadProductParameter</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductParameterModelsReadProductParameter</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['GroupName'] && !(typeof data['GroupName'] === 'string' || data['GroupName'] instanceof String)) {
            throw new Error("Expected the field `GroupName` to be a primitive type in the JSON string but got " + data['GroupName']);
        }
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }

        return true;
    }


}



/**
 * The unique identifier for the parameter.
 * @member {Number} ParameterId
 */
ProductParameterModelsReadProductParameter.prototype['ParameterId'] = undefined;

/**
 * The unique identifier of the group that this parameter belongs to.
 * @member {Number} GroupId
 */
ProductParameterModelsReadProductParameter.prototype['GroupId'] = undefined;

/**
 * The name of the group that this parameter belongs to.
 * @member {String} GroupName
 */
ProductParameterModelsReadProductParameter.prototype['GroupName'] = undefined;

/**
 * The type of parameter.
 * @member {module:model/ProductParameterModelsReadProductParameter.ParameterTypeEnum} ParameterType
 */
ProductParameterModelsReadProductParameter.prototype['ParameterType'] = undefined;

/**
 * The non-localized name of the parameter.
 * @member {String} Name
 */
ProductParameterModelsReadProductParameter.prototype['Name'] = undefined;





/**
 * Allowed values for the <code>ParameterType</code> property.
 * @enum {Number}
 * @readonly
 */
ProductParameterModelsReadProductParameter['ParameterTypeEnum'] = {

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



export default ProductParameterModelsReadProductParameter;
