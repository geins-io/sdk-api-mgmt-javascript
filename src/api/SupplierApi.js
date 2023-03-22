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


import ApiClient from "../ApiClient";
import EnvelopeSupplierModelsReadSupplier from '../model/EnvelopeSupplierModelsReadSupplier';
import SupplierModelsReadSupplier from '../model/SupplierModelsReadSupplier';
import SupplierModelsSupplierQuery from '../model/SupplierModelsSupplierQuery';
import SupplierModelsWriteSupplier from '../model/SupplierModelsWriteSupplier';

/**
* Supplier service.
* @module api/SupplierApi
* @version v1.7.1
*/
export default class SupplierApi {

    /**
    * Constructs a new SupplierApi. 
    * @alias module:api/SupplierApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createSupplier operation.
     * @callback module:api/SupplierApi~createSupplierCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeSupplierModelsReadSupplier} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new supplier
     * @param {module:model/SupplierModelsWriteSupplier} supplier The supplier to create.
     * @param {module:api/SupplierApi~createSupplierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeSupplierModelsReadSupplier}
     */
    createSupplier(supplier, callback) {
      let postBody = supplier;
      // verify the required parameter 'supplier' is set
      if (supplier === undefined || supplier === null) {
        throw new Error("Missing the required parameter 'supplier' when calling createSupplier");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'basicAuth'];
      let contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      let returnType = EnvelopeSupplierModelsReadSupplier;
      return this.apiClient.callApi(
        '/API/Supplier', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSupplierById operation.
     * @callback module:api/SupplierApi~getSupplierByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeSupplierModelsReadSupplier} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a specific supplier
     * @param {Number} id The id of the supplier to get.
     * @param {module:api/SupplierApi~getSupplierByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeSupplierModelsReadSupplier}
     */
    getSupplierById(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSupplierById");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      let returnType = EnvelopeSupplierModelsReadSupplier;
      return this.apiClient.callApi(
        '/API/Supplier/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the querySuppliers operation.
     * @callback module:api/SupplierApi~querySuppliersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SupplierModelsReadSupplier>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query suppliers
     * @param {module:model/SupplierModelsSupplierQuery} query The details of the query
     * @param {module:api/SupplierApi~querySuppliersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SupplierModelsReadSupplier>}
     */
    querySuppliers(query, callback) {
      let postBody = query;
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling querySuppliers");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'basicAuth'];
      let contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      let returnType = [SupplierModelsReadSupplier];
      return this.apiClient.callApi(
        '/API/Supplier/Query', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSupplier operation.
     * @callback module:api/SupplierApi~updateSupplierCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeSupplierModelsReadSupplier} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a supplier
     * Leaving out a property will ensure no changes are made to that property.  Collection properties will delete and/or add as necessary to match the supplied data.
     * @param {Number} id The id of the supplier to update.
     * @param {module:model/SupplierModelsWriteSupplier} supplier The supplier data to update.
     * @param {module:api/SupplierApi~updateSupplierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeSupplierModelsReadSupplier}
     */
    updateSupplier(id, supplier, callback) {
      let postBody = supplier;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateSupplier");
      }
      // verify the required parameter 'supplier' is set
      if (supplier === undefined || supplier === null) {
        throw new Error("Missing the required parameter 'supplier' when calling updateSupplier");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'basicAuth'];
      let contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      let returnType = EnvelopeSupplierModelsReadSupplier;
      return this.apiClient.callApi(
        '/API/Supplier/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
