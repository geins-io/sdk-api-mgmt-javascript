# GeinsManagementApiSdkJs.ProductApi

All URIs are relative to *https://mgmtapi.carismar.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAvailabilityMonitor**](ProductApi.md#addAvailabilityMonitor) | **POST** /API/Product/MonitorAvailability | Add a product availability monitor
[**addCategoryToProduct**](ProductApi.md#addCategoryToProduct) | **PUT** /API/Product/{productId}/Category | Adds a category relation to a product
[**addImageToProduct**](ProductApi.md#addImageToProduct) | **PUT** /API/Product/{productId}/Image/{imageName} | Adds an image relation to a product
[**addRelatedProductsToProduct**](ProductApi.md#addRelatedProductsToProduct) | **PUT** /API/Product/{productId}/Related | Add related products to a product
[**batchUpdateProductItems**](ProductApi.md#batchUpdateProductItems) | **PUT** /API/Product/Items | Updates product items in batch
[**batchUpdateStockValues**](ProductApi.md#batchUpdateStockValues) | **PUT** /API/Product/Stock | Update stock values for multiple product items
[**createProduct**](ProductApi.md#createProduct) | **POST** /API/Product | Create a new product
[**createProductItems**](ProductApi.md#createProductItems) | **POST** /API/Product/{productId}/Item | Create a new product item
[**getProductById**](ProductApi.md#getProductById) | **GET** /API/Product/{productId} | Get a specific product
[**getProductItemById**](ProductApi.md#getProductItemById) | **GET** /API/Product/Item/{itemId} | Get a specific product item
[**linkRelatedProductsByRelationId**](ProductApi.md#linkRelatedProductsByRelationId) | **PUT** /API/Product/{productId}/Related/{relationTypeId} | Add related products to a product using a fixed relation type
[**listAllProductItemsPaged**](ProductApi.md#listAllProductItemsPaged) | **GET** /API/Product/Items/{page} | Get all product items with pagination
[**listFeeds**](ProductApi.md#listFeeds) | **GET** /API/Product/Feeds | Gets a list of all feeds
[**listProductItems**](ProductApi.md#listProductItems) | **GET** /API/Product/Items | Get all product items
[**listProductRelationTypes**](ProductApi.md#listProductRelationTypes) | **GET** /API/Product/RelationTypes | Gets a list of product relation types
[**queryProducts**](ProductApi.md#queryProducts) | **POST** /API/Product/Query | Query products
[**queryProductsPaged**](ProductApi.md#queryProductsPaged) | **POST** /API/Product/Query/{page} | Query products with pagination
[**queryStock**](ProductApi.md#queryStock) | **POST** /API/Product/Stock/Query | Query stock
[**updateProduct**](ProductApi.md#updateProduct) | **PUT** /API/Product/{productId} | Updates a product
[**updateProductItem**](ProductApi.md#updateProductItem) | **PUT** /API/Product/Item/{itemId} | Updates a product item



## addAvailabilityMonitor

> Envelope addAvailabilityMonitor(model)

Add a product availability monitor

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

let apiInstance = new GeinsManagementApiSdkJs.ProductApi();
let model = new GeinsManagementApiSdkJs.ProductModelsMonitorSku(); // ProductModelsMonitorSku | 
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

[**Envelope**](Envelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## addCategoryToProduct

> Envelope addCategoryToProduct(productId, productCategory, opts)

Adds a category relation to a product

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

let apiInstance = new GeinsManagementApiSdkJs.ProductApi();
let productId = "productId_example"; // String | The id of the product to update.
let productCategory = new GeinsManagementApiSdkJs.ProductModelsProductCategory(); // ProductModelsProductCategory | The category to relate the product to.
let opts = {
  'productIdType': 56 // Number | The type of product id supplied in {productId}.
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
 **productIdType** | **Number**| The type of product id supplied in {productId}. | [optional] 

### Return type

[**Envelope**](Envelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## addImageToProduct

> Envelope addImageToProduct(productId, imageName, opts)

Adds an image relation to a product

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

let apiInstance = new GeinsManagementApiSdkJs.ProductApi();
let productId = "productId_example"; // String | The id of the product to update.
let imageName = "imageName_example"; // String | The name of the image to set to product.
let opts = {
  'isPrimaryImage': true, // Boolean | Specifies whether {imageName} should be set as the primary image of the product.
  'productIdType': 56 // Number | The type of product id supplied in {productId}.
};
apiInstance.addImageToProduct(productId, imageName, opts, (error, data, response) => {
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
 **imageName** | **String**| The name of the image to set to product. | 
 **isPrimaryImage** | **Boolean**| Specifies whether {imageName} should be set as the primary image of the product. | [optional] 
 **productIdType** | **Number**| The type of product id supplied in {productId}. | [optional] 

### Return type

[**Envelope**](Envelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## addRelatedProductsToProduct

> ProductModelsRelatedProductEnvelope addRelatedProductsToProduct(productId, relatedProducts, opts)

Add related products to a product

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

let apiInstance = new GeinsManagementApiSdkJs.ProductApi();
let productId = "productId_example"; // String | The id of the main product to which the relations will be created
let relatedProducts = [new GeinsManagementApiSdkJs.ProductModelsWriteRelatedProduct()]; // [ProductModelsWriteRelatedProduct] | The list of related products to link with the main product.
let opts = {
  'productIdType': 56 // Number | The type of product id for {productId} and supplied in {relatedProducts}.
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
 **productIdType** | **Number**| The type of product id for {productId} and supplied in {relatedProducts}. | [optional] 

### Return type

[**ProductModelsRelatedProductEnvelope**](ProductModelsRelatedProductEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## batchUpdateProductItems

> Envelope batchUpdateProductItems(productItems, opts)

Updates product items in batch

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

let apiInstance = new GeinsManagementApiSdkJs.ProductApi();
let productItems = [new GeinsManagementApiSdkJs.ProductModelsWriteProductItem()]; // [ProductModelsWriteProductItem] | The product items to update
let opts = {
  'productItemIdType': 56 // Number | The type of product item id
};
apiInstance.batchUpdateProductItems(productItems, opts, (error, data, response) => {
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
 **productItems** | [**[ProductModelsWriteProductItem]**](ProductModelsWriteProductItem.md)| The product items to update | 
 **productItemIdType** | **Number**| The type of product item id | [optional] 

### Return type

[**Envelope**](Envelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## batchUpdateStockValues

> ProductModelsStockEnvelope batchUpdateStockValues(productItemStocks, opts)

Update stock values for multiple product items

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

let apiInstance = new GeinsManagementApiSdkJs.ProductApi();
let productItemStocks = [new GeinsManagementApiSdkJs.ProductModelsWriteProductItemStock()]; // [ProductModelsWriteProductItemStock] | List of product item ids with new stock values.
let opts = {
  'productItemIdType': 56 // Number | The type of product item id supplied in {productItemStocks}.
};
apiInstance.batchUpdateStockValues(productItemStocks, opts, (error, data, response) => {
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
 **productItemIdType** | **Number**| The type of product item id supplied in {productItemStocks}. | [optional] 

### Return type

[**ProductModelsStockEnvelope**](ProductModelsStockEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## createProduct

> EnvelopeProductModelsReadProduct createProduct(product, opts)

Create a new product

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

let apiInstance = new GeinsManagementApiSdkJs.ProductApi();
let product = new GeinsManagementApiSdkJs.ProductModelsWriteProduct(); // ProductModelsWriteProduct | The product to create.
let opts = {
  'include': "include_example" // String | Comma separated list of child-collections to also include with the created product. See  {Product.Models.ProductIncludes} names for valid options.
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
 **include** | **String**| Comma separated list of child-collections to also include with the created product. See  {Product.Models.ProductIncludes} names for valid options. | [optional] 

### Return type

[**EnvelopeProductModelsReadProduct**](EnvelopeProductModelsReadProduct.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## createProductItems

> EnvelopeProductModelsReadProductItem createProductItems(productId, productItem, opts)

Create a new product item

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

let apiInstance = new GeinsManagementApiSdkJs.ProductApi();
let productId = "productId_example"; // String | The id of the product to create an item on.
let productItem = new GeinsManagementApiSdkJs.ProductModelsWriteProductItem(); // ProductModelsWriteProductItem | The product item to create.
let opts = {
  'productIdType': 56 // Number | The type of product id supplied in {productId}.
};
apiInstance.createProductItems(productId, productItem, opts, (error, data, response) => {
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
 **productIdType** | **Number**| The type of product id supplied in {productId}. | [optional] 

### Return type

[**EnvelopeProductModelsReadProductItem**](EnvelopeProductModelsReadProductItem.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## getProductById

> EnvelopeProductModelsReadProduct getProductById(productId, opts)

Get a specific product

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

let apiInstance = new GeinsManagementApiSdkJs.ProductApi();
let productId = "productId_example"; // String | The id of the product to get.
let opts = {
  'productIdType': 56, // Number | The type of product id supplied in {productId}.
  'include': "include_example" // String | Comma separated list of child-collections to also include with the requested product. See  {Product.Models.ProductIncludes} names for valid options.
};
apiInstance.getProductById(productId, opts, (error, data, response) => {
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
 **productIdType** | **Number**| The type of product id supplied in {productId}. | [optional] 
 **include** | **String**| Comma separated list of child-collections to also include with the requested product. See  {Product.Models.ProductIncludes} names for valid options. | [optional] 

### Return type

[**EnvelopeProductModelsReadProduct**](EnvelopeProductModelsReadProduct.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## getProductItemById

> ProductProductItemEnvelope getProductItemById(itemId, opts)

Get a specific product item

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

let apiInstance = new GeinsManagementApiSdkJs.ProductApi();
let itemId = "itemId_example"; // String | The id of the product item to get.
let opts = {
  'productItemIdType': 56 // Number | The type of product item id supplied in {itemId}.
};
apiInstance.getProductItemById(itemId, opts, (error, data, response) => {
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
 **productItemIdType** | **Number**| The type of product item id supplied in {itemId}. | [optional] 

### Return type

[**ProductProductItemEnvelope**](ProductProductItemEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## linkRelatedProductsByRelationId

> ProductModelsRelatedProductEnvelope linkRelatedProductsByRelationId(productId, relationTypeId, relatedProducts, opts)

Add related products to a product using a fixed relation type

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

let apiInstance = new GeinsManagementApiSdkJs.ProductApi();
let productId = "productId_example"; // String | The id of the main product to which the relations will be created
let relationTypeId = 56; // Number | The relation type id that will apply to all related products in {relatedProducts}
let relatedProducts = [new GeinsManagementApiSdkJs.ProductModelsWriteRelatedProduct()]; // [ProductModelsWriteRelatedProduct] | The list of related products to link with the main product.
let opts = {
  'productIdType': 56 // Number | The type of product id for {productId} and supplied in {relatedProducts}.
};
apiInstance.linkRelatedProductsByRelationId(productId, relationTypeId, relatedProducts, opts, (error, data, response) => {
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
 **relationTypeId** | **Number**| The relation type id that will apply to all related products in {relatedProducts} | 
 **relatedProducts** | [**[ProductModelsWriteRelatedProduct]**](ProductModelsWriteRelatedProduct.md)| The list of related products to link with the main product. | 
 **productIdType** | **Number**| The type of product id for {productId} and supplied in {relatedProducts}. | [optional] 

### Return type

[**ProductModelsRelatedProductEnvelope**](ProductModelsRelatedProductEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## listAllProductItemsPaged

> EnvelopeListProductModelsReadProductItem listAllProductItemsPaged(page)

Get all product items with pagination

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

let apiInstance = new GeinsManagementApiSdkJs.ProductApi();
let page = 56; // Number | The page to fetch
apiInstance.listAllProductItemsPaged(page, (error, data, response) => {
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
 **page** | **Number**| The page to fetch | 

### Return type

[**EnvelopeListProductModelsReadProductItem**](EnvelopeListProductModelsReadProductItem.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## listFeeds

> EnvelopeListProductModelsReadFeed listFeeds()

Gets a list of all feeds

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

let apiInstance = new GeinsManagementApiSdkJs.ProductApi();
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
- **Accept**: application/json, text/json, application/xml, text/xml


## listProductItems

> [ProductModelsReadProductItem] listProductItems()

Get all product items

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

let apiInstance = new GeinsManagementApiSdkJs.ProductApi();
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
- **Accept**: application/json, text/json, application/xml, text/xml


## listProductRelationTypes

> EnvelopeListProductModelsReadRelationType listProductRelationTypes()

Gets a list of product relation types

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

let apiInstance = new GeinsManagementApiSdkJs.ProductApi();
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
- **Accept**: application/json, text/json, application/xml, text/xml


## queryProducts

> EnvelopeListProductModelsReadProduct queryProducts(query, opts)

Query products

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

let apiInstance = new GeinsManagementApiSdkJs.ProductApi();
let query = new GeinsManagementApiSdkJs.ProductModelsProductQuery(); // ProductModelsProductQuery | The details of the query
let opts = {
  'include': "include_example" // String | Comma separated list of child-collections to also include with the queried products. See  {Product.Models.ProductIncludes} names for valid options.
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
 **query** | [**ProductModelsProductQuery**](ProductModelsProductQuery.md)| The details of the query | 
 **include** | **String**| Comma separated list of child-collections to also include with the queried products. See  {Product.Models.ProductIncludes} names for valid options. | [optional] 

### Return type

[**EnvelopeListProductModelsReadProduct**](EnvelopeListProductModelsReadProduct.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## queryProductsPaged

> EnvelopeListProductModelsReadProduct queryProductsPaged(page, query, opts)

Query products with pagination

The {Product.Models.ProductQuery.BatchId} property is mandatory when fetching a page other than the first page.  If no BatchId is provided for the first page, a new batch is created and the BatchId can be found in the {Envelope.PageResult} field.

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

let apiInstance = new GeinsManagementApiSdkJs.ProductApi();
let page = 56; // Number | The page to fetch. To start a new batched query it is mandatory to send in page=1
let query = new GeinsManagementApiSdkJs.ProductModelsProductQuery(); // ProductModelsProductQuery | The details of the query
let opts = {
  'include': "include_example" // String | Comma separated list of child-collections to also include with the queried products. See  {Product.Models.ProductIncludes} names for valid options.
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
 **page** | **Number**| The page to fetch. To start a new batched query it is mandatory to send in page&#x3D;1 | 
 **query** | [**ProductModelsProductQuery**](ProductModelsProductQuery.md)| The details of the query | 
 **include** | **String**| Comma separated list of child-collections to also include with the queried products. See  {Product.Models.ProductIncludes} names for valid options. | [optional] 

### Return type

[**EnvelopeListProductModelsReadProduct**](EnvelopeListProductModelsReadProduct.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## queryStock

> [ProductModelsReadProductItemStock] queryStock(productItemIds)

Query stock

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

let apiInstance = new GeinsManagementApiSdkJs.ProductApi();
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

[**[ProductModelsReadProductItemStock]**](ProductModelsReadProductItemStock.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## updateProduct

> EnvelopeProductModelsReadProduct updateProduct(productId, product, opts)

Updates a product

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

let apiInstance = new GeinsManagementApiSdkJs.ProductApi();
let productId = "productId_example"; // String | The id of the product to update.
let product = new GeinsManagementApiSdkJs.ProductModelsWriteProduct(); // ProductModelsWriteProduct | The product data to update.
let opts = {
  'productIdType': 56, // Number | The type of product id supplied in {productId}.
  'include': "include_example" // String | Comma separated list of child-collections to also include with the updated product. See  {Product.Models.ProductIncludes} names for valid options.
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
 **productIdType** | **Number**| The type of product id supplied in {productId}. | [optional] 
 **include** | **String**| Comma separated list of child-collections to also include with the updated product. See  {Product.Models.ProductIncludes} names for valid options. | [optional] 

### Return type

[**EnvelopeProductModelsReadProduct**](EnvelopeProductModelsReadProduct.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## updateProductItem

> EnvelopeProductModelsReadProductItem updateProductItem(itemId, productItem, opts)

Updates a product item

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

let apiInstance = new GeinsManagementApiSdkJs.ProductApi();
let itemId = "itemId_example"; // String | The id of the product item to update.
let productItem = new GeinsManagementApiSdkJs.ProductModelsWriteProductItem(); // ProductModelsWriteProductItem | The product item data to update.
let opts = {
  'productItemIdType': 56 // Number | The type of product item id supplied in {itemId}.
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
 **productItemIdType** | **Number**| The type of product item id supplied in {itemId}. | [optional] 

### Return type

[**EnvelopeProductModelsReadProductItem**](EnvelopeProductModelsReadProductItem.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml

