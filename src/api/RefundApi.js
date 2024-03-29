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
import EnvelopeListRefund from '../model/EnvelopeListRefund';
import EnvelopeNullableGuid from '../model/EnvelopeNullableGuid';
import EnvelopeRefund from '../model/EnvelopeRefund';
import OrderRefundModelsWriteNewRefund from '../model/OrderRefundModelsWriteNewRefund';
import OrderRefundModelsWriteProcessedRefund from '../model/OrderRefundModelsWriteProcessedRefund';
import OrderRefundModelsWriteRefundApproval from '../model/OrderRefundModelsWriteRefundApproval';
import OrderRefundModelsWriteSettledRefund from '../model/OrderRefundModelsWriteSettledRefund';
import OrderRefundModelsWriteSettledRefundRow from '../model/OrderRefundModelsWriteSettledRefundRow';
import RefundQuery from '../model/RefundQuery';

/**
* Refund service.
* @module api/RefundApi
* @version v1.10.1
*/
export default class RefundApi {

    /**
    * Constructs a new RefundApi. 
    * @alias module:api/RefundApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createRefund operation.
     * @callback module:api/RefundApi~createRefundCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeNullableGuid} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates refund
     * Creates a new refund.
     * @param {Number} orderId The order id.
     * @param {module:model/OrderRefundModelsWriteNewRefund} newRefund Information about the refund.
     * @param {module:api/RefundApi~createRefundCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeNullableGuid}
     */
    createRefund(orderId, newRefund, callback) {
      let postBody = newRefund;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling createRefund");
      }
      // verify the required parameter 'newRefund' is set
      if (newRefund === undefined || newRefund === null) {
        throw new Error("Missing the required parameter 'newRefund' when calling createRefund");
      }

      let pathParams = {
        'orderId': orderId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = EnvelopeNullableGuid;
      return this.apiClient.callApi(
        '/API/Order/{orderId}/Refund', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteRefundRow operation.
     * @callback module:api/RefundApi~deleteRefundRowCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BaseEnvelope} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete refund row
     * Delete a refund row. Can only be done if the refund row isn't settled.
     * @param {Number} orderId The order id.
     * @param {String} refundId The refund id.
     * @param {Number} refundRowId The refund row id.
     * @param {module:api/RefundApi~deleteRefundRowCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BaseEnvelope}
     */
    deleteRefundRow(orderId, refundId, refundRowId, callback) {
      let postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling deleteRefundRow");
      }
      // verify the required parameter 'refundId' is set
      if (refundId === undefined || refundId === null) {
        throw new Error("Missing the required parameter 'refundId' when calling deleteRefundRow");
      }
      // verify the required parameter 'refundRowId' is set
      if (refundRowId === undefined || refundRowId === null) {
        throw new Error("Missing the required parameter 'refundRowId' when calling deleteRefundRow");
      }

      let pathParams = {
        'orderId': orderId,
        'refundId': refundId,
        'refundRowId': refundRowId
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
      let returnType = BaseEnvelope;
      return this.apiClient.callApi(
        '/API/Order/{orderId}/Refund/{refundId}/RefundRow/{refundRowId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRefund operation.
     * @callback module:api/RefundApi~getRefundCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeRefund} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get refund
     * @param {Number} orderId The order id.
     * @param {String} refundId The refund id.
     * @param {module:api/RefundApi~getRefundCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeRefund}
     */
    getRefund(orderId, refundId, callback) {
      let postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling getRefund");
      }
      // verify the required parameter 'refundId' is set
      if (refundId === undefined || refundId === null) {
        throw new Error("Missing the required parameter 'refundId' when calling getRefund");
      }

      let pathParams = {
        'orderId': orderId,
        'refundId': refundId
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
      let returnType = EnvelopeRefund;
      return this.apiClient.callApi(
        '/API/Order/{orderId}/Refund/{refundId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listRefunds operation.
     * @callback module:api/RefundApi~listRefundsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeListRefund} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List refunds
     * Get all refunds on an order.
     * @param {Number} orderId The Order ID.
     * @param {module:api/RefundApi~listRefundsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeListRefund}
     */
    listRefunds(orderId, callback) {
      let postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling listRefunds");
      }

      let pathParams = {
        'orderId': orderId
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
      let returnType = EnvelopeListRefund;
      return this.apiClient.callApi(
        '/API/Order/{orderId}/Refund/List', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the queryRefunds operation.
     * @callback module:api/RefundApi~queryRefundsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvelopeListRefund} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query refunds
     * Queries all refunds.
     * @param {module:model/RefundQuery} refundQuery The refund query.
     * @param {module:api/RefundApi~queryRefundsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvelopeListRefund}
     */
    queryRefunds(refundQuery, callback) {
      let postBody = refundQuery;
      // verify the required parameter 'refundQuery' is set
      if (refundQuery === undefined || refundQuery === null) {
        throw new Error("Missing the required parameter 'refundQuery' when calling queryRefunds");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = EnvelopeListRefund;
      return this.apiClient.callApi(
        '/API/Refund/Query', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setRefundApproval operation.
     * @callback module:api/RefundApi~setRefundApprovalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BaseEnvelope} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set refund approval
     * Approve or deny a pending refund.
     * @param {Number} orderId The Order ID.
     * @param {String} refundId The Refund ID.
     * @param {module:model/OrderRefundModelsWriteRefundApproval} refundApproval Contains information about the approval.
     * @param {module:api/RefundApi~setRefundApprovalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BaseEnvelope}
     */
    setRefundApproval(orderId, refundId, refundApproval, callback) {
      let postBody = refundApproval;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling setRefundApproval");
      }
      // verify the required parameter 'refundId' is set
      if (refundId === undefined || refundId === null) {
        throw new Error("Missing the required parameter 'refundId' when calling setRefundApproval");
      }
      // verify the required parameter 'refundApproval' is set
      if (refundApproval === undefined || refundApproval === null) {
        throw new Error("Missing the required parameter 'refundApproval' when calling setRefundApproval");
      }

      let pathParams = {
        'orderId': orderId,
        'refundId': refundId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = BaseEnvelope;
      return this.apiClient.callApi(
        '/API/Order/{orderId}/Refund/{refundId}/SetApproval', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setRefundAsProcessed operation.
     * @callback module:api/RefundApi~setRefundAsProcessedCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BaseEnvelope} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set refund as processed
     * Sets a refund as processed and all refund rows within it as settled.
     * @param {Number} orderId The order id.
     * @param {String} refundId The refund id.
     * @param {module:model/OrderRefundModelsWriteProcessedRefund} processedRefund Contains optional fields for the processing.
     * @param {module:api/RefundApi~setRefundAsProcessedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BaseEnvelope}
     */
    setRefundAsProcessed(orderId, refundId, processedRefund, callback) {
      let postBody = processedRefund;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling setRefundAsProcessed");
      }
      // verify the required parameter 'refundId' is set
      if (refundId === undefined || refundId === null) {
        throw new Error("Missing the required parameter 'refundId' when calling setRefundAsProcessed");
      }
      // verify the required parameter 'processedRefund' is set
      if (processedRefund === undefined || processedRefund === null) {
        throw new Error("Missing the required parameter 'processedRefund' when calling setRefundAsProcessed");
      }

      let pathParams = {
        'orderId': orderId,
        'refundId': refundId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = BaseEnvelope;
      return this.apiClient.callApi(
        '/API/Order/{orderId}/Refund/{refundId}/SetAsProcessed', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setRefundAsSettled operation.
     * @callback module:api/RefundApi~setRefundAsSettledCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BaseEnvelope} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set refund as settled
     * Sets all refund rows in a refund as settled.
     * @param {Number} orderId The order id.
     * @param {String} refundId The refund id.
     * @param {module:model/OrderRefundModelsWriteSettledRefund} settledRefund Contains optional fields for the settlement.
     * @param {module:api/RefundApi~setRefundAsSettledCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BaseEnvelope}
     */
    setRefundAsSettled(orderId, refundId, settledRefund, callback) {
      let postBody = settledRefund;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling setRefundAsSettled");
      }
      // verify the required parameter 'refundId' is set
      if (refundId === undefined || refundId === null) {
        throw new Error("Missing the required parameter 'refundId' when calling setRefundAsSettled");
      }
      // verify the required parameter 'settledRefund' is set
      if (settledRefund === undefined || settledRefund === null) {
        throw new Error("Missing the required parameter 'settledRefund' when calling setRefundAsSettled");
      }

      let pathParams = {
        'orderId': orderId,
        'refundId': refundId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = BaseEnvelope;
      return this.apiClient.callApi(
        '/API/Order/{orderId}/Refund/{refundId}/SetAsSettled', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setRefundRowAsSettled operation.
     * @callback module:api/RefundApi~setRefundRowAsSettledCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BaseEnvelope} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set refund row as settled
     * @param {Number} orderId The order id.
     * @param {String} refundId The refund id.
     * @param {Number} refundRowId The refund row id.
     * @param {module:model/OrderRefundModelsWriteSettledRefundRow} settledRefundRow Contains optional fields for the settlement.
     * @param {module:api/RefundApi~setRefundRowAsSettledCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BaseEnvelope}
     */
    setRefundRowAsSettled(orderId, refundId, refundRowId, settledRefundRow, callback) {
      let postBody = settledRefundRow;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling setRefundRowAsSettled");
      }
      // verify the required parameter 'refundId' is set
      if (refundId === undefined || refundId === null) {
        throw new Error("Missing the required parameter 'refundId' when calling setRefundRowAsSettled");
      }
      // verify the required parameter 'refundRowId' is set
      if (refundRowId === undefined || refundRowId === null) {
        throw new Error("Missing the required parameter 'refundRowId' when calling setRefundRowAsSettled");
      }
      // verify the required parameter 'settledRefundRow' is set
      if (settledRefundRow === undefined || settledRefundRow === null) {
        throw new Error("Missing the required parameter 'settledRefundRow' when calling setRefundRowAsSettled");
      }

      let pathParams = {
        'orderId': orderId,
        'refundId': refundId,
        'refundRowId': refundRowId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = BaseEnvelope;
      return this.apiClient.callApi(
        '/API/Order/{orderId}/Refund/{refundId}/RefundRow/{refundRowId}/SetAsSettled', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
