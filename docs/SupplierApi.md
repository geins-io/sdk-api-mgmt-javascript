# GeinsSdkApiMgmtJavascript.SupplierApi

All URIs are relative to *https://mgmtapi.geins.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSupplier**](SupplierApi.md#createSupplier) | **POST** /API/Supplier | Create supplier
[**getSupplier**](SupplierApi.md#getSupplier) | **GET** /API/Supplier/{id} | Get supplier
[**querySuppliers**](SupplierApi.md#querySuppliers) | **POST** /API/Supplier/Query | Query suppliers
[**updateSupplier**](SupplierApi.md#updateSupplier) | **PUT** /API/Supplier/{id} | Update supplier



## createSupplier

> EnvelopeSupplierModelsReadSupplier createSupplier(supplier)

Create supplier

Creates a new supplier.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.SupplierApi();
let supplier = new GeinsSdkApiMgmtJavascript.SupplierModelsWriteSupplier(); // SupplierModelsWriteSupplier | The supplier to create.
apiInstance.createSupplier(supplier, (error, data, response) => {
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
 **supplier** | [**SupplierModelsWriteSupplier**](SupplierModelsWriteSupplier.md)| The supplier to create. | 

### Return type

[**EnvelopeSupplierModelsReadSupplier**](EnvelopeSupplierModelsReadSupplier.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getSupplier

> EnvelopeSupplierModelsReadSupplier getSupplier(id)

Get supplier

Gets a specific supplier.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.SupplierApi();
let id = 56; // Number | The id of the supplier to get.
apiInstance.getSupplier(id, (error, data, response) => {
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
 **id** | **Number**| The id of the supplier to get. | 

### Return type

[**EnvelopeSupplierModelsReadSupplier**](EnvelopeSupplierModelsReadSupplier.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## querySuppliers

> [SupplierModelsReadSupplier] querySuppliers(query)

Query suppliers

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

let apiInstance = new GeinsSdkApiMgmtJavascript.SupplierApi();
let query = new GeinsSdkApiMgmtJavascript.SupplierModelsSupplierQuery(); // SupplierModelsSupplierQuery | The details of the query
apiInstance.querySuppliers(query, (error, data, response) => {
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
 **query** | [**SupplierModelsSupplierQuery**](SupplierModelsSupplierQuery.md)| The details of the query | 

### Return type

[**[SupplierModelsReadSupplier]**](SupplierModelsReadSupplier.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateSupplier

> EnvelopeSupplierModelsReadSupplier updateSupplier(id, supplier)

Update supplier

Updates a supplier.    Leaving out a property will ensure no changes are made to that property.    Collection properties will delete and/or add as necessary to match the supplied data.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.SupplierApi();
let id = 56; // Number | The id of the supplier to update.
let supplier = new GeinsSdkApiMgmtJavascript.SupplierModelsWriteSupplier(); // SupplierModelsWriteSupplier | The supplier data to update.
apiInstance.updateSupplier(id, supplier, (error, data, response) => {
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
 **id** | **Number**| The id of the supplier to update. | 
 **supplier** | [**SupplierModelsWriteSupplier**](SupplierModelsWriteSupplier.md)| The supplier data to update. | 

### Return type

[**EnvelopeSupplierModelsReadSupplier**](EnvelopeSupplierModelsReadSupplier.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

