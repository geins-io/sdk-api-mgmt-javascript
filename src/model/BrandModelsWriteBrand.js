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
 * The BrandModelsWriteBrand model module.
 * @module model/BrandModelsWriteBrand
 * @version v1.7.1
 */
class BrandModelsWriteBrand {
    /**
     * Constructs a new <code>BrandModelsWriteBrand</code>.
     * A brand.
     * @alias module:model/BrandModelsWriteBrand
     */
    constructor() { 
        
        BrandModelsWriteBrand.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BrandModelsWriteBrand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BrandModelsWriteBrand} obj Optional instance to populate.
     * @return {module:model/BrandModelsWriteBrand} The populated <code>BrandModelsWriteBrand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BrandModelsWriteBrand();

            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('ExternalId')) {
                obj['ExternalId'] = ApiClient.convertToType(data['ExternalId'], 'String');
            }
            if (data.hasOwnProperty('Descriptions')) {
                obj['Descriptions'] = ApiClient.convertToType(data['Descriptions'], [SharedModelsLocalizableContent]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BrandModelsWriteBrand</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BrandModelsWriteBrand</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }
        // ensure the json data is a string
        if (data['ExternalId'] && !(typeof data['ExternalId'] === 'string' || data['ExternalId'] instanceof String)) {
            throw new Error("Expected the field `ExternalId` to be a primitive type in the JSON string but got " + data['ExternalId']);
        }
        if (data['Descriptions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['Descriptions'])) {
                throw new Error("Expected the field `Descriptions` to be an array in the JSON data but got " + data['Descriptions']);
            }
            // validate the optional field `Descriptions` (array)
            for (const item of data['Descriptions']) {
                SharedModelsLocalizableContent.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * The name of this brand.
 * @member {String} Name
 */
BrandModelsWriteBrand.prototype['Name'] = undefined;

/**
 * External Id of the brand.
 * @member {String} ExternalId
 */
BrandModelsWriteBrand.prototype['ExternalId'] = undefined;

/**
 * The localized descriptions of the brand.
 * @member {Array.<module:model/SharedModelsLocalizableContent>} Descriptions
 */
BrandModelsWriteBrand.prototype['Descriptions'] = undefined;






export default BrandModelsWriteBrand;

