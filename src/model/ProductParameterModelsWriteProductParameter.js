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
 * The ProductParameterModelsWriteProductParameter model module.
 * @module model/ProductParameterModelsWriteProductParameter
 * @version v1.10.1
 */
class ProductParameterModelsWriteProductParameter {
    /**
     * Constructs a new <code>ProductParameterModelsWriteProductParameter</code>.
     * A product parameter to create or update.
     * @alias module:model/ProductParameterModelsWriteProductParameter
     */
    constructor() { 
        
        ProductParameterModelsWriteProductParameter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductParameterModelsWriteProductParameter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductParameterModelsWriteProductParameter} obj Optional instance to populate.
     * @return {module:model/ProductParameterModelsWriteProductParameter} The populated <code>ProductParameterModelsWriteProductParameter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductParameterModelsWriteProductParameter();

            if (data.hasOwnProperty('ParameterId')) {
                obj['ParameterId'] = ApiClient.convertToType(data['ParameterId'], 'Number');
            }
            if (data.hasOwnProperty('GroupId')) {
                obj['GroupId'] = ApiClient.convertToType(data['GroupId'], 'Number');
            }
            if (data.hasOwnProperty('ParameterType')) {
                obj['ParameterType'] = ApiClient.convertToType(data['ParameterType'], 'Number');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('LocalizedNames')) {
                obj['LocalizedNames'] = ApiClient.convertToType(data['LocalizedNames'], [SharedModelsLocalizableContent]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductParameterModelsWriteProductParameter</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductParameterModelsWriteProductParameter</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }
        if (data['LocalizedNames']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['LocalizedNames'])) {
                throw new Error("Expected the field `LocalizedNames` to be an array in the JSON data but got " + data['LocalizedNames']);
            }
            // validate the optional field `LocalizedNames` (array)
            for (const item of data['LocalizedNames']) {
                SharedModelsLocalizableContent.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * The unique identifier for the parameter.
 * @member {Number} ParameterId
 */
ProductParameterModelsWriteProductParameter.prototype['ParameterId'] = undefined;

/**
 * The unique identifier of the group that this parameter belongs to.
 * @member {Number} GroupId
 */
ProductParameterModelsWriteProductParameter.prototype['GroupId'] = undefined;

/**
 * The type of parameter.    1 = String. Any string value.    2 = Float. Any floating point number.               Period as decimal separator and no thousands separator.               Eg: 10001.789.    3 = DateTime. Any ISO 8601 date.               Eg: 2017-03-06T16:31:24+02:00.    4 = Multi. A string value from a predefined set of values.               This type may occur multiple times for the same parameter.    5 = Single. A string value from a predefined set of values.    6 = Headline. A string value used mainly for grouping in layout.    7 = Tags. A pipe-separated list of product specific values.               Eg: red|green|blue.
 * @member {module:model/ProductParameterModelsWriteProductParameter.ParameterTypeEnum} ParameterType
 */
ProductParameterModelsWriteProductParameter.prototype['ParameterType'] = undefined;

/**
 * The non-localized name of the parameter.
 * @member {String} Name
 */
ProductParameterModelsWriteProductParameter.prototype['Name'] = undefined;

/**
 * The localized names of the parameter.
 * @member {Array.<module:model/SharedModelsLocalizableContent>} LocalizedNames
 */
ProductParameterModelsWriteProductParameter.prototype['LocalizedNames'] = undefined;





/**
 * Allowed values for the <code>ParameterType</code> property.
 * @enum {Number}
 * @readonly
 */
ProductParameterModelsWriteProductParameter['ParameterTypeEnum'] = {

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



export default ProductParameterModelsWriteProductParameter;

