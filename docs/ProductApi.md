# GeinsSdkApiMgmtJavascript.ProductApi

All URIs are relative to *https://mgmtapi.geins.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAvailabilityMonitor**](ProductApi.md#addAvailabilityMonitor) | **POST** /API/Product/MonitorAvailability | Add availability monitor
[**addCategoryToProduct**](ProductApi.md#addCategoryToProduct) | **PUT** /API/Product/{productId}/Category | Add category to product
[**addRelatedProductsToProduct**](ProductApi.md#addRelatedProductsToProduct) | **PUT** /API/Product/{productId}/Related | Add related products to a product
[**createProduct**](ProductApi.md#createProduct) | **POST** /API/Product | Create product
[**createProductItem**](ProductApi.md#createProductItem) | **POST** /API/Product/{productId}/Item | Create product item
[**deleteProduct**](ProductApi.md#deleteProduct) | **DELETE** /API/Product/{productId} | Delete product
[**getProduct**](ProductApi.md#getProduct) | **GET** /API/Product/{productId} | Get product
[**getProductItem**](ProductApi.md#getProductItem) | **GET** /API/Product/Item/{itemId} | Get product item
[**linkRelatedProducts**](ProductApi.md#linkRelatedProducts) | **PUT** /API/Product/{productId}/Related/{relationTypeId} | Link related products
[**listFeeds**](ProductApi.md#listFeeds) | **GET** /API/Product/Feeds | List feeds
[**listProductItems**](ProductApi.md#listProductItems) | **GET** /API/Product/Items | List product items
[**listProductItemsPaged**](ProductApi.md#listProductItemsPaged) | **GET** /API/Product/Items/{page} | List product items (paged)
[**listProductRelationTypes**](ProductApi.md#listProductRelationTypes) | **GET** /API/Product/RelationTypes | List product relation types
[**queryProducts**](ProductApi.md#queryProducts) | **POST** /API/Product/Query | Query products
[**queryProductsPaged**](ProductApi.md#queryProductsPaged) | **POST** /API/Product/Query/{page} | Query products (paged)
[**queryStock**](ProductApi.md#queryStock) | **POST** /API/Product/Stock/Query | Query stock
[**unlinkRelatedProductsViaRelation**](ProductApi.md#unlinkRelatedProductsViaRelation) | **PUT** /API/Product/{productId}/UnlinkRelated/{relationTypeId} | Unlink related products (via relation).
[**updateProduct**](ProductApi.md#updateProduct) | **PUT** /API/Product/{productId} | Update product
[**updateProductItem**](ProductApi.md#updateProductItem) | **PUT** /API/Product/Item/{itemId} | Update product item
[**updateProductItemsBatch**](ProductApi.md#updateProductItemsBatch) | **PUT** /API/Product/Items | Update product items (batch)
[**updateStockBatch**](ProductApi.md#updateStockBatch) | **PUT** /API/Product/Stock | Update stock (batch)



## addAvailabilityMonitor

> BaseEnvelope addAvailabilityMonitor(model)

Add availability monitor

Adds a product availability monitor.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductApi();
let model = new GeinsSdkApiMgmtJavascript.ProductModelsMonitorSku(); // ProductModelsMonitorSku | 
apiInstance.addAvailabilityMonitor(model, (error, data, response) => {
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
 **model** | [**ProductModelsMonitorSku**](ProductModelsMonitorSku.md)|  | 

### Return type

[**BaseEnvelope**](BaseEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addCategoryToProduct

> BaseEnvelope addCategoryToProduct(productId, productCategory, opts)

Add category to product

Adds a category relation to a product.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductApi();
let productId = "productId_example"; // String | The id of the product to update.
let productCategory = new GeinsSdkApiMgmtJavascript.ProductModelsProductCategory(); // ProductModelsProductCategory | The category to relate the product to.
let opts = {
  'productIdType': 56 // Number | The type of product id supplied.    0 = Internal. Internal product id set by Geins.               Eg: 10001.    1 = ArticleNumber. Article number set by customer.               Eg: ABC123.    2 = MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 = MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123.
};
apiInstance.addCategoryToProduct(productId, productCategory, opts, (error, data, response) => {
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
 **productId** | **String**| The id of the product to update. | 
 **productCategory** | [**ProductModelsProductCategory**](ProductModelsProductCategory.md)| The category to relate the product to. | 
 **productIdType** | **Number**| The type of product id supplied.    0 &#x3D; Internal. Internal product id set by Geins.               Eg: 10001.    1 &#x3D; ArticleNumber. Article number set by customer.               Eg: ABC123.    2 &#x3D; MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 &#x3D; MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123. | [optional] 

### Return type

[**BaseEnvelope**](BaseEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addRelatedProductsToProduct

> ProductModelsRelatedProductEnvelope addRelatedProductsToProduct(productId, relatedProducts, opts)

Add related products to a product

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductApi();
let productId = "productId_example"; // String | The id of the main product to which the relations will be created
let relatedProducts = [new GeinsSdkApiMgmtJavascript.ProductModelsWriteRelatedProduct()]; // [ProductModelsWriteRelatedProduct] | The list of related products to link with the main product.
let opts = {
  'productIdType': 56 // Number | The type of product id supplied in productId and relatedProducts.    0 = Internal. Internal product id set by Geins.               Eg: 10001.    1 = ArticleNumber. Article number set by customer.               Eg: ABC123.    2 = MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 = MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123.
};
apiInstance.addRelatedProductsToProduct(productId, relatedProducts, opts, (error, data, response) => {
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
 **productId** | **String**| The id of the main product to which the relations will be created | 
 **relatedProducts** | [**[ProductModelsWriteRelatedProduct]**](ProductModelsWriteRelatedProduct.md)| The list of related products to link with the main product. | 
 **productIdType** | **Number**| The type of product id supplied in productId and relatedProducts.    0 &#x3D; Internal. Internal product id set by Geins.               Eg: 10001.    1 &#x3D; ArticleNumber. Article number set by customer.               Eg: ABC123.    2 &#x3D; MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 &#x3D; MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123. | [optional] 

### Return type

[**ProductModelsRelatedProductEnvelope**](ProductModelsRelatedProductEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createProduct

> EnvelopeProductModelsReadProduct createProduct(product, opts)

Create product

Creates a new product.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductApi();
let product = new GeinsSdkApiMgmtJavascript.ProductModelsWriteProduct(); // ProductModelsWriteProduct | The product to create.
let opts = {
  'include': "include_example" // String | Set to empty string to only include basic product data or null to not include any product data.    Valid options:    Names, ShortTexts, LongTexts, TechTexts, Items, Prices, Categories, Parameters, Variants, Markets, Images, Feeds, Urls, ShippingFees, RelatedProducts, DiscountCampaigns
};
apiInstance.createProduct(product, opts, (error, data, response) => {
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
 **product** | [**ProductModelsWriteProduct**](ProductModelsWriteProduct.md)| The product to create. | 
 **include** | **String**| Set to empty string to only include basic product data or null to not include any product data.    Valid options:    Names, ShortTexts, LongTexts, TechTexts, Items, Prices, Categories, Parameters, Variants, Markets, Images, Feeds, Urls, ShippingFees, RelatedProducts, DiscountCampaigns | [optional] 

### Return type

[**EnvelopeProductModelsReadProduct**](EnvelopeProductModelsReadProduct.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createProductItem

> EnvelopeProductModelsReadProductItem createProductItem(productId, productItem, opts)

Create product item

Creates a new product item.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductApi();
let productId = "productId_example"; // String | The id of the product to create an item on.
let productItem = new GeinsSdkApiMgmtJavascript.ProductModelsWriteProductItem(); // ProductModelsWriteProductItem | The product item to create.
let opts = {
  'productIdType': 56 // Number | The type of product id supplied.    0 = Internal. Internal product id set by Geins.               Eg: 10001.    1 = ArticleNumber. Article number set by customer.               Eg: ABC123.    2 = MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 = MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123.
};
apiInstance.createProductItem(productId, productItem, opts, (error, data, response) => {
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
 **productId** | **String**| The id of the product to create an item on. | 
 **productItem** | [**ProductModelsWriteProductItem**](ProductModelsWriteProductItem.md)| The product item to create. | 
 **productIdType** | **Number**| The type of product id supplied.    0 &#x3D; Internal. Internal product id set by Geins.               Eg: 10001.    1 &#x3D; ArticleNumber. Article number set by customer.               Eg: ABC123.    2 &#x3D; MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 &#x3D; MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123. | [optional] 

### Return type

[**EnvelopeProductModelsReadProductItem**](EnvelopeProductModelsReadProductItem.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteProduct

> BaseEnvelope deleteProduct(productId, opts)

Delete product

Deletes a specific product.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductApi();
let productId = "productId_example"; // String | The id of the product to delete.
let opts = {
  'productIdType': 56 // Number | The type of product id supplied.    0 = Internal. Internal product id set by Geins.               Eg: 10001.    1 = ArticleNumber. Article number set by customer.               Eg: ABC123.    2 = MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 = MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123.
};
apiInstance.deleteProduct(productId, opts, (error, data, response) => {
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
 **productId** | **String**| The id of the product to delete. | 
 **productIdType** | **Number**| The type of product id supplied.    0 &#x3D; Internal. Internal product id set by Geins.               Eg: 10001.    1 &#x3D; ArticleNumber. Article number set by customer.               Eg: ABC123.    2 &#x3D; MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 &#x3D; MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123. | [optional] 

### Return type

[**BaseEnvelope**](BaseEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProduct

> EnvelopeProductModelsReadProduct getProduct(productId, opts)

Get product

Gets a specific product. Make sure to include relevant child-collections in the request.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductApi();
let productId = "productId_example"; // String | The id of the product to get.
let opts = {
  'productIdType': 56, // Number | The type of product id supplied.    0 = Internal. Internal product id set by Geins.               Eg: 10001.    1 = ArticleNumber. Article number set by customer.               Eg: ABC123.    2 = MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 = MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123.
  'include': "include_example" // String | Set to empty string to only include basic product data or null to not include any product data.    Valid options:    Names, ShortTexts, LongTexts, TechTexts, Items, Prices, Categories, Parameters, Variants, Markets, Images, Feeds, Urls, ShippingFees, RelatedProducts, DiscountCampaigns
};
apiInstance.getProduct(productId, opts, (error, data, response) => {
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
 **productId** | **String**| The id of the product to get. | 
 **productIdType** | **Number**| The type of product id supplied.    0 &#x3D; Internal. Internal product id set by Geins.               Eg: 10001.    1 &#x3D; ArticleNumber. Article number set by customer.               Eg: ABC123.    2 &#x3D; MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 &#x3D; MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123. | [optional] 
 **include** | **String**| Set to empty string to only include basic product data or null to not include any product data.    Valid options:    Names, ShortTexts, LongTexts, TechTexts, Items, Prices, Categories, Parameters, Variants, Markets, Images, Feeds, Urls, ShippingFees, RelatedProducts, DiscountCampaigns | [optional] 

### Return type

[**EnvelopeProductModelsReadProduct**](EnvelopeProductModelsReadProduct.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProductItem

> ProductProductItemEnvelope getProductItem(itemId, opts)

Get product item

Gets a specific product item (SKU).

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductApi();
let itemId = "itemId_example"; // String | The id of the product item to get.
let opts = {
  'productItemIdType': 56 // Number | The type of product item id supplied.    0 = Internal. Internal product item id set by Geins.               Eg: 10001.    1 = ArticleNumber. Article number set by customer.               Eg: ABC123.    2 = MarketPrefixedInternal. Internal product item id set by Geins, prefixed with market.               Eg: SE10001.    3 = MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123.    4 = ExternalId. External product item id set by customer.               Eg: 10001.
};
apiInstance.getProductItem(itemId, opts, (error, data, response) => {
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
 **itemId** | **String**| The id of the product item to get. | 
 **productItemIdType** | **Number**| The type of product item id supplied.    0 &#x3D; Internal. Internal product item id set by Geins.               Eg: 10001.    1 &#x3D; ArticleNumber. Article number set by customer.               Eg: ABC123.    2 &#x3D; MarketPrefixedInternal. Internal product item id set by Geins, prefixed with market.               Eg: SE10001.    3 &#x3D; MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123.    4 &#x3D; ExternalId. External product item id set by customer.               Eg: 10001. | [optional] 

### Return type

[**ProductProductItemEnvelope**](ProductProductItemEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## linkRelatedProducts

> ProductModelsRelatedProductEnvelope linkRelatedProducts(productId, relationTypeId, relatedProducts, opts)

Link related products

Add related products to a product using a fixed relation type.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductApi();
let productId = "productId_example"; // String | The id of the main product to which the relations will be created.
let relationTypeId = 56; // Number | The relation type id that will apply to all related products in relatedProducts.
let relatedProducts = [new GeinsSdkApiMgmtJavascript.ProductModelsWriteRelatedProduct()]; // [ProductModelsWriteRelatedProduct] | The list of related products to link with the main product.
let opts = {
  'productIdType': 56 // Number | The type of product id supplied in productId and relatedProducts.    0 = Internal. Internal product id set by Geins.               Eg: 10001.    1 = ArticleNumber. Article number set by customer.               Eg: ABC123.    2 = MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 = MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123.
};
apiInstance.linkRelatedProducts(productId, relationTypeId, relatedProducts, opts, (error, data, response) => {
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
 **productId** | **String**| The id of the main product to which the relations will be created. | 
 **relationTypeId** | **Number**| The relation type id that will apply to all related products in relatedProducts. | 
 **relatedProducts** | [**[ProductModelsWriteRelatedProduct]**](ProductModelsWriteRelatedProduct.md)| The list of related products to link with the main product. | 
 **productIdType** | **Number**| The type of product id supplied in productId and relatedProducts.    0 &#x3D; Internal. Internal product id set by Geins.               Eg: 10001.    1 &#x3D; ArticleNumber. Article number set by customer.               Eg: ABC123.    2 &#x3D; MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 &#x3D; MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123. | [optional] 

### Return type

[**ProductModelsRelatedProductEnvelope**](ProductModelsRelatedProductEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listFeeds

> EnvelopeListProductModelsReadFeed listFeeds()

List feeds

Gets a list of all feeds.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductApi();
apiInstance.listFeeds((error, data, response) => {
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

[**EnvelopeListProductModelsReadFeed**](EnvelopeListProductModelsReadFeed.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listProductItems

> [ProductModelsReadProductItem] listProductItems()

List product items

Gets all product items.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductApi();
apiInstance.listProductItems((error, data, response) => {
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

[**[ProductModelsReadProductItem]**](ProductModelsReadProductItem.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listProductItemsPaged

> EnvelopeListProductModelsReadProductItem listProductItemsPaged(page)

List product items (paged)

Gets all product items with pagination.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductApi();
let page = 56; // Number | The page to fetch.
apiInstance.listProductItemsPaged(page, (error, data, response) => {
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
 **page** | **Number**| The page to fetch. | 

### Return type

[**EnvelopeListProductModelsReadProductItem**](EnvelopeListProductModelsReadProductItem.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listProductRelationTypes

> EnvelopeListProductModelsReadRelationType listProductRelationTypes()

List product relation types

Gets a list of product relation types

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductApi();
apiInstance.listProductRelationTypes((error, data, response) => {
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

[**EnvelopeListProductModelsReadRelationType**](EnvelopeListProductModelsReadRelationType.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queryProducts

> PagedEnvelopeListProductModelsReadProduct queryProducts(query, opts)

Query products

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductApi();
let query = new GeinsSdkApiMgmtJavascript.ProductModelsProductQuery(); // ProductModelsProductQuery | The details of the query.
let opts = {
  'include': "include_example" // String | Set to empty string to only include basic product data or null to not include any product data.    Valid options:    Names, ShortTexts, LongTexts, TechTexts, Items, Prices, Categories, Parameters, Variants, Markets, Images, Feeds, Urls, ShippingFees, RelatedProducts, DiscountCampaigns
};
apiInstance.queryProducts(query, opts, (error, data, response) => {
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
 **query** | [**ProductModelsProductQuery**](ProductModelsProductQuery.md)| The details of the query. | 
 **include** | **String**| Set to empty string to only include basic product data or null to not include any product data.    Valid options:    Names, ShortTexts, LongTexts, TechTexts, Items, Prices, Categories, Parameters, Variants, Markets, Images, Feeds, Urls, ShippingFees, RelatedProducts, DiscountCampaigns | [optional] 

### Return type

[**PagedEnvelopeListProductModelsReadProduct**](PagedEnvelopeListProductModelsReadProduct.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## queryProductsPaged

> PagedEnvelopeListProductModelsReadProduct queryProductsPaged(page, query, opts)

Query products (paged)

The batch id is mandatory when fetching any page other than the first page.    If no batch id is provided for the first page, then a new batch is created.    Batch id and pagination information can be found in the response.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductApi();
let page = 56; // Number | The page to fetch. To start a new batched query it is mandatory to send in page=1.
let query = new GeinsSdkApiMgmtJavascript.ProductModelsProductQuery(); // ProductModelsProductQuery | The details of the query.
let opts = {
  'include': "include_example" // String | Set to empty string to only include basic product data or null to not include any product data.    Valid options:    Names, ShortTexts, LongTexts, TechTexts, Items, Prices, Categories, Parameters, Variants, Markets, Images, Feeds, Urls, ShippingFees, RelatedProducts, DiscountCampaigns
};
apiInstance.queryProductsPaged(page, query, opts, (error, data, response) => {
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
 **page** | **Number**| The page to fetch. To start a new batched query it is mandatory to send in page&#x3D;1. | 
 **query** | [**ProductModelsProductQuery**](ProductModelsProductQuery.md)| The details of the query. | 
 **include** | **String**| Set to empty string to only include basic product data or null to not include any product data.    Valid options:    Names, ShortTexts, LongTexts, TechTexts, Items, Prices, Categories, Parameters, Variants, Markets, Images, Feeds, Urls, ShippingFees, RelatedProducts, DiscountCampaigns | [optional] 

### Return type

[**PagedEnvelopeListProductModelsReadProduct**](PagedEnvelopeListProductModelsReadProduct.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## queryStock

> EnvelopeListProductModelsReadProductItemStock queryStock(productItemIds)

Query stock

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductApi();
let productItemIds = [null]; // [Number] | The details of the query.
apiInstance.queryStock(productItemIds, (error, data, response) => {
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
 **productItemIds** | [**[Number]**](Number.md)| The details of the query. | 

### Return type

[**EnvelopeListProductModelsReadProductItemStock**](EnvelopeListProductModelsReadProductItemStock.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## unlinkRelatedProductsViaRelation

> ProductModelsRelatedProductEnvelope unlinkRelatedProductsViaRelation(productId, relationTypeId, relatedProducts, opts)

Unlink related products (via relation).

Remove related products from a product using a fixed relation type.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductApi();
let productId = "productId_example"; // String | The id of the main product from which the relations will be removed.
let relationTypeId = 56; // Number | The relation type id that will apply to all related products in relatedProducts.
let relatedProducts = [new GeinsSdkApiMgmtJavascript.ProductModelsWriteRelatedProduct()]; // [ProductModelsWriteRelatedProduct] | The list of related products to unlink from the main product.
let opts = {
  'productIdType': 56 // Number | The type of product id supplied in productId and relatedProducts.    0 = Internal. Internal product id set by Geins.               Eg: 10001.    1 = ArticleNumber. Article number set by customer.               Eg: ABC123.    2 = MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 = MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123.
};
apiInstance.unlinkRelatedProductsViaRelation(productId, relationTypeId, relatedProducts, opts, (error, data, response) => {
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
 **productId** | **String**| The id of the main product from which the relations will be removed. | 
 **relationTypeId** | **Number**| The relation type id that will apply to all related products in relatedProducts. | 
 **relatedProducts** | [**[ProductModelsWriteRelatedProduct]**](ProductModelsWriteRelatedProduct.md)| The list of related products to unlink from the main product. | 
 **productIdType** | **Number**| The type of product id supplied in productId and relatedProducts.    0 &#x3D; Internal. Internal product id set by Geins.               Eg: 10001.    1 &#x3D; ArticleNumber. Article number set by customer.               Eg: ABC123.    2 &#x3D; MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 &#x3D; MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123. | [optional] 

### Return type

[**ProductModelsRelatedProductEnvelope**](ProductModelsRelatedProductEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProduct

> EnvelopeProductModelsReadProduct updateProduct(productId, product, opts)

Update product

Updates a product.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductApi();
let productId = "productId_example"; // String | The id of the product to update.
let product = new GeinsSdkApiMgmtJavascript.ProductModelsWriteProduct(); // ProductModelsWriteProduct | The product data to update.
let opts = {
  'productIdType': 56, // Number | The type of product id supplied.    0 = Internal. Internal product id set by Geins.               Eg: 10001.    1 = ArticleNumber. Article number set by customer.               Eg: ABC123.    2 = MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 = MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123.
  'include': "include_example" // String | Set to empty string to only include basic product data or null to not include any product data.    Valid options:    Names, ShortTexts, LongTexts, TechTexts, Items, Prices, Categories, Parameters, Variants, Markets, Images, Feeds, Urls, ShippingFees, RelatedProducts, DiscountCampaigns
};
apiInstance.updateProduct(productId, product, opts, (error, data, response) => {
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
 **productId** | **String**| The id of the product to update. | 
 **product** | [**ProductModelsWriteProduct**](ProductModelsWriteProduct.md)| The product data to update. | 
 **productIdType** | **Number**| The type of product id supplied.    0 &#x3D; Internal. Internal product id set by Geins.               Eg: 10001.    1 &#x3D; ArticleNumber. Article number set by customer.               Eg: ABC123.    2 &#x3D; MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 &#x3D; MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123. | [optional] 
 **include** | **String**| Set to empty string to only include basic product data or null to not include any product data.    Valid options:    Names, ShortTexts, LongTexts, TechTexts, Items, Prices, Categories, Parameters, Variants, Markets, Images, Feeds, Urls, ShippingFees, RelatedProducts, DiscountCampaigns | [optional] 

### Return type

[**EnvelopeProductModelsReadProduct**](EnvelopeProductModelsReadProduct.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProductItem

> EnvelopeProductModelsReadProductItem updateProductItem(itemId, productItem, opts)

Update product item

Updates a product item.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductApi();
let itemId = "itemId_example"; // String | The id of the product item to update.
let productItem = new GeinsSdkApiMgmtJavascript.ProductModelsWriteProductItem(); // ProductModelsWriteProductItem | The product item data to update.
let opts = {
  'productItemIdType': 56 // Number | The type of product item id supplied.    0 = Internal. Internal product item id set by Geins.               Eg: 10001.    1 = ArticleNumber. Article number set by customer.               Eg: ABC123.    2 = MarketPrefixedInternal. Internal product item id set by Geins, prefixed with market.               Eg: SE10001.    3 = MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123.    4 = ExternalId. External product item id set by customer.               Eg: 10001.
};
apiInstance.updateProductItem(itemId, productItem, opts, (error, data, response) => {
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
 **itemId** | **String**| The id of the product item to update. | 
 **productItem** | [**ProductModelsWriteProductItem**](ProductModelsWriteProductItem.md)| The product item data to update. | 
 **productItemIdType** | **Number**| The type of product item id supplied.    0 &#x3D; Internal. Internal product item id set by Geins.               Eg: 10001.    1 &#x3D; ArticleNumber. Article number set by customer.               Eg: ABC123.    2 &#x3D; MarketPrefixedInternal. Internal product item id set by Geins, prefixed with market.               Eg: SE10001.    3 &#x3D; MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123.    4 &#x3D; ExternalId. External product item id set by customer.               Eg: 10001. | [optional] 

### Return type

[**EnvelopeProductModelsReadProductItem**](EnvelopeProductModelsReadProductItem.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProductItemsBatch

> EnvelopeProductModelsReadProductItemResult updateProductItemsBatch(productItems, opts)

Update product items (batch)

Updates product items in batch.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductApi();
let productItems = [new GeinsSdkApiMgmtJavascript.ProductModelsWriteProductItem()]; // [ProductModelsWriteProductItem] | The product items to update.
let opts = {
  'productItemIdType': 56 // Number | The type of product item ids supplied.    0 = Internal. Internal product item id set by Geins.               Eg: 10001.    1 = ArticleNumber. Article number set by customer.               Eg: ABC123.    2 = MarketPrefixedInternal. Internal product item id set by Geins, prefixed with market.               Eg: SE10001.    3 = MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123.    4 = ExternalId. External product item id set by customer.               Eg: 10001.
};
apiInstance.updateProductItemsBatch(productItems, opts, (error, data, response) => {
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
 **productItems** | [**[ProductModelsWriteProductItem]**](ProductModelsWriteProductItem.md)| The product items to update. | 
 **productItemIdType** | **Number**| The type of product item ids supplied.    0 &#x3D; Internal. Internal product item id set by Geins.               Eg: 10001.    1 &#x3D; ArticleNumber. Article number set by customer.               Eg: ABC123.    2 &#x3D; MarketPrefixedInternal. Internal product item id set by Geins, prefixed with market.               Eg: SE10001.    3 &#x3D; MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123.    4 &#x3D; ExternalId. External product item id set by customer.               Eg: 10001. | [optional] 

### Return type

[**EnvelopeProductModelsReadProductItemResult**](EnvelopeProductModelsReadProductItemResult.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateStockBatch

> ProductModelsStockEnvelope updateStockBatch(productItemStocks, opts)

Update stock (batch)

Update stock values for multiple product items.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductApi();
let productItemStocks = [new GeinsSdkApiMgmtJavascript.ProductModelsWriteProductItemStock()]; // [ProductModelsWriteProductItemStock] | List of product item ids with new stock values.
let opts = {
  'productItemIdType': 56 // Number | The type of product item id supplied.    0 = Internal. Internal product item id set by Geins.               Eg: 10001.    1 = ArticleNumber. Article number set by customer.               Eg: ABC123.    2 = MarketPrefixedInternal. Internal product item id set by Geins, prefixed with market.               Eg: SE10001.    3 = MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123.    4 = ExternalId. External product item id set by customer.               Eg: 10001.
};
apiInstance.updateStockBatch(productItemStocks, opts, (error, data, response) => {
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
 **productItemStocks** | [**[ProductModelsWriteProductItemStock]**](ProductModelsWriteProductItemStock.md)| List of product item ids with new stock values. | 
 **productItemIdType** | **Number**| The type of product item id supplied.    0 &#x3D; Internal. Internal product item id set by Geins.               Eg: 10001.    1 &#x3D; ArticleNumber. Article number set by customer.               Eg: ABC123.    2 &#x3D; MarketPrefixedInternal. Internal product item id set by Geins, prefixed with market.               Eg: SE10001.    3 &#x3D; MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123.    4 &#x3D; ExternalId. External product item id set by customer.               Eg: 10001. | [optional] 

### Return type

[**ProductModelsStockEnvelope**](ProductModelsStockEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

