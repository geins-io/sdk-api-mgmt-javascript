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
import SharedModelsLocalizableContent from './SharedModelsLocalizableContent';

/**
 * The ProductParameterModelsWriteProductParameterValue model module.
 * @module model/ProductParameterModelsWriteProductParameterValue
 * @version v1.10.1
 */
class ProductParameterModelsWriteProductParameterValue {
    /**
     * Constructs a new <code>ProductParameterModelsWriteProductParameterValue</code>.
     * A parameter value for a product.
     * @alias module:model/ProductParameterModelsWriteProductParameterValue
     */
    constructor() { 
        
        ProductParameterModelsWriteProductParameterValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductParameterModelsWriteProductParameterValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductParameterModelsWriteProductParameterValue} obj Optional instance to populate.
     * @return {module:model/ProductParameterModelsWriteProductParameterValue} The populated <code>ProductParameterModelsWriteProductParameterValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductParameterModelsWriteProductParameterValue();

            if (data.hasOwnProperty('ProductId')) {
                obj['ProductId'] = ApiClient.convertToType(data['ProductId'], 'Number');
            }
            if (data.hasOwnProperty('ParameterId')) {
                obj['ParameterId'] = ApiClient.convertToType(data['ParameterId'], 'Number');
            }
            if (data.hasOwnProperty('Value')) {
                obj['Value'] = ApiClient.convertToType(data['Value'], 'String');
            }
            if (data.hasOwnProperty('LocalizedDescriptions')) {
                obj['LocalizedDescriptions'] = ApiClient.convertToType(data['LocalizedDescriptions'], [SharedModelsLocalizableContent]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductParameterModelsWriteProductParameterValue</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductParameterModelsWriteProductParameterValue</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Value'] && !(typeof data['Value'] === 'string' || data['Value'] instanceof String)) {
            throw new Error("Expected the field `Value` to be a primitive type in the JSON string but got " + data['Value']);
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

        return true;
    }


}



/**
 * The product id of the parameter.    This value can be omitted if the value is part of a product request.
 * @member {Number} ProductId
 */
ProductParameterModelsWriteProductParameterValue.prototype['ProductId'] = undefined;

/**
 * The unique identifier of the parameter that this value belongs to.
 * @member {Number} ParameterId
 */
ProductParameterModelsWriteProductParameterValue.prototype['ParameterId'] = undefined;

/**
 * The identifying value of the parameter.    Although always presented as a string, the data within Value must validate against the ProductParameterType of the parameter:    String = Any string.    Float = Any floating point number.    DateTime = Any date.    Multi = Any predefined value id from the predefined set of values for this parameter.    Single = Any predefined value id from the predefined set of values for this parameter.    Headline = Any string.    Tags = Any string, as part of a pipe-separated list. A string containing the pipe (|) character is not allowed.
 * @member {String} Value
 */
ProductParameterModelsWriteProductParameterValue.prototype['Value'] = undefined;

/**
 * The localized descriptions of the parameter.    Only used for parameter types String or Headline.    For Multi and Single, use LocalizedNames.
 * @member {Array.<module:model/SharedModelsLocalizableContent>} LocalizedDescriptions
 */
ProductParameterModelsWriteProductParameterValue.prototype['LocalizedDescriptions'] = undefined;






export default ProductParameterModelsWriteProductParameterValue;

