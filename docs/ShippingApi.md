# GeinsSdkApiMgmtJavascript.ShippingApi

All URIs are relative to *https://mgmtapi.geins.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**captureParcelGroup**](ShippingApi.md#captureParcelGroup) | **PUT** /API/Shipping/ParcelGroup/{parcelGroupId}/Capture | Capture parcel group
[**createParcelGroup**](ShippingApi.md#createParcelGroup) | **POST** /API/Shipping/ParcelGroup | Create parcel group
[**deliverParcelGroup**](ShippingApi.md#deliverParcelGroup) | **PUT** /API/Shipping/ParcelGroup/{parcelGroupId}/Deliver | Deliver parcel group
[**queryParcelGroups**](ShippingApi.md#queryParcelGroups) | **POST** /API/Shipping/ParcelGroup/Query | Query parcel groups
[**queryShippingOptions**](ShippingApi.md#queryShippingOptions) | **POST** /API/Shipping/Query | Query shipping options



## captureParcelGroup

> BaseEnvelope captureParcelGroup(parcelGroupId)

Capture parcel group

Creates captures for a parcel group and signals capture events for them.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ShippingApi();
let parcelGroupId = 56; // Number | The id of the parcel group to capture.
apiInstance.captureParcelGroup(parcelGroupId, (error, data, response) => {
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
 **parcelGroupId** | **Number**| The id of the parcel group to capture. | 

### Return type

[**BaseEnvelope**](BaseEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createParcelGroup

> EnvelopeInt createParcelGroup(parcelGroupOptions)

Create parcel group

Creates a new parcel group.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ShippingApi();
let parcelGroupOptions = new GeinsSdkApiMgmtJavascript.ShippingModelsParcelGroupOptions(); // ShippingModelsParcelGroupOptions | Options for the new parcel group.
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

- **Content-Type**: application/json
- **Accept**: application/json


## deliverParcelGroup

> BaseEnvelope deliverParcelGroup(parcelGroupId, opts)

Deliver parcel group

Marks a parcel group as delivered. Does not signal capture events.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ShippingApi();
let parcelGroupId = 56; // Number | The id of the parcel group to deliver.
let opts = {
  'sendDeliveryEmail': true // Boolean | Set to true to also send delivery email.
};
apiInstance.deliverParcelGroup(parcelGroupId, opts, (error, data, response) => {
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
 **parcelGroupId** | **Number**| The id of the parcel group to deliver. | 
 **sendDeliveryEmail** | **Boolean**| Set to true to also send delivery email. | [optional] 

### Return type

[**BaseEnvelope**](BaseEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queryParcelGroups

> EnvelopeListShippingModelsReadParcelGroup queryParcelGroups(parcelGroupQuery)

Query parcel groups

Queries parcel groups.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ShippingApi();
let parcelGroupQuery = new GeinsSdkApiMgmtJavascript.ShippingModelsParcelGroupQuery(); // ShippingModelsParcelGroupQuery | 
apiInstance.queryParcelGroups(parcelGroupQuery, (error, data, response) => {
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
 **parcelGroupQuery** | [**ShippingModelsParcelGroupQuery**](ShippingModelsParcelGroupQuery.md)|  | 

### Return type

[**EnvelopeListShippingModelsReadParcelGroup**](EnvelopeListShippingModelsReadParcelGroup.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## queryShippingOptions

> [ShippingModelsShippingOption] queryShippingOptions(shippingQuery)

Query shipping options

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

let apiInstance = new GeinsSdkApiMgmtJavascript.ShippingApi();
let shippingQuery = new GeinsSdkApiMgmtJavascript.ShippingModelsShippingQuery(); // ShippingModelsShippingQuery | The query to filter shipping options by.
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

- **Content-Type**: application/json
- **Accept**: application/json

