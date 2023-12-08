[![NPM Package][npm]][npm-url]
[![NPM Downloads][npm-downloads-per-month]][npm-trends]
# Introduction

Javascript ApiClient for Geins Managemet API

Geins Management API is an RESTful api to power your applications who manages your geins services. Geins provides an easy-to-use and scalable solution for managing all aspects of an online store, from product listings and customer information to order processing and payment transactions. 

## Getting started
Once you have created an account, you can start using the Management API by creating an `API key`. You can create as many API keys as you need. Each `API key` is connected to a specific account so you can keep track of operations and manage keys. You can find your `API key` in the `geins merchant center`. 

### Fast track
Use one of our [SDKs](https://docs.geins.io/docs/sdk/introduction) to get started quickly. The SDKs are available for the most popular programming languages and frameworks.

## Installation

### For [Node.js](https://nodejs.org/)


Install it via:

```shell
npm install @geins/sdk-api-mgmt-javascript --save
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var GeinsManagementApiSdkJs = require('@geins/sdk-api-mgmt-javascript');

var defaultClient = GeinsManagementApiSdkJs.ApiClient.instance;
// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix['x-apikey'] = "Token"
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var api = new GeinsManagementApiSdkJs.BrandApi()
var brand = new GeinsManagementApiSdkJs.BrandModelsWriteBrand(); // {BrandModelsWriteBrand} The brand to create.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createBrand(brand, callback);

```

## API Endpoints

All URIs are relative to *https://mgmtapi.geins.io*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*GeinsSdkApiMgmtJavascript.BrandApi* | [**createBrand**](docs/BrandApi.md#createBrand) | **POST** /API/Brand | Create brand
*GeinsSdkApiMgmtJavascript.BrandApi* | [**getBrand**](docs/BrandApi.md#getBrand) | **GET** /API/Brand/{id} | Get brand
*GeinsSdkApiMgmtJavascript.BrandApi* | [**queryBrands**](docs/BrandApi.md#queryBrands) | **POST** /API/Brand/Query | Query brands
*GeinsSdkApiMgmtJavascript.BrandApi* | [**updateBrand**](docs/BrandApi.md#updateBrand) | **PUT** /API/Brand/{id} | Update brand
*GeinsSdkApiMgmtJavascript.CategoryApi* | [**createCategory**](docs/CategoryApi.md#createCategory) | **POST** /API/Category | Create category
*GeinsSdkApiMgmtJavascript.CategoryApi* | [**getCategory**](docs/CategoryApi.md#getCategory) | **GET** /API/Category/{id} | Get category
*GeinsSdkApiMgmtJavascript.CategoryApi* | [**queryCategories**](docs/CategoryApi.md#queryCategories) | **POST** /API/Category/Query | Query categories
*GeinsSdkApiMgmtJavascript.CategoryApi* | [**updateCategory**](docs/CategoryApi.md#updateCategory) | **PUT** /API/Category/{id} | Update category
*GeinsSdkApiMgmtJavascript.MarketApi* | [**getMarket**](docs/MarketApi.md#getMarket) | **GET** /API/Market/{marketId} | Get market
*GeinsSdkApiMgmtJavascript.MarketApi* | [**listMarkets**](docs/MarketApi.md#listMarkets) | **GET** /API/Market/List | List markets
*GeinsSdkApiMgmtJavascript.OrderApi* | [**addOrderComment**](docs/OrderApi.md#addOrderComment) | **POST** /API/Order/{id}/Comment | Add order comment
*GeinsSdkApiMgmtJavascript.OrderApi* | [**cancelOrderRow**](docs/OrderApi.md#cancelOrderRow) | **DELETE** /API/Order/{orderId}/OrderRow/{orderRowId} | Cancel order row
*GeinsSdkApiMgmtJavascript.OrderApi* | [**countOrders**](docs/OrderApi.md#countOrders) | **GET** /API/Order/Count/{email} | Count orders
*GeinsSdkApiMgmtJavascript.OrderApi* | [**createOrder**](docs/OrderApi.md#createOrder) | **POST** /API/Order | Create order
*GeinsSdkApiMgmtJavascript.OrderApi* | [**createOrderId**](docs/OrderApi.md#createOrderId) | **POST** /API/Order/Id | Create order id
*GeinsSdkApiMgmtJavascript.OrderApi* | [**deleteOrder**](docs/OrderApi.md#deleteOrder) | **DELETE** /API/Order/{id} | Delete order
*GeinsSdkApiMgmtJavascript.OrderApi* | [**getCapture**](docs/OrderApi.md#getCapture) | **GET** /API/Order/Capture/{captureId} | Get capture
*GeinsSdkApiMgmtJavascript.OrderApi* | [**getOrderId**](docs/OrderApi.md#getOrderId) | **GET** /API/Order/{id}/{include} | Get order (id)
*GeinsSdkApiMgmtJavascript.OrderApi* | [**getOrderPublicId**](docs/OrderApi.md#getOrderPublicId) | **GET** /API/OrderByPublicId/{publicId}/{include} | Get order (public id)
*GeinsSdkApiMgmtJavascript.OrderApi* | [**getOrderStatuses**](docs/OrderApi.md#getOrderStatuses) | **GET** /API/Order/Statuses | Get order statuses
*GeinsSdkApiMgmtJavascript.OrderApi* | [**partialUpdateOfOrder**](docs/OrderApi.md#partialUpdateOfOrder) | **PATCH** /API/Order/{id} | Partial update of an order
*GeinsSdkApiMgmtJavascript.OrderApi* | [**queryOrders**](docs/OrderApi.md#queryOrders) | **POST** /API/Order/Query | Query orders
*GeinsSdkApiMgmtJavascript.OrderApi* | [**setCaptureAsProcessed**](docs/OrderApi.md#setCaptureAsProcessed) | **POST** /API/Order/Capture/SetAsProcessed | Set capture as processed
*GeinsSdkApiMgmtJavascript.OrderApi* | [**setPaymentAsPaid**](docs/OrderApi.md#setPaymentAsPaid) | **POST** /API/Order/PaymentDetail/{paymentDetailId}/SetAsPaid | Set payment as paid
*GeinsSdkApiMgmtJavascript.OrderApi* | [**updateOrderStatus**](docs/OrderApi.md#updateOrderStatus) | **POST** /API/Order/{id}/Status/{status}/{transactionId}/{secondaryTransactionId} | Update order status
*GeinsSdkApiMgmtJavascript.OrderApi* | [**updateTransactionData**](docs/OrderApi.md#updateTransactionData) | **POST** /API/Order/{id}/TransactionData | Update transaction data
*GeinsSdkApiMgmtJavascript.OrderApi* | [**validateOrder**](docs/OrderApi.md#validateOrder) | **POST** /API/Order/ValidateCreation | Validate order
*GeinsSdkApiMgmtJavascript.PageAreaApi* | [**createUpdatePageArea**](docs/PageAreaApi.md#createUpdatePageArea) | **POST** /API/PageArea | Create/update page area
*GeinsSdkApiMgmtJavascript.PageAreaApi* | [**createUpdatePageAreaFamily**](docs/PageAreaApi.md#createUpdatePageAreaFamily) | **POST** /API/PageAreaFamily | Create/update page area family
*GeinsSdkApiMgmtJavascript.PageAreaApi* | [**getPageArea**](docs/PageAreaApi.md#getPageArea) | **GET** /API/PageArea/{name} | Get page area
*GeinsSdkApiMgmtJavascript.PageAreaApi* | [**getPageAreaFamily**](docs/PageAreaApi.md#getPageAreaFamily) | **GET** /API/PageAreaFamily/{familyId} | Get page area family
*GeinsSdkApiMgmtJavascript.PageAreaApi* | [**listPageAreaFamilies**](docs/PageAreaApi.md#listPageAreaFamilies) | **GET** /API/PageAreaFamily/List | List page area families
*GeinsSdkApiMgmtJavascript.PaymentApi* | [**queryPaymentOptions**](docs/PaymentApi.md#queryPaymentOptions) | **POST** /API/Payment/Query | Query payment options
*GeinsSdkApiMgmtJavascript.PriceListApi* | [**listPriceLists**](docs/PriceListApi.md#listPriceLists) | **GET** /API/PriceList/List | List price lists
*GeinsSdkApiMgmtJavascript.PriceListApi* | [**updatePriceListPrices**](docs/PriceListApi.md#updatePriceListPrices) | **PUT** /API/PriceList/Price | Update price list prices
*GeinsSdkApiMgmtJavascript.ProductApi* | [**addAvailabilityMonitor**](docs/ProductApi.md#addAvailabilityMonitor) | **POST** /API/Product/MonitorAvailability | Add availability monitor
*GeinsSdkApiMgmtJavascript.ProductApi* | [**addCategoryToProduct**](docs/ProductApi.md#addCategoryToProduct) | **PUT** /API/Product/{productId}/Category | Add category to product
*GeinsSdkApiMgmtJavascript.ProductApi* | [**addRelatedProductsToProduct**](docs/ProductApi.md#addRelatedProductsToProduct) | **PUT** /API/Product/{productId}/Related | Add related products to a product
*GeinsSdkApiMgmtJavascript.ProductApi* | [**createProduct**](docs/ProductApi.md#createProduct) | **POST** /API/Product | Create product
*GeinsSdkApiMgmtJavascript.ProductApi* | [**createProductItem**](docs/ProductApi.md#createProductItem) | **POST** /API/Product/{productId}/Item | Create product item
*GeinsSdkApiMgmtJavascript.ProductApi* | [**deleteProduct**](docs/ProductApi.md#deleteProduct) | **DELETE** /API/Product/{productId} | Delete product
*GeinsSdkApiMgmtJavascript.ProductApi* | [**getProduct**](docs/ProductApi.md#getProduct) | **GET** /API/Product/{productId} | Get product
*GeinsSdkApiMgmtJavascript.ProductApi* | [**getProductItem**](docs/ProductApi.md#getProductItem) | **GET** /API/Product/Item/{itemId} | Get product item
*GeinsSdkApiMgmtJavascript.ProductApi* | [**linkRelatedProducts**](docs/ProductApi.md#linkRelatedProducts) | **PUT** /API/Product/{productId}/Related/{relationTypeId} | Link related products
*GeinsSdkApiMgmtJavascript.ProductApi* | [**listFeeds**](docs/ProductApi.md#listFeeds) | **GET** /API/Product/Feeds | List feeds
*GeinsSdkApiMgmtJavascript.ProductApi* | [**listProductItems**](docs/ProductApi.md#listProductItems) | **GET** /API/Product/Items | List product items
*GeinsSdkApiMgmtJavascript.ProductApi* | [**listProductItemsPaged**](docs/ProductApi.md#listProductItemsPaged) | **GET** /API/Product/Items/{page} | List product items (paged)
*GeinsSdkApiMgmtJavascript.ProductApi* | [**listProductRelationTypes**](docs/ProductApi.md#listProductRelationTypes) | **GET** /API/Product/RelationTypes | List product relation types
*GeinsSdkApiMgmtJavascript.ProductApi* | [**queryProducts**](docs/ProductApi.md#queryProducts) | **POST** /API/Product/Query | Query products
*GeinsSdkApiMgmtJavascript.ProductApi* | [**queryProductsPaged**](docs/ProductApi.md#queryProductsPaged) | **POST** /API/Product/Query/{page} | Query products (paged)
*GeinsSdkApiMgmtJavascript.ProductApi* | [**queryStock**](docs/ProductApi.md#queryStock) | **POST** /API/Product/Stock/Query | Query stock
*GeinsSdkApiMgmtJavascript.ProductApi* | [**unlinkRelatedProductsViaRelation**](docs/ProductApi.md#unlinkRelatedProductsViaRelation) | **PUT** /API/Product/{productId}/UnlinkRelated/{relationTypeId} | Unlink related products (via relation).
*GeinsSdkApiMgmtJavascript.ProductApi* | [**updateProduct**](docs/ProductApi.md#updateProduct) | **PUT** /API/Product/{productId} | Update product
*GeinsSdkApiMgmtJavascript.ProductApi* | [**updateProductItem**](docs/ProductApi.md#updateProductItem) | **PUT** /API/Product/Item/{itemId} | Update product item
*GeinsSdkApiMgmtJavascript.ProductApi* | [**updateProductItemsBatch**](docs/ProductApi.md#updateProductItemsBatch) | **PUT** /API/Product/Items | Update product items (batch)
*GeinsSdkApiMgmtJavascript.ProductApi* | [**updateStockBatch**](docs/ProductApi.md#updateStockBatch) | **PUT** /API/Product/Stock | Update stock (batch)
*GeinsSdkApiMgmtJavascript.ProductImageApi* | [**addProductImage**](docs/ProductImageApi.md#addProductImage) | **POST** /API/Product/{productId}/Image/{imageName} | Add product image
*GeinsSdkApiMgmtJavascript.ProductImageApi* | [**addUpdateProductImage**](docs/ProductImageApi.md#addUpdateProductImage) | **PUT** /API/Product/{productId}/Image/{imageName} | Add/update product image
*GeinsSdkApiMgmtJavascript.ProductImageApi* | [**deleteProductImage**](docs/ProductImageApi.md#deleteProductImage) | **DELETE** /API/Product/{productId}/Image/{imageName} | Delete product image
*GeinsSdkApiMgmtJavascript.ProductParameterApi* | [**createOrUpdateProductParameterValue**](docs/ProductParameterApi.md#createOrUpdateProductParameterValue) | **POST** /API/ProductParameter/Value | Create/update product parameter value
*GeinsSdkApiMgmtJavascript.ProductParameterApi* | [**createProductParameter**](docs/ProductParameterApi.md#createProductParameter) | **POST** /API/ProductParameter | Create product parameter
*GeinsSdkApiMgmtJavascript.ProductParameterApi* | [**createProductParameterGroup**](docs/ProductParameterApi.md#createProductParameterGroup) | **POST** /API/ProductParameter/Group | Create product parameter group
*GeinsSdkApiMgmtJavascript.ProductParameterApi* | [**createProductParameterPredefinedValue**](docs/ProductParameterApi.md#createProductParameterPredefinedValue) | **POST** /API/ProductParameter/PredefinedValue | Create product parameter predefined value
*GeinsSdkApiMgmtJavascript.ProductParameterApi* | [**getProductParameter**](docs/ProductParameterApi.md#getProductParameter) | **GET** /API/ProductParameter/{id} | Get product parameter
*GeinsSdkApiMgmtJavascript.ProductParameterApi* | [**getProductParameterGroup**](docs/ProductParameterApi.md#getProductParameterGroup) | **GET** /API/ProductParameter/Group/{id} | Get product parameter group
*GeinsSdkApiMgmtJavascript.ProductParameterApi* | [**getProductParameterPredefinedValue**](docs/ProductParameterApi.md#getProductParameterPredefinedValue) | **GET** /API/ProductParameter/PredefinedValue/{id} | Get product parameter predefined value
*GeinsSdkApiMgmtJavascript.ProductParameterApi* | [**getProductParameterValue**](docs/ProductParameterApi.md#getProductParameterValue) | **GET** /API/ProductParameter/Value/{id} | Get product parameter value
*GeinsSdkApiMgmtJavascript.ProductParameterApi* | [**replaceProductParameterValuesBatch**](docs/ProductParameterApi.md#replaceProductParameterValuesBatch) | **POST** /API/ProductParameter/Values | Replace product parameter values (batch)
*GeinsSdkApiMgmtJavascript.ProductParameterApi* | [**updateProductParameter**](docs/ProductParameterApi.md#updateProductParameter) | **PUT** /API/ProductParameter/{id} | Update product parameter
*GeinsSdkApiMgmtJavascript.ProductParameterApi* | [**updateProductParameterGroup**](docs/ProductParameterApi.md#updateProductParameterGroup) | **PUT** /API/ProductParameter/Group/{id} | Update product parameter group
*GeinsSdkApiMgmtJavascript.ProductParameterApi* | [**updateProductParameterValuesBatch**](docs/ProductParameterApi.md#updateProductParameterValuesBatch) | **PUT** /API/ProductParameter/Values | Update product parameter values (batch)
*GeinsSdkApiMgmtJavascript.RefundApi* | [**createRefund**](docs/RefundApi.md#createRefund) | **POST** /API/Order/{orderId}/Refund | Creates refund
*GeinsSdkApiMgmtJavascript.RefundApi* | [**deleteRefundRow**](docs/RefundApi.md#deleteRefundRow) | **DELETE** /API/Order/{orderId}/Refund/{refundId}/RefundRow/{refundRowId} | Delete refund row
*GeinsSdkApiMgmtJavascript.RefundApi* | [**getRefund**](docs/RefundApi.md#getRefund) | **GET** /API/Order/{orderId}/Refund/{refundId} | Get refund
*GeinsSdkApiMgmtJavascript.RefundApi* | [**listRefunds**](docs/RefundApi.md#listRefunds) | **GET** /API/Order/{orderId}/Refund/List | List refunds
*GeinsSdkApiMgmtJavascript.RefundApi* | [**queryRefunds**](docs/RefundApi.md#queryRefunds) | **POST** /API/Refund/Query | Query refunds
*GeinsSdkApiMgmtJavascript.RefundApi* | [**setRefundApproval**](docs/RefundApi.md#setRefundApproval) | **POST** /API/Order/{orderId}/Refund/{refundId}/SetApproval | Set refund approval
*GeinsSdkApiMgmtJavascript.RefundApi* | [**setRefundAsProcessed**](docs/RefundApi.md#setRefundAsProcessed) | **POST** /API/Order/{orderId}/Refund/{refundId}/SetAsProcessed | Set refund as processed
*GeinsSdkApiMgmtJavascript.RefundApi* | [**setRefundAsSettled**](docs/RefundApi.md#setRefundAsSettled) | **POST** /API/Order/{orderId}/Refund/{refundId}/SetAsSettled | Set refund as settled
*GeinsSdkApiMgmtJavascript.RefundApi* | [**setRefundRowAsSettled**](docs/RefundApi.md#setRefundRowAsSettled) | **POST** /API/Order/{orderId}/Refund/{refundId}/RefundRow/{refundRowId}/SetAsSettled | Set refund row as settled
*GeinsSdkApiMgmtJavascript.ReturnApi* | [**createReturn**](docs/ReturnApi.md#createReturn) | **POST** /API/Order/{orderId}/Return | Create return
*GeinsSdkApiMgmtJavascript.ReturnApi* | [**getReturn**](docs/ReturnApi.md#getReturn) | **GET** /API/Order/{orderId}/Return/{returnId} | Get return
*GeinsSdkApiMgmtJavascript.ReturnApi* | [**listReturnCodes**](docs/ReturnApi.md#listReturnCodes) | **GET** /API/ReturnCode/List | List return codes
*GeinsSdkApiMgmtJavascript.ReturnApi* | [**listReturns**](docs/ReturnApi.md#listReturns) | **GET** /API/Order/{orderId}/Return/List | List returns
*GeinsSdkApiMgmtJavascript.ShippingApi* | [**captureParcelGroup**](docs/ShippingApi.md#captureParcelGroup) | **PUT** /API/Shipping/ParcelGroup/{parcelGroupId}/Capture | Capture parcel group
*GeinsSdkApiMgmtJavascript.ShippingApi* | [**createParcelGroup**](docs/ShippingApi.md#createParcelGroup) | **POST** /API/Shipping/ParcelGroup | Create parcel group
*GeinsSdkApiMgmtJavascript.ShippingApi* | [**deliverParcelGroup**](docs/ShippingApi.md#deliverParcelGroup) | **PUT** /API/Shipping/ParcelGroup/{parcelGroupId}/Deliver | Deliver parcel group
*GeinsSdkApiMgmtJavascript.ShippingApi* | [**queryParcelGroups**](docs/ShippingApi.md#queryParcelGroups) | **POST** /API/Shipping/ParcelGroup/Query | Query parcel groups
*GeinsSdkApiMgmtJavascript.ShippingApi* | [**queryShippingOptions**](docs/ShippingApi.md#queryShippingOptions) | **POST** /API/Shipping/Query | Query shipping options
*GeinsSdkApiMgmtJavascript.SupplierApi* | [**createSupplier**](docs/SupplierApi.md#createSupplier) | **POST** /API/Supplier | Create supplier
*GeinsSdkApiMgmtJavascript.SupplierApi* | [**getSupplier**](docs/SupplierApi.md#getSupplier) | **GET** /API/Supplier/{id} | Get supplier
*GeinsSdkApiMgmtJavascript.SupplierApi* | [**querySuppliers**](docs/SupplierApi.md#querySuppliers) | **POST** /API/Supplier/Query | Query suppliers
*GeinsSdkApiMgmtJavascript.SupplierApi* | [**updateSupplier**](docs/SupplierApi.md#updateSupplier) | **PUT** /API/Supplier/{id} | Update supplier
*GeinsSdkApiMgmtJavascript.UserApi* | [**addUserBalance**](docs/UserApi.md#addUserBalance) | **POST** /API/User/{userId}/Balance | Add user balance
*GeinsSdkApiMgmtJavascript.UserApi* | [**createUserProfile**](docs/UserApi.md#createUserProfile) | **POST** /API/User | Create user profile
*GeinsSdkApiMgmtJavascript.UserApi* | [**deleteUserProfileEmail**](docs/UserApi.md#deleteUserProfileEmail) | **DELETE** /API/User/{email} | Delete user profile (email)
*GeinsSdkApiMgmtJavascript.UserApi* | [**deleteUserProfileId**](docs/UserApi.md#deleteUserProfileId) | **DELETE** /API/User/{userId} | Delete user profile (id)
*GeinsSdkApiMgmtJavascript.UserApi* | [**getUserBalance**](docs/UserApi.md#getUserBalance) | **GET** /API/User/{userId}/Balance/{currency} | Get user balance
*GeinsSdkApiMgmtJavascript.UserApi* | [**getUserBalanceTransactions**](docs/UserApi.md#getUserBalanceTransactions) | **GET** /API/User/{userId}/BalanceTransaction/List/{currency} | Get user balance transactions
*GeinsSdkApiMgmtJavascript.UserApi* | [**getUserBalanceTypes**](docs/UserApi.md#getUserBalanceTypes) | **GET** /API/BalanceType/List | Get user balance types
*GeinsSdkApiMgmtJavascript.UserApi* | [**getUserProfileEmail**](docs/UserApi.md#getUserProfileEmail) | **GET** /API/User/{email} | Get user profile (email)
*GeinsSdkApiMgmtJavascript.UserApi* | [**getUserProfileId**](docs/UserApi.md#getUserProfileId) | **GET** /API/User/{userId} | Get user profile (id)
*GeinsSdkApiMgmtJavascript.UserApi* | [**queryUserProfiles**](docs/UserApi.md#queryUserProfiles) | **POST** /API/User/Query/{page} | Query user profiles
*GeinsSdkApiMgmtJavascript.UserApi* | [**updateUserProfile**](docs/UserApi.md#updateUserProfile) | **PATCH** /API/User/{userId} | Update user profile
*GeinsSdkApiMgmtJavascript.VariantApi* | [**addProductToVariantGroup**](docs/VariantApi.md#addProductToVariantGroup) | **PUT** /API/VariantGroup/{groupId}/{productId} | Add product to variant group
*GeinsSdkApiMgmtJavascript.VariantApi* | [**addProductToVariantGroupProduct**](docs/VariantApi.md#addProductToVariantGroupProduct) | **PUT** /API/Variant/{productId1}/{productId2} | Add product to variant group (product)
*GeinsSdkApiMgmtJavascript.VariantApi* | [**createVariantGroup**](docs/VariantApi.md#createVariantGroup) | **POST** /API/VariantGroup | Create variant group
*GeinsSdkApiMgmtJavascript.VariantApi* | [**createVariantGroupProduct**](docs/VariantApi.md#createVariantGroupProduct) | **POST** /API/Variant/{productId}/VariantGroup | Create variant group (product)
*GeinsSdkApiMgmtJavascript.VariantApi* | [**deleteVariantGroupGroupId**](docs/VariantApi.md#deleteVariantGroupGroupId) | **DELETE** /API/VariantGroup/{groupId} | Delete variant group (group id)
*GeinsSdkApiMgmtJavascript.VariantApi* | [**deleteVariantGroupProductId**](docs/VariantApi.md#deleteVariantGroupProductId) | **DELETE** /API/Variant/{productId}/VariantGroup | Delete variant group (product id)
*GeinsSdkApiMgmtJavascript.VariantApi* | [**getVariantGroupGroupId**](docs/VariantApi.md#getVariantGroupGroupId) | **GET** /API/VariantGroup/{groupId} | Get variant group (group id)
*GeinsSdkApiMgmtJavascript.VariantApi* | [**getVariantGroupProductId**](docs/VariantApi.md#getVariantGroupProductId) | **GET** /API/Variant/{productId}/VariantGroup | Get variant group (product id)
*GeinsSdkApiMgmtJavascript.VariantApi* | [**getVariantLabels**](docs/VariantApi.md#getVariantLabels) | **GET** /API/Variant/Labels | Get variant labels
*GeinsSdkApiMgmtJavascript.VariantApi* | [**removeProductFromVariantGroup**](docs/VariantApi.md#removeProductFromVariantGroup) | **DELETE** /API/Variant/{productId} | Remove product from variant group
*GeinsSdkApiMgmtJavascript.VariantApi* | [**updateVariant**](docs/VariantApi.md#updateVariant) | **PUT** /API/Variant/{productId} | Update variant
*GeinsSdkApiMgmtJavascript.VariantApi* | [**updateVariantGroup**](docs/VariantApi.md#updateVariantGroup) | **PUT** /API/VariantGroup/{groupId} | Update variant group
*GeinsSdkApiMgmtJavascript.WebhookApi* | [**createWebhook**](docs/WebhookApi.md#createWebhook) | **POST** /API/Webhook | Create webhook
*GeinsSdkApiMgmtJavascript.WebhookApi* | [**deleteWebhook**](docs/WebhookApi.md#deleteWebhook) | **DELETE** /API/Webhook/{webhookId} | Delete webhook
*GeinsSdkApiMgmtJavascript.WebhookApi* | [**getWebhook**](docs/WebhookApi.md#getWebhook) | **GET** /API/Webhook/{webhookId} | Get webhook
*GeinsSdkApiMgmtJavascript.WebhookApi* | [**listWebhooks**](docs/WebhookApi.md#listWebhooks) | **GET** /API/Webhook/List | List webhooks
*GeinsSdkApiMgmtJavascript.WebhookApi* | [**updateWebhook**](docs/WebhookApi.md#updateWebhook) | **PUT** /API/Webhook/{webhookId} | Update webhook


## Models

 - [GeinsSdkApiMgmtJavascript.APIOrderOrderComment](docs/APIOrderOrderComment.md)
 - [GeinsSdkApiMgmtJavascript.APIOrderOrderCreationValidationStatus](docs/APIOrderOrderCreationValidationStatus.md)
 - [GeinsSdkApiMgmtJavascript.APIOrderTransactionData](docs/APIOrderTransactionData.md)
 - [GeinsSdkApiMgmtJavascript.BaseEnvelope](docs/BaseEnvelope.md)
 - [GeinsSdkApiMgmtJavascript.BrandModelsBrandQuery](docs/BrandModelsBrandQuery.md)
 - [GeinsSdkApiMgmtJavascript.BrandModelsReadBrand](docs/BrandModelsReadBrand.md)
 - [GeinsSdkApiMgmtJavascript.BrandModelsWriteBrand](docs/BrandModelsWriteBrand.md)
 - [GeinsSdkApiMgmtJavascript.CategoryModelsCategoryQuery](docs/CategoryModelsCategoryQuery.md)
 - [GeinsSdkApiMgmtJavascript.CategoryModelsReadCategory](docs/CategoryModelsReadCategory.md)
 - [GeinsSdkApiMgmtJavascript.CategoryModelsWriteCategory](docs/CategoryModelsWriteCategory.md)
 - [GeinsSdkApiMgmtJavascript.ContainerRestrictionSetupContainerRestrictionConfiguration](docs/ContainerRestrictionSetupContainerRestrictionConfiguration.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeAPIOrderOrderCreationValidationStatus](docs/EnvelopeAPIOrderOrderCreationValidationStatus.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeBrandModelsReadBrand](docs/EnvelopeBrandModelsReadBrand.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeCategoryModelsReadCategory](docs/EnvelopeCategoryModelsReadCategory.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeGeinsWebhookItem](docs/EnvelopeGeinsWebhookItem.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeInt](docs/EnvelopeInt.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeListBrandModelsReadBrand](docs/EnvelopeListBrandModelsReadBrand.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeListGeinsWebhookItem](docs/EnvelopeListGeinsWebhookItem.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeListPageAreaModelsReadPageAreaFamily](docs/EnvelopeListPageAreaModelsReadPageAreaFamily.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeListProductModelsReadFeed](docs/EnvelopeListProductModelsReadFeed.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeListProductModelsReadProductItem](docs/EnvelopeListProductModelsReadProductItem.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeListProductModelsReadProductItemStock](docs/EnvelopeListProductModelsReadProductItemStock.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeListProductModelsReadRelationType](docs/EnvelopeListProductModelsReadRelationType.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeListRefund](docs/EnvelopeListRefund.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeListReturn](docs/EnvelopeListReturn.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeListReturnCode](docs/EnvelopeListReturnCode.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeListShippingModelsReadParcelGroup](docs/EnvelopeListShippingModelsReadParcelGroup.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeListSystemString](docs/EnvelopeListSystemString.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeListUserModelsReadBalanceTransaction](docs/EnvelopeListUserModelsReadBalanceTransaction.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeListUserModelsReadBalanceType](docs/EnvelopeListUserModelsReadBalanceType.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeListVariantModelsReadVariant](docs/EnvelopeListVariantModelsReadVariant.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeMarketModelsMarket](docs/EnvelopeMarketModelsMarket.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeNullableGuid](docs/EnvelopeNullableGuid.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeNullableInt](docs/EnvelopeNullableInt.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeNullableSystemBoolean](docs/EnvelopeNullableSystemBoolean.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeOrderCapture](docs/EnvelopeOrderCapture.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopePageAreaModelsReadPageArea](docs/EnvelopePageAreaModelsReadPageArea.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopePageAreaModelsReadPageAreaFamily](docs/EnvelopePageAreaModelsReadPageAreaFamily.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeProductModelsReadProduct](docs/EnvelopeProductModelsReadProduct.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeProductModelsReadProductItem](docs/EnvelopeProductModelsReadProductItem.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeProductModelsReadProductItemResult](docs/EnvelopeProductModelsReadProductItemResult.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeProductModelsReadUploadedImage](docs/EnvelopeProductModelsReadUploadedImage.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeProductParameterModelsReadProductParameter](docs/EnvelopeProductParameterModelsReadProductParameter.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeProductParameterModelsReadProductParameterGroup](docs/EnvelopeProductParameterModelsReadProductParameterGroup.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeProductParameterModelsReadProductParameterPredefinedValue](docs/EnvelopeProductParameterModelsReadProductParameterPredefinedValue.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeProductParameterModelsReadProductParameterValue](docs/EnvelopeProductParameterModelsReadProductParameterValue.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeRefund](docs/EnvelopeRefund.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeReturn](docs/EnvelopeReturn.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeSupplierModelsReadSupplier](docs/EnvelopeSupplierModelsReadSupplier.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeUserModelsReadBalance](docs/EnvelopeUserModelsReadBalance.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeUserModelsReadUserProfile](docs/EnvelopeUserModelsReadUserProfile.md)
 - [GeinsSdkApiMgmtJavascript.EnvelopeVariantModelsReadVariantGroup](docs/EnvelopeVariantModelsReadVariantGroup.md)
 - [GeinsSdkApiMgmtJavascript.GeinsWebhookItem](docs/GeinsWebhookItem.md)
 - [GeinsSdkApiMgmtJavascript.MarketModelsMarket](docs/MarketModelsMarket.md)
 - [GeinsSdkApiMgmtJavascript.NewReturnRow](docs/NewReturnRow.md)
 - [GeinsSdkApiMgmtJavascript.NullableValidationConfiguration](docs/NullableValidationConfiguration.md)
 - [GeinsSdkApiMgmtJavascript.OrderCapture](docs/OrderCapture.md)
 - [GeinsSdkApiMgmtJavascript.OrderCaptureRow](docs/OrderCaptureRow.md)
 - [GeinsSdkApiMgmtJavascript.OrderCheckoutOrder](docs/OrderCheckoutOrder.md)
 - [GeinsSdkApiMgmtJavascript.OrderCheckoutOrderRow](docs/OrderCheckoutOrderRow.md)
 - [GeinsSdkApiMgmtJavascript.OrderFreightClass](docs/OrderFreightClass.md)
 - [GeinsSdkApiMgmtJavascript.OrderModelsAddress](docs/OrderModelsAddress.md)
 - [GeinsSdkApiMgmtJavascript.OrderModelsOrder](docs/OrderModelsOrder.md)
 - [GeinsSdkApiMgmtJavascript.OrderModelsOrderQuery](docs/OrderModelsOrderQuery.md)
 - [GeinsSdkApiMgmtJavascript.OrderModelsOrderRefund](docs/OrderModelsOrderRefund.md)
 - [GeinsSdkApiMgmtJavascript.OrderModelsOrderRow](docs/OrderModelsOrderRow.md)
 - [GeinsSdkApiMgmtJavascript.OrderModelsOrderStatus](docs/OrderModelsOrderStatus.md)
 - [GeinsSdkApiMgmtJavascript.OrderModelsOrderUpdate](docs/OrderModelsOrderUpdate.md)
 - [GeinsSdkApiMgmtJavascript.OrderModelsPaymentDetail](docs/OrderModelsPaymentDetail.md)
 - [GeinsSdkApiMgmtJavascript.OrderModelsShippingDetail](docs/OrderModelsShippingDetail.md)
 - [GeinsSdkApiMgmtJavascript.OrderProcessedCapture](docs/OrderProcessedCapture.md)
 - [GeinsSdkApiMgmtJavascript.OrderRefundModelsWriteNewRefund](docs/OrderRefundModelsWriteNewRefund.md)
 - [GeinsSdkApiMgmtJavascript.OrderRefundModelsWriteProcessedRefund](docs/OrderRefundModelsWriteProcessedRefund.md)
 - [GeinsSdkApiMgmtJavascript.OrderRefundModelsWriteRefundApproval](docs/OrderRefundModelsWriteRefundApproval.md)
 - [GeinsSdkApiMgmtJavascript.OrderRefundModelsWriteSettledRefund](docs/OrderRefundModelsWriteSettledRefund.md)
 - [GeinsSdkApiMgmtJavascript.OrderRefundModelsWriteSettledRefundRow](docs/OrderRefundModelsWriteSettledRefundRow.md)
 - [GeinsSdkApiMgmtJavascript.OrderReturnModelsWriteNewReturn](docs/OrderReturnModelsWriteNewReturn.md)
 - [GeinsSdkApiMgmtJavascript.OrderValidateOrderCreationRequest](docs/OrderValidateOrderCreationRequest.md)
 - [GeinsSdkApiMgmtJavascript.OrderValidateOrderCreationRequestStockItem](docs/OrderValidateOrderCreationRequestStockItem.md)
 - [GeinsSdkApiMgmtJavascript.PageAreaModelsReadPageArea](docs/PageAreaModelsReadPageArea.md)
 - [GeinsSdkApiMgmtJavascript.PageAreaModelsReadPageAreaFamily](docs/PageAreaModelsReadPageAreaFamily.md)
 - [GeinsSdkApiMgmtJavascript.PageAreaModelsReadPageWidget](docs/PageAreaModelsReadPageWidget.md)
 - [GeinsSdkApiMgmtJavascript.PageAreaModelsReadPageWidgetContainer](docs/PageAreaModelsReadPageWidgetContainer.md)
 - [GeinsSdkApiMgmtJavascript.PageAreaModelsWritePageArea](docs/PageAreaModelsWritePageArea.md)
 - [GeinsSdkApiMgmtJavascript.PageAreaModelsWritePageAreaFamily](docs/PageAreaModelsWritePageAreaFamily.md)
 - [GeinsSdkApiMgmtJavascript.PageResult](docs/PageResult.md)
 - [GeinsSdkApiMgmtJavascript.PageWidgetLazyLoadSetupLazyLoadCollectionConfiguration](docs/PageWidgetLazyLoadSetupLazyLoadCollectionConfiguration.md)
 - [GeinsSdkApiMgmtJavascript.PageWidgetLazyLoadSetupLazyLoadConfiguration](docs/PageWidgetLazyLoadSetupLazyLoadConfiguration.md)
 - [GeinsSdkApiMgmtJavascript.PagedEnvelopeListProductModelsReadProduct](docs/PagedEnvelopeListProductModelsReadProduct.md)
 - [GeinsSdkApiMgmtJavascript.PagedEnvelopeListUserModelsReadUserProfile](docs/PagedEnvelopeListUserModelsReadUserProfile.md)
 - [GeinsSdkApiMgmtJavascript.PaymentModelsPaymentOption](docs/PaymentModelsPaymentOption.md)
 - [GeinsSdkApiMgmtJavascript.PaymentModelsPaymentOptionQuery](docs/PaymentModelsPaymentOptionQuery.md)
 - [GeinsSdkApiMgmtJavascript.PriceListModelsPriceList](docs/PriceListModelsPriceList.md)
 - [GeinsSdkApiMgmtJavascript.PriceListModelsPriceListPriceResponse](docs/PriceListModelsPriceListPriceResponse.md)
 - [GeinsSdkApiMgmtJavascript.PriceListModelsReadPriceListPrice](docs/PriceListModelsReadPriceListPrice.md)
 - [GeinsSdkApiMgmtJavascript.PriceListModelsWritePriceListPrice](docs/PriceListModelsWritePriceListPrice.md)
 - [GeinsSdkApiMgmtJavascript.ProductModelsMonitorSku](docs/ProductModelsMonitorSku.md)
 - [GeinsSdkApiMgmtJavascript.ProductModelsProductCategory](docs/ProductModelsProductCategory.md)
 - [GeinsSdkApiMgmtJavascript.ProductModelsProductQuery](docs/ProductModelsProductQuery.md)
 - [GeinsSdkApiMgmtJavascript.ProductModelsReadDiscountCampaign](docs/ProductModelsReadDiscountCampaign.md)
 - [GeinsSdkApiMgmtJavascript.ProductModelsReadFeed](docs/ProductModelsReadFeed.md)
 - [GeinsSdkApiMgmtJavascript.ProductModelsReadFeedMembership](docs/ProductModelsReadFeedMembership.md)
 - [GeinsSdkApiMgmtJavascript.ProductModelsReadImage](docs/ProductModelsReadImage.md)
 - [GeinsSdkApiMgmtJavascript.ProductModelsReadProduct](docs/ProductModelsReadProduct.md)
 - [GeinsSdkApiMgmtJavascript.ProductModelsReadProductItem](docs/ProductModelsReadProductItem.md)
 - [GeinsSdkApiMgmtJavascript.ProductModelsReadProductItemResult](docs/ProductModelsReadProductItemResult.md)
 - [GeinsSdkApiMgmtJavascript.ProductModelsReadProductItemStock](docs/ProductModelsReadProductItemStock.md)
 - [GeinsSdkApiMgmtJavascript.ProductModelsReadProductUrl](docs/ProductModelsReadProductUrl.md)
 - [GeinsSdkApiMgmtJavascript.ProductModelsReadRelatedProduct](docs/ProductModelsReadRelatedProduct.md)
 - [GeinsSdkApiMgmtJavascript.ProductModelsReadRelationType](docs/ProductModelsReadRelationType.md)
 - [GeinsSdkApiMgmtJavascript.ProductModelsReadShippingFee](docs/ProductModelsReadShippingFee.md)
 - [GeinsSdkApiMgmtJavascript.ProductModelsReadUploadedImage](docs/ProductModelsReadUploadedImage.md)
 - [GeinsSdkApiMgmtJavascript.ProductModelsRelatedProductEnvelope](docs/ProductModelsRelatedProductEnvelope.md)
 - [GeinsSdkApiMgmtJavascript.ProductModelsStockEnvelope](docs/ProductModelsStockEnvelope.md)
 - [GeinsSdkApiMgmtJavascript.ProductModelsWriteProduct](docs/ProductModelsWriteProduct.md)
 - [GeinsSdkApiMgmtJavascript.ProductModelsWriteProductItem](docs/ProductModelsWriteProductItem.md)
 - [GeinsSdkApiMgmtJavascript.ProductModelsWriteProductItemStock](docs/ProductModelsWriteProductItemStock.md)
 - [GeinsSdkApiMgmtJavascript.ProductModelsWriteRelatedProduct](docs/ProductModelsWriteRelatedProduct.md)
 - [GeinsSdkApiMgmtJavascript.ProductParameterModelsReadProductParameter](docs/ProductParameterModelsReadProductParameter.md)
 - [GeinsSdkApiMgmtJavascript.ProductParameterModelsReadProductParameterGroup](docs/ProductParameterModelsReadProductParameterGroup.md)
 - [GeinsSdkApiMgmtJavascript.ProductParameterModelsReadProductParameterPredefinedValue](docs/ProductParameterModelsReadProductParameterPredefinedValue.md)
 - [GeinsSdkApiMgmtJavascript.ProductParameterModelsReadProductParameterValue](docs/ProductParameterModelsReadProductParameterValue.md)
 - [GeinsSdkApiMgmtJavascript.ProductParameterModelsWriteProductParameter](docs/ProductParameterModelsWriteProductParameter.md)
 - [GeinsSdkApiMgmtJavascript.ProductParameterModelsWriteProductParameterGroup](docs/ProductParameterModelsWriteProductParameterGroup.md)
 - [GeinsSdkApiMgmtJavascript.ProductParameterModelsWriteProductParameterPredefinedValue](docs/ProductParameterModelsWriteProductParameterPredefinedValue.md)
 - [GeinsSdkApiMgmtJavascript.ProductParameterModelsWriteProductParameterValue](docs/ProductParameterModelsWriteProductParameterValue.md)
 - [GeinsSdkApiMgmtJavascript.ProductParameterModelsWriteProductParameterValueBatch](docs/ProductParameterModelsWriteProductParameterValueBatch.md)
 - [GeinsSdkApiMgmtJavascript.ProductProductItemEnvelope](docs/ProductProductItemEnvelope.md)
 - [GeinsSdkApiMgmtJavascript.Refund](docs/Refund.md)
 - [GeinsSdkApiMgmtJavascript.RefundCoreModelsOrderOrderRow](docs/RefundCoreModelsOrderOrderRow.md)
 - [GeinsSdkApiMgmtJavascript.RefundQuery](docs/RefundQuery.md)
 - [GeinsSdkApiMgmtJavascript.RefundRow](docs/RefundRow.md)
 - [GeinsSdkApiMgmtJavascript.Return](docs/Return.md)
 - [GeinsSdkApiMgmtJavascript.ReturnCode](docs/ReturnCode.md)
 - [GeinsSdkApiMgmtJavascript.ReturnRow](docs/ReturnRow.md)
 - [GeinsSdkApiMgmtJavascript.SharedModelsLocalizableContent](docs/SharedModelsLocalizableContent.md)
 - [GeinsSdkApiMgmtJavascript.ShippingModelsParcelGroupOptions](docs/ShippingModelsParcelGroupOptions.md)
 - [GeinsSdkApiMgmtJavascript.ShippingModelsParcelGroupQuery](docs/ShippingModelsParcelGroupQuery.md)
 - [GeinsSdkApiMgmtJavascript.ShippingModelsReadParcel](docs/ShippingModelsReadParcel.md)
 - [GeinsSdkApiMgmtJavascript.ShippingModelsReadParcelGroup](docs/ShippingModelsReadParcelGroup.md)
 - [GeinsSdkApiMgmtJavascript.ShippingModelsShippingOption](docs/ShippingModelsShippingOption.md)
 - [GeinsSdkApiMgmtJavascript.ShippingModelsShippingQuery](docs/ShippingModelsShippingQuery.md)
 - [GeinsSdkApiMgmtJavascript.ShippingModelsShippingSubOption](docs/ShippingModelsShippingSubOption.md)
 - [GeinsSdkApiMgmtJavascript.SupplierModelsReadSupplier](docs/SupplierModelsReadSupplier.md)
 - [GeinsSdkApiMgmtJavascript.SupplierModelsSupplierQuery](docs/SupplierModelsSupplierQuery.md)
 - [GeinsSdkApiMgmtJavascript.SupplierModelsWriteSupplier](docs/SupplierModelsWriteSupplier.md)
 - [GeinsSdkApiMgmtJavascript.UserModelsReadBalance](docs/UserModelsReadBalance.md)
 - [GeinsSdkApiMgmtJavascript.UserModelsReadBalanceTransaction](docs/UserModelsReadBalanceTransaction.md)
 - [GeinsSdkApiMgmtJavascript.UserModelsReadBalanceType](docs/UserModelsReadBalanceType.md)
 - [GeinsSdkApiMgmtJavascript.UserModelsReadUserProfile](docs/UserModelsReadUserProfile.md)
 - [GeinsSdkApiMgmtJavascript.UserModelsUserProfileQuery](docs/UserModelsUserProfileQuery.md)
 - [GeinsSdkApiMgmtJavascript.UserModelsWriteBalanceTransaction](docs/UserModelsWriteBalanceTransaction.md)
 - [GeinsSdkApiMgmtJavascript.UserModelsWriteUserProfile](docs/UserModelsWriteUserProfile.md)
 - [GeinsSdkApiMgmtJavascript.VariantModelsReadVariant](docs/VariantModelsReadVariant.md)
 - [GeinsSdkApiMgmtJavascript.VariantModelsReadVariantGroup](docs/VariantModelsReadVariantGroup.md)
 - [GeinsSdkApiMgmtJavascript.VariantModelsWriteVariant](docs/VariantModelsWriteVariant.md)
 - [GeinsSdkApiMgmtJavascript.VariantModelsWriteVariantGroup](docs/VariantModelsWriteVariantGroup.md)
 - [GeinsSdkApiMgmtJavascript.WebhookModelsRestWebhook](docs/WebhookModelsRestWebhook.md)
 - [GeinsSdkApiMgmtJavascript.WidgetRestrictionSetupWidgetRestrictionConfiguration](docs/WidgetRestrictionSetupWidgetRestrictionConfiguration.md)


## Authorization

### apiKey

- **Type**: API key
- **API key parameter name**: X-ApiKey
- **Location**: HTTP header

### basicAuth

- **Type**: HTTP basic authentication


[npm]: https://img.shields.io/npm/v/@geins/sdk-api-mgmt-javascript
[npm-url]: https://www.npmjs.com/package/@geins/sdk-api-mgmt-javascript
[npm-downloads-per-month]: https://img.shields.io/npm/dm/@geins/sdk-api-mgmt-javascript.svg
[npm-trends]: https://npmtrends.com/@geins/sdk-api-mgmt-javascript
