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
import PageAreaModelsReadPageWidgetContainer from './PageAreaModelsReadPageWidgetContainer';

/**
 * The PageAreaModelsReadPageArea model module.
 * @module model/PageAreaModelsReadPageArea
 * @version v1.7.1
 */
class PageAreaModelsReadPageArea {
    /**
     * Constructs a new <code>PageAreaModelsReadPageArea</code>.
     * The API-version of the PageArea class
     * @alias module:model/PageAreaModelsReadPageArea
     */
    constructor() { 
        
        PageAreaModelsReadPageArea.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PageAreaModelsReadPageArea</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PageAreaModelsReadPageArea} obj Optional instance to populate.
     * @return {module:model/PageAreaModelsReadPageArea} The populated <code>PageAreaModelsReadPageArea</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PageAreaModelsReadPageArea();

            if (data.hasOwnProperty('Index')) {
                obj['Index'] = ApiClient.convertToType(data['Index'], 'Number');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('FamilyId')) {
                obj['FamilyId'] = ApiClient.convertToType(data['FamilyId'], 'Number');
            }
            if (data.hasOwnProperty('Settings')) {
                obj['Settings'] = ApiClient.convertToType(data['Settings'], 'String');
            }
            if (data.hasOwnProperty('Containers')) {
                obj['Containers'] = ApiClient.convertToType(data['Containers'], [PageAreaModelsReadPageWidgetContainer]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PageAreaModelsReadPageArea</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PageAreaModelsReadPageArea</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }
        // ensure the json data is a string
        if (data['Settings'] && !(typeof data['Settings'] === 'string' || data['Settings'] instanceof String)) {
            throw new Error("Expected the field `Settings` to be a primitive type in the JSON string but got " + data['Settings']);
        }
        if (data['Containers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['Containers'])) {
                throw new Error("Expected the field `Containers` to be an array in the JSON data but got " + data['Containers']);
            }
            // validate the optional field `Containers` (array)
            for (const item of data['Containers']) {
                PageAreaModelsReadPageWidgetContainer.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * The primary id of this page are family collection
 * @member {Number} Index
 */
PageAreaModelsReadPageArea.prototype['Index'] = undefined;

/**
 * A descriptive, user-defined name for this page area family collection
 * @member {String} Name
 */
PageAreaModelsReadPageArea.prototype['Name'] = undefined;

/**
 * The family this area belongs to.
 * @member {Number} FamilyId
 */
PageAreaModelsReadPageArea.prototype['FamilyId'] = undefined;

/**
 * The settings that determine how containers can be added to this area.
 * @member {String} Settings
 */
PageAreaModelsReadPageArea.prototype['Settings'] = undefined;

/**
 * The containers in this area
 * @member {Array.<module:model/PageAreaModelsReadPageWidgetContainer>} Containers
 */
PageAreaModelsReadPageArea.prototype['Containers'] = undefined;






export default PageAreaModelsReadPageArea;

