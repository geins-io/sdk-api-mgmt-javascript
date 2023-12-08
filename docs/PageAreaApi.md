# GeinsSdkApiMgmtJavascript.PageAreaApi

All URIs are relative to *https://mgmtapi.geins.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUpdatePageArea**](PageAreaApi.md#createUpdatePageArea) | **POST** /API/PageArea | Create/update page area
[**createUpdatePageAreaFamily**](PageAreaApi.md#createUpdatePageAreaFamily) | **POST** /API/PageAreaFamily | Create/update page area family
[**getPageArea**](PageAreaApi.md#getPageArea) | **GET** /API/PageArea/{name} | Get page area
[**getPageAreaFamily**](PageAreaApi.md#getPageAreaFamily) | **GET** /API/PageAreaFamily/{familyId} | Get page area family
[**listPageAreaFamilies**](PageAreaApi.md#listPageAreaFamilies) | **GET** /API/PageAreaFamily/List | List page area families



## createUpdatePageArea

> EnvelopePageAreaModelsReadPageArea createUpdatePageArea(area)

Create/update page area

Creates or updates a page area.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.PageAreaApi();
let area = new GeinsSdkApiMgmtJavascript.PageAreaModelsWritePageArea(); // PageAreaModelsWritePageArea | The area model to create or update.
apiInstance.createUpdatePageArea(area, (error, data, response) => {
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

- **Content-Type**: application/json
- **Accept**: application/json


## createUpdatePageAreaFamily

> EnvelopePageAreaModelsReadPageAreaFamily createUpdatePageAreaFamily(family)

Create/update page area family

Creates or updates a page area family.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.PageAreaApi();
let family = new GeinsSdkApiMgmtJavascript.PageAreaModelsWritePageAreaFamily(); // PageAreaModelsWritePageAreaFamily | The family model to create or update.
apiInstance.createUpdatePageAreaFamily(family, (error, data, response) => {
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

- **Content-Type**: application/json
- **Accept**: application/json


## getPageArea

> EnvelopePageAreaModelsReadPageArea getPageArea(name)

Get page area

Gets a specific page area.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.PageAreaApi();
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

[**EnvelopePageAreaModelsReadPageArea**](EnvelopePageAreaModelsReadPageArea.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPageAreaFamily

> EnvelopePageAreaModelsReadPageAreaFamily getPageAreaFamily(familyId)

Get page area family

Gets a specific page area family.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.PageAreaApi();
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

[**EnvelopePageAreaModelsReadPageAreaFamily**](EnvelopePageAreaModelsReadPageAreaFamily.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPageAreaFamilies

> EnvelopeListPageAreaModelsReadPageAreaFamily listPageAreaFamilies()

List page area families

Gets a list of all page area families, including nested data.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.PageAreaApi();
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

[**EnvelopeListPageAreaModelsReadPageAreaFamily**](EnvelopeListPageAreaModelsReadPageAreaFamily.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

