# GeinsSdkApiMgmtJavascript.CategoryApi

All URIs are relative to *https://mgmtapi.geins.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCategory**](CategoryApi.md#createCategory) | **POST** /API/Category | Create category
[**getCategory**](CategoryApi.md#getCategory) | **GET** /API/Category/{id} | Get category
[**queryCategories**](CategoryApi.md#queryCategories) | **POST** /API/Category/Query | Query categories
[**updateCategory**](CategoryApi.md#updateCategory) | **PUT** /API/Category/{id} | Update category



## createCategory

> EnvelopeCategoryModelsReadCategory createCategory(category)

Create category

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

let apiInstance = new GeinsSdkApiMgmtJavascript.CategoryApi();
let category = new GeinsSdkApiMgmtJavascript.CategoryModelsWriteCategory(); // CategoryModelsWriteCategory | The category to create.
apiInstance.createCategory(category, (error, data, response) => {
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
 **category** | [**CategoryModelsWriteCategory**](CategoryModelsWriteCategory.md)| The category to create. | 

### Return type

[**EnvelopeCategoryModelsReadCategory**](EnvelopeCategoryModelsReadCategory.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getCategory

> EnvelopeCategoryModelsReadCategory getCategory(id)

Get category

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

let apiInstance = new GeinsSdkApiMgmtJavascript.CategoryApi();
let id = 56; // Number | The id of the category to get.
apiInstance.getCategory(id, (error, data, response) => {
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
 **id** | **Number**| The id of the category to get. | 

### Return type

[**EnvelopeCategoryModelsReadCategory**](EnvelopeCategoryModelsReadCategory.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queryCategories

> [CategoryModelsReadCategory] queryCategories(query)

Query categories

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

let apiInstance = new GeinsSdkApiMgmtJavascript.CategoryApi();
let query = new GeinsSdkApiMgmtJavascript.CategoryModelsCategoryQuery(); // CategoryModelsCategoryQuery | The query to filter categories by.
apiInstance.queryCategories(query, (error, data, response) => {
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
 **query** | [**CategoryModelsCategoryQuery**](CategoryModelsCategoryQuery.md)| The query to filter categories by. | 

### Return type

[**[CategoryModelsReadCategory]**](CategoryModelsReadCategory.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCategory

> EnvelopeCategoryModelsReadCategory updateCategory(id, category)

Update category

Leaving out a property will ensure no changes are made to that property.    Collection properties will delete and/or add as necessary to match the supplied data.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.CategoryApi();
let id = 56; // Number | The id of the category to update.
let category = new GeinsSdkApiMgmtJavascript.CategoryModelsWriteCategory(); // CategoryModelsWriteCategory | The category data to update.
apiInstance.updateCategory(id, category, (error, data, response) => {
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
 **id** | **Number**| The id of the category to update. | 
 **category** | [**CategoryModelsWriteCategory**](CategoryModelsWriteCategory.md)| The category data to update. | 

### Return type

[**EnvelopeCategoryModelsReadCategory**](EnvelopeCategoryModelsReadCategory.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

