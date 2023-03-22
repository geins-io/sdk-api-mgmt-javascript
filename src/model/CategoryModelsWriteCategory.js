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
 * The CategoryModelsWriteCategory model module.
 * @module model/CategoryModelsWriteCategory
 * @version v1.7.1
 */
class CategoryModelsWriteCategory {
    /**
     * Constructs a new <code>CategoryModelsWriteCategory</code>.
     * A category to create or update.
     * @alias module:model/CategoryModelsWriteCategory
     */
    constructor() { 
        
        CategoryModelsWriteCategory.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CategoryModelsWriteCategory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CategoryModelsWriteCategory} obj Optional instance to populate.
     * @return {module:model/CategoryModelsWriteCategory} The populated <code>CategoryModelsWriteCategory</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CategoryModelsWriteCategory();

            if (data.hasOwnProperty('ParentCategoryId')) {
                obj['ParentCategoryId'] = ApiClient.convertToType(data['ParentCategoryId'], 'Number');
            }
            if (data.hasOwnProperty('Names')) {
                obj['Names'] = ApiClient.convertToType(data['Names'], [SharedModelsLocalizableContent]);
            }
            if (data.hasOwnProperty('Descriptions')) {
                obj['Descriptions'] = ApiClient.convertToType(data['Descriptions'], [SharedModelsLocalizableContent]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CategoryModelsWriteCategory</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CategoryModelsWriteCategory</code>.
     */
    static validateJSON(data) {
        if (data['Names']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['Names'])) {
                throw new Error("Expected the field `Names` to be an array in the JSON data but got " + data['Names']);
            }
            // validate the optional field `Names` (array)
            for (const item of data['Names']) {
                SharedModelsLocalizableContent.validateJsonObject(item);
            };
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
 * The unique identifier of the parent category of this category.
 * @member {Number} ParentCategoryId
 */
CategoryModelsWriteCategory.prototype['ParentCategoryId'] = undefined;

/**
 * The localizable names of the category.
 * @member {Array.<module:model/SharedModelsLocalizableContent>} Names
 */
CategoryModelsWriteCategory.prototype['Names'] = undefined;

/**
 * The localized descriptions of the category.
 * @member {Array.<module:model/SharedModelsLocalizableContent>} Descriptions
 */
CategoryModelsWriteCategory.prototype['Descriptions'] = undefined;






export default CategoryModelsWriteCategory;

