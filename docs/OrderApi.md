# GeinsManagementApiSdkJs.OrderApi

All URIs are relative to *https://mgmtapi.carismar.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCommentToOrder**](OrderApi.md#addCommentToOrder) | **POST** /API/Order/{id}/Comment | Adds a comment to the order
[**createOrder**](OrderApi.md#createOrder) | **POST** /API/Order | Post a new order
[**createOrderId**](OrderApi.md#createOrderId) | **POST** /API/Order/Id | Create a new order id
[**deleteOrder**](OrderApi.md#deleteOrder) | **DELETE** /API/Order/{id} | Deletes or deactivates an order
[**getCaptureById**](OrderApi.md#getCaptureById) | **GET** /API/Order/Capture/{captureId} | Get Capture by Id
[**getOrderById**](OrderApi.md#getOrderById) | **GET** /API/Order/{id}/{include} | Get an instance of a order
[**getOrderStatuses**](OrderApi.md#getOrderStatuses) | **GET** /API/Order/Statuses | Get a list of available order statuses
[**getRefundById**](OrderApi.md#getRefundById) | **GET** /API/Order/Refund/{refundId} | Get Refund by Id
[**partialUpdateOfOrder**](OrderApi.md#partialUpdateOfOrder) | **PATCH** /API/Order/{id} | Partial update of an order
[**queryOrders**](OrderApi.md#queryOrders) | **POST** /API/Order/Query | Query the order repository
[**setCaptureAsProcessed**](OrderApi.md#setCaptureAsProcessed) | **POST** /API/Order/Capture/SetAsProcessed | Set a capture as processed (&#x3D; captured)
[**setPaymentAsPayed**](OrderApi.md#setPaymentAsPayed) | **POST** /API/Order/PaymentDetail/{paymentDetailId}/SetAsPayed | Set Payment Detail as payed
[**setRefundAsProcessed**](OrderApi.md#setRefundAsProcessed) | **POST** /API/Order/Refund/SetAsProcessed | Set a refund as processed (&#x3D; settled)
[**updateOrderStatus**](OrderApi.md#updateOrderStatus) | **POST** /API/Order/{id}/Status/{status}/{transactionId}/{secondaryTransactionId} | Update order status
[**updateTransactionData**](OrderApi.md#updateTransactionData) | **POST** /API/Order/{id}/TransactionData | Updates transaction data on an order
[**validateOrder**](OrderApi.md#validateOrder) | **POST** /API/Order/ValidateCreation | Validates order data for order creation.



## addCommentToOrder

> Object addCommentToOrder(id, orderComment)

Adds a comment to the order

This add to (not replace) any previous comments.

### Example

```javascript
import GeinsManagementApiSdkJs from 'geins_management_api_sdk_js';
let defaultClient = GeinsManagementApiSdkJs.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new GeinsManagementApiSdkJs.OrderApi();
let id = 56; // Number | Order ID.
let orderComment = new GeinsManagementApiSdkJs.APIOrderOrderComment(); // APIOrderOrderComment | The comment
apiInstance.addCommentToOrder(id, orderComment, (error, data, response) => {
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
 **id** | **Number**| Order ID. | 
 **orderComment** | [**APIOrderOrderComment**](APIOrderOrderComment.md)| The comment | 

### Return type

**Object**

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## createOrder

> EnvelopeInt createOrder(order)

Post a new order

### Example

```javascript
import GeinsManagementApiSdkJs from 'geins_management_api_sdk_js';
let defaultClient = GeinsManagementApiSdkJs.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new GeinsManagementApiSdkJs.OrderApi();
let order = new GeinsManagementApiSdkJs.OrderModelsOrder(); // OrderModelsOrder | The order object.
apiInstance.createOrder(order, (error, data, response) => {
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
 **order** | [**OrderModelsOrder**](OrderModelsOrder.md)| The order object. | 

### Return type

[**EnvelopeInt**](EnvelopeInt.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## createOrderId

> EnvelopeInt createOrderId()

Create a new order id

### Example

```javascript
import GeinsManagementApiSdkJs from 'geins_management_api_sdk_js';
let defaultClient = GeinsManagementApiSdkJs.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new GeinsManagementApiSdkJs.OrderApi();
apiInstance.createOrderId((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**EnvelopeInt**](EnvelopeInt.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## deleteOrder

> Object deleteOrder(id, operation)

Deletes or deactivates an order

### Example

```javascript
import GeinsManagementApiSdkJs from 'geins_management_api_sdk_js';
let defaultClient = GeinsManagementApiSdkJs.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new GeinsManagementApiSdkJs.OrderApi();
let id = 56; // Number | The ID of the order to delete.
let operation = 56; // Number | The method of deletion desired.
apiInstance.deleteOrder(id, operation, (error, data, response) => {
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
 **id** | **Number**| The ID of the order to delete. | 
 **operation** | **Number**| The method of deletion desired. | 

### Return type

**Object**

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## getCaptureById

> OrderCapture getCaptureById(captureId)

Get Capture by Id

### Example

```javascript
import GeinsManagementApiSdkJs from 'geins_management_api_sdk_js';
let defaultClient = GeinsManagementApiSdkJs.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new GeinsManagementApiSdkJs.OrderApi();
let captureId = "captureId_example"; // String | Capture ID.
apiInstance.getCaptureById(captureId, (error, data, response) => {
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
 **captureId** | **String**| Capture ID. | 

### Return type

[**OrderCapture**](OrderCapture.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## getOrderById

> OrderModelsOrder getOrderById(id, include, opts)

Get an instance of a order

### Example

```javascript
import GeinsManagementApiSdkJs from 'geins_management_api_sdk_js';
let defaultClient = GeinsManagementApiSdkJs.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new GeinsManagementApiSdkJs.OrderApi();
let id = 56; // Number | The ID of the order to get.
let include = "include_example"; // String | A comma separated string of what related collections to include with this result set. The  possible values are: rows, paymentdetails, shippingdetails and refunds.
let opts = {
  'combineProductContainerRows': true // Boolean | If true, will combine all order rows that are part of a container into a single container row.
};
apiInstance.getOrderById(id, include, opts, (error, data, response) => {
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
 **id** | **Number**| The ID of the order to get. | 
 **include** | **String**| A comma separated string of what related collections to include with this result set. The  possible values are: rows, paymentdetails, shippingdetails and refunds. | 
 **combineProductContainerRows** | **Boolean**| If true, will combine all order rows that are part of a container into a single container row. | [optional] 

### Return type

[**OrderModelsOrder**](OrderModelsOrder.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## getOrderStatuses

> [OrderModelsOrderStatus] getOrderStatuses()

Get a list of available order statuses

### Example

```javascript
import GeinsManagementApiSdkJs from 'geins_management_api_sdk_js';
let defaultClient = GeinsManagementApiSdkJs.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new GeinsManagementApiSdkJs.OrderApi();
apiInstance.getOrderStatuses((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[OrderModelsOrderStatus]**](OrderModelsOrderStatus.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## getRefundById

> OrderRefund getRefundById(refundId)

Get Refund by Id

### Example

```javascript
import GeinsManagementApiSdkJs from 'geins_management_api_sdk_js';
let defaultClient = GeinsManagementApiSdkJs.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new GeinsManagementApiSdkJs.OrderApi();
let refundId = "refundId_example"; // String | Refund ID.
apiInstance.getRefundById(refundId, (error, data, response) => {
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
 **refundId** | **String**| Refund ID. | 

### Return type

[**OrderRefund**](OrderRefund.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## partialUpdateOfOrder

> Object partialUpdateOfOrder(id, order)

Partial update of an order

### Example

```javascript
import GeinsManagementApiSdkJs from 'geins_management_api_sdk_js';
let defaultClient = GeinsManagementApiSdkJs.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new GeinsManagementApiSdkJs.OrderApi();
let id = 56; // Number | The orderId of the order to update
let order = new GeinsManagementApiSdkJs.OrderModelsOrderUpdate(); // OrderModelsOrderUpdate | The order object containing the properties that should be updated.
apiInstance.partialUpdateOfOrder(id, order, (error, data, response) => {
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
 **id** | **Number**| The orderId of the order to update | 
 **order** | [**OrderModelsOrderUpdate**](OrderModelsOrderUpdate.md)| The order object containing the properties that should be updated. | 

### Return type

**Object**

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## queryOrders

> [OrderModelsOrder] queryOrders(query)

Query the order repository

### Example

```javascript
import GeinsManagementApiSdkJs from 'geins_management_api_sdk_js';
let defaultClient = GeinsManagementApiSdkJs.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new GeinsManagementApiSdkJs.OrderApi();
let query = new GeinsManagementApiSdkJs.OrderModelsOrderQuery(); // OrderModelsOrderQuery | The details of the query.
apiInstance.queryOrders(query, (error, data, response) => {
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
 **query** | [**OrderModelsOrderQuery**](OrderModelsOrderQuery.md)| The details of the query. | 

### Return type

[**[OrderModelsOrder]**](OrderModelsOrder.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## setCaptureAsProcessed

> Object setCaptureAsProcessed(processedCapture)

Set a capture as processed (&#x3D; captured)

### Example

```javascript
import GeinsManagementApiSdkJs from 'geins_management_api_sdk_js';
let defaultClient = GeinsManagementApiSdkJs.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new GeinsManagementApiSdkJs.OrderApi();
let processedCapture = new GeinsManagementApiSdkJs.OrderProcessedCapture(); // OrderProcessedCapture | Contains CaptureId and optional metadata about capture.
apiInstance.setCaptureAsProcessed(processedCapture, (error, data, response) => {
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
 **processedCapture** | [**OrderProcessedCapture**](OrderProcessedCapture.md)| Contains CaptureId and optional metadata about capture. | 

### Return type

**Object**

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## setPaymentAsPayed

> Object setPaymentAsPayed(paymentDetailId)

Set Payment Detail as payed

### Example

```javascript
import GeinsManagementApiSdkJs from 'geins_management_api_sdk_js';
let defaultClient = GeinsManagementApiSdkJs.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new GeinsManagementApiSdkJs.OrderApi();
let paymentDetailId = 56; // Number | Payment Detail ID.
apiInstance.setPaymentAsPayed(paymentDetailId, (error, data, response) => {
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
 **paymentDetailId** | **Number**| Payment Detail ID. | 

### Return type

**Object**

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## setRefundAsProcessed

> Object setRefundAsProcessed(processedRefund)

Set a refund as processed (&#x3D; settled)

### Example

```javascript
import GeinsManagementApiSdkJs from 'geins_management_api_sdk_js';
let defaultClient = GeinsManagementApiSdkJs.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new GeinsManagementApiSdkJs.OrderApi();
let processedRefund = new GeinsManagementApiSdkJs.OrderProcessedRefund(); // OrderProcessedRefund | Contains RefundId and optional metadata about refund.
apiInstance.setRefundAsProcessed(processedRefund, (error, data, response) => {
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
 **processedRefund** | [**OrderProcessedRefund**](OrderProcessedRefund.md)| Contains RefundId and optional metadata about refund. | 

### Return type

**Object**

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## updateOrderStatus

> Object updateOrderStatus(id, status, transactionId, secondaryTransactionId)

Update order status

### Example

```javascript
import GeinsManagementApiSdkJs from 'geins_management_api_sdk_js';
let defaultClient = GeinsManagementApiSdkJs.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new GeinsManagementApiSdkJs.OrderApi();
let id = 56; // Number | Order ID.
let status = 56; // Number | Order status. These statuses can be set: cancelled, on-hold, inactive, out-of-stock,  backorder, completed, pending.
let transactionId = "transactionId_example"; // String | A transaction id can be set here if status is set to pending.
let secondaryTransactionId = "secondaryTransactionId_example"; // String | A secondary transaction id, if any, can be set here if status is set to pending.
apiInstance.updateOrderStatus(id, status, transactionId, secondaryTransactionId, (error, data, response) => {
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
 **id** | **Number**| Order ID. | 
 **status** | **Number**| Order status. These statuses can be set: cancelled, on-hold, inactive, out-of-stock,  backorder, completed, pending. | 
 **transactionId** | **String**| A transaction id can be set here if status is set to pending. | 
 **secondaryTransactionId** | **String**| A secondary transaction id, if any, can be set here if status is set to pending. | 

### Return type

**Object**

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## updateTransactionData

> Object updateTransactionData(id, transactionData)

Updates transaction data on an order

### Example

```javascript
import GeinsManagementApiSdkJs from 'geins_management_api_sdk_js';
let defaultClient = GeinsManagementApiSdkJs.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new GeinsManagementApiSdkJs.OrderApi();
let id = 56; // Number | Order ID.
let transactionData = new GeinsManagementApiSdkJs.APIOrderTransactionData(); // APIOrderTransactionData | The transaction data
apiInstance.updateTransactionData(id, transactionData, (error, data, response) => {
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
 **id** | **Number**| Order ID. | 
 **transactionData** | [**APIOrderTransactionData**](APIOrderTransactionData.md)| The transaction data | 

### Return type

**Object**

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## validateOrder

> Object validateOrder(request)

Validates order data for order creation.

### Example

```javascript
import GeinsManagementApiSdkJs from 'geins_management_api_sdk_js';
let defaultClient = GeinsManagementApiSdkJs.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new GeinsManagementApiSdkJs.OrderApi();
let request = new GeinsManagementApiSdkJs.OrderValidateOrderCreationRequest(); // OrderValidateOrderCreationRequest | The order data to validate.
apiInstance.validateOrder(request, (error, data, response) => {
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
 **request** | [**OrderValidateOrderCreationRequest**](OrderValidateOrderCreationRequest.md)| The order data to validate. | 

### Return type

**Object**

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml

