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
 * The WebhookModelsRestWebhook model module.
 * @module model/WebhookModelsRestWebhook
 * @version v1.10.1
 */
class WebhookModelsRestWebhook {
    /**
     * Constructs a new <code>WebhookModelsRestWebhook</code>.
     * @alias module:model/WebhookModelsRestWebhook
     */
    constructor() { 
        
        WebhookModelsRestWebhook.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookModelsRestWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookModelsRestWebhook} obj Optional instance to populate.
     * @return {module:model/WebhookModelsRestWebhook} The populated <code>WebhookModelsRestWebhook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookModelsRestWebhook();

            if (data.hasOwnProperty('Entity')) {
                obj['Entity'] = ApiClient.convertToType(data['Entity'], 'Number');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('Actions')) {
                obj['Actions'] = ApiClient.convertToType(data['Actions'], 'String');
            }
            if (data.hasOwnProperty('Method')) {
                obj['Method'] = ApiClient.convertToType(data['Method'], 'String');
            }
            if (data.hasOwnProperty('Url')) {
                obj['Url'] = ApiClient.convertToType(data['Url'], 'String');
            }
            if (data.hasOwnProperty('Body')) {
                obj['Body'] = ApiClient.convertToType(data['Body'], 'String');
            }
            if (data.hasOwnProperty('Headers')) {
                obj['Headers'] = ApiClient.convertToType(data['Headers'], 'String');
            }
            if (data.hasOwnProperty('Retry')) {
                obj['Retry'] = ApiClient.convertToType(data['Retry'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookModelsRestWebhook</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookModelsRestWebhook</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }
        // ensure the json data is a string
        if (data['Description'] && !(typeof data['Description'] === 'string' || data['Description'] instanceof String)) {
            throw new Error("Expected the field `Description` to be a primitive type in the JSON string but got " + data['Description']);
        }
        // ensure the json data is a string
        if (data['Actions'] && !(typeof data['Actions'] === 'string' || data['Actions'] instanceof String)) {
            throw new Error("Expected the field `Actions` to be a primitive type in the JSON string but got " + data['Actions']);
        }
        // ensure the json data is a string
        if (data['Method'] && !(typeof data['Method'] === 'string' || data['Method'] instanceof String)) {
            throw new Error("Expected the field `Method` to be a primitive type in the JSON string but got " + data['Method']);
        }
        // ensure the json data is a string
        if (data['Url'] && !(typeof data['Url'] === 'string' || data['Url'] instanceof String)) {
            throw new Error("Expected the field `Url` to be a primitive type in the JSON string but got " + data['Url']);
        }
        // ensure the json data is a string
        if (data['Body'] && !(typeof data['Body'] === 'string' || data['Body'] instanceof String)) {
            throw new Error("Expected the field `Body` to be a primitive type in the JSON string but got " + data['Body']);
        }
        // ensure the json data is a string
        if (data['Headers'] && !(typeof data['Headers'] === 'string' || data['Headers'] instanceof String)) {
            throw new Error("Expected the field `Headers` to be a primitive type in the JSON string but got " + data['Headers']);
        }

        return true;
    }


}



/**
 * Type of entity.    0 = NOT_SET    1 = Brand    2 = Capture    3 = Category    4 = Customer    5 = Order    6 = PageWidget    7 = Product    8 = Refund    9 = Supplier
 * @member {module:model/WebhookModelsRestWebhook.EntityEnum} Entity
 */
WebhookModelsRestWebhook.prototype['Entity'] = undefined;

/**
 * Webhook Name
 * @member {String} Name
 */
WebhookModelsRestWebhook.prototype['Name'] = undefined;

/**
 * Webhook Description
 * @member {String} Description
 */
WebhookModelsRestWebhook.prototype['Description'] = undefined;

/**
 * Comma separated list of actions to listen for.   Possible actions per entity are:  - **Product, Brand, Category, Supplier** - `create`, `update`, `delete`  - **Order** - `create`, `update`, `cancel`, `activate`, `lock`, `complete`  - **Capture, Refund** - `create`  - **PageWidget** - `update`, `delete`  - **Customer** - `delete`, `passwordreset`, `obfuscate`
 * @member {String} Actions
 */
WebhookModelsRestWebhook.prototype['Actions'] = undefined;

/**
 * Http Method to use
 * @member {String} Method
 */
WebhookModelsRestWebhook.prototype['Method'] = undefined;

/**
 * Url to send the webhook to. Placeholders can be used to customize the URL.   - _Always available placeholders:_     - `{{entity}}` - Product, Brand, Category, etc    - `{{action}}` - create, update, delete, etc    - `{{account}}` - usually the name of your webshop    - `{{environment}}` - prod, dev, qa, etc    - `{{id}}` -(can be a comma separated list of ids.  - _Partially available placeholders:_     - `{{paymentName}}` - name of payment method. Only applicable for capture and refund    - `{{channelName}}` - name of the channel (web site). Only applicable for capture and refund    - `{{channelUrl}}` - url of the channel (web site). Only applicable for password reset    - `{{resetKey}}` - key for password reset. Only applicable for password reset    **Note:** Not all placeholders are available for all combinations of entities and actions. Ensure that the placeholders you use are relevant to the webhook's entity and action.
 * @member {String} Url
 */
WebhookModelsRestWebhook.prototype['Url'] = undefined;

/**
 * Body of the webhook. Placeholders can be used to customize the body.   - _Always available placeholders:_     - `{{entity}}` - Product, Brand, Category, etc    - `{{action}}` - create, update, delete, etc    - `{{account}}` - usually the name of your webshop    - `{{environment}}` - prod, dev, qa, etc    - `{{id}}` -(can be a comma separated list of ids.  - _Partially available placeholders:_     - `{{paymentName}}` - name of payment method. Only applicable for capture and refund    - `{{channelName}}` - name of the channel (web site). Only applicable for capture and refund    - `{{channelUrl}}` - url of the channel (web site). Only applicable for password reset    - `{{resetKey}}` - key for password reset. Only applicable for password reset    **Note:** Not all placeholders are available for all combinations of entities and actions. Ensure that the placeholders you use are relevant to the webhook's entity and action.
 * @member {String} Body
 */
WebhookModelsRestWebhook.prototype['Body'] = undefined;

/**
 * Headers to send with the webhook
 * @member {String} Headers
 */
WebhookModelsRestWebhook.prototype['Headers'] = undefined;

/**
 * True if the webhook should be retried on failure. Retries are attempted up to 3 times with an interval of 10 minutes.    - Each retry attempt will include a unique HTTP header called `x-Idempotency-Key` and a timestamp for when the webhook event was initiated. This key serves as an identifier for each specific webhook event and remains the same for all retry attempts of the same webhook event.    - The primary purpose of the `x-Idempotency-Key` is to enable the receiving system to identify and handle duplicate webhook events, thus preventing duplicate processing of the same webhook event.    - The timestamp header is called `x-timestamp`.
 * @member {Boolean} Retry
 */
WebhookModelsRestWebhook.prototype['Retry'] = undefined;





/**
 * Allowed values for the <code>Entity</code> property.
 * @enum {Number}
 * @readonly
 */
WebhookModelsRestWebhook['EntityEnum'] = {

    /**
     * value: 0
     * @const
     */
    "0": 0,

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
    "7": 7,

    /**
     * value: 8
     * @const
     */
    "8": 8,

    /**
     * value: 9
     * @const
     */
    "9": 9
};



export default WebhookModelsRestWebhook;

