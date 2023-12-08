# GeinsSdkApiMgmtJavascript.ProductParameterApi

All URIs are relative to *https://mgmtapi.geins.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrUpdateProductParameterValue**](ProductParameterApi.md#createOrUpdateProductParameterValue) | **POST** /API/ProductParameter/Value | Create/update product parameter value
[**createProductParameter**](ProductParameterApi.md#createProductParameter) | **POST** /API/ProductParameter | Create product parameter
[**createProductParameterGroup**](ProductParameterApi.md#createProductParameterGroup) | **POST** /API/ProductParameter/Group | Create product parameter group
[**createProductParameterPredefinedValue**](ProductParameterApi.md#createProductParameterPredefinedValue) | **POST** /API/ProductParameter/PredefinedValue | Create product parameter predefined value
[**getProductParameter**](ProductParameterApi.md#getProductParameter) | **GET** /API/ProductParameter/{id} | Get product parameter
[**getProductParameterGroup**](ProductParameterApi.md#getProductParameterGroup) | **GET** /API/ProductParameter/Group/{id} | Get product parameter group
[**getProductParameterPredefinedValue**](ProductParameterApi.md#getProductParameterPredefinedValue) | **GET** /API/ProductParameter/PredefinedValue/{id} | Get product parameter predefined value
[**getProductParameterValue**](ProductParameterApi.md#getProductParameterValue) | **GET** /API/ProductParameter/Value/{id} | Get product parameter value
[**replaceProductParameterValuesBatch**](ProductParameterApi.md#replaceProductParameterValuesBatch) | **POST** /API/ProductParameter/Values | Replace product parameter values (batch)
[**updateProductParameter**](ProductParameterApi.md#updateProductParameter) | **PUT** /API/ProductParameter/{id} | Update product parameter
[**updateProductParameterGroup**](ProductParameterApi.md#updateProductParameterGroup) | **PUT** /API/ProductParameter/Group/{id} | Update product parameter group
[**updateProductParameterValuesBatch**](ProductParameterApi.md#updateProductParameterValuesBatch) | **PUT** /API/ProductParameter/Values | Update product parameter values (batch)



## createOrUpdateProductParameterValue

> EnvelopeProductParameterModelsReadProductParameterValue createOrUpdateProductParameterValue(productParameterValue)

Create/update product parameter value

Creates or updates a new product parameter value.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductParameterApi();
let productParameterValue = new GeinsSdkApiMgmtJavascript.ProductParameterModelsWriteProductParameterValue(); // ProductParameterModelsWriteProductParameterValue | The product parameter value to create or update.
apiInstance.createOrUpdateProductParameterValue(productParameterValue, (error, data, response) => {
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
 **productParameterValue** | [**ProductParameterModelsWriteProductParameterValue**](ProductParameterModelsWriteProductParameterValue.md)| The product parameter value to create or update. | 

### Return type

[**EnvelopeProductParameterModelsReadProductParameterValue**](EnvelopeProductParameterModelsReadProductParameterValue.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createProductParameter

> EnvelopeProductParameterModelsReadProductParameter createProductParameter(productParameter)

Create product parameter

Creates a new product parameter.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductParameterApi();
let productParameter = new GeinsSdkApiMgmtJavascript.ProductParameterModelsWriteProductParameter(); // ProductParameterModelsWriteProductParameter | The product parameter to create.
apiInstance.createProductParameter(productParameter, (error, data, response) => {
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
 **productParameter** | [**ProductParameterModelsWriteProductParameter**](ProductParameterModelsWriteProductParameter.md)| The product parameter to create. | 

### Return type

[**EnvelopeProductParameterModelsReadProductParameter**](EnvelopeProductParameterModelsReadProductParameter.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createProductParameterGroup

> EnvelopeProductParameterModelsReadProductParameterGroup createProductParameterGroup(productParameterGroup)

Create product parameter group

Creates a new product parameter group.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductParameterApi();
let productParameterGroup = new GeinsSdkApiMgmtJavascript.ProductParameterModelsWriteProductParameterGroup(); // ProductParameterModelsWriteProductParameterGroup | The product parameter group to create.
apiInstance.createProductParameterGroup(productParameterGroup, (error, data, response) => {
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
 **productParameterGroup** | [**ProductParameterModelsWriteProductParameterGroup**](ProductParameterModelsWriteProductParameterGroup.md)| The product parameter group to create. | 

### Return type

[**EnvelopeProductParameterModelsReadProductParameterGroup**](EnvelopeProductParameterModelsReadProductParameterGroup.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createProductParameterPredefinedValue

> EnvelopeProductParameterModelsReadProductParameterPredefinedValue createProductParameterPredefinedValue(productParameterPredefinedValue)

Create product parameter predefined value

Creates a new predefined value for a product parameter.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductParameterApi();
let productParameterPredefinedValue = new GeinsSdkApiMgmtJavascript.ProductParameterModelsWriteProductParameterPredefinedValue(); // ProductParameterModelsWriteProductParameterPredefinedValue | The predefined value to create.
apiInstance.createProductParameterPredefinedValue(productParameterPredefinedValue, (error, data, response) => {
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
 **productParameterPredefinedValue** | [**ProductParameterModelsWriteProductParameterPredefinedValue**](ProductParameterModelsWriteProductParameterPredefinedValue.md)| The predefined value to create. | 

### Return type

[**EnvelopeProductParameterModelsReadProductParameterPredefinedValue**](EnvelopeProductParameterModelsReadProductParameterPredefinedValue.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getProductParameter

> EnvelopeProductParameterModelsReadProductParameter getProductParameter(id)

Get product parameter

Gets a specific product parameter

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductParameterApi();
let id = 56; // Number | The id of the product parameter to get.
apiInstance.getProductParameter(id, (error, data, response) => {
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
 **id** | **Number**| The id of the product parameter to get. | 

### Return type

[**EnvelopeProductParameterModelsReadProductParameter**](EnvelopeProductParameterModelsReadProductParameter.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProductParameterGroup

> EnvelopeProductParameterModelsReadProductParameterGroup getProductParameterGroup(id)

Get product parameter group

Gets a specific product parameter group.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductParameterApi();
let id = 56; // Number | The id of the product parameter group to get.
apiInstance.getProductParameterGroup(id, (error, data, response) => {
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
 **id** | **Number**| The id of the product parameter group to get. | 

### Return type

[**EnvelopeProductParameterModelsReadProductParameterGroup**](EnvelopeProductParameterModelsReadProductParameterGroup.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProductParameterPredefinedValue

> EnvelopeProductParameterModelsReadProductParameterValue getProductParameterPredefinedValue(id)

Get product parameter predefined value

Gets a specific predefined value for a product parameter.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductParameterApi();
let id = 56; // Number | The id of the predefined value to get.
apiInstance.getProductParameterPredefinedValue(id, (error, data, response) => {
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
 **id** | **Number**| The id of the predefined value to get. | 

### Return type

[**EnvelopeProductParameterModelsReadProductParameterValue**](EnvelopeProductParameterModelsReadProductParameterValue.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProductParameterValue

> EnvelopeProductParameterModelsReadProductParameterValue getProductParameterValue(id, opts)

Get product parameter value

Gets a specific product parameter value.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductParameterApi();
let id = 56; // Number | The id of the product parameter value to get.
let opts = {
  'predefinedValueId': "predefinedValueId_example" // String | The predefined value id of the product parameter value to get. Only applicable for parameter type Multi.
};
apiInstance.getProductParameterValue(id, opts, (error, data, response) => {
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
 **id** | **Number**| The id of the product parameter value to get. | 
 **predefinedValueId** | **String**| The predefined value id of the product parameter value to get. Only applicable for parameter type Multi. | [optional] 

### Return type

[**EnvelopeProductParameterModelsReadProductParameterValue**](EnvelopeProductParameterModelsReadProductParameterValue.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## replaceProductParameterValuesBatch

> BaseEnvelope replaceProductParameterValuesBatch(productParameterBatch)

Replace product parameter values (batch)

Replaces multiple product parameter values.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductParameterApi();
let productParameterBatch = new GeinsSdkApiMgmtJavascript.ProductParameterModelsWriteProductParameterValueBatch(); // ProductParameterModelsWriteProductParameterValueBatch | The product parameter values to replace.
apiInstance.replaceProductParameterValuesBatch(productParameterBatch, (error, data, response) => {
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
 **productParameterBatch** | [**ProductParameterModelsWriteProductParameterValueBatch**](ProductParameterModelsWriteProductParameterValueBatch.md)| The product parameter values to replace. | 

### Return type

[**BaseEnvelope**](BaseEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProductParameter

> EnvelopeProductParameterModelsReadProductParameter updateProductParameter(id, productParameter)

Update product parameter

Updates a product parameter.    Leaving out a property will ensure no changes are made to that property. Collection properties will delete and/or add as necessary to match the supplied data.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductParameterApi();
let id = 56; // Number | The id of the product parameter to update.
let productParameter = new GeinsSdkApiMgmtJavascript.ProductParameterModelsWriteProductParameter(); // ProductParameterModelsWriteProductParameter | The product parameter data to update.
apiInstance.updateProductParameter(id, productParameter, (error, data, response) => {
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
 **id** | **Number**| The id of the product parameter to update. | 
 **productParameter** | [**ProductParameterModelsWriteProductParameter**](ProductParameterModelsWriteProductParameter.md)| The product parameter data to update. | 

### Return type

[**EnvelopeProductParameterModelsReadProductParameter**](EnvelopeProductParameterModelsReadProductParameter.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProductParameterGroup

> EnvelopeProductParameterModelsReadProductParameterGroup updateProductParameterGroup(id, productParameterGroup)

Update product parameter group

Updates a product parameter group.    Leaving out a property will ensure no changes are made to that property. Collection properties will delete and/or add as necessary to match the supplied data.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductParameterApi();
let id = 56; // Number | The id of the product parameter group to update.
let productParameterGroup = new GeinsSdkApiMgmtJavascript.ProductParameterModelsWriteProductParameterGroup(); // ProductParameterModelsWriteProductParameterGroup | The product parameter group data to update.
apiInstance.updateProductParameterGroup(id, productParameterGroup, (error, data, response) => {
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
 **id** | **Number**| The id of the product parameter group to update. | 
 **productParameterGroup** | [**ProductParameterModelsWriteProductParameterGroup**](ProductParameterModelsWriteProductParameterGroup.md)| The product parameter group data to update. | 

### Return type

[**EnvelopeProductParameterModelsReadProductParameterGroup**](EnvelopeProductParameterModelsReadProductParameterGroup.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProductParameterValuesBatch

> BaseEnvelope updateProductParameterValuesBatch(productParameterBatch)

Update product parameter values (batch)

Updates multiple product parameter values.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductParameterApi();
let productParameterBatch = new GeinsSdkApiMgmtJavascript.ProductParameterModelsWriteProductParameterValueBatch(); // ProductParameterModelsWriteProductParameterValueBatch | The product parameter values update.
apiInstance.updateProductParameterValuesBatch(productParameterBatch, (error, data, response) => {
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
 **productParameterBatch** | [**ProductParameterModelsWriteProductParameterValueBatch**](ProductParameterModelsWriteProductParameterValueBatch.md)| The product parameter values update. | 

### Return type

[**BaseEnvelope**](BaseEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

