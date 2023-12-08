# GeinsSdkApiMgmtJavascript.PriceListApi

All URIs are relative to *https://mgmtapi.geins.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listPriceLists**](PriceListApi.md#listPriceLists) | **GET** /API/PriceList/List | List price lists
[**updatePriceListPrices**](PriceListApi.md#updatePriceListPrices) | **PUT** /API/PriceList/Price | Update price list prices



## listPriceLists

> [PriceListModelsPriceList] listPriceLists()

List price lists

Gets all price list definitions.    - Prices on campaign price lists (id: xxxxxx2) can not be updated. Any such entries will be ignored.    - ID for Ordinary, Sale and Campaign price lists starts from 1000000.    The ID is calculated by this formula, Market ID * 1000000 + Type of price list (Ordinary&#x3D;0, Sale&#x3D;1, Capaign&#x3D;2)    Eg:    Ordinary price list for market with ID 1 has ID &#x3D; 1000000    Sale price list for market with ID 1 has ID &#x3D; 1000001    Campaign price list for market with ID 1 has ID &#x3D; 1000002    Ordinary price list for market with ID 2 has ID &#x3D; 2000000

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

let apiInstance = new GeinsSdkApiMgmtJavascript.PriceListApi();
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
- **Accept**: application/json


## updatePriceListPrices

> PriceListModelsPriceListPriceResponse updatePriceListPrices(priceListPrices, opts)

Update price list prices

Updates price list prices.    - Prices on campaign price lists (id: xxxxxx2) can not be updated. Any such entries will be ignored.    - ID for Ordinary, Sale and Campaign price lists starts from 1000000.    The ID is calculated by this formula, Market ID * 1000000 + Type of price list (Ordinary&#x3D;0, Sale&#x3D;1, Capaign&#x3D;2)    Eg:    Ordinary price list for market with ID 1 has ID &#x3D; 1000000    Sale price list for market with ID 1 has ID &#x3D; 1000001    Campaign price list for market with ID 1 has ID &#x3D; 1000002    Ordinary price list for market with ID 2 has ID &#x3D; 2000000

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

let apiInstance = new GeinsSdkApiMgmtJavascript.PriceListApi();
let priceListPrices = [new GeinsSdkApiMgmtJavascript.PriceListModelsWritePriceListPrice()]; // [PriceListModelsWritePriceListPrice] | List of new price list prices.
let opts = {
  'productIdType': 56, // Number | The type of product id supplied.    0 = Internal. Internal product id set by Geins.               Eg: 10001.    1 = ArticleNumber. Article number set by customer.               Eg: ABC123.    2 = MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 = MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123.
  'pricesIncVat': true // Boolean | Set to true if prices includes VAT. Leave blank or set to false if they exclude VAT.
};
apiInstance.updatePriceListPrices(priceListPrices, opts, (error, data, response) => {
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
 **productIdType** | **Number**| The type of product id supplied.    0 &#x3D; Internal. Internal product id set by Geins.               Eg: 10001.    1 &#x3D; ArticleNumber. Article number set by customer.               Eg: ABC123.    2 &#x3D; MarketPrefixedInternal. Internal product id set by Geins, prefixed with market.               Eg: SE10001.    3 &#x3D; MarketPrefixedArticleNumber. Article number set by customer, prefixed with market.               Eg: SEABC123. | [optional] 
 **pricesIncVat** | **Boolean**| Set to true if prices includes VAT. Leave blank or set to false if they exclude VAT. | [optional] 

### Return type

[**PriceListModelsPriceListPriceResponse**](PriceListModelsPriceListPriceResponse.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

