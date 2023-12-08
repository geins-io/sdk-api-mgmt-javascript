# GeinsSdkApiMgmtJavascript.MarketApi

All URIs are relative to *https://mgmtapi.geins.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMarket**](MarketApi.md#getMarket) | **GET** /API/Market/{marketId} | Get market
[**listMarkets**](MarketApi.md#listMarkets) | **GET** /API/Market/List | List markets



## getMarket

> EnvelopeMarketModelsMarket getMarket(marketId, opts)

Get market

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

let apiInstance = new GeinsSdkApiMgmtJavascript.MarketApi();
let marketId = "marketId_example"; // String | The id of the market to get.
let opts = {
  'marketIdType': 56 // Number | The type of market id supplied.    0 = Internal. Internal market id set by Geins.    1 = Name. The name of the market.
};
apiInstance.getMarket(marketId, opts, (error, data, response) => {
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
 **marketId** | **String**| The id of the market to get. | 
 **marketIdType** | **Number**| The type of market id supplied.    0 &#x3D; Internal. Internal market id set by Geins.    1 &#x3D; Name. The name of the market. | [optional] 

### Return type

[**EnvelopeMarketModelsMarket**](EnvelopeMarketModelsMarket.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMarkets

> [MarketModelsMarket] listMarkets()

List markets

Gets a list of all markets

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

let apiInstance = new GeinsSdkApiMgmtJavascript.MarketApi();
apiInstance.listMarkets((error, data, response) => {
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

[**[MarketModelsMarket]**](MarketModelsMarket.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

