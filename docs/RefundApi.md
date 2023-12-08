# GeinsSdkApiMgmtJavascript.RefundApi

All URIs are relative to *https://mgmtapi.geins.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRefund**](RefundApi.md#createRefund) | **POST** /API/Order/{orderId}/Refund | Creates refund
[**deleteRefundRow**](RefundApi.md#deleteRefundRow) | **DELETE** /API/Order/{orderId}/Refund/{refundId}/RefundRow/{refundRowId} | Delete refund row
[**getRefund**](RefundApi.md#getRefund) | **GET** /API/Order/{orderId}/Refund/{refundId} | Get refund
[**listRefunds**](RefundApi.md#listRefunds) | **GET** /API/Order/{orderId}/Refund/List | List refunds
[**queryRefunds**](RefundApi.md#queryRefunds) | **POST** /API/Refund/Query | Query refunds
[**setRefundApproval**](RefundApi.md#setRefundApproval) | **POST** /API/Order/{orderId}/Refund/{refundId}/SetApproval | Set refund approval
[**setRefundAsProcessed**](RefundApi.md#setRefundAsProcessed) | **POST** /API/Order/{orderId}/Refund/{refundId}/SetAsProcessed | Set refund as processed
[**setRefundAsSettled**](RefundApi.md#setRefundAsSettled) | **POST** /API/Order/{orderId}/Refund/{refundId}/SetAsSettled | Set refund as settled
[**setRefundRowAsSettled**](RefundApi.md#setRefundRowAsSettled) | **POST** /API/Order/{orderId}/Refund/{refundId}/RefundRow/{refundRowId}/SetAsSettled | Set refund row as settled



## createRefund

> EnvelopeNullableGuid createRefund(orderId, newRefund)

Creates refund

Creates a new refund.

### Example

```javascript
import GeinsSdkApiMgmtJavascript from '@geins/sdk-api-mgmt-javascript';
let defaultClient = GeinsSdkApiMgmtJavascript.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new GeinsSdkApiMgmtJavascript.RefundApi();
let orderId = 56; // Number | The order id.
let newRefund = new GeinsSdkApiMgmtJavascript.OrderRefundModelsWriteNewRefund(); // OrderRefundModelsWriteNewRefund | Information about the refund.
apiInstance.createRefund(orderId, newRefund, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**| The order id. | 
 **newRefund** | [**OrderRefundModelsWriteNewRefund**](OrderRefundModelsWriteNewRefund.md)| Information about the refund. | 

### Return type

[**EnvelopeNullableGuid**](EnvelopeNullableGuid.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteRefundRow

> BaseEnvelope deleteRefundRow(orderId, refundId, refundRowId)

Delete refund row

Delete a refund row. Can only be done if the refund row isn&#39;t settled.

### Example

```javascript
import GeinsSdkApiMgmtJavascript from '@geins/sdk-api-mgmt-javascript';
let defaultClient = GeinsSdkApiMgmtJavascript.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new GeinsSdkApiMgmtJavascript.RefundApi();
let orderId = 56; // Number | The order id.
let refundId = "refundId_example"; // String | The refund id.
let refundRowId = 56; // Number | The refund row id.
apiInstance.deleteRefundRow(orderId, refundId, refundRowId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**| The order id. | 
 **refundId** | **String**| The refund id. | 
 **refundRowId** | **Number**| The refund row id. | 

### Return type

[**BaseEnvelope**](BaseEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRefund

> EnvelopeRefund getRefund(orderId, refundId)

Get refund

### Example

```javascript
import GeinsSdkApiMgmtJavascript from '@geins/sdk-api-mgmt-javascript';
let defaultClient = GeinsSdkApiMgmtJavascript.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new GeinsSdkApiMgmtJavascript.RefundApi();
let orderId = 56; // Number | The order id.
let refundId = "refundId_example"; // String | The refund id.
apiInstance.getRefund(orderId, refundId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**| The order id. | 
 **refundId** | **String**| The refund id. | 

### Return type

[**EnvelopeRefund**](EnvelopeRefund.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listRefunds

> EnvelopeListRefund listRefunds(orderId)

List refunds

Get all refunds on an order.

### Example

```javascript
import GeinsSdkApiMgmtJavascript from '@geins/sdk-api-mgmt-javascript';
let defaultClient = GeinsSdkApiMgmtJavascript.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new GeinsSdkApiMgmtJavascript.RefundApi();
let orderId = 56; // Number | The Order ID.
apiInstance.listRefunds(orderId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**| The Order ID. | 

### Return type

[**EnvelopeListRefund**](EnvelopeListRefund.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queryRefunds

> EnvelopeListRefund queryRefunds(refundQuery)

Query refunds

Queries all refunds.

### Example

```javascript
import GeinsSdkApiMgmtJavascript from '@geins/sdk-api-mgmt-javascript';
let defaultClient = GeinsSdkApiMgmtJavascript.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new GeinsSdkApiMgmtJavascript.RefundApi();
let refundQuery = new GeinsSdkApiMgmtJavascript.RefundQuery(); // RefundQuery | The refund query.
apiInstance.queryRefunds(refundQuery, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refundQuery** | [**RefundQuery**](RefundQuery.md)| The refund query. | 

### Return type

[**EnvelopeListRefund**](EnvelopeListRefund.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setRefundApproval

> BaseEnvelope setRefundApproval(orderId, refundId, refundApproval)

Set refund approval

Approve or deny a pending refund.

### Example

```javascript
import GeinsSdkApiMgmtJavascript from '@geins/sdk-api-mgmt-javascript';
let defaultClient = GeinsSdkApiMgmtJavascript.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new GeinsSdkApiMgmtJavascript.RefundApi();
let orderId = 56; // Number | The Order ID.
let refundId = "refundId_example"; // String | The Refund ID.
let refundApproval = new GeinsSdkApiMgmtJavascript.OrderRefundModelsWriteRefundApproval(); // OrderRefundModelsWriteRefundApproval | Contains information about the approval.
apiInstance.setRefundApproval(orderId, refundId, refundApproval, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**| The Order ID. | 
 **refundId** | **String**| The Refund ID. | 
 **refundApproval** | [**OrderRefundModelsWriteRefundApproval**](OrderRefundModelsWriteRefundApproval.md)| Contains information about the approval. | 

### Return type

[**BaseEnvelope**](BaseEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setRefundAsProcessed

> BaseEnvelope setRefundAsProcessed(orderId, refundId, processedRefund)

Set refund as processed

Sets a refund as processed and all refund rows within it as settled.

### Example

```javascript
import GeinsSdkApiMgmtJavascript from '@geins/sdk-api-mgmt-javascript';
let defaultClient = GeinsSdkApiMgmtJavascript.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new GeinsSdkApiMgmtJavascript.RefundApi();
let orderId = 56; // Number | The order id.
let refundId = "refundId_example"; // String | The refund id.
let processedRefund = new GeinsSdkApiMgmtJavascript.OrderRefundModelsWriteProcessedRefund(); // OrderRefundModelsWriteProcessedRefund | Contains optional fields for the processing.
apiInstance.setRefundAsProcessed(orderId, refundId, processedRefund, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**| The order id. | 
 **refundId** | **String**| The refund id. | 
 **processedRefund** | [**OrderRefundModelsWriteProcessedRefund**](OrderRefundModelsWriteProcessedRefund.md)| Contains optional fields for the processing. | 

### Return type

[**BaseEnvelope**](BaseEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setRefundAsSettled

> BaseEnvelope setRefundAsSettled(orderId, refundId, settledRefund)

Set refund as settled

Sets all refund rows in a refund as settled.

### Example

```javascript
import GeinsSdkApiMgmtJavascript from '@geins/sdk-api-mgmt-javascript';
let defaultClient = GeinsSdkApiMgmtJavascript.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new GeinsSdkApiMgmtJavascript.RefundApi();
let orderId = 56; // Number | The order id.
let refundId = "refundId_example"; // String | The refund id.
let settledRefund = new GeinsSdkApiMgmtJavascript.OrderRefundModelsWriteSettledRefund(); // OrderRefundModelsWriteSettledRefund | Contains optional fields for the settlement.
apiInstance.setRefundAsSettled(orderId, refundId, settledRefund, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**| The order id. | 
 **refundId** | **String**| The refund id. | 
 **settledRefund** | [**OrderRefundModelsWriteSettledRefund**](OrderRefundModelsWriteSettledRefund.md)| Contains optional fields for the settlement. | 

### Return type

[**BaseEnvelope**](BaseEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setRefundRowAsSettled

> BaseEnvelope setRefundRowAsSettled(orderId, refundId, refundRowId, settledRefundRow)

Set refund row as settled

### Example

```javascript
import GeinsSdkApiMgmtJavascript from '@geins/sdk-api-mgmt-javascript';
let defaultClient = GeinsSdkApiMgmtJavascript.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new GeinsSdkApiMgmtJavascript.RefundApi();
let orderId = 56; // Number | The order id.
let refundId = "refundId_example"; // String | The refund id.
let refundRowId = 56; // Number | The refund row id.
let settledRefundRow = new GeinsSdkApiMgmtJavascript.OrderRefundModelsWriteSettledRefundRow(); // OrderRefundModelsWriteSettledRefundRow | Contains optional fields for the settlement.
apiInstance.setRefundRowAsSettled(orderId, refundId, refundRowId, settledRefundRow, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**| The order id. | 
 **refundId** | **String**| The refund id. | 
 **refundRowId** | **Number**| The refund row id. | 
 **settledRefundRow** | [**OrderRefundModelsWriteSettledRefundRow**](OrderRefundModelsWriteSettledRefundRow.md)| Contains optional fields for the settlement. | 

### Return type

[**BaseEnvelope**](BaseEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

