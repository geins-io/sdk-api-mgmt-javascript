# GeinsSdkApiMgmtJavascript.UserApi

All URIs are relative to *https://mgmtapi.geins.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUserBalance**](UserApi.md#addUserBalance) | **POST** /API/User/{userId}/Balance | Add user balance
[**createUserProfile**](UserApi.md#createUserProfile) | **POST** /API/User | Create user profile
[**deleteUserProfileEmail**](UserApi.md#deleteUserProfileEmail) | **DELETE** /API/User/{email} | Delete user profile (email)
[**deleteUserProfileId**](UserApi.md#deleteUserProfileId) | **DELETE** /API/User/{userId} | Delete user profile (id)
[**getUserBalance**](UserApi.md#getUserBalance) | **GET** /API/User/{userId}/Balance/{currency} | Get user balance
[**getUserBalanceTransactions**](UserApi.md#getUserBalanceTransactions) | **GET** /API/User/{userId}/BalanceTransaction/List/{currency} | Get user balance transactions
[**getUserBalanceTypes**](UserApi.md#getUserBalanceTypes) | **GET** /API/BalanceType/List | Get user balance types
[**getUserProfileEmail**](UserApi.md#getUserProfileEmail) | **GET** /API/User/{email} | Get user profile (email)
[**getUserProfileId**](UserApi.md#getUserProfileId) | **GET** /API/User/{userId} | Get user profile (id)
[**queryUserProfiles**](UserApi.md#queryUserProfiles) | **POST** /API/User/Query/{page} | Query user profiles
[**updateUserProfile**](UserApi.md#updateUserProfile) | **PATCH** /API/User/{userId} | Update user profile



## addUserBalance

> BaseEnvelope addUserBalance(userId, balanceTransaction)

Add user balance

Adds a balance transaction to a specific user.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.UserApi();
let userId = 56; // Number | 
let balanceTransaction = new GeinsSdkApiMgmtJavascript.UserModelsWriteBalanceTransaction(); // UserModelsWriteBalanceTransaction | 
apiInstance.addUserBalance(userId, balanceTransaction, (error, data, response) => {
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
 **userId** | **Number**|  | 
 **balanceTransaction** | [**UserModelsWriteBalanceTransaction**](UserModelsWriteBalanceTransaction.md)|  | 

### Return type

[**BaseEnvelope**](BaseEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createUserProfile

> EnvelopeUserModelsReadUserProfile createUserProfile(userProfile)

Create user profile

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

let apiInstance = new GeinsSdkApiMgmtJavascript.UserApi();
let userProfile = new GeinsSdkApiMgmtJavascript.UserModelsWriteUserProfile(); // UserModelsWriteUserProfile | The user profile
apiInstance.createUserProfile(userProfile, (error, data, response) => {
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
 **userProfile** | [**UserModelsWriteUserProfile**](UserModelsWriteUserProfile.md)| The user profile | 

### Return type

[**EnvelopeUserModelsReadUserProfile**](EnvelopeUserModelsReadUserProfile.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteUserProfileEmail

> BaseEnvelope deleteUserProfileEmail(email)

Delete user profile (email)

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

let apiInstance = new GeinsSdkApiMgmtJavascript.UserApi();
let email = "email_example"; // String | Email address
apiInstance.deleteUserProfileEmail(email, (error, data, response) => {
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
 **email** | **String**| Email address | 

### Return type

[**BaseEnvelope**](BaseEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteUserProfileId

> BaseEnvelope deleteUserProfileId(userId)

Delete user profile (id)

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

let apiInstance = new GeinsSdkApiMgmtJavascript.UserApi();
let userId = 56; // Number | The user id
apiInstance.deleteUserProfileId(userId, (error, data, response) => {
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
 **userId** | **Number**| The user id | 

### Return type

[**BaseEnvelope**](BaseEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserBalance

> EnvelopeUserModelsReadBalance getUserBalance(userId, currency)

Get user balance

Gets the balance for a specific user.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.UserApi();
let userId = 56; // Number | 
let currency = "currency_example"; // String | 
apiInstance.getUserBalance(userId, currency, (error, data, response) => {
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
 **userId** | **Number**|  | 
 **currency** | **String**|  | 

### Return type

[**EnvelopeUserModelsReadBalance**](EnvelopeUserModelsReadBalance.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserBalanceTransactions

> EnvelopeListUserModelsReadBalanceTransaction getUserBalanceTransactions(userId, currency)

Get user balance transactions

Gets all balance transactions for a specific user.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.UserApi();
let userId = 56; // Number | 
let currency = "currency_example"; // String | 
apiInstance.getUserBalanceTransactions(userId, currency, (error, data, response) => {
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
 **userId** | **Number**|  | 
 **currency** | **String**|  | 

### Return type

[**EnvelopeListUserModelsReadBalanceTransaction**](EnvelopeListUserModelsReadBalanceTransaction.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserBalanceTypes

> EnvelopeListUserModelsReadBalanceType getUserBalanceTypes()

Get user balance types

Gets all available balance types.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.UserApi();
apiInstance.getUserBalanceTypes((error, data, response) => {
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

[**EnvelopeListUserModelsReadBalanceType**](EnvelopeListUserModelsReadBalanceType.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserProfileEmail

> EnvelopeUserModelsReadUserProfile getUserProfileEmail(email)

Get user profile (email)

Gets a specific user profile via email.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.UserApi();
let email = "email_example"; // String | The user email.
apiInstance.getUserProfileEmail(email, (error, data, response) => {
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
 **email** | **String**| The user email. | 

### Return type

[**EnvelopeUserModelsReadUserProfile**](EnvelopeUserModelsReadUserProfile.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserProfileId

> EnvelopeUserModelsReadUserProfile getUserProfileId(userId)

Get user profile (id)

Gets a specific user profile via user id.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.UserApi();
let userId = 56; // Number | The user id.
apiInstance.getUserProfileId(userId, (error, data, response) => {
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
 **userId** | **Number**| The user id. | 

### Return type

[**EnvelopeUserModelsReadUserProfile**](EnvelopeUserModelsReadUserProfile.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queryUserProfiles

> PagedEnvelopeListUserModelsReadUserProfile queryUserProfiles(page, query)

Query user profiles

Queries user profiles and stores the result in a batch. Results are fetched from this batch one page at a time via subsequent requests.    BatchId is mandatory when fetching any page other than the first page.    If no BatchId is provided for the first page, a new batch is created and the id for that batch can be found in the response.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.UserApi();
let page = 56; // Number | The page to fetch. Omitting the page number will return the first page.
let query = new GeinsSdkApiMgmtJavascript.UserModelsUserProfileQuery(); // UserModelsUserProfileQuery | The details of the query.
apiInstance.queryUserProfiles(page, query, (error, data, response) => {
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
 **page** | **Number**| The page to fetch. Omitting the page number will return the first page. | 
 **query** | [**UserModelsUserProfileQuery**](UserModelsUserProfileQuery.md)| The details of the query. | 

### Return type

[**PagedEnvelopeListUserModelsReadUserProfile**](PagedEnvelopeListUserModelsReadUserProfile.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateUserProfile

> BaseEnvelope updateUserProfile(userId, user)

Update user profile

Updates a user profile.    Any fields not specified in the request or with null value will be left unchanged.

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

let apiInstance = new GeinsSdkApiMgmtJavascript.UserApi();
let userId = 56; // Number | The user id
let user = new GeinsSdkApiMgmtJavascript.UserModelsWriteUserProfile(); // UserModelsWriteUserProfile | The user profile
apiInstance.updateUserProfile(userId, user, (error, data, response) => {
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
 **userId** | **Number**| The user id | 
 **user** | [**UserModelsWriteUserProfile**](UserModelsWriteUserProfile.md)| The user profile | 

### Return type

[**BaseEnvelope**](BaseEnvelope.md)

### Authorization

[apiKey](../README.md#apiKey), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

