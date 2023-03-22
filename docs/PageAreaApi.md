# GeinsManagementApiSdkJs.PageAreaApi

All URIs are relative to *https://mgmtapi.carismar.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrUpdateAPageArea**](PageAreaApi.md#createOrUpdateAPageArea) | **POST** /API/PageArea | Create or update a page area
[**createOrUpdatePageAreaFamily**](PageAreaApi.md#createOrUpdatePageAreaFamily) | **POST** /API/PageAreaFamily | Create or update a page area family
[**getPageArea**](PageAreaApi.md#getPageArea) | **GET** /API/PageArea/{name} | Get a specific page area
[**getPageAreaFamily**](PageAreaApi.md#getPageAreaFamily) | **GET** /API/PageAreaFamily/{familyId} | Get a specific page area family
[**listPageAreaFamilies**](PageAreaApi.md#listPageAreaFamilies) | **GET** /API/PageAreaFamily/List | Gets a list of all page area families, including nested data



## createOrUpdateAPageArea

> EnvelopePageAreaModelsReadPageArea createOrUpdateAPageArea(area)

Create or update a page area

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

let apiInstance = new GeinsManagementApiSdkJs.PageAreaApi();
let area = new GeinsManagementApiSdkJs.PageAreaModelsWritePageArea(); // PageAreaModelsWritePageArea | The area model to create or update.
apiInstance.createOrUpdateAPageArea(area, (error, data, response) => {
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
 **area** | [**PageAreaModelsWritePageArea**](PageAreaModelsWritePageArea.md)| The area model to create or update. | 

### Return type

[**EnvelopePageAreaModelsReadPageArea**](EnvelopePageAreaModelsReadPageArea.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## createOrUpdatePageAreaFamily

> EnvelopePageAreaModelsReadPageAreaFamily createOrUpdatePageAreaFamily(family)

Create or update a page area family

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

let apiInstance = new GeinsManagementApiSdkJs.PageAreaApi();
let family = new GeinsManagementApiSdkJs.PageAreaModelsWritePageAreaFamily(); // PageAreaModelsWritePageAreaFamily | The family model to create or update.
apiInstance.createOrUpdatePageAreaFamily(family, (error, data, response) => {
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
 **family** | [**PageAreaModelsWritePageAreaFamily**](PageAreaModelsWritePageAreaFamily.md)| The family model to create or update. | 

### Return type

[**EnvelopePageAreaModelsReadPageAreaFamily**](EnvelopePageAreaModelsReadPageAreaFamily.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## getPageArea

> PageAreaModelsReadPageArea getPageArea(name)

Get a specific page area

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

let apiInstance = new GeinsManagementApiSdkJs.PageAreaApi();
let name = "name_example"; // String | The name of the page area to get.
apiInstance.getPageArea(name, (error, data, response) => {
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
 **name** | **String**| The name of the page area to get. | 

### Return type

[**PageAreaModelsReadPageArea**](PageAreaModelsReadPageArea.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## getPageAreaFamily

> PageAreaModelsReadPageAreaFamily getPageAreaFamily(familyId)

Get a specific page area family

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

let apiInstance = new GeinsManagementApiSdkJs.PageAreaApi();
let familyId = 56; // Number | The id of the page area family to get.
apiInstance.getPageAreaFamily(familyId, (error, data, response) => {
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
 **familyId** | **Number**| The id of the page area family to get. | 

### Return type

[**PageAreaModelsReadPageAreaFamily**](PageAreaModelsReadPageAreaFamily.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## listPageAreaFamilies

> [PageAreaModelsReadPageAreaFamily] listPageAreaFamilies()

Gets a list of all page area families, including nested data

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

let apiInstance = new GeinsManagementApiSdkJs.PageAreaApi();
apiInstance.listPageAreaFamilies((error, data, response) => {
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

[**[PageAreaModelsReadPageAreaFamily]**](PageAreaModelsReadPageAreaFamily.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml

