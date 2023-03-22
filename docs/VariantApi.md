# GeinsManagementApiSdkJs.VariantApi

All URIs are relative to *https://mgmtapi.carismar.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProductToVariantGroup**](VariantApi.md#addProductToVariantGroup) | **PUT** /API/VariantGroup/{groupId}/{productId} | Adds a product to an existing group
[**addProductToVariantGroupByProductId**](VariantApi.md#addProductToVariantGroupByProductId) | **PUT** /API/Variant/{productId1}/{productId2} | Adds a product to an existing group
[**createVariantGroup**](VariantApi.md#createVariantGroup) | **POST** /API/VariantGroup | Create a new variant group
[**createVariantGroupWithProduct**](VariantApi.md#createVariantGroupWithProduct) | **POST** /API/Variant/{productId}/VariantGroup | Create a new group for the provided product id
[**deleteVariantGroup**](VariantApi.md#deleteVariantGroup) | **DELETE** /API/VariantGroup/{groupId} | Delete an entire variant group
[**deleteVariantGroupByProductId**](VariantApi.md#deleteVariantGroupByProductId) | **DELETE** /API/Variant/{productId}/VariantGroup | Delete an entire variant group
[**getVariantGroup**](VariantApi.md#getVariantGroup) | **GET** /API/VariantGroup/{groupId} | Get a specific variant group
[**getVariantGroupByProductId**](VariantApi.md#getVariantGroupByProductId) | **GET** /API/Variant/{productId}/VariantGroup | Get the variant group for the provided id
[**getVariantLabels**](VariantApi.md#getVariantLabels) | **GET** /API/Variant/Labels | Get all valid variant labels
[**removeProductFromVariantGroup**](VariantApi.md#removeProductFromVariantGroup) | **DELETE** /API/Variant/{productId} | Remove a product from its variant group
[**updateVariant**](VariantApi.md#updateVariant) | **PUT** /API/Variant/{productId} | Adds the variant details for the product with the provided ID
[**updateVariantGroup**](VariantApi.md#updateVariantGroup) | **PUT** /API/VariantGroup/{groupId} | Updates the settings of a group



## addProductToVariantGroup

> EnvelopeVariantModelsReadVariantGroup addProductToVariantGroup(groupId, productId, variant, opts)

Adds a product to an existing group

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

let apiInstance = new GeinsManagementApiSdkJs.VariantApi();
let groupId = 56; // Number | The ID of the group to which a product should be added
let productId = "productId_example"; // String | The ID of the product to be added to the target group.
let variant = [new GeinsManagementApiSdkJs.VariantModelsWriteVariant()]; // [VariantModelsWriteVariant] | The variant details.
let opts = {
  'productIdType': 56, // Number | The type of product id provided.
  'include': "include_example" // String | Comma separated list of product child collections to also include with the variant group. Set to \"product\" to only include basic product data and to null (skip) to not include any product data. See  {Product.Models.ProductIncludes} names for valid options.
};
apiInstance.addProductToVariantGroup(groupId, productId, variant, opts, (error, data, response) => {
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
 **groupId** | **Number**| The ID of the group to which a product should be added | 
 **productId** | **String**| The ID of the product to be added to the target group. | 
 **variant** | [**[VariantModelsWriteVariant]**](VariantModelsWriteVariant.md)| The variant details. | 
 **productIdType** | **Number**| The type of product id provided. | [optional] 
 **include** | **String**| Comma separated list of product child collections to also include with the variant group. Set to \&quot;product\&quot; to only include basic product data and to null (skip) to not include any product data. See  {Product.Models.ProductIncludes} names for valid options. | [optional] 

### Return type

[**EnvelopeVariantModelsReadVariantGroup**](EnvelopeVariantModelsReadVariantGroup.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## addProductToVariantGroupByProductId

> EnvelopeVariantModelsReadVariantGroup addProductToVariantGroupByProductId(productId1, productId2, opts)

Adds a product to an existing group

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

let apiInstance = new GeinsManagementApiSdkJs.VariantApi();
let productId1 = "productId1_example"; // String | The ID of a product belonging to the target group.
let productId2 = "productId2_example"; // String | The ID of the product to be added to the target group.
let opts = {
  'productIdType': 56, // Number | The type of product id provided.
  'include': "include_example" // String | Comma separated list of product child collections to also include with the variant group. Set to \"product\" to only include basic product data and to null (skip) to not include any product data. See  {Product.Models.ProductIncludes} names for valid options.
};
apiInstance.addProductToVariantGroupByProductId(productId1, productId2, opts, (error, data, response) => {
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
 **productId1** | **String**| The ID of a product belonging to the target group. | 
 **productId2** | **String**| The ID of the product to be added to the target group. | 
 **productIdType** | **Number**| The type of product id provided. | [optional] 
 **include** | **String**| Comma separated list of product child collections to also include with the variant group. Set to \&quot;product\&quot; to only include basic product data and to null (skip) to not include any product data. See  {Product.Models.ProductIncludes} names for valid options. | [optional] 

### Return type

[**EnvelopeVariantModelsReadVariantGroup**](EnvelopeVariantModelsReadVariantGroup.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## createVariantGroup

> EnvelopeVariantModelsReadVariantGroup createVariantGroup(variantGroup, opts)

Create a new variant group

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

let apiInstance = new GeinsManagementApiSdkJs.VariantApi();
let variantGroup = new GeinsManagementApiSdkJs.VariantModelsWriteVariantGroup(); // VariantModelsWriteVariantGroup | The settings for the new group.
let opts = {
  'include': "include_example" // String | Comma separated list of product child collections to also include with the variant group. Set to \"product\" to only include basic product data and to null (skip) to not include any product data. See  {Product.Models.ProductIncludes} names for valid options.
};
apiInstance.createVariantGroup(variantGroup, opts, (error, data, response) => {
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
 **variantGroup** | [**VariantModelsWriteVariantGroup**](VariantModelsWriteVariantGroup.md)| The settings for the new group. | 
 **include** | **String**| Comma separated list of product child collections to also include with the variant group. Set to \&quot;product\&quot; to only include basic product data and to null (skip) to not include any product data. See  {Product.Models.ProductIncludes} names for valid options. | [optional] 

### Return type

[**EnvelopeVariantModelsReadVariantGroup**](EnvelopeVariantModelsReadVariantGroup.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## createVariantGroupWithProduct

> EnvelopeVariantModelsReadVariantGroup createVariantGroupWithProduct(productId, variantGroup, opts)

Create a new group for the provided product id

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

let apiInstance = new GeinsManagementApiSdkJs.VariantApi();
let productId = "productId_example"; // String | The id of the product, for which to create a group.
let variantGroup = new GeinsManagementApiSdkJs.VariantModelsWriteVariantGroup(); // VariantModelsWriteVariantGroup | The settings for the new group.
let opts = {
  'productIdType': 56, // Number | The type of product id provided.
  'include': "include_example" // String | Comma separated list of product child collections to also include with the variant group. Set to \"product\" to only include basic product data and to null (skip) to not include any product data. See  {Product.Models.ProductIncludes} names for valid options.
};
apiInstance.createVariantGroupWithProduct(productId, variantGroup, opts, (error, data, response) => {
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
 **productId** | **String**| The id of the product, for which to create a group. | 
 **variantGroup** | [**VariantModelsWriteVariantGroup**](VariantModelsWriteVariantGroup.md)| The settings for the new group. | 
 **productIdType** | **Number**| The type of product id provided. | [optional] 
 **include** | **String**| Comma separated list of product child collections to also include with the variant group. Set to \&quot;product\&quot; to only include basic product data and to null (skip) to not include any product data. See  {Product.Models.ProductIncludes} names for valid options. | [optional] 

### Return type

[**EnvelopeVariantModelsReadVariantGroup**](EnvelopeVariantModelsReadVariantGroup.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## deleteVariantGroup

> EnvelopeVariantModelsReadVariantGroup deleteVariantGroup(groupId)

Delete an entire variant group

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

let apiInstance = new GeinsManagementApiSdkJs.VariantApi();
let groupId = 56; // Number | The ID of the group to delete
apiInstance.deleteVariantGroup(groupId, (error, data, response) => {
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
 **groupId** | **Number**| The ID of the group to delete | 

### Return type

[**EnvelopeVariantModelsReadVariantGroup**](EnvelopeVariantModelsReadVariantGroup.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## deleteVariantGroupByProductId

> Envelope deleteVariantGroupByProductId(productId, opts)

Delete an entire variant group

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

let apiInstance = new GeinsManagementApiSdkJs.VariantApi();
let productId = "productId_example"; // String | The id of a product that belongs to the group to remove.
let opts = {
  'productIdType': 56 // Number | The type of product id provided.
};
apiInstance.deleteVariantGroupByProductId(productId, opts, (error, data, response) => {
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
 **productId** | **String**| The id of a product that belongs to the group to remove. | 
 **productIdType** | **Number**| The type of product id provided. | [optional] 

### Return type

[**Envelope**](Envelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## getVariantGroup

> EnvelopeVariantModelsReadVariantGroup getVariantGroup(groupId, opts)

Get a specific variant group

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

let apiInstance = new GeinsManagementApiSdkJs.VariantApi();
let groupId = 56; // Number | The ID of the group to get
let opts = {
  'include': "include_example" // String | Comma separated list of product child collections to also include with the variant group. Set to \"product\" to only include basic product data and to null (skip) to not include any product data. See  {Product.Models.ProductIncludes} names for valid options.
};
apiInstance.getVariantGroup(groupId, opts, (error, data, response) => {
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
 **groupId** | **Number**| The ID of the group to get | 
 **include** | **String**| Comma separated list of product child collections to also include with the variant group. Set to \&quot;product\&quot; to only include basic product data and to null (skip) to not include any product data. See  {Product.Models.ProductIncludes} names for valid options. | [optional] 

### Return type

[**EnvelopeVariantModelsReadVariantGroup**](EnvelopeVariantModelsReadVariantGroup.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## getVariantGroupByProductId

> EnvelopeVariantModelsReadVariantGroup getVariantGroupByProductId(productId, opts)

Get the variant group for the provided id

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

let apiInstance = new GeinsManagementApiSdkJs.VariantApi();
let productId = "productId_example"; // String | The id of the product, for which to get the group.
let opts = {
  'productIdType': 56, // Number | The type of id.
  'include': "include_example" // String | Comma separated list of product child collections to also include with the variant group. Set to \"product\" to only include basic product data and to null (skip) to not include any product data. See  {Product.Models.ProductIncludes} names for valid options.
};
apiInstance.getVariantGroupByProductId(productId, opts, (error, data, response) => {
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
 **productId** | **String**| The id of the product, for which to get the group. | 
 **productIdType** | **Number**| The type of id. | [optional] 
 **include** | **String**| Comma separated list of product child collections to also include with the variant group. Set to \&quot;product\&quot; to only include basic product data and to null (skip) to not include any product data. See  {Product.Models.ProductIncludes} names for valid options. | [optional] 

### Return type

[**EnvelopeVariantModelsReadVariantGroup**](EnvelopeVariantModelsReadVariantGroup.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## getVariantLabels

> EnvelopeString getVariantLabels()

Get all valid variant labels

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

let apiInstance = new GeinsManagementApiSdkJs.VariantApi();
apiInstance.getVariantLabels((error, data, response) => {
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

[**EnvelopeString**](EnvelopeString.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## removeProductFromVariantGroup

> EnvelopeVariantModelsReadVariantGroup removeProductFromVariantGroup(productId, opts)

Remove a product from its variant group

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

let apiInstance = new GeinsManagementApiSdkJs.VariantApi();
let productId = "productId_example"; // String | The id of the product to remove from group.
let opts = {
  'productIdType': 56, // Number | The type of product id provided.
  'include': "include_example" // String | Comma separated list of product child collections to also include with the variant group. Set to \"product\" to only include basic product data and to null (skip) to not include any product data. See  {Product.Models.ProductIncludes} names for valid options.
};
apiInstance.removeProductFromVariantGroup(productId, opts, (error, data, response) => {
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
 **productId** | **String**| The id of the product to remove from group. | 
 **productIdType** | **Number**| The type of product id provided. | [optional] 
 **include** | **String**| Comma separated list of product child collections to also include with the variant group. Set to \&quot;product\&quot; to only include basic product data and to null (skip) to not include any product data. See  {Product.Models.ProductIncludes} names for valid options. | [optional] 

### Return type

[**EnvelopeVariantModelsReadVariantGroup**](EnvelopeVariantModelsReadVariantGroup.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## updateVariant

> EnvelopeVariantModelsReadVariant updateVariant(productId, variant, opts)

Adds the variant details for the product with the provided ID

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

let apiInstance = new GeinsManagementApiSdkJs.VariantApi();
let productId = "productId_example"; // String | The ID of the product for which to update the variant details.
let variant = [new GeinsManagementApiSdkJs.VariantModelsWriteVariant()]; // [VariantModelsWriteVariant] | The variant details.
let opts = {
  'productIdType': 56 // Number | The type of product id provided.
};
apiInstance.updateVariant(productId, variant, opts, (error, data, response) => {
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
 **productId** | **String**| The ID of the product for which to update the variant details. | 
 **variant** | [**[VariantModelsWriteVariant]**](VariantModelsWriteVariant.md)| The variant details. | 
 **productIdType** | **Number**| The type of product id provided. | [optional] 

### Return type

[**EnvelopeVariantModelsReadVariant**](EnvelopeVariantModelsReadVariant.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## updateVariantGroup

> EnvelopeVariantModelsReadVariantGroup updateVariantGroup(groupId, variantGroup, opts)

Updates the settings of a group

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

let apiInstance = new GeinsManagementApiSdkJs.VariantApi();
let groupId = 56; // Number | The ID of the group to update
let variantGroup = new GeinsManagementApiSdkJs.VariantModelsWriteVariantGroup(); // VariantModelsWriteVariantGroup | The new settings for the group
let opts = {
  'include': "include_example" // String | Comma separated list of product child collections to also include with the variant group. Set to \"product\" to only include basic product data and to null (skip) to not include any product data. See  {Product.Models.ProductIncludes} names for valid options.
};
apiInstance.updateVariantGroup(groupId, variantGroup, opts, (error, data, response) => {
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
 **groupId** | **Number**| The ID of the group to update | 
 **variantGroup** | [**VariantModelsWriteVariantGroup**](VariantModelsWriteVariantGroup.md)| The new settings for the group | 
 **include** | **String**| Comma separated list of product child collections to also include with the variant group. Set to \&quot;product\&quot; to only include basic product data and to null (skip) to not include any product data. See  {Product.Models.ProductIncludes} names for valid options. | [optional] 

### Return type

[**EnvelopeVariantModelsReadVariantGroup**](EnvelopeVariantModelsReadVariantGroup.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml

