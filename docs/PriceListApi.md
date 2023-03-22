# GeinsManagementApiSdkJs.PriceListApi

All URIs are relative to *https://mgmtapi.carismar.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listPriceLists**](PriceListApi.md#listPriceLists) | **GET** /API/PriceList/List | Get all price list definitions
[**updatePricelistPrices**](PriceListApi.md#updatePricelistPrices) | **PUT** /API/PriceList/Price | Updates price list prices



## listPriceLists

> [PriceListModelsPriceList] listPriceLists()

Get all price list definitions

- Prices on campaign price lists (id: xxxxxx2) can not be updated. Any such entries will be ignored.  - ID for Ordinary, Sale and Campaign price lists starts from 1000000.   The ID is calculated by this formula, Market ID * 1000000 + Type of price list (Ordinary&#x3D;0, Sale&#x3D;1, Capaign&#x3D;2)  So :  Ordinary price list for market with ID 1 has ID &#x3D; 1000000  Sale price list for market with ID 1 has ID &#x3D; 1000001  Campaign price list for market with ID 1 has ID &#x3D; 1000002  Ordinary price list for market with ID 2 has ID &#x3D; 2000000  And so on ...

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

let apiInstance = new GeinsManagementApiSdkJs.PriceListApi();
apiInstance.listPriceLists((error, data, response) => {
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

[**[PriceListModelsPriceList]**](PriceListModelsPriceList.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/xml, text/xml


## updatePricelistPrices

> PriceListModelsPriceListPriceResponse updatePricelistPrices(priceListPrices, opts)

Updates price list prices

- Prices on campaign price lists (id: xxxxxx2) can not be updated. Any such entries will be ignored.  - ID for Ordinary, Sale and Campaign price lists starts from 1000000.   The ID is calculated by this formula, Market ID * 1000000 + Type of price list (Ordinary&#x3D;0, Sale&#x3D;1, Capaign&#x3D;2)  So :  Ordinary price list for market with ID 1 has ID &#x3D; 1000000  Sale price list for market with ID 1 has ID &#x3D; 1000001  Campaign price list for market with ID 1 has ID &#x3D; 1000002  Ordinary price list for market with ID 2 has ID &#x3D; 2000000  And so on ...

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

let apiInstance = new GeinsManagementApiSdkJs.PriceListApi();
let priceListPrices = [new GeinsManagementApiSdkJs.PriceListModelsWritePriceListPrice()]; // [PriceListModelsWritePriceListPrice] | List of new price list prices.
let opts = {
  'productIdType': 56, // Number | The type of product id supplied in {priceListPrices}
  'pricesIncVat': true // Boolean | Set to true if prices in {priceListPrices} includes VAT. Leave blank or set to false if they exclude VAT.
};
apiInstance.updatePricelistPrices(priceListPrices, opts, (error, data, response) => {
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
 **priceListPrices** | [**[PriceListModelsWritePriceListPrice]**](PriceListModelsWritePriceListPrice.md)| List of new price list prices. | 
 **productIdType** | **Number**| The type of product id supplied in {priceListPrices} | [optional] 
 **pricesIncVat** | **Boolean**| Set to true if prices in {priceListPrices} includes VAT. Leave blank or set to false if they exclude VAT. | [optional] 

### Return type

[**PriceListModelsPriceListPriceResponse**](PriceListModelsPriceListPriceResponse.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml

