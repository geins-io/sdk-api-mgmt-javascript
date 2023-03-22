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
import PageResult from './PageResult';
import ProductModelsReadProduct from './ProductModelsReadProduct';

/**
 * The EnvelopeProductModelsReadProduct model module.
 * @module model/EnvelopeProductModelsReadProduct
 * @version v1.7.1
 */
class EnvelopeProductModelsReadProduct {
    /**
     * Constructs a new <code>EnvelopeProductModelsReadProduct</code>.
     * An envelope for the result of and action taken on a resource.
     * @alias module:model/EnvelopeProductModelsReadProduct
     */
    constructor() { 
        
        EnvelopeProductModelsReadProduct.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnvelopeProductModelsReadProduct</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvelopeProductModelsReadProduct} obj Optional instance to populate.
     * @return {module:model/EnvelopeProductModelsReadProduct} The populated <code>EnvelopeProductModelsReadProduct</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvelopeProductModelsReadProduct();

            if (data.hasOwnProperty('Message')) {
                obj['Message'] = ApiClient.convertToType(data['Message'], 'String');
            }
            if (data.hasOwnProperty('Details')) {
                obj['Details'] = ApiClient.convertToType(data['Details'], ['String']);
            }
            if (data.hasOwnProperty('Resource')) {
                obj['Resource'] = ProductModelsReadProduct.constructFromObject(data['Resource']);
            }
            if (data.hasOwnProperty('PageResult')) {
                obj['PageResult'] = PageResult.constructFromObject(data['PageResult']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EnvelopeProductModelsReadProduct</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EnvelopeProductModelsReadProduct</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Message'] && !(typeof data['Message'] === 'string' || data['Message'] instanceof String)) {
            throw new Error("Expected the field `Message` to be a primitive type in the JSON string but got " + data['Message']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['Details'])) {
            throw new Error("Expected the field `Details` to be an array in the JSON data but got " + data['Details']);
        }
        // validate the optional field `Resource`
        if (data['Resource']) { // data not null
          ProductModelsReadProduct.validateJSON(data['Resource']);
        }
        // validate the optional field `PageResult`
        if (data['PageResult']) { // data not null
          PageResult.validateJSON(data['PageResult']);
        }

        return true;
    }


}



/**
 * A status message for the action taken.
 * @member {String} Message
 */
EnvelopeProductModelsReadProduct.prototype['Message'] = undefined;

/**
 * Any validation messages for the data on the current action.
 * @member {Array.<String>} Details
 */
EnvelopeProductModelsReadProduct.prototype['Details'] = undefined;

/**
 * @member {module:model/ProductModelsReadProduct} Resource
 */
EnvelopeProductModelsReadProduct.prototype['Resource'] = undefined;

/**
 * @member {module:model/PageResult} PageResult
 */
EnvelopeProductModelsReadProduct.prototype['PageResult'] = undefined;






export default EnvelopeProductModelsReadProduct;

