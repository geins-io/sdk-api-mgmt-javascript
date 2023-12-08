# GeinsSdkApiMgmtJavascript.VariantApi

All URIs are relative to *https://mgmtapi.geins.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProductToVariantGroup**](VariantApi.md#addProductToVariantGroup) | **PUT** /API/VariantGroup/{groupId}/{productId} | Add product to variant group
[**addProductToVariantGroupProduct**](VariantApi.md#addProductToVariantGroupProduct) | **PUT** /API/Variant/{productId1}/{productId2} | Add product to variant group (product)
[**createVariantGroup**](VariantApi.md#createVariantGroup) | **POST** /API/VariantGroup | Create variant group
[**createVariantGroupProduct**](VariantApi.md#createVariantGroupProduct) | **POST** /API/Variant/{productId}/VariantGroup | Create variant group (product)
[**deleteVariantGroupGroupId**](VariantApi.md#deleteVariantGroupGroupId) | **DELETE** /API/VariantGroup/{groupId} | Delete variant group (group id)
[**deleteVariantGroupProductId**](VariantApi.md#deleteVariantGroupProductId) | **DELETE** /API/Variant/{productId}/VariantGroup | Delete variant group (product id)
[**getVariantGroupGroupId**](VariantApi.md#getVariantGroupGroupId) | **GET** /API/VariantGroup/{groupId} | Get variant group (group id)
[**getVariantGroupProductId**](VariantApi.md#getVariantGroupProductId) | **GET** /API/Variant/{productId}/VariantGroup | Get variant group (product id)
[**getVariantLabels**](VariantApi.md#getVariantLabels) | **GET** /API/Variant/Labels | Get variant labels
[**removeProductFromVariantGroup**](VariantApi.md#removeProductFromVariantGroup) | **DELETE** /API/Variant/{productId} | Remove product from variant group
[**updateVariant**](VariantApi.md#updateVariant) | **PUT** /API/Variant/{productId} | Update variant
[**updateVariantGroup**](VariantApi.md#updateVariantGroup) | **PUT** /API/VariantGroup/{groupId} | Update variant group



## addProductToVariantGroup

> EnvelopeVariantModelsReadVariantGroup addProductToVariantGroup(groupId, productId, variant, opts)

Add product to variant group

Adds a product to an existing variant group.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.VariantApi();
let groupId = 56; // Number | The id of the variant group to which a product should be added.
let productId = "productId_example"; // String | The id of the product to be added to the target variant group.
let variant = [new GeinsSdkApiMgmtJavascript.VariantModelsWriteVariant()]; // [VariantModelsWriteVariant] | The variant details.
let opts = {
  'productIdType': 56, // Number | The type of product id supplied.    0 = Internal. Internal product id set by Geins.               Eg: 10001.    1 = ArticleNumber. Article number set by customer.               Eg: ABC123.    2 = MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 = MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123.
  'include': "include_example" // String | Comma separated list of product child collections to also include with the variant group.    Set to empty string to only include basic product data or null to not include any product data.    Valid options:    Names, ShortTexts, LongTexts, TechTexts, Items, Prices, Categories, Parameters, Variants, Markets, Images, Feeds, Urls, ShippingFees, RelatedProducts, DiscountCampaigns
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
 **groupId** | **Number**| The id of the variant group to which a product should be added. | 
 **productId** | **String**| The id of the product to be added to the target variant group. | 
 **variant** | [**[VariantModelsWriteVariant]**](VariantModelsWriteVariant.md)| The variant details. | 
 **productIdType** | **Number**| The type of product id supplied.    0 &#x3D; Internal. Internal product id set by Geins.               Eg: 10001.    1 &#x3D; ArticleNumber. Article number set by customer.               Eg: ABC123.    2 &#x3D; MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 &#x3D; MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123. | [optional] 
 **include** | **String**| Comma separated list of product child collections to also include with the variant group.    Set to empty string to only include basic product data or null to not include any product data.    Valid options:    Names, ShortTexts, LongTexts, TechTexts, Items, Prices, Categories, Parameters, Variants, Markets, Images, Feeds, Urls, ShippingFees, RelatedProducts, DiscountCampaigns | [optional] 

### Return type

[**EnvelopeVariantModelsReadVariantGroup**](EnvelopeVariantModelsReadVariantGroup.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addProductToVariantGroupProduct

> EnvelopeVariantModelsReadVariantGroup addProductToVariantGroupProduct(productId1, productId2, opts)

Add product to variant group (product)

Adds a product to an existing variant group from another product.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.VariantApi();
let productId1 = "productId1_example"; // String | The id of a product belonging to the target group.
let productId2 = "productId2_example"; // String | The id of the product to be added to the target group.
let opts = {
  'productIdType': 56, // Number | The type of product id supplied.    0 = Internal. Internal product id set by Geins.               Eg: 10001.    1 = ArticleNumber. Article number set by customer.               Eg: ABC123.    2 = MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 = MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123.
  'include': "include_example" // String | Comma separated list of product child collections to also include with the variant group.    Set to empty string to only include basic product data or null to not include any product data.    Valid options:    Names, ShortTexts, LongTexts, TechTexts, Items, Prices, Categories, Parameters, Variants, Markets, Images, Feeds, Urls, ShippingFees, RelatedProducts, DiscountCampaigns
};
apiInstance.addProductToVariantGroupProduct(productId1, productId2, opts, (error, data, response) => {
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
 **productId1** | **String**| The id of a product belonging to the target group. | 
 **productId2** | **String**| The id of the product to be added to the target group. | 
 **productIdType** | **Number**| The type of product id supplied.    0 &#x3D; Internal. Internal product id set by Geins.               Eg: 10001.    1 &#x3D; ArticleNumber. Article number set by customer.               Eg: ABC123.    2 &#x3D; MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 &#x3D; MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123. | [optional] 
 **include** | **String**| Comma separated list of product child collections to also include with the variant group.    Set to empty string to only include basic product data or null to not include any product data.    Valid options:    Names, ShortTexts, LongTexts, TechTexts, Items, Prices, Categories, Parameters, Variants, Markets, Images, Feeds, Urls, ShippingFees, RelatedProducts, DiscountCampaigns | [optional] 

### Return type

[**EnvelopeVariantModelsReadVariantGroup**](EnvelopeVariantModelsReadVariantGroup.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createVariantGroup

> EnvelopeVariantModelsReadVariantGroup createVariantGroup(variantGroup, opts)

Create variant group

Creates a new variant group.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.VariantApi();
let variantGroup = new GeinsSdkApiMgmtJavascript.VariantModelsWriteVariantGroup(); // VariantModelsWriteVariantGroup | The settings for the new variant group.
let opts = {
  'include': "include_example" // String | Comma separated list of product child collections to also include with the variant group.    Set to empty string to only include basic product data or null to not include any product data.    Valid options:    Names, ShortTexts, LongTexts, TechTexts, Items, Prices, Categories, Parameters, Variants, Markets, Images, Feeds, Urls, ShippingFees, RelatedProducts, DiscountCampaigns
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
 **variantGroup** | [**VariantModelsWriteVariantGroup**](VariantModelsWriteVariantGroup.md)| The settings for the new variant group. | 
 **include** | **String**| Comma separated list of product child collections to also include with the variant group.    Set to empty string to only include basic product data or null to not include any product data.    Valid options:    Names, ShortTexts, LongTexts, TechTexts, Items, Prices, Categories, Parameters, Variants, Markets, Images, Feeds, Urls, ShippingFees, RelatedProducts, DiscountCampaigns | [optional] 

### Return type

[**EnvelopeVariantModelsReadVariantGroup**](EnvelopeVariantModelsReadVariantGroup.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createVariantGroupProduct

> EnvelopeVariantModelsReadVariantGroup createVariantGroupProduct(productId, variantGroup, opts)

Create variant group (product)

Create a new variant group for the provided product id.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.VariantApi();
let productId = "productId_example"; // String | The id of the product for which to create the variant group.
let variantGroup = new GeinsSdkApiMgmtJavascript.VariantModelsWriteVariantGroup(); // VariantModelsWriteVariantGroup | The settings for the new group.
let opts = {
  'productIdType': 56, // Number | The type of product id supplied.    0 = Internal. Internal product id set by Geins.               Eg: 10001.    1 = ArticleNumber. Article number set by customer.               Eg: ABC123.    2 = MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 = MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123.
  'include': "include_example" // String | Comma separated list of product child collections to also include with the variant group.    Set to empty string to only include basic product data or null to not include any product data.    Valid options:    Names, ShortTexts, LongTexts, TechTexts, Items, Prices, Categories, Parameters, Variants, Markets, Images, Feeds, Urls, ShippingFees, RelatedProducts, DiscountCampaigns
};
apiInstance.createVariantGroupProduct(productId, variantGroup, opts, (error, data, response) => {
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
 **productId** | **String**| The id of the product for which to create the variant group. | 
 **variantGroup** | [**VariantModelsWriteVariantGroup**](VariantModelsWriteVariantGroup.md)| The settings for the new group. | 
 **productIdType** | **Number**| The type of product id supplied.    0 &#x3D; Internal. Internal product id set by Geins.               Eg: 10001.    1 &#x3D; ArticleNumber. Article number set by customer.               Eg: ABC123.    2 &#x3D; MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 &#x3D; MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123. | [optional] 
 **include** | **String**| Comma separated list of product child collections to also include with the variant group.    Set to empty string to only include basic product data or null to not include any product data.    Valid options:    Names, ShortTexts, LongTexts, TechTexts, Items, Prices, Categories, Parameters, Variants, Markets, Images, Feeds, Urls, ShippingFees, RelatedProducts, DiscountCampaigns | [optional] 

### Return type

[**EnvelopeVariantModelsReadVariantGroup**](EnvelopeVariantModelsReadVariantGroup.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteVariantGroupGroupId

> BaseEnvelope deleteVariantGroupGroupId(groupId)

Delete variant group (group id)

Deletes an entire variant group.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.VariantApi();
let groupId = 56; // Number | The id of the variant group to delete.
apiInstance.deleteVariantGroupGroupId(groupId, (error, data, response) => {
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
 **groupId** | **Number**| The id of the variant group to delete. | 

### Return type

[**BaseEnvelope**](BaseEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteVariantGroupProductId

> BaseEnvelope deleteVariantGroupProductId(productId, opts)

Delete variant group (product id)

Deletes an entire variant group based on product id.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.VariantApi();
let productId = "productId_example"; // String | The id of a product that belongs to the variant group to remove.
let opts = {
  'productIdType': 56 // Number | The type of product id supplied.    0 = Internal. Internal product id set by Geins.               Eg: 10001.    1 = ArticleNumber. Article number set by customer.               Eg: ABC123.    2 = MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 = MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123.
};
apiInstance.deleteVariantGroupProductId(productId, opts, (error, data, response) => {
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
 **productId** | **String**| The id of a product that belongs to the variant group to remove. | 
 **productIdType** | **Number**| The type of product id supplied.    0 &#x3D; Internal. Internal product id set by Geins.               Eg: 10001.    1 &#x3D; ArticleNumber. Article number set by customer.               Eg: ABC123.    2 &#x3D; MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 &#x3D; MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123. | [optional] 

### Return type

[**BaseEnvelope**](BaseEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVariantGroupGroupId

> EnvelopeVariantModelsReadVariantGroup getVariantGroupGroupId(groupId, opts)

Get variant group (group id)

Gets a specific variant group.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.VariantApi();
let groupId = 56; // Number | The id of the variant group to get.
let opts = {
  'include': "include_example" // String | Comma separated list of product child collections to also include with the variant group.    Set to empty string to only include basic product data or null to not include any product data.    Valid options:    Names, ShortTexts, LongTexts, TechTexts, Items, Prices, Categories, Parameters, Variants, Markets, Images, Feeds, Urls, ShippingFees, RelatedProducts, DiscountCampaigns
};
apiInstance.getVariantGroupGroupId(groupId, opts, (error, data, response) => {
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
 **groupId** | **Number**| The id of the variant group to get. | 
 **include** | **String**| Comma separated list of product child collections to also include with the variant group.    Set to empty string to only include basic product data or null to not include any product data.    Valid options:    Names, ShortTexts, LongTexts, TechTexts, Items, Prices, Categories, Parameters, Variants, Markets, Images, Feeds, Urls, ShippingFees, RelatedProducts, DiscountCampaigns | [optional] 

### Return type

[**EnvelopeVariantModelsReadVariantGroup**](EnvelopeVariantModelsReadVariantGroup.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVariantGroupProductId

> EnvelopeVariantModelsReadVariantGroup getVariantGroupProductId(productId, opts)

Get variant group (product id)

Gets the variant group for the provided product id.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.VariantApi();
let productId = "productId_example"; // String | The id of the product, for which to get the group.
let opts = {
  'productIdType': 56, // Number | The type of product id supplied.    0 = Internal. Internal product id set by Geins.               Eg: 10001.    1 = ArticleNumber. Article number set by customer.               Eg: ABC123.    2 = MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 = MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123.
  'include': "include_example" // String | Comma separated list of product child collections to also include with the variant group.    Set to empty string to only include basic product data or null to not include any product data.    Valid options:    Names, ShortTexts, LongTexts, TechTexts, Items, Prices, Categories, Parameters, Variants, Markets, Images, Feeds, Urls, ShippingFees, RelatedProducts, DiscountCampaigns
};
apiInstance.getVariantGroupProductId(productId, opts, (error, data, response) => {
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
 **productIdType** | **Number**| The type of product id supplied.    0 &#x3D; Internal. Internal product id set by Geins.               Eg: 10001.    1 &#x3D; ArticleNumber. Article number set by customer.               Eg: ABC123.    2 &#x3D; MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 &#x3D; MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123. | [optional] 
 **include** | **String**| Comma separated list of product child collections to also include with the variant group.    Set to empty string to only include basic product data or null to not include any product data.    Valid options:    Names, ShortTexts, LongTexts, TechTexts, Items, Prices, Categories, Parameters, Variants, Markets, Images, Feeds, Urls, ShippingFees, RelatedProducts, DiscountCampaigns | [optional] 

### Return type

[**EnvelopeVariantModelsReadVariantGroup**](EnvelopeVariantModelsReadVariantGroup.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVariantLabels

> EnvelopeListSystemString getVariantLabels()

Get variant labels

Gets all valid variant labels.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.VariantApi();
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

[**EnvelopeListSystemString**](EnvelopeListSystemString.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeProductFromVariantGroup

> EnvelopeVariantModelsReadVariantGroup removeProductFromVariantGroup(productId, opts)

Remove product from variant group

Removes a product from its variant group.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.VariantApi();
let productId = "productId_example"; // String | The id of the product to remove from variant group.
let opts = {
  'productIdType': 56, // Number | The type of product id supplied.    0 = Internal. Internal product id set by Geins.               Eg: 10001.    1 = ArticleNumber. Article number set by customer.               Eg: ABC123.    2 = MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 = MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123.
  'include': "include_example" // String | Comma separated list of product child collections to also include with the variant group.    Set to empty string to only include basic product data or null to not include any product data.    Valid options:    Names, ShortTexts, LongTexts, TechTexts, Items, Prices, Categories, Parameters, Variants, Markets, Images, Feeds, Urls, ShippingFees, RelatedProducts, DiscountCampaigns
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
 **productId** | **String**| The id of the product to remove from variant group. | 
 **productIdType** | **Number**| The type of product id supplied.    0 &#x3D; Internal. Internal product id set by Geins.               Eg: 10001.    1 &#x3D; ArticleNumber. Article number set by customer.               Eg: ABC123.    2 &#x3D; MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 &#x3D; MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123. | [optional] 
 **include** | **String**| Comma separated list of product child collections to also include with the variant group.    Set to empty string to only include basic product data or null to not include any product data.    Valid options:    Names, ShortTexts, LongTexts, TechTexts, Items, Prices, Categories, Parameters, Variants, Markets, Images, Feeds, Urls, ShippingFees, RelatedProducts, DiscountCampaigns | [optional] 

### Return type

[**EnvelopeVariantModelsReadVariantGroup**](EnvelopeVariantModelsReadVariantGroup.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateVariant

> EnvelopeListVariantModelsReadVariant updateVariant(productId, variant, opts)

Update variant

Updates the variant details for the product with the provided id.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.VariantApi();
let productId = "productId_example"; // String | The id of the product for which to update the variant details.
let variant = [new GeinsSdkApiMgmtJavascript.VariantModelsWriteVariant()]; // [VariantModelsWriteVariant] | The variant details.
let opts = {
  'productIdType': 56 // Number | The type of product id supplied.    0 = Internal. Internal product id set by Geins.               Eg: 10001.    1 = ArticleNumber. Article number set by customer.               Eg: ABC123.    2 = MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 = MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123.
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
 **productId** | **String**| The id of the product for which to update the variant details. | 
 **variant** | [**[VariantModelsWriteVariant]**](VariantModelsWriteVariant.md)| The variant details. | 
 **productIdType** | **Number**| The type of product id supplied.    0 &#x3D; Internal. Internal product id set by Geins.               Eg: 10001.    1 &#x3D; ArticleNumber. Article number set by customer.               Eg: ABC123.    2 &#x3D; MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 &#x3D; MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123. | [optional] 

### Return type

[**EnvelopeListVariantModelsReadVariant**](EnvelopeListVariantModelsReadVariant.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateVariantGroup

> EnvelopeVariantModelsReadVariantGroup updateVariantGroup(groupId, variantGroup, opts)

Update variant group

Updates the settings of a variant group.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.VariantApi();
let groupId = 56; // Number | The id of the variant group to update.
let variantGroup = new GeinsSdkApiMgmtJavascript.VariantModelsWriteVariantGroup(); // VariantModelsWriteVariantGroup | The new settings for the variant group.
let opts = {
  'include': "include_example" // String | Comma separated list of product child collections to also include with the variant group.    Set to empty string to only include basic product data or null to not include any product data.    Valid options:    Names, ShortTexts, LongTexts, TechTexts, Items, Prices, Categories, Parameters, Variants, Markets, Images, Feeds, Urls, ShippingFees, RelatedProducts, DiscountCampaigns
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
 **groupId** | **Number**| The id of the variant group to update. | 
 **variantGroup** | [**VariantModelsWriteVariantGroup**](VariantModelsWriteVariantGroup.md)| The new settings for the variant group. | 
 **include** | **String**| Comma separated list of product child collections to also include with the variant group.    Set to empty string to only include basic product data or null to not include any product data.    Valid options:    Names, ShortTexts, LongTexts, TechTexts, Items, Prices, Categories, Parameters, Variants, Markets, Images, Feeds, Urls, ShippingFees, RelatedProducts, DiscountCampaigns | [optional] 

### Return type

[**EnvelopeVariantModelsReadVariantGroup**](EnvelopeVariantModelsReadVariantGroup.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

