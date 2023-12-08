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

/**
 * The UserModelsReadUserProfile model module.
 * @module model/UserModelsReadUserProfile
 * @version v1.10.1
 */
class UserModelsReadUserProfile {
    /**
     * Constructs a new <code>UserModelsReadUserProfile</code>.
     * @alias module:model/UserModelsReadUserProfile
     */
    constructor() { 
        
        UserModelsReadUserProfile.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserModelsReadUserProfile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserModelsReadUserProfile} obj Optional instance to populate.
     * @return {module:model/UserModelsReadUserProfile} The populated <code>UserModelsReadUserProfile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserModelsReadUserProfile();

            if (data.hasOwnProperty('UserId')) {
                obj['UserId'] = ApiClient.convertToType(data['UserId'], 'Number');
            }
            if (data.hasOwnProperty('SiteId')) {
                obj['SiteId'] = ApiClient.convertToType(data['SiteId'], 'Number');
            }
            if (data.hasOwnProperty('Email')) {
                obj['Email'] = ApiClient.convertToType(data['Email'], 'String');
            }
            if (data.hasOwnProperty('FirstName')) {
                obj['FirstName'] = ApiClient.convertToType(data['FirstName'], 'String');
            }
            if (data.hasOwnProperty('LastName')) {
                obj['LastName'] = ApiClient.convertToType(data['LastName'], 'String');
            }
            if (data.hasOwnProperty('PhoneNr')) {
                obj['PhoneNr'] = ApiClient.convertToType(data['PhoneNr'], 'String');
            }
            if (data.hasOwnProperty('MobilePhoneNr')) {
                obj['MobilePhoneNr'] = ApiClient.convertToType(data['MobilePhoneNr'], 'String');
            }
            if (data.hasOwnProperty('Company')) {
                obj['Company'] = ApiClient.convertToType(data['Company'], 'String');
            }
            if (data.hasOwnProperty('Address')) {
                obj['Address'] = ApiClient.convertToType(data['Address'], 'String');
            }
            if (data.hasOwnProperty('Address2')) {
                obj['Address2'] = ApiClient.convertToType(data['Address2'], 'String');
            }
            if (data.hasOwnProperty('Address3')) {
                obj['Address3'] = ApiClient.convertToType(data['Address3'], 'String');
            }
            if (data.hasOwnProperty('DoorCode')) {
                obj['DoorCode'] = ApiClient.convertToType(data['DoorCode'], 'String');
            }
            if (data.hasOwnProperty('PersonalId')) {
                obj['PersonalId'] = ApiClient.convertToType(data['PersonalId'], 'String');
            }
            if (data.hasOwnProperty('Birthyear')) {
                obj['Birthyear'] = ApiClient.convertToType(data['Birthyear'], 'String');
            }
            if (data.hasOwnProperty('Zip')) {
                obj['Zip'] = ApiClient.convertToType(data['Zip'], 'String');
            }
            if (data.hasOwnProperty('City')) {
                obj['City'] = ApiClient.convertToType(data['City'], 'String');
            }
            if (data.hasOwnProperty('CareOf')) {
                obj['CareOf'] = ApiClient.convertToType(data['CareOf'], 'String');
            }
            if (data.hasOwnProperty('Country')) {
                obj['Country'] = ApiClient.convertToType(data['Country'], 'String');
            }
            if (data.hasOwnProperty('MemberId')) {
                obj['MemberId'] = ApiClient.convertToType(data['MemberId'], 'Number');
            }
            if (data.hasOwnProperty('MemberType')) {
                obj['MemberType'] = ApiClient.convertToType(data['MemberType'], 'String');
            }
            if (data.hasOwnProperty('CountryId')) {
                obj['CountryId'] = ApiClient.convertToType(data['CountryId'], 'Number');
            }
            if (data.hasOwnProperty('UserTypeId')) {
                obj['UserTypeId'] = ApiClient.convertToType(data['UserTypeId'], 'Number');
            }
            if (data.hasOwnProperty('Gender')) {
                obj['Gender'] = ApiClient.convertToType(data['Gender'], 'Boolean');
            }
            if (data.hasOwnProperty('MemberDiscount')) {
                obj['MemberDiscount'] = ApiClient.convertToType(data['MemberDiscount'], 'Number');
            }
            if (data.hasOwnProperty('Newsletter')) {
                obj['Newsletter'] = ApiClient.convertToType(data['Newsletter'], 'Boolean');
            }
            if (data.hasOwnProperty('Blacklisted')) {
                obj['Blacklisted'] = ApiClient.convertToType(data['Blacklisted'], 'Boolean');
            }
            if (data.hasOwnProperty('Active')) {
                obj['Active'] = ApiClient.convertToType(data['Active'], 'Boolean');
            }
            if (data.hasOwnProperty('CreatedOn')) {
                obj['CreatedOn'] = ApiClient.convertToType(data['CreatedOn'], 'Date');
            }
            if (data.hasOwnProperty('UpdatedOn')) {
                obj['UpdatedOn'] = ApiClient.convertToType(data['UpdatedOn'], 'Date');
            }
            if (data.hasOwnProperty('MetaData')) {
                obj['MetaData'] = ApiClient.convertToType(data['MetaData'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserModelsReadUserProfile</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserModelsReadUserProfile</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Email'] && !(typeof data['Email'] === 'string' || data['Email'] instanceof String)) {
            throw new Error("Expected the field `Email` to be a primitive type in the JSON string but got " + data['Email']);
        }
        // ensure the json data is a string
        if (data['FirstName'] && !(typeof data['FirstName'] === 'string' || data['FirstName'] instanceof String)) {
            throw new Error("Expected the field `FirstName` to be a primitive type in the JSON string but got " + data['FirstName']);
        }
        // ensure the json data is a string
        if (data['LastName'] && !(typeof data['LastName'] === 'string' || data['LastName'] instanceof String)) {
            throw new Error("Expected the field `LastName` to be a primitive type in the JSON string but got " + data['LastName']);
        }
        // ensure the json data is a string
        if (data['PhoneNr'] && !(typeof data['PhoneNr'] === 'string' || data['PhoneNr'] instanceof String)) {
            throw new Error("Expected the field `PhoneNr` to be a primitive type in the JSON string but got " + data['PhoneNr']);
        }
        // ensure the json data is a string
        if (data['MobilePhoneNr'] && !(typeof data['MobilePhoneNr'] === 'string' || data['MobilePhoneNr'] instanceof String)) {
            throw new Error("Expected the field `MobilePhoneNr` to be a primitive type in the JSON string but got " + data['MobilePhoneNr']);
        }
        // ensure the json data is a string
        if (data['Company'] && !(typeof data['Company'] === 'string' || data['Company'] instanceof String)) {
            throw new Error("Expected the field `Company` to be a primitive type in the JSON string but got " + data['Company']);
        }
        // ensure the json data is a string
        if (data['Address'] && !(typeof data['Address'] === 'string' || data['Address'] instanceof String)) {
            throw new Error("Expected the field `Address` to be a primitive type in the JSON string but got " + data['Address']);
        }
        // ensure the json data is a string
        if (data['Address2'] && !(typeof data['Address2'] === 'string' || data['Address2'] instanceof String)) {
            throw new Error("Expected the field `Address2` to be a primitive type in the JSON string but got " + data['Address2']);
        }
        // ensure the json data is a string
        if (data['Address3'] && !(typeof data['Address3'] === 'string' || data['Address3'] instanceof String)) {
            throw new Error("Expected the field `Address3` to be a primitive type in the JSON string but got " + data['Address3']);
        }
        // ensure the json data is a string
        if (data['DoorCode'] && !(typeof data['DoorCode'] === 'string' || data['DoorCode'] instanceof String)) {
            throw new Error("Expected the field `DoorCode` to be a primitive type in the JSON string but got " + data['DoorCode']);
        }
        // ensure the json data is a string
        if (data['PersonalId'] && !(typeof data['PersonalId'] === 'string' || data['PersonalId'] instanceof String)) {
            throw new Error("Expected the field `PersonalId` to be a primitive type in the JSON string but got " + data['PersonalId']);
        }
        // ensure the json data is a string
        if (data['Birthyear'] && !(typeof data['Birthyear'] === 'string' || data['Birthyear'] instanceof String)) {
            throw new Error("Expected the field `Birthyear` to be a primitive type in the JSON string but got " + data['Birthyear']);
        }
        // ensure the json data is a string
        if (data['Zip'] && !(typeof data['Zip'] === 'string' || data['Zip'] instanceof String)) {
            throw new Error("Expected the field `Zip` to be a primitive type in the JSON string but got " + data['Zip']);
        }
        // ensure the json data is a string
        if (data['City'] && !(typeof data['City'] === 'string' || data['City'] instanceof String)) {
            throw new Error("Expected the field `City` to be a primitive type in the JSON string but got " + data['City']);
        }
        // ensure the json data is a string
        if (data['CareOf'] && !(typeof data['CareOf'] === 'string' || data['CareOf'] instanceof String)) {
            throw new Error("Expected the field `CareOf` to be a primitive type in the JSON string but got " + data['CareOf']);
        }
        // ensure the json data is a string
        if (data['Country'] && !(typeof data['Country'] === 'string' || data['Country'] instanceof String)) {
            throw new Error("Expected the field `Country` to be a primitive type in the JSON string but got " + data['Country']);
        }
        // ensure the json data is a string
        if (data['MemberType'] && !(typeof data['MemberType'] === 'string' || data['MemberType'] instanceof String)) {
            throw new Error("Expected the field `MemberType` to be a primitive type in the JSON string but got " + data['MemberType']);
        }
        // ensure the json data is a string
        if (data['MetaData'] && !(typeof data['MetaData'] === 'string' || data['MetaData'] instanceof String)) {
            throw new Error("Expected the field `MetaData` to be a primitive type in the JSON string but got " + data['MetaData']);
        }

        return true;
    }


}



/**
 * @member {Number} UserId
 */
UserModelsReadUserProfile.prototype['UserId'] = undefined;

/**
 * @member {Number} SiteId
 */
UserModelsReadUserProfile.prototype['SiteId'] = undefined;

/**
 * @member {String} Email
 */
UserModelsReadUserProfile.prototype['Email'] = undefined;

/**
 * @member {String} FirstName
 */
UserModelsReadUserProfile.prototype['FirstName'] = undefined;

/**
 * @member {String} LastName
 */
UserModelsReadUserProfile.prototype['LastName'] = undefined;

/**
 * @member {String} PhoneNr
 */
UserModelsReadUserProfile.prototype['PhoneNr'] = undefined;

/**
 * @member {String} MobilePhoneNr
 */
UserModelsReadUserProfile.prototype['MobilePhoneNr'] = undefined;

/**
 * @member {String} Company
 */
UserModelsReadUserProfile.prototype['Company'] = undefined;

/**
 * @member {String} Address
 */
UserModelsReadUserProfile.prototype['Address'] = undefined;

/**
 * @member {String} Address2
 */
UserModelsReadUserProfile.prototype['Address2'] = undefined;

/**
 * @member {String} Address3
 */
UserModelsReadUserProfile.prototype['Address3'] = undefined;

/**
 * @member {String} DoorCode
 */
UserModelsReadUserProfile.prototype['DoorCode'] = undefined;

/**
 * @member {String} PersonalId
 */
UserModelsReadUserProfile.prototype['PersonalId'] = undefined;

/**
 * @member {String} Birthyear
 */
UserModelsReadUserProfile.prototype['Birthyear'] = undefined;

/**
 * @member {String} Zip
 */
UserModelsReadUserProfile.prototype['Zip'] = undefined;

/**
 * @member {String} City
 */
UserModelsReadUserProfile.prototype['City'] = undefined;

/**
 * @member {String} CareOf
 */
UserModelsReadUserProfile.prototype['CareOf'] = undefined;

/**
 * @member {String} Country
 */
UserModelsReadUserProfile.prototype['Country'] = undefined;

/**
 * @member {Number} MemberId
 */
UserModelsReadUserProfile.prototype['MemberId'] = undefined;

/**
 * @member {String} MemberType
 */
UserModelsReadUserProfile.prototype['MemberType'] = undefined;

/**
 * @member {Number} CountryId
 */
UserModelsReadUserProfile.prototype['CountryId'] = undefined;

/**
 * @member {Number} UserTypeId
 */
UserModelsReadUserProfile.prototype['UserTypeId'] = undefined;

/**
 * @member {Boolean} Gender
 */
UserModelsReadUserProfile.prototype['Gender'] = undefined;

/**
 * @member {Number} MemberDiscount
 */
UserModelsReadUserProfile.prototype['MemberDiscount'] = undefined;

/**
 * Decides whether the user should be subscribed to the newsletter.
 * @member {Boolean} Newsletter
 */
UserModelsReadUserProfile.prototype['Newsletter'] = undefined;

/**
 * @member {Boolean} Blacklisted
 */
UserModelsReadUserProfile.prototype['Blacklisted'] = undefined;

/**
 * @member {Boolean} Active
 */
UserModelsReadUserProfile.prototype['Active'] = undefined;

/**
 * @member {Date} CreatedOn
 */
UserModelsReadUserProfile.prototype['CreatedOn'] = undefined;

/**
 * @member {Date} UpdatedOn
 */
UserModelsReadUserProfile.prototype['UpdatedOn'] = undefined;

/**
 * @member {String} MetaData
 */
UserModelsReadUserProfile.prototype['MetaData'] = undefined;






export default UserModelsReadUserProfile;

