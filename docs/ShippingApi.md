# GeinsManagementApiSdkJs.ShippingApi

All URIs are relative to *https://mgmtapi.carismar.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createParcelGroup**](ShippingApi.md#createParcelGroup) | **POST** /API/Shipping/ParcelGroup | Create a new parcel group
[**queryShippingOptions**](ShippingApi.md#queryShippingOptions) | **POST** /API/Shipping/Query | Query shipping options



## createParcelGroup

> EnvelopeInt createParcelGroup(parcelGroupOptions)

Create a new parcel group

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

let apiInstance = new GeinsManagementApiSdkJs.ShippingApi();
let parcelGroupOptions = new GeinsManagementApiSdkJs.ShippingModelsParcelGroupOptions(); // ShippingModelsParcelGroupOptions | Options for the new parcel group.
apiInstance.createParcelGroup(parcelGroupOptions, (error, data, response) => {
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
 **parcelGroupOptions** | [**ShippingModelsParcelGroupOptions**](ShippingModelsParcelGroupOptions.md)| Options for the new parcel group. | 

### Return type

[**EnvelopeInt**](EnvelopeInt.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml


## queryShippingOptions

> [ShippingModelsShippingOption] queryShippingOptions(shippingQuery)

Query shipping options

No response envelope.

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

let apiInstance = new GeinsManagementApiSdkJs.ShippingApi();
let shippingQuery = new GeinsManagementApiSdkJs.ShippingModelsShippingQuery(); // ShippingModelsShippingQuery | The query to filter shipping options by.
apiInstance.queryShippingOptions(shippingQuery, (error, data, response) => {
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
 **shippingQuery** | [**ShippingModelsShippingQuery**](ShippingModelsShippingQuery.md)| The query to filter shipping options by. | 

### Return type

[**[ShippingModelsShippingOption]**](ShippingModelsShippingOption.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/xml, text/xml

