# GeinsManagementApiSdkJs.PaymentApi

All URIs are relative to *https://mgmtapi.carismar.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**queryPaymentOptions**](PaymentApi.md#queryPaymentOptions) | **POST** /API/Payment/Query | Query payment options



## queryPaymentOptions

> [PaymentModelsPaymentOption] queryPaymentOptions(query)

Query payment options

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

let apiInstance = new GeinsManagementApiSdkJs.PaymentApi();
let query = new GeinsManagementApiSdkJs.PaymentModelsPaymentOptionQuery(); // PaymentModelsPaymentOptionQuery | The payment query
apiInstance.queryPaymentOptions(query, (error, data, response) => {
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
 **query** | [**PaymentModelsPaymentOptionQuery**](PaymentModelsPaymentOptionQuery.md)| The payment query | 

### Return type

[**[PaymentModelsPaymentOption]**](PaymentModelsPaymentOption.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml

