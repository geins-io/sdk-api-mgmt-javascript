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


import ApiClient from "../ApiClient";
import BaseEnvelope from '../model/BaseEnvelope';
import EnvelopeMarketModelsMarket from '../model/EnvelopeMarketModelsMarket';
import MarketModelsMarket from '../model/MarketModelsMarket';

/**
* Market service.
* @module api/MarketApi
* @version v1.10.1
*/
export default class MarketApi {

    /**
    * Constructs a new MarketApi. 
    * @alias module:api/MarketApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getMarket operation.
     * @callback module:api/MarketApi~getMarketCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeMarketModelsMarket} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get market
     * @param {String} marketId The id of the market to get.
     * @param {Object} opts Optional parameters
     * @param {module:model/Number} opts.marketIdType The type of market id supplied.    0 = Internal. Internal market id set by Geins.    1 = Name. The name of the market.
     * @param {module:api/MarketApi~getMarketCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeMarketModelsMarket}
     */
    getMarket(marketId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'marketId' is set
      if (marketId === undefined || marketId === null) {
        throw new Error("Missing the required parameter 'marketId' when calling getMarket");
      }

      let pathParams = {
        'marketId': marketId
      };
      let queryParams = {
        'marketIdType': opts['marketIdType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EnvelopeMarketModelsMarket;
      return this.apiClient.callApi(
        '/API/Market/{marketId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listMarkets operation.
     * @callback module:api/MarketApi~listMarketsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MarketModelsMarket>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List markets
     * Gets a list of all markets
     * @param {module:api/MarketApi~listMarketsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MarketModelsMarket>}
     */
    listMarkets(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [MarketModelsMarket];
      return this.apiClient.callApi(
        '/API/Market/List', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
