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

Finally, you need to build the module:

```shell
npm run build
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

## Documentation for API Endpoints



Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*GeinsManagementApiSdkJs.BrandApi* | [**createBrand**](docs/BrandApi.md#createBrand) | **POST** /API/Brand | Create a new brand
*GeinsManagementApiSdkJs.BrandApi* | [**getBrandById**](docs/BrandApi.md#getBrandById) | **GET** /API/Brand/{id} | Get a specific brand
*GeinsManagementApiSdkJs.BrandApi* | [**queryBrands**](docs/BrandApi.md#queryBrands) | **POST** /API/Brand/Query | Query brands
*GeinsManagementApiSdkJs.BrandApi* | [**updateBrand**](docs/BrandApi.md#updateBrand) | **PUT** /API/Brand/{id} | Updates a brand
*GeinsManagementApiSdkJs.CategoryApi* | [**createCategory**](docs/CategoryApi.md#createCategory) | **POST** /API/Category | Create a new category
*GeinsManagementApiSdkJs.CategoryApi* | [**getCategoryById**](docs/CategoryApi.md#getCategoryById) | **GET** /API/Category/{id} | Get a specific category
*GeinsManagementApiSdkJs.CategoryApi* | [**queryCategories**](docs/CategoryApi.md#queryCategories) | **POST** /API/Category/Query | Query categories
*GeinsManagementApiSdkJs.CategoryApi* | [**updateCategory**](docs/CategoryApi.md#updateCategory) | **PUT** /API/Category/{id} | Update a category
*GeinsManagementApiSdkJs.MarketApi* | [**getMarketById**](docs/MarketApi.md#getMarketById) | **GET** /API/Market/{marketId} | Get a specific market
*GeinsManagementApiSdkJs.MarketApi* | [**listMarkets**](docs/MarketApi.md#listMarkets) | **GET** /API/Market/List | Gets a list of all markets
*GeinsManagementApiSdkJs.OrderApi* | [**addCommentToOrder**](docs/OrderApi.md#addCommentToOrder) | **POST** /API/Order/{id}/Comment | Adds a comment to the order
*GeinsManagementApiSdkJs.OrderApi* | [**createOrder**](docs/OrderApi.md#createOrder) | **POST** /API/Order | Post a new order
*GeinsManagementApiSdkJs.OrderApi* | [**createOrderId**](docs/OrderApi.md#createOrderId) | **POST** /API/Order/Id | Create a new order id
*GeinsManagementApiSdkJs.OrderApi* | [**deleteOrder**](docs/OrderApi.md#deleteOrder) | **DELETE** /API/Order/{id} | Deletes or deactivates an order
*GeinsManagementApiSdkJs.OrderApi* | [**getCaptureById**](docs/OrderApi.md#getCaptureById) | **GET** /API/Order/Capture/{captureId} | Get Capture by Id
*GeinsManagementApiSdkJs.OrderApi* | [**getOrderById**](docs/OrderApi.md#getOrderById) | **GET** /API/Order/{id}/{include} | Get an instance of a order
*GeinsManagementApiSdkJs.OrderApi* | [**getOrderStatuses**](docs/OrderApi.md#getOrderStatuses) | **GET** /API/Order/Statuses | Get a list of available order statuses
*GeinsManagementApiSdkJs.OrderApi* | [**getRefundById**](docs/OrderApi.md#getRefundById) | **GET** /API/Order/Refund/{refundId} | Get Refund by Id
*GeinsManagementApiSdkJs.OrderApi* | [**partialUpdateOfOrder**](docs/OrderApi.md#partialUpdateOfOrder) | **PATCH** /API/Order/{id} | Partial update of an order
*GeinsManagementApiSdkJs.OrderApi* | [**queryOrders**](docs/OrderApi.md#queryOrders) | **POST** /API/Order/Query | Query the order repository
*GeinsManagementApiSdkJs.OrderApi* | [**setCaptureAsProcessed**](docs/OrderApi.md#setCaptureAsProcessed) | **POST** /API/Order/Capture/SetAsProcessed | Set a capture as processed (&#x3D; captured)
*GeinsManagementApiSdkJs.OrderApi* | [**setPaymentAsPayed**](docs/OrderApi.md#setPaymentAsPayed) | **POST** /API/Order/PaymentDetail/{paymentDetailId}/SetAsPayed | Set Payment Detail as payed
*GeinsManagementApiSdkJs.OrderApi* | [**setRefundAsProcessed**](docs/OrderApi.md#setRefundAsProcessed) | **POST** /API/Order/Refund/SetAsProcessed | Set a refund as processed (&#x3D; settled)
*GeinsManagementApiSdkJs.OrderApi* | [**updateOrderStatus**](docs/OrderApi.md#updateOrderStatus) | **POST** /API/Order/{id}/Status/{status}/{transactionId}/{secondaryTransactionId} | Update order status
*GeinsManagementApiSdkJs.OrderApi* | [**updateTransactionData**](docs/OrderApi.md#updateTransactionData) | **POST** /API/Order/{id}/TransactionData | Updates transaction data on an order
*GeinsManagementApiSdkJs.OrderApi* | [**validateOrder**](docs/OrderApi.md#validateOrder) | **POST** /API/Order/ValidateCreation | Validates order data for order creation.
*GeinsManagementApiSdkJs.PageAreaApi* | [**createOrUpdateAPageArea**](docs/PageAreaApi.md#createOrUpdateAPageArea) | **POST** /API/PageArea | Create or update a page area
*GeinsManagementApiSdkJs.PageAreaApi* | [**createOrUpdatePageAreaFamily**](docs/PageAreaApi.md#createOrUpdatePageAreaFamily) | **POST** /API/PageAreaFamily | Create or update a page area family
*GeinsManagementApiSdkJs.PageAreaApi* | [**getPageArea**](docs/PageAreaApi.md#getPageArea) | **GET** /API/PageArea/{name} | Get a specific page area
*GeinsManagementApiSdkJs.PageAreaApi* | [**getPageAreaFamily**](docs/PageAreaApi.md#getPageAreaFamily) | **GET** /API/PageAreaFamily/{familyId} | Get a specific page area family
*GeinsManagementApiSdkJs.PageAreaApi* | [**listPageAreaFamilies**](docs/PageAreaApi.md#listPageAreaFamilies) | **GET** /API/PageAreaFamily/List | Gets a list of all page area families, including nested data
*GeinsManagementApiSdkJs.PaymentApi* | [**queryPaymentOptions**](docs/PaymentApi.md#queryPaymentOptions) | **POST** /API/Payment/Query | Query payment options
*GeinsManagementApiSdkJs.PriceListApi* | [**listPriceLists**](docs/PriceListApi.md#listPriceLists) | **GET** /API/PriceList/List | Get all price list definitions
*GeinsManagementApiSdkJs.PriceListApi* | [**updatePricelistPrices**](docs/PriceListApi.md#updatePricelistPrices) | **PUT** /API/PriceList/Price | Updates price list prices
*GeinsManagementApiSdkJs.ProductApi* | [**addAvailabilityMonitor**](docs/ProductApi.md#addAvailabilityMonitor) | **POST** /API/Product/MonitorAvailability | Add a product availability monitor
*GeinsManagementApiSdkJs.ProductApi* | [**addCategoryToProduct**](docs/ProductApi.md#addCategoryToProduct) | **PUT** /API/Product/{productId}/Category | Adds a category relation to a product
*GeinsManagementApiSdkJs.ProductApi* | [**addImageToProduct**](docs/ProductApi.md#addImageToProduct) | **PUT** /API/Product/{productId}/Image/{imageName} | Adds an image relation to a product
*GeinsManagementApiSdkJs.ProductApi* | [**addRelatedProductsToProduct**](docs/ProductApi.md#addRelatedProductsToProduct) | **PUT** /API/Product/{productId}/Related | Add related products to a product
*GeinsManagementApiSdkJs.ProductApi* | [**batchUpdateProductItems**](docs/ProductApi.md#batchUpdateProductItems) | **PUT** /API/Product/Items | Updates product items in batch
*GeinsManagementApiSdkJs.ProductApi* | [**batchUpdateStockValues**](docs/ProductApi.md#batchUpdateStockValues) | **PUT** /API/Product/Stock | Update stock values for multiple product items
*GeinsManagementApiSdkJs.ProductApi* | [**createProduct**](docs/ProductApi.md#createProduct) | **POST** /API/Product | Create a new product
*GeinsManagementApiSdkJs.ProductApi* | [**createProductItems**](docs/ProductApi.md#createProductItems) | **POST** /API/Product/{productId}/Item | Create a new product item
*GeinsManagementApiSdkJs.ProductApi* | [**getProductById**](docs/ProductApi.md#getProductById) | **GET** /API/Product/{productId} | Get a specific product
*GeinsManagementApiSdkJs.ProductApi* | [**getProductItemById**](docs/ProductApi.md#getProductItemById) | **GET** /API/Product/Item/{itemId} | Get a specific product item
*GeinsManagementApiSdkJs.ProductApi* | [**linkRelatedProductsByRelationId**](docs/ProductApi.md#linkRelatedProductsByRelationId) | **PUT** /API/Product/{productId}/Related/{relationTypeId} | Add related products to a product using a fixed relation type
*GeinsManagementApiSdkJs.ProductApi* | [**listAllProductItemsPaged**](docs/ProductApi.md#listAllProductItemsPaged) | **GET** /API/Product/Items/{page} | Get all product items with pagination
*GeinsManagementApiSdkJs.ProductApi* | [**listFeeds**](docs/ProductApi.md#listFeeds) | **GET** /API/Product/Feeds | Gets a list of all feeds
*GeinsManagementApiSdkJs.ProductApi* | [**listProductItems**](docs/ProductApi.md#listProductItems) | **GET** /API/Product/Items | Get all product items
*GeinsManagementApiSdkJs.ProductApi* | [**listProductRelationTypes**](docs/ProductApi.md#listProductRelationTypes) | **GET** /API/Product/RelationTypes | Gets a list of product relation types
*GeinsManagementApiSdkJs.ProductApi* | [**queryProducts**](docs/ProductApi.md#queryProducts) | **POST** /API/Product/Query | Query products
*GeinsManagementApiSdkJs.ProductApi* | [**queryProductsPaged**](docs/ProductApi.md#queryProductsPaged) | **POST** /API/Product/Query/{page} | Query products with pagination
*GeinsManagementApiSdkJs.ProductApi* | [**queryStock**](docs/ProductApi.md#queryStock) | **POST** /API/Product/Stock/Query | Query stock
*GeinsManagementApiSdkJs.ProductApi* | [**updateProduct**](docs/ProductApi.md#updateProduct) | **PUT** /API/Product/{productId} | Updates a product
*GeinsManagementApiSdkJs.ProductApi* | [**updateProductItem**](docs/ProductApi.md#updateProductItem) | **PUT** /API/Product/Item/{itemId} | Updates a product item
*GeinsManagementApiSdkJs.ProductParameterApi* | [**batchReplaceProductParameterValues**](docs/ProductParameterApi.md#batchReplaceProductParameterValues) | **POST** /API/ProductParameter/Values | Replace multiple product parameter values
*GeinsManagementApiSdkJs.ProductParameterApi* | [**batchUpdateProductParameterValues**](docs/ProductParameterApi.md#batchUpdateProductParameterValues) | **PUT** /API/ProductParameter/Values | Update multiple product parameter values
*GeinsManagementApiSdkJs.ProductParameterApi* | [**createOrUpdateProductParameterValue**](docs/ProductParameterApi.md#createOrUpdateProductParameterValue) | **POST** /API/ProductParameter/Value | Create or update a new product parameter value
*GeinsManagementApiSdkJs.ProductParameterApi* | [**createProductParameter**](docs/ProductParameterApi.md#createProductParameter) | **POST** /API/ProductParameter | Create a new product parameter
*GeinsManagementApiSdkJs.ProductParameterApi* | [**createProductParameterGroup**](docs/ProductParameterApi.md#createProductParameterGroup) | **POST** /API/ProductParameter/Group | Create a new product parameter group
*GeinsManagementApiSdkJs.ProductParameterApi* | [**createProductParameterPredefinedValue**](docs/ProductParameterApi.md#createProductParameterPredefinedValue) | **POST** /API/ProductParameter/PredefinedValue | Create a new predefined value for a product parameter
*GeinsManagementApiSdkJs.ProductParameterApi* | [**getProductParameterById**](docs/ProductParameterApi.md#getProductParameterById) | **GET** /API/ProductParameter/{id} | Get a specific product parameter
*GeinsManagementApiSdkJs.ProductParameterApi* | [**getProductParameterGroupById**](docs/ProductParameterApi.md#getProductParameterGroupById) | **GET** /API/ProductParameter/Group/{id} | Get a specific product parameter group
*GeinsManagementApiSdkJs.ProductParameterApi* | [**getProductParameterPredefinedValue**](docs/ProductParameterApi.md#getProductParameterPredefinedValue) | **GET** /API/ProductParameter/PredefinedValue/{id} | Get a specific predefined value for a product parameter
*GeinsManagementApiSdkJs.ProductParameterApi* | [**getProductParameterValue**](docs/ProductParameterApi.md#getProductParameterValue) | **GET** /API/ProductParameter/Value/{id} | Get a specific product parameter value
*GeinsManagementApiSdkJs.ProductParameterApi* | [**updateProductParameter**](docs/ProductParameterApi.md#updateProductParameter) | **PUT** /API/ProductParameter/{id} | Updates a product parameter
*GeinsManagementApiSdkJs.ProductParameterApi* | [**updateProductParameterGroup**](docs/ProductParameterApi.md#updateProductParameterGroup) | **PUT** /API/ProductParameter/Group/{id} | Update a product parameter group
*GeinsManagementApiSdkJs.ShippingApi* | [**createParcelGroup**](docs/ShippingApi.md#createParcelGroup) | **POST** /API/Shipping/ParcelGroup | Create a new parcel group
*GeinsManagementApiSdkJs.ShippingApi* | [**queryShippingOptions**](docs/ShippingApi.md#queryShippingOptions) | **POST** /API/Shipping/Query | Query shipping options
*GeinsManagementApiSdkJs.SupplierApi* | [**createSupplier**](docs/SupplierApi.md#createSupplier) | **POST** /API/Supplier | Create a new supplier
*GeinsManagementApiSdkJs.SupplierApi* | [**getSupplierById**](docs/SupplierApi.md#getSupplierById) | **GET** /API/Supplier/{id} | Get a specific supplier
*GeinsManagementApiSdkJs.SupplierApi* | [**querySuppliers**](docs/SupplierApi.md#querySuppliers) | **POST** /API/Supplier/Query | Query suppliers
*GeinsManagementApiSdkJs.SupplierApi* | [**updateSupplier**](docs/SupplierApi.md#updateSupplier) | **PUT** /API/Supplier/{id} | Updates a supplier
*GeinsManagementApiSdkJs.UserApi* | [**createUserProfile**](docs/UserApi.md#createUserProfile) | **POST** /API/User | Create user profile
*GeinsManagementApiSdkJs.UserApi* | [**deleteUserProfile**](docs/UserApi.md#deleteUserProfile) | **DELETE** /API/User/email | Delete user profile
*GeinsManagementApiSdkJs.UserApi* | [**getUserProfile**](docs/UserApi.md#getUserProfile) | **POST** /API/User/Query | Get a specific user profile
*GeinsManagementApiSdkJs.UserApi* | [**updateUserProfile**](docs/UserApi.md#updateUserProfile) | **PUT** /API/User | Update user profile
*GeinsManagementApiSdkJs.VariantApi* | [**addProductToVariantGroup**](docs/VariantApi.md#addProductToVariantGroup) | **PUT** /API/VariantGroup/{groupId}/{productId} | Adds a product to an existing group
*GeinsManagementApiSdkJs.VariantApi* | [**addProductToVariantGroupByProductId**](docs/VariantApi.md#addProductToVariantGroupByProductId) | **PUT** /API/Variant/{productId1}/{productId2} | Adds a product to an existing group
*GeinsManagementApiSdkJs.VariantApi* | [**createVariantGroup**](docs/VariantApi.md#createVariantGroup) | **POST** /API/VariantGroup | Create a new variant group
*GeinsManagementApiSdkJs.VariantApi* | [**createVariantGroupWithProduct**](docs/VariantApi.md#createVariantGroupWithProduct) | **POST** /API/Variant/{productId}/VariantGroup | Create a new group for the provided product id
*GeinsManagementApiSdkJs.VariantApi* | [**deleteVariantGroup**](docs/VariantApi.md#deleteVariantGroup) | **DELETE** /API/VariantGroup/{groupId} | Delete an entire variant group
*GeinsManagementApiSdkJs.VariantApi* | [**deleteVariantGroupByProductId**](docs/VariantApi.md#deleteVariantGroupByProductId) | **DELETE** /API/Variant/{productId}/VariantGroup | Delete an entire variant group
*GeinsManagementApiSdkJs.VariantApi* | [**getVariantGroup**](docs/VariantApi.md#getVariantGroup) | **GET** /API/VariantGroup/{groupId} | Get a specific variant group
*GeinsManagementApiSdkJs.VariantApi* | [**getVariantGroupByProductId**](docs/VariantApi.md#getVariantGroupByProductId) | **GET** /API/Variant/{productId}/VariantGroup | Get the variant group for the provided id
*GeinsManagementApiSdkJs.VariantApi* | [**getVariantLabels**](docs/VariantApi.md#getVariantLabels) | **GET** /API/Variant/Labels | Get all valid variant labels
*GeinsManagementApiSdkJs.VariantApi* | [**removeProductFromVariantGroup**](docs/VariantApi.md#removeProductFromVariantGroup) | **DELETE** /API/Variant/{productId} | Remove a product from its variant group
*GeinsManagementApiSdkJs.VariantApi* | [**updateVariant**](docs/VariantApi.md#updateVariant) | **PUT** /API/Variant/{productId} | Adds the variant details for the product with the provided ID
*GeinsManagementApiSdkJs.VariantApi* | [**updateVariantGroup**](docs/VariantApi.md#updateVariantGroup) | **PUT** /API/VariantGroup/{groupId} | Updates the settings of a group


## Documentation for Models

 - [GeinsManagementApiSdkJs.APIOrderOrderComment](docs/APIOrderOrderComment.md)
 - [GeinsManagementApiSdkJs.APIOrderTransactionData](docs/APIOrderTransactionData.md)
 - [GeinsManagementApiSdkJs.BrandModelsBrandQuery](docs/BrandModelsBrandQuery.md)
 - [GeinsManagementApiSdkJs.BrandModelsReadBrand](docs/BrandModelsReadBrand.md)
 - [GeinsManagementApiSdkJs.BrandModelsWriteBrand](docs/BrandModelsWriteBrand.md)
 - [GeinsManagementApiSdkJs.CategoryModelsCategoryQuery](docs/CategoryModelsCategoryQuery.md)
 - [GeinsManagementApiSdkJs.CategoryModelsReadCategory](docs/CategoryModelsReadCategory.md)
 - [GeinsManagementApiSdkJs.CategoryModelsWriteCategory](docs/CategoryModelsWriteCategory.md)
 - [GeinsManagementApiSdkJs.ContainerRestrictionSetupContainerRestrictionConfiguration](docs/ContainerRestrictionSetupContainerRestrictionConfiguration.md)
 - [GeinsManagementApiSdkJs.Envelope](docs/Envelope.md)
 - [GeinsManagementApiSdkJs.EnvelopeBrandModelsReadBrand](docs/EnvelopeBrandModelsReadBrand.md)
 - [GeinsManagementApiSdkJs.EnvelopeCategoryModelsReadCategory](docs/EnvelopeCategoryModelsReadCategory.md)
 - [GeinsManagementApiSdkJs.EnvelopeInt](docs/EnvelopeInt.md)
 - [GeinsManagementApiSdkJs.EnvelopeListProductModelsReadFeed](docs/EnvelopeListProductModelsReadFeed.md)
 - [GeinsManagementApiSdkJs.EnvelopeListProductModelsReadProduct](docs/EnvelopeListProductModelsReadProduct.md)
 - [GeinsManagementApiSdkJs.EnvelopeListProductModelsReadProductItem](docs/EnvelopeListProductModelsReadProductItem.md)
 - [GeinsManagementApiSdkJs.EnvelopeListProductModelsReadRelationType](docs/EnvelopeListProductModelsReadRelationType.md)
 - [GeinsManagementApiSdkJs.EnvelopeMarketModelsMarket](docs/EnvelopeMarketModelsMarket.md)
 - [GeinsManagementApiSdkJs.EnvelopePageAreaModelsReadPageArea](docs/EnvelopePageAreaModelsReadPageArea.md)
 - [GeinsManagementApiSdkJs.EnvelopePageAreaModelsReadPageAreaFamily](docs/EnvelopePageAreaModelsReadPageAreaFamily.md)
 - [GeinsManagementApiSdkJs.EnvelopeProductModelsReadProduct](docs/EnvelopeProductModelsReadProduct.md)
 - [GeinsManagementApiSdkJs.EnvelopeProductModelsReadProductItem](docs/EnvelopeProductModelsReadProductItem.md)
 - [GeinsManagementApiSdkJs.EnvelopeProductParameterModelsReadProductParameter](docs/EnvelopeProductParameterModelsReadProductParameter.md)
 - [GeinsManagementApiSdkJs.EnvelopeProductParameterModelsReadProductParameterGroup](docs/EnvelopeProductParameterModelsReadProductParameterGroup.md)
 - [GeinsManagementApiSdkJs.EnvelopeProductParameterModelsReadProductParameterPredefinedValue](docs/EnvelopeProductParameterModelsReadProductParameterPredefinedValue.md)
 - [GeinsManagementApiSdkJs.EnvelopeProductParameterModelsReadProductParameterValue](docs/EnvelopeProductParameterModelsReadProductParameterValue.md)
 - [GeinsManagementApiSdkJs.EnvelopeString](docs/EnvelopeString.md)
 - [GeinsManagementApiSdkJs.EnvelopeSupplierModelsReadSupplier](docs/EnvelopeSupplierModelsReadSupplier.md)
 - [GeinsManagementApiSdkJs.EnvelopeUserModelsReadUserProfile](docs/EnvelopeUserModelsReadUserProfile.md)
 - [GeinsManagementApiSdkJs.EnvelopeVariantModelsReadVariant](docs/EnvelopeVariantModelsReadVariant.md)
 - [GeinsManagementApiSdkJs.EnvelopeVariantModelsReadVariantGroup](docs/EnvelopeVariantModelsReadVariantGroup.md)
 - [GeinsManagementApiSdkJs.MarketModelsMarket](docs/MarketModelsMarket.md)
 - [GeinsManagementApiSdkJs.OrderCapture](docs/OrderCapture.md)
 - [GeinsManagementApiSdkJs.OrderCaptureRow](docs/OrderCaptureRow.md)
 - [GeinsManagementApiSdkJs.OrderCheckoutOrder](docs/OrderCheckoutOrder.md)
 - [GeinsManagementApiSdkJs.OrderCheckoutOrderRow](docs/OrderCheckoutOrderRow.md)
 - [GeinsManagementApiSdkJs.OrderFreightClass](docs/OrderFreightClass.md)
 - [GeinsManagementApiSdkJs.OrderModelsAddress](docs/OrderModelsAddress.md)
 - [GeinsManagementApiSdkJs.OrderModelsOrder](docs/OrderModelsOrder.md)
 - [GeinsManagementApiSdkJs.OrderModelsOrderQuery](docs/OrderModelsOrderQuery.md)
 - [GeinsManagementApiSdkJs.OrderModelsOrderRow](docs/OrderModelsOrderRow.md)
 - [GeinsManagementApiSdkJs.OrderModelsOrderStatus](docs/OrderModelsOrderStatus.md)
 - [GeinsManagementApiSdkJs.OrderModelsOrderUpdate](docs/OrderModelsOrderUpdate.md)
 - [GeinsManagementApiSdkJs.OrderModelsPaymentDetail](docs/OrderModelsPaymentDetail.md)
 - [GeinsManagementApiSdkJs.OrderModelsRefund](docs/OrderModelsRefund.md)
 - [GeinsManagementApiSdkJs.OrderModelsShippingDetail](docs/OrderModelsShippingDetail.md)
 - [GeinsManagementApiSdkJs.OrderProcessedCapture](docs/OrderProcessedCapture.md)
 - [GeinsManagementApiSdkJs.OrderProcessedRefund](docs/OrderProcessedRefund.md)
 - [GeinsManagementApiSdkJs.OrderRefund](docs/OrderRefund.md)
 - [GeinsManagementApiSdkJs.OrderRefundRow](docs/OrderRefundRow.md)
 - [GeinsManagementApiSdkJs.OrderValidateOrderCreationRequest](docs/OrderValidateOrderCreationRequest.md)
 - [GeinsManagementApiSdkJs.OrderValidateOrderCreationRequestStockItem](docs/OrderValidateOrderCreationRequestStockItem.md)
 - [GeinsManagementApiSdkJs.PageAreaModelsReadPageArea](docs/PageAreaModelsReadPageArea.md)
 - [GeinsManagementApiSdkJs.PageAreaModelsReadPageAreaFamily](docs/PageAreaModelsReadPageAreaFamily.md)
 - [GeinsManagementApiSdkJs.PageAreaModelsReadPageWidget](docs/PageAreaModelsReadPageWidget.md)
 - [GeinsManagementApiSdkJs.PageAreaModelsReadPageWidgetContainer](docs/PageAreaModelsReadPageWidgetContainer.md)
 - [GeinsManagementApiSdkJs.PageAreaModelsWritePageArea](docs/PageAreaModelsWritePageArea.md)
 - [GeinsManagementApiSdkJs.PageAreaModelsWritePageAreaFamily](docs/PageAreaModelsWritePageAreaFamily.md)
 - [GeinsManagementApiSdkJs.PageResult](docs/PageResult.md)
 - [GeinsManagementApiSdkJs.PageWidgetLazyLoadSetupLazyLoadCollectionConfiguration](docs/PageWidgetLazyLoadSetupLazyLoadCollectionConfiguration.md)
 - [GeinsManagementApiSdkJs.PageWidgetLazyLoadSetupLazyLoadConfiguration](docs/PageWidgetLazyLoadSetupLazyLoadConfiguration.md)
 - [GeinsManagementApiSdkJs.PaymentModelsPaymentOption](docs/PaymentModelsPaymentOption.md)
 - [GeinsManagementApiSdkJs.PaymentModelsPaymentOptionQuery](docs/PaymentModelsPaymentOptionQuery.md)
 - [GeinsManagementApiSdkJs.PriceListModelsPriceList](docs/PriceListModelsPriceList.md)
 - [GeinsManagementApiSdkJs.PriceListModelsPriceListPriceResponse](docs/PriceListModelsPriceListPriceResponse.md)
 - [GeinsManagementApiSdkJs.PriceListModelsReadPriceListPrice](docs/PriceListModelsReadPriceListPrice.md)
 - [GeinsManagementApiSdkJs.PriceListModelsWritePriceListPrice](docs/PriceListModelsWritePriceListPrice.md)
 - [GeinsManagementApiSdkJs.ProductModelsMonitorSku](docs/ProductModelsMonitorSku.md)
 - [GeinsManagementApiSdkJs.ProductModelsProductCategory](docs/ProductModelsProductCategory.md)
 - [GeinsManagementApiSdkJs.ProductModelsProductQuery](docs/ProductModelsProductQuery.md)
 - [GeinsManagementApiSdkJs.ProductModelsReadFeed](docs/ProductModelsReadFeed.md)
 - [GeinsManagementApiSdkJs.ProductModelsReadFeedMembership](docs/ProductModelsReadFeedMembership.md)
 - [GeinsManagementApiSdkJs.ProductModelsReadImage](docs/ProductModelsReadImage.md)
 - [GeinsManagementApiSdkJs.ProductModelsReadProduct](docs/ProductModelsReadProduct.md)
 - [GeinsManagementApiSdkJs.ProductModelsReadProductItem](docs/ProductModelsReadProductItem.md)
 - [GeinsManagementApiSdkJs.ProductModelsReadProductItemStock](docs/ProductModelsReadProductItemStock.md)
 - [GeinsManagementApiSdkJs.ProductModelsReadProductUrl](docs/ProductModelsReadProductUrl.md)
 - [GeinsManagementApiSdkJs.ProductModelsReadRelatedProduct](docs/ProductModelsReadRelatedProduct.md)
 - [GeinsManagementApiSdkJs.ProductModelsReadRelationType](docs/ProductModelsReadRelationType.md)
 - [GeinsManagementApiSdkJs.ProductModelsReadShippingFee](docs/ProductModelsReadShippingFee.md)
 - [GeinsManagementApiSdkJs.ProductModelsRelatedProductEnvelope](docs/ProductModelsRelatedProductEnvelope.md)
 - [GeinsManagementApiSdkJs.ProductModelsStockEnvelope](docs/ProductModelsStockEnvelope.md)
 - [GeinsManagementApiSdkJs.ProductModelsWriteProduct](docs/ProductModelsWriteProduct.md)
 - [GeinsManagementApiSdkJs.ProductModelsWriteProductItem](docs/ProductModelsWriteProductItem.md)
 - [GeinsManagementApiSdkJs.ProductModelsWriteProductItemStock](docs/ProductModelsWriteProductItemStock.md)
 - [GeinsManagementApiSdkJs.ProductModelsWriteRelatedProduct](docs/ProductModelsWriteRelatedProduct.md)
 - [GeinsManagementApiSdkJs.ProductParameterModelsReadProductParameter](docs/ProductParameterModelsReadProductParameter.md)
 - [GeinsManagementApiSdkJs.ProductParameterModelsReadProductParameterGroup](docs/ProductParameterModelsReadProductParameterGroup.md)
 - [GeinsManagementApiSdkJs.ProductParameterModelsReadProductParameterPredefinedValue](docs/ProductParameterModelsReadProductParameterPredefinedValue.md)
 - [GeinsManagementApiSdkJs.ProductParameterModelsReadProductParameterValue](docs/ProductParameterModelsReadProductParameterValue.md)
 - [GeinsManagementApiSdkJs.ProductParameterModelsWriteProductParameter](docs/ProductParameterModelsWriteProductParameter.md)
 - [GeinsManagementApiSdkJs.ProductParameterModelsWriteProductParameterGroup](docs/ProductParameterModelsWriteProductParameterGroup.md)
 - [GeinsManagementApiSdkJs.ProductParameterModelsWriteProductParameterPredefinedValue](docs/ProductParameterModelsWriteProductParameterPredefinedValue.md)
 - [GeinsManagementApiSdkJs.ProductParameterModelsWriteProductParameterValue](docs/ProductParameterModelsWriteProductParameterValue.md)
 - [GeinsManagementApiSdkJs.ProductParameterModelsWriteProductParameterValueBatch](docs/ProductParameterModelsWriteProductParameterValueBatch.md)
 - [GeinsManagementApiSdkJs.ProductProductItemEnvelope](docs/ProductProductItemEnvelope.md)
 - [GeinsManagementApiSdkJs.SharedModelsLocalizableContent](docs/SharedModelsLocalizableContent.md)
 - [GeinsManagementApiSdkJs.ShippingModelsParcelGroupOptions](docs/ShippingModelsParcelGroupOptions.md)
 - [GeinsManagementApiSdkJs.ShippingModelsShippingOption](docs/ShippingModelsShippingOption.md)
 - [GeinsManagementApiSdkJs.ShippingModelsShippingQuery](docs/ShippingModelsShippingQuery.md)
 - [GeinsManagementApiSdkJs.ShippingModelsShippingSubOption](docs/ShippingModelsShippingSubOption.md)
 - [GeinsManagementApiSdkJs.SupplierModelsReadSupplier](docs/SupplierModelsReadSupplier.md)
 - [GeinsManagementApiSdkJs.SupplierModelsSupplierQuery](docs/SupplierModelsSupplierQuery.md)
 - [GeinsManagementApiSdkJs.SupplierModelsWriteSupplier](docs/SupplierModelsWriteSupplier.md)
 - [GeinsManagementApiSdkJs.SystemNullableValidationConfiguration](docs/SystemNullableValidationConfiguration.md)
 - [GeinsManagementApiSdkJs.UserModelsReadUserProfile](docs/UserModelsReadUserProfile.md)
 - [GeinsManagementApiSdkJs.UserModelsUserProfileQuery](docs/UserModelsUserProfileQuery.md)
 - [GeinsManagementApiSdkJs.UserModelsWriteUserProfile](docs/UserModelsWriteUserProfile.md)
 - [GeinsManagementApiSdkJs.VariantModelsReadVariant](docs/VariantModelsReadVariant.md)
 - [GeinsManagementApiSdkJs.VariantModelsReadVariantGroup](docs/VariantModelsReadVariantGroup.md)
 - [GeinsManagementApiSdkJs.VariantModelsWriteVariant](docs/VariantModelsWriteVariant.md)
 - [GeinsManagementApiSdkJs.VariantModelsWriteVariantGroup](docs/VariantModelsWriteVariantGroup.md)
 - [GeinsManagementApiSdkJs.WidgetRestrictionSetupWidgetRestrictionConfiguration](docs/WidgetRestrictionSetupWidgetRestrictionConfiguration.md)


## Documentation for Authorization



### apiKey


- **Type**: API key
- **API key parameter name**: x-apikey
- **Location**: HTTP header



### basicAuth

- **Type**: HTTP basic authentication


[npm]: https://img.shields.io/npm/v/@geins/sdk-api-mgmt-javascript
[npm-url]: https://www.npmjs.com/package/@geins/sdk-api-mgmt-javascript
[npm-downloads-per-month]: https://img.shields.io/npm/dm/@geins/sdk-api-mgmt-javascript.svg
[npm-trends]: https://npmtrends.com/@geins/sdk-api-mgmt-javascript
