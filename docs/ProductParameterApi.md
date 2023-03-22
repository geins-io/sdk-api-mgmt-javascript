# GeinsManagementApiSdkJs.ProductParameterApi

All URIs are relative to *https://mgmtapi.carismar.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchReplaceProductParameterValues**](ProductParameterApi.md#batchReplaceProductParameterValues) | **POST** /API/ProductParameter/Values | Replace multiple product parameter values
[**batchUpdateProductParameterValues**](ProductParameterApi.md#batchUpdateProductParameterValues) | **PUT** /API/ProductParameter/Values | Update multiple product parameter values
[**createOrUpdateProductParameterValue**](ProductParameterApi.md#createOrUpdateProductParameterValue) | **POST** /API/ProductParameter/Value | Create or update a new product parameter value
[**createProductParameter**](ProductParameterApi.md#createProductParameter) | **POST** /API/ProductParameter | Create a new product parameter
[**createProductParameterGroup**](ProductParameterApi.md#createProductParameterGroup) | **POST** /API/ProductParameter/Group | Create a new product parameter group
[**createProductParameterPredefinedValue**](ProductParameterApi.md#createProductParameterPredefinedValue) | **POST** /API/ProductParameter/PredefinedValue | Create a new predefined value for a product parameter
[**getProductParameterById**](ProductParameterApi.md#getProductParameterById) | **GET** /API/ProductParameter/{id} | Get a specific product parameter
[**getProductParameterGroupById**](ProductParameterApi.md#getProductParameterGroupById) | **GET** /API/ProductParameter/Group/{id} | Get a specific product parameter group
[**getProductParameterPredefinedValue**](ProductParameterApi.md#getProductParameterPredefinedValue) | **GET** /API/ProductParameter/PredefinedValue/{id} | Get a specific predefined value for a product parameter
[**getProductParameterValue**](ProductParameterApi.md#getProductParameterValue) | **GET** /API/ProductParameter/Value/{id} | Get a specific product parameter value
[**updateProductParameter**](ProductParameterApi.md#updateProductParameter) | **PUT** /API/ProductParameter/{id} | Updates a product parameter
[**updateProductParameterGroup**](ProductParameterApi.md#updateProductParameterGroup) | **PUT** /API/ProductParameter/Group/{id} | Update a product parameter group



## batchReplaceProductParameterValues

> Envelope batchReplaceProductParameterValues(productParameterBatch)

Replace multiple product parameter values

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

let apiInstance = new GeinsManagementApiSdkJs.ProductParameterApi();
let productParameterBatch = new GeinsManagementApiSdkJs.ProductParameterModelsWriteProductParameterValueBatch(); // ProductParameterModelsWriteProductParameterValueBatch | The product parameter values to replace.
apiInstance.batchReplaceProductParameterValues(productParameterBatch, (error, data, response) => {
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

[**Envelope**](Envelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## batchUpdateProductParameterValues

> Envelope batchUpdateProductParameterValues(productParameterBatch)

Update multiple product parameter values

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

let apiInstance = new GeinsManagementApiSdkJs.ProductParameterApi();
let productParameterBatch = new GeinsManagementApiSdkJs.ProductParameterModelsWriteProductParameterValueBatch(); // ProductParameterModelsWriteProductParameterValueBatch | The product parameter values update.
apiInstance.batchUpdateProductParameterValues(productParameterBatch, (error, data, response) => {
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

[**Envelope**](Envelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## createOrUpdateProductParameterValue

> EnvelopeProductParameterModelsReadProductParameterValue createOrUpdateProductParameterValue(productParameterValue)

Create or update a new product parameter value

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

let apiInstance = new GeinsManagementApiSdkJs.ProductParameterApi();
let productParameterValue = new GeinsManagementApiSdkJs.ProductParameterModelsWriteProductParameterValue(); // ProductParameterModelsWriteProductParameterValue | The product parameter value to create or update.
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

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## createProductParameter

> EnvelopeProductParameterModelsReadProductParameter createProductParameter(productParameter)

Create a new product parameter

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

let apiInstance = new GeinsManagementApiSdkJs.ProductParameterApi();
let productParameter = new GeinsManagementApiSdkJs.ProductParameterModelsWriteProductParameter(); // ProductParameterModelsWriteProductParameter | The product parameter to create.
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

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## createProductParameterGroup

> EnvelopeProductParameterModelsReadProductParameterGroup createProductParameterGroup(productParameterGroup)

Create a new product parameter group

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

let apiInstance = new GeinsManagementApiSdkJs.ProductParameterApi();
let productParameterGroup = new GeinsManagementApiSdkJs.ProductParameterModelsWriteProductParameterGroup(); // ProductParameterModelsWriteProductParameterGroup | The product parameter group to create.
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

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## createProductParameterPredefinedValue

> EnvelopeProductParameterModelsReadProductParameterPredefinedValue createProductParameterPredefinedValue(productParameterPredefinedValue)

Create a new predefined value for a product parameter

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

let apiInstance = new GeinsManagementApiSdkJs.ProductParameterApi();
let productParameterPredefinedValue = new GeinsManagementApiSdkJs.ProductParameterModelsWriteProductParameterPredefinedValue(); // ProductParameterModelsWriteProductParameterPredefinedValue | The predefined value to create.
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

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## getProductParameterById

> EnvelopeProductParameterModelsReadProductParameter getProductParameterById(id)

Get a specific product parameter

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

let apiInstance = new GeinsManagementApiSdkJs.ProductParameterApi();
let id = 56; // Number | The id of the product parameter to get.
apiInstance.getProductParameterById(id, (error, data, response) => {
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
- **Accept**: application/json, text/json, application/xml, text/xml


## getProductParameterGroupById

> EnvelopeProductParameterModelsReadProductParameterGroup getProductParameterGroupById(id)

Get a specific product parameter group

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

let apiInstance = new GeinsManagementApiSdkJs.ProductParameterApi();
let id = 56; // Number | The id of the product parameter group to get.
apiInstance.getProductParameterGroupById(id, (error, data, response) => {
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
- **Accept**: application/json, text/json, application/xml, text/xml


## getProductParameterPredefinedValue

> EnvelopeProductParameterModelsReadProductParameterValue getProductParameterPredefinedValue(id)

Get a specific predefined value for a product parameter

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

let apiInstance = new GeinsManagementApiSdkJs.ProductParameterApi();
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
- **Accept**: application/json, text/json, application/xml, text/xml


## getProductParameterValue

> EnvelopeProductParameterModelsReadProductParameterValue getProductParameterValue(id, opts)

Get a specific product parameter value

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

let apiInstance = new GeinsManagementApiSdkJs.ProductParameterApi();
let id = 56; // Number | The id of the product parameter value to get.
let opts = {
  'predefinedValueId': "predefinedValueId_example" // String | The predefined value id of the product parameter value to get. Only applicable for {ProductParameter.Models.ProductParameterType.Multi}.
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
 **predefinedValueId** | **String**| The predefined value id of the product parameter value to get. Only applicable for {ProductParameter.Models.ProductParameterType.Multi}. | [optional] 

### Return type

[**EnvelopeProductParameterModelsReadProductParameterValue**](EnvelopeProductParameterModelsReadProductParameterValue.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## updateProductParameter

> EnvelopeProductParameterModelsReadProductParameter updateProductParameter(id, productParameter)

Updates a product parameter

Leaving out a property will ensure no changes are made to that property. Collection properties will delete and/or add as necessary to match the supplied data.

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

let apiInstance = new GeinsManagementApiSdkJs.ProductParameterApi();
let id = 56; // Number | The id of the product parameter to update.
let productParameter = new GeinsManagementApiSdkJs.ProductParameterModelsWriteProductParameter(); // ProductParameterModelsWriteProductParameter | The product parameter data to update.
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

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## updateProductParameterGroup

> EnvelopeProductParameterModelsReadProductParameterGroup updateProductParameterGroup(id, productParameterGroup)

Update a product parameter group

Leaving out a property will ensure no changes are made to that property. Collection properties will delete and/or add as necessary to match the supplied data.

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

let apiInstance = new GeinsManagementApiSdkJs.ProductParameterApi();
let id = 56; // Number | The id of the product parameter group to update.
let productParameterGroup = new GeinsManagementApiSdkJs.ProductParameterModelsWriteProductParameterGroup(); // ProductParameterModelsWriteProductParameterGroup | The product parameter group data to update.
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

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml

