# GeinsSdkApiMgmtJavascript.OrderApi

All URIs are relative to *https://mgmtapi.geins.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOrderComment**](OrderApi.md#addOrderComment) | **POST** /API/Order/{id}/Comment | Add order comment
[**cancelOrderRow**](OrderApi.md#cancelOrderRow) | **DELETE** /API/Order/{orderId}/OrderRow/{orderRowId} | Cancel order row
[**countOrders**](OrderApi.md#countOrders) | **GET** /API/Order/Count/{email} | Count orders
[**createOrder**](OrderApi.md#createOrder) | **POST** /API/Order | Create order
[**createOrderId**](OrderApi.md#createOrderId) | **POST** /API/Order/Id | Create order id
[**deleteOrder**](OrderApi.md#deleteOrder) | **DELETE** /API/Order/{id} | Delete order
[**getCapture**](OrderApi.md#getCapture) | **GET** /API/Order/Capture/{captureId} | Get capture
[**getOrderId**](OrderApi.md#getOrderId) | **GET** /API/Order/{id}/{include} | Get order (id)
[**getOrderPublicId**](OrderApi.md#getOrderPublicId) | **GET** /API/OrderByPublicId/{publicId}/{include} | Get order (public id)
[**getOrderStatuses**](OrderApi.md#getOrderStatuses) | **GET** /API/Order/Statuses | Get order statuses
[**partialUpdateOfOrder**](OrderApi.md#partialUpdateOfOrder) | **PATCH** /API/Order/{id} | Partial update of an order
[**queryOrders**](OrderApi.md#queryOrders) | **POST** /API/Order/Query | Query orders
[**setCaptureAsProcessed**](OrderApi.md#setCaptureAsProcessed) | **POST** /API/Order/Capture/SetAsProcessed | Set capture as processed
[**setPaymentAsPaid**](OrderApi.md#setPaymentAsPaid) | **POST** /API/Order/PaymentDetail/{paymentDetailId}/SetAsPaid | Set payment as paid
[**updateOrderStatus**](OrderApi.md#updateOrderStatus) | **POST** /API/Order/{id}/Status/{status}/{transactionId}/{secondaryTransactionId} | Update order status
[**updateTransactionData**](OrderApi.md#updateTransactionData) | **POST** /API/Order/{id}/TransactionData | Update transaction data
[**validateOrder**](OrderApi.md#validateOrder) | **POST** /API/Order/ValidateCreation | Validate order



## addOrderComment

> BaseEnvelope addOrderComment(id, orderComment)

Add order comment

Adds a comment to an order. This does not replace any previous comments.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.OrderApi();
let id = 56; // Number | Order ID.
let orderComment = new GeinsSdkApiMgmtJavascript.APIOrderOrderComment(); // APIOrderOrderComment | The comment
apiInstance.addOrderComment(id, orderComment, (error, data, response) => {
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

[**BaseEnvelope**](BaseEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cancelOrderRow

> BaseEnvelope cancelOrderRow(orderId, orderRowId, opts)

Cancel order row

Cancels an order row.    Can only be done on an order that has not been delivered or cancelled.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.OrderApi();
let orderId = 56; // Number | The id of the order containing the order row.
let orderRowId = 56; // Number | The id of the order row to cancel.
let opts = {
  'skipRestock': true // Boolean | If true will not restock the item that was cancelled. Defaults to false.
};
apiInstance.cancelOrderRow(orderId, orderRowId, opts, (error, data, response) => {
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
 **orderId** | **Number**| The id of the order containing the order row. | 
 **orderRowId** | **Number**| The id of the order row to cancel. | 
 **skipRestock** | **Boolean**| If true will not restock the item that was cancelled. Defaults to false. | [optional] 

### Return type

[**BaseEnvelope**](BaseEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## countOrders

> Number countOrders(email)

Count orders

Gets the number of orders placed with the supplied email address.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.OrderApi();
let email = "email_example"; // String | The email adress to aggregate on.
apiInstance.countOrders(email, (error, data, response) => {
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
 **email** | **String**| The email adress to aggregate on. | 

### Return type

**Number**

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createOrder

> EnvelopeInt createOrder(order)

Create order

Create a new order.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.OrderApi();
let order = new GeinsSdkApiMgmtJavascript.OrderModelsOrder(); // OrderModelsOrder | The order object.
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

- **Content-Type**: application/json
- **Accept**: application/json


## createOrderId

> EnvelopeInt createOrderId()

Create order id

Create a new order id.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.OrderApi();
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
- **Accept**: application/json


## deleteOrder

> Object deleteOrder(id, operation)

Delete order

Deletes or deactivates an order.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.OrderApi();
let id = 56; // Number | The ID of the order to delete.
let operation = 56; // Number | The method of deletion desired.    0 = OnHold. Put this order on hold.    1 = Cancel. Cancel this order permanently.    2 = Deactivate. Mark this order as no longer active.
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
 **operation** | **Number**| The method of deletion desired.    0 &#x3D; OnHold. Put this order on hold.    1 &#x3D; Cancel. Cancel this order permanently.    2 &#x3D; Deactivate. Mark this order as no longer active. | 

### Return type

**Object**

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCapture

> EnvelopeOrderCapture getCapture(captureId)

Get capture

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

let apiInstance = new GeinsSdkApiMgmtJavascript.OrderApi();
let captureId = "captureId_example"; // String | Capture ID.
apiInstance.getCapture(captureId, (error, data, response) => {
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

[**EnvelopeOrderCapture**](EnvelopeOrderCapture.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrderId

> OrderModelsOrder getOrderId(id, include, opts)

Get order (id)

Get order by id.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.OrderApi();
let id = 56; // Number | The ID of the order to get.
let include = "include_example"; // String | A comma separated string of related collections to include with this result set.    Possible values are:    rows    paymentdetails    shippingdetails    refunds
let opts = {
  'combineProductContainerRows': true // Boolean | If true, will combine all order rows that are part of a container into a single container row.
};
apiInstance.getOrderId(id, include, opts, (error, data, response) => {
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
 **include** | **String**| A comma separated string of related collections to include with this result set.    Possible values are:    rows    paymentdetails    shippingdetails    refunds | 
 **combineProductContainerRows** | **Boolean**| If true, will combine all order rows that are part of a container into a single container row. | [optional] 

### Return type

[**OrderModelsOrder**](OrderModelsOrder.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrderPublicId

> OrderModelsOrder getOrderPublicId(publicId, include, opts)

Get order (public id)

Get order by public id.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.OrderApi();
let publicId = "publicId_example"; // String | The Public ID of the order to get.
let include = "include_example"; // String | A comma separated string of related collections to include with this result set.    Possible values are:    rows    paymentdetails    shippingdetails    refunds
let opts = {
  'combineProductContainerRows': true // Boolean | If true, will combine all order rows that are part of a container into a single container row.
};
apiInstance.getOrderPublicId(publicId, include, opts, (error, data, response) => {
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
 **publicId** | **String**| The Public ID of the order to get. | 
 **include** | **String**| A comma separated string of related collections to include with this result set.    Possible values are:    rows    paymentdetails    shippingdetails    refunds | 
 **combineProductContainerRows** | **Boolean**| If true, will combine all order rows that are part of a container into a single container row. | [optional] 

### Return type

[**OrderModelsOrder**](OrderModelsOrder.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrderStatuses

> [OrderModelsOrderStatus] getOrderStatuses()

Get order statuses

Get a list of available order statuses.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.OrderApi();
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
- **Accept**: application/json


## partialUpdateOfOrder

> Object partialUpdateOfOrder(id, order)

Partial update of an order

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

let apiInstance = new GeinsSdkApiMgmtJavascript.OrderApi();
let id = 56; // Number | The orderId of the order to update
let order = new GeinsSdkApiMgmtJavascript.OrderModelsOrderUpdate(); // OrderModelsOrderUpdate | The order object containing the properties that should be updated.
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

- **Content-Type**: application/json
- **Accept**: application/json


## queryOrders

> [OrderModelsOrder] queryOrders(query)

Query orders

Queries orders.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.OrderApi();
let query = new GeinsSdkApiMgmtJavascript.OrderModelsOrderQuery(); // OrderModelsOrderQuery | The details of the query.
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

- **Content-Type**: application/json
- **Accept**: application/json


## setCaptureAsProcessed

> BaseEnvelope setCaptureAsProcessed(processedCapture)

Set capture as processed

Sets a capture as processed (&#x3D; captured).

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

let apiInstance = new GeinsSdkApiMgmtJavascript.OrderApi();
let processedCapture = new GeinsSdkApiMgmtJavascript.OrderProcessedCapture(); // OrderProcessedCapture | Contains CaptureId and optional metadata about capture.
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

[**BaseEnvelope**](BaseEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setPaymentAsPaid

> BaseEnvelope setPaymentAsPaid(paymentDetailId)

Set payment as paid

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

let apiInstance = new GeinsSdkApiMgmtJavascript.OrderApi();
let paymentDetailId = 56; // Number | Payment Detail ID.
apiInstance.setPaymentAsPaid(paymentDetailId, (error, data, response) => {
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

[**BaseEnvelope**](BaseEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateOrderStatus

> BaseEnvelope updateOrderStatus(id, status, transactionId, secondaryTransactionId)

Update order status

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

let apiInstance = new GeinsSdkApiMgmtJavascript.OrderApi();
let id = 56; // Number | The order id.
let status = 56; // Number | The order status to set.    0 = Undefined    1 = Completed    2 = Cancelled    3 = OnHold    4 = Inactive    5 = OutOfStock    6 = Backorder    7 = Pending
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
 **id** | **Number**| The order id. | 
 **status** | **Number**| The order status to set.    0 &#x3D; Undefined    1 &#x3D; Completed    2 &#x3D; Cancelled    3 &#x3D; OnHold    4 &#x3D; Inactive    5 &#x3D; OutOfStock    6 &#x3D; Backorder    7 &#x3D; Pending | 
 **transactionId** | **String**| A transaction id can be set here if status is set to pending. | 
 **secondaryTransactionId** | **String**| A secondary transaction id, if any, can be set here if status is set to pending. | 

### Return type

[**BaseEnvelope**](BaseEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateTransactionData

> BaseEnvelope updateTransactionData(id, transactionData)

Update transaction data

Updates transaction data on an order.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.OrderApi();
let id = 56; // Number | Order ID.
let transactionData = new GeinsSdkApiMgmtJavascript.APIOrderTransactionData(); // APIOrderTransactionData | The transaction data
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

[**BaseEnvelope**](BaseEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## validateOrder

> EnvelopeAPIOrderOrderCreationValidationStatus validateOrder(request)

Validate order

Validates order data for order creation.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.OrderApi();
let request = new GeinsSdkApiMgmtJavascript.OrderValidateOrderCreationRequest(); // OrderValidateOrderCreationRequest | The order data to validate.
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

[**EnvelopeAPIOrderOrderCreationValidationStatus**](EnvelopeAPIOrderOrderCreationValidationStatus.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

