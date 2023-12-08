# GeinsSdkApiMgmtJavascript.ProductImageApi

All URIs are relative to *https://mgmtapi.geins.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProductImage**](ProductImageApi.md#addProductImage) | **POST** /API/Product/{productId}/Image/{imageName} | Add product image
[**addUpdateProductImage**](ProductImageApi.md#addUpdateProductImage) | **PUT** /API/Product/{productId}/Image/{imageName} | Add/update product image
[**deleteProductImage**](ProductImageApi.md#deleteProductImage) | **DELETE** /API/Product/{productId}/Image/{imageName} | Delete product image



## addProductImage

> EnvelopeProductModelsReadUploadedImage addProductImage(productId, imageName, payload, opts)

Add product image

Uploads a new image on a product. If an image with the same file name already exists, the image will still be uploaded but with a new unique name.    The image is included in the body of the request as binary data.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductImageApi();
let productId = "productId_example"; // String | The id of the product to update.
let imageName = "imageName_example"; // String | The file name of the image that is uploaded.
let payload = "/path/to/file"; // File | The binary data for the image to be uploaded.
let opts = {
  'position': 56, // Number | The relative position of the image in the list of images for the product. Will default to 1 if not set.
  'isPrimaryImage': true, // Boolean | Specifies whether this image is the primary image on the product. Will not remove the image as primary image if set to false.
  'productIdType': 56 // Number | The type of product id supplied.    0 = Internal. Internal product id set by Geins.               Eg: 10001.    1 = ArticleNumber. Article number set by customer.               Eg: ABC123.    2 = MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 = MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123.
};
apiInstance.addProductImage(productId, imageName, payload, opts, (error, data, response) => {
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
 **imageName** | **String**| The file name of the image that is uploaded. | 
 **payload** | **File**| The binary data for the image to be uploaded. | 
 **position** | **Number**| The relative position of the image in the list of images for the product. Will default to 1 if not set. | [optional] 
 **isPrimaryImage** | **Boolean**| Specifies whether this image is the primary image on the product. Will not remove the image as primary image if set to false. | [optional] 
 **productIdType** | **Number**| The type of product id supplied.    0 &#x3D; Internal. Internal product id set by Geins.               Eg: 10001.    1 &#x3D; ArticleNumber. Article number set by customer.               Eg: ABC123.    2 &#x3D; MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 &#x3D; MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123. | [optional] 

### Return type

[**EnvelopeProductModelsReadUploadedImage**](EnvelopeProductModelsReadUploadedImage.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: image/jpeg, image/png, image/gif
- **Accept**: application/json


## addUpdateProductImage

> EnvelopeProductModelsReadUploadedImage addUpdateProductImage(productId, imageName, payload, opts)

Add/update product image

Creates or updates an image on a product. If an image with the same file already exists it will be replaced.    The image is included in the body of the request as binary data.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductImageApi();
let productId = "productId_example"; // String | The id of the product to update.
let imageName = "imageName_example"; // String | The file name of the image that is uploaded.
let payload = "/path/to/file"; // File | The binary data for the image to be uploaded.
let opts = {
  'position': 56, // Number | The relative position of the image in the list of images for the product.    For new images this will default to 1 if not set. Leave as null to not change the position on an existing image.
  'isPrimaryImage': true, // Boolean | Specifies whether this image is the primary image on the product. Will not remove the image as primary image if set to false.
  'productIdType': 56 // Number | The type of product id supplied.    0 = Internal. Internal product id set by Geins.               Eg: 10001.    1 = ArticleNumber. Article number set by customer.               Eg: ABC123.    2 = MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 = MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123.
};
apiInstance.addUpdateProductImage(productId, imageName, payload, opts, (error, data, response) => {
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
 **imageName** | **String**| The file name of the image that is uploaded. | 
 **payload** | **File**| The binary data for the image to be uploaded. | 
 **position** | **Number**| The relative position of the image in the list of images for the product.    For new images this will default to 1 if not set. Leave as null to not change the position on an existing image. | [optional] 
 **isPrimaryImage** | **Boolean**| Specifies whether this image is the primary image on the product. Will not remove the image as primary image if set to false. | [optional] 
 **productIdType** | **Number**| The type of product id supplied.    0 &#x3D; Internal. Internal product id set by Geins.               Eg: 10001.    1 &#x3D; ArticleNumber. Article number set by customer.               Eg: ABC123.    2 &#x3D; MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 &#x3D; MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123. | [optional] 

### Return type

[**EnvelopeProductModelsReadUploadedImage**](EnvelopeProductModelsReadUploadedImage.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: image/jpeg, image/png, image/gif
- **Accept**: application/json


## deleteProductImage

> BaseEnvelope deleteProductImage(productId, imageName, opts)

Delete product image

Deletes an image on a product. Does not delete the physical image file from storage.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ProductImageApi();
let productId = "productId_example"; // String | The id of the product to update.
let imageName = "imageName_example"; // String | The file name of the image to delete.
let opts = {
  'productIdType': 56 // Number | The type of product id supplied.    0 = Internal. Internal product id set by Geins.               Eg: 10001.    1 = ArticleNumber. Article number set by customer.               Eg: ABC123.    2 = MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 = MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123.
};
apiInstance.deleteProductImage(productId, imageName, opts, (error, data, response) => {
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
 **imageName** | **String**| The file name of the image to delete. | 
 **productIdType** | **Number**| The type of product id supplied.    0 &#x3D; Internal. Internal product id set by Geins.               Eg: 10001.    1 &#x3D; ArticleNumber. Article number set by customer.               Eg: ABC123.    2 &#x3D; MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 &#x3D; MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123. | [optional] 

### Return type

[**BaseEnvelope**](BaseEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

