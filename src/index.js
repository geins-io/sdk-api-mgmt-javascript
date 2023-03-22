/**
 * geins-management-api-sdk-js
 *  Geins Management API is an RESTful api to power your applications who manages your geins services. Geins provides an easy-to-use and scalable solution for managing all aspects of an online store, from product listings and customer information to order processing and payment transactions.   :::tip With this API, you can build custom applications and integrate with third-party systems, dashboards and other bussiness logic apps. :::    ## Getting started Once you have created an account, you can start using the Management API by creating an `API key`. You can create as many API keys as you need. Each `API key` is connected to a specific account so you can keep track of operations and manage keys. You can find your `API key` in the `geins merchant center`.   ### Fast track Use one of our [SDKs](https://docs.geins.io/docs/sdk/introduction) to get started quickly. The SDKs are available for the most popular programming languages and frameworks.  Or, if you prefer to just take it for a test run:  [![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/25895885-aaf6598f-1a7c-4949-85d7-ba846c42d553?action=collection%2Ffork&collection-url=entityId%3D25895885-aaf6598f-1a7c-4949-85d7-ba846c42d553%26entityType%3Dcollection%26workspaceId%3Da2a179ce-158e-46b0-8d06-e9640f45112c)  ### Authentication Two authentication methods are supported:   - `API Key`   - `Basic Auth` 
 *
 * The version of the OpenAPI document: v1.7.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import APIOrderOrderComment from './model/APIOrderOrderComment';
import APIOrderTransactionData from './model/APIOrderTransactionData';
import BrandModelsBrandQuery from './model/BrandModelsBrandQuery';
import BrandModelsReadBrand from './model/BrandModelsReadBrand';
import BrandModelsWriteBrand from './model/BrandModelsWriteBrand';
import CategoryModelsCategoryQuery from './model/CategoryModelsCategoryQuery';
import CategoryModelsReadCategory from './model/CategoryModelsReadCategory';
import CategoryModelsWriteCategory from './model/CategoryModelsWriteCategory';
import ContainerRestrictionSetupContainerRestrictionConfiguration from './model/ContainerRestrictionSetupContainerRestrictionConfiguration';
import Envelope from './model/Envelope';
import EnvelopeBrandModelsReadBrand from './model/EnvelopeBrandModelsReadBrand';
import EnvelopeCategoryModelsReadCategory from './model/EnvelopeCategoryModelsReadCategory';
import EnvelopeInt from './model/EnvelopeInt';
import EnvelopeListProductModelsReadFeed from './model/EnvelopeListProductModelsReadFeed';
import EnvelopeListProductModelsReadProduct from './model/EnvelopeListProductModelsReadProduct';
import EnvelopeListProductModelsReadProductItem from './model/EnvelopeListProductModelsReadProductItem';
import EnvelopeListProductModelsReadRelationType from './model/EnvelopeListProductModelsReadRelationType';
import EnvelopeMarketModelsMarket from './model/EnvelopeMarketModelsMarket';
import EnvelopePageAreaModelsReadPageArea from './model/EnvelopePageAreaModelsReadPageArea';
import EnvelopePageAreaModelsReadPageAreaFamily from './model/EnvelopePageAreaModelsReadPageAreaFamily';
import EnvelopeProductModelsReadProduct from './model/EnvelopeProductModelsReadProduct';
import EnvelopeProductModelsReadProductItem from './model/EnvelopeProductModelsReadProductItem';
import EnvelopeProductParameterModelsReadProductParameter from './model/EnvelopeProductParameterModelsReadProductParameter';
import EnvelopeProductParameterModelsReadProductParameterGroup from './model/EnvelopeProductParameterModelsReadProductParameterGroup';
import EnvelopeProductParameterModelsReadProductParameterPredefinedValue from './model/EnvelopeProductParameterModelsReadProductParameterPredefinedValue';
import EnvelopeProductParameterModelsReadProductParameterValue from './model/EnvelopeProductParameterModelsReadProductParameterValue';
import EnvelopeString from './model/EnvelopeString';
import EnvelopeSupplierModelsReadSupplier from './model/EnvelopeSupplierModelsReadSupplier';
import EnvelopeUserModelsReadUserProfile from './model/EnvelopeUserModelsReadUserProfile';
import EnvelopeVariantModelsReadVariant from './model/EnvelopeVariantModelsReadVariant';
import EnvelopeVariantModelsReadVariantGroup from './model/EnvelopeVariantModelsReadVariantGroup';
import MarketModelsMarket from './model/MarketModelsMarket';
import OrderCapture from './model/OrderCapture';
import OrderCaptureRow from './model/OrderCaptureRow';
import OrderCheckoutOrder from './model/OrderCheckoutOrder';
import OrderCheckoutOrderRow from './model/OrderCheckoutOrderRow';
import OrderFreightClass from './model/OrderFreightClass';
import OrderModelsAddress from './model/OrderModelsAddress';
import OrderModelsOrder from './model/OrderModelsOrder';
import OrderModelsOrderQuery from './model/OrderModelsOrderQuery';
import OrderModelsOrderRow from './model/OrderModelsOrderRow';
import OrderModelsOrderStatus from './model/OrderModelsOrderStatus';
import OrderModelsOrderUpdate from './model/OrderModelsOrderUpdate';
import OrderModelsPaymentDetail from './model/OrderModelsPaymentDetail';
import OrderModelsRefund from './model/OrderModelsRefund';
import OrderModelsShippingDetail from './model/OrderModelsShippingDetail';
import OrderProcessedCapture from './model/OrderProcessedCapture';
import OrderProcessedRefund from './model/OrderProcessedRefund';
import OrderRefund from './model/OrderRefund';
import OrderRefundRow from './model/OrderRefundRow';
import OrderValidateOrderCreationRequest from './model/OrderValidateOrderCreationRequest';
import OrderValidateOrderCreationRequestStockItem from './model/OrderValidateOrderCreationRequestStockItem';
import PageAreaModelsReadPageArea from './model/PageAreaModelsReadPageArea';
import PageAreaModelsReadPageAreaFamily from './model/PageAreaModelsReadPageAreaFamily';
import PageAreaModelsReadPageWidget from './model/PageAreaModelsReadPageWidget';
import PageAreaModelsReadPageWidgetContainer from './model/PageAreaModelsReadPageWidgetContainer';
import PageAreaModelsWritePageArea from './model/PageAreaModelsWritePageArea';
import PageAreaModelsWritePageAreaFamily from './model/PageAreaModelsWritePageAreaFamily';
import PageResult from './model/PageResult';
import PageWidgetLazyLoadSetupLazyLoadCollectionConfiguration from './model/PageWidgetLazyLoadSetupLazyLoadCollectionConfiguration';
import PageWidgetLazyLoadSetupLazyLoadConfiguration from './model/PageWidgetLazyLoadSetupLazyLoadConfiguration';
import PaymentModelsPaymentOption from './model/PaymentModelsPaymentOption';
import PaymentModelsPaymentOptionQuery from './model/PaymentModelsPaymentOptionQuery';
import PriceListModelsPriceList from './model/PriceListModelsPriceList';
import PriceListModelsPriceListPriceResponse from './model/PriceListModelsPriceListPriceResponse';
import PriceListModelsReadPriceListPrice from './model/PriceListModelsReadPriceListPrice';
import PriceListModelsWritePriceListPrice from './model/PriceListModelsWritePriceListPrice';
import ProductModelsMonitorSku from './model/ProductModelsMonitorSku';
import ProductModelsProductCategory from './model/ProductModelsProductCategory';
import ProductModelsProductQuery from './model/ProductModelsProductQuery';
import ProductModelsReadFeed from './model/ProductModelsReadFeed';
import ProductModelsReadFeedMembership from './model/ProductModelsReadFeedMembership';
import ProductModelsReadImage from './model/ProductModelsReadImage';
import ProductModelsReadProduct from './model/ProductModelsReadProduct';
import ProductModelsReadProductItem from './model/ProductModelsReadProductItem';
import ProductModelsReadProductItemStock from './model/ProductModelsReadProductItemStock';
import ProductModelsReadProductUrl from './model/ProductModelsReadProductUrl';
import ProductModelsReadRelatedProduct from './model/ProductModelsReadRelatedProduct';
import ProductModelsReadRelationType from './model/ProductModelsReadRelationType';
import ProductModelsReadShippingFee from './model/ProductModelsReadShippingFee';
import ProductModelsRelatedProductEnvelope from './model/ProductModelsRelatedProductEnvelope';
import ProductModelsStockEnvelope from './model/ProductModelsStockEnvelope';
import ProductModelsWriteProduct from './model/ProductModelsWriteProduct';
import ProductModelsWriteProductItem from './model/ProductModelsWriteProductItem';
import ProductModelsWriteProductItemStock from './model/ProductModelsWriteProductItemStock';
import ProductModelsWriteRelatedProduct from './model/ProductModelsWriteRelatedProduct';
import ProductParameterModelsReadProductParameter from './model/ProductParameterModelsReadProductParameter';
import ProductParameterModelsReadProductParameterGroup from './model/ProductParameterModelsReadProductParameterGroup';
import ProductParameterModelsReadProductParameterPredefinedValue from './model/ProductParameterModelsReadProductParameterPredefinedValue';
import ProductParameterModelsReadProductParameterValue from './model/ProductParameterModelsReadProductParameterValue';
import ProductParameterModelsWriteProductParameter from './model/ProductParameterModelsWriteProductParameter';
import ProductParameterModelsWriteProductParameterGroup from './model/ProductParameterModelsWriteProductParameterGroup';
import ProductParameterModelsWriteProductParameterPredefinedValue from './model/ProductParameterModelsWriteProductParameterPredefinedValue';
import ProductParameterModelsWriteProductParameterValue from './model/ProductParameterModelsWriteProductParameterValue';
import ProductParameterModelsWriteProductParameterValueBatch from './model/ProductParameterModelsWriteProductParameterValueBatch';
import ProductProductItemEnvelope from './model/ProductProductItemEnvelope';
import SharedModelsLocalizableContent from './model/SharedModelsLocalizableContent';
import ShippingModelsParcelGroupOptions from './model/ShippingModelsParcelGroupOptions';
import ShippingModelsShippingOption from './model/ShippingModelsShippingOption';
import ShippingModelsShippingQuery from './model/ShippingModelsShippingQuery';
import ShippingModelsShippingSubOption from './model/ShippingModelsShippingSubOption';
import SupplierModelsReadSupplier from './model/SupplierModelsReadSupplier';
import SupplierModelsSupplierQuery from './model/SupplierModelsSupplierQuery';
import SupplierModelsWriteSupplier from './model/SupplierModelsWriteSupplier';
import SystemNullableValidationConfiguration from './model/SystemNullableValidationConfiguration';
import UserModelsReadUserProfile from './model/UserModelsReadUserProfile';
import UserModelsUserProfileQuery from './model/UserModelsUserProfileQuery';
import UserModelsWriteUserProfile from './model/UserModelsWriteUserProfile';
import VariantModelsReadVariant from './model/VariantModelsReadVariant';
import VariantModelsReadVariantGroup from './model/VariantModelsReadVariantGroup';
import VariantModelsWriteVariant from './model/VariantModelsWriteVariant';
import VariantModelsWriteVariantGroup from './model/VariantModelsWriteVariantGroup';
import WidgetRestrictionSetupWidgetRestrictionConfiguration from './model/WidgetRestrictionSetupWidgetRestrictionConfiguration';
import BrandApi from './api/BrandApi';
import CategoryApi from './api/CategoryApi';
import MarketApi from './api/MarketApi';
import OrderApi from './api/OrderApi';
import PageAreaApi from './api/PageAreaApi';
import PaymentApi from './api/PaymentApi';
import PriceListApi from './api/PriceListApi';
import ProductApi from './api/ProductApi';
import ProductParameterApi from './api/ProductParameterApi';
import ShippingApi from './api/ShippingApi';
import SupplierApi from './api/SupplierApi';
import UserApi from './api/UserApi';
import VariantApi from './api/VariantApi';


/**
*  Geins Management API is an RESTful api to power your applications who manages your geins services. Geins provides an easy-to-use and scalable solution for managing all aspects of an online store, from product listings and customer information to order processing and payment transactions.   :::tip With this API, you can build custom applications and integrate with third-party systems, dashboards and other bussiness logic apps. :::    ## Getting started Once you have created an account, you can start using the Management API by creating an &#x60;API key&#x60;. You can create as many API keys as you need. Each &#x60;API key&#x60; is connected to a specific account so you can keep track of operations and manage keys. You can find your &#x60;API key&#x60; in the &#x60;geins merchant center&#x60;.   ### Fast track Use one of our [SDKs](https://docs.geins.io/docs/sdk/introduction) to get started quickly. The SDKs are available for the most popular programming languages and frameworks.  Or, if you prefer to just take it for a test run:  [![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/25895885-aaf6598f-1a7c-4949-85d7-ba846c42d553?action&#x3D;collection%2Ffork&amp;collection-url&#x3D;entityId%3D25895885-aaf6598f-1a7c-4949-85d7-ba846c42d553%26entityType%3Dcollection%26workspaceId%3Da2a179ce-158e-46b0-8d06-e9640f45112c)  ### Authentication Two authentication methods are supported:   - &#x60;API Key&#x60;   - &#x60;Basic Auth&#x60; .<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var GeinsManagementApiSdkJs = require('index'); // See note below*.
* var xxxSvc = new GeinsManagementApiSdkJs.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new GeinsManagementApiSdkJs.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new GeinsManagementApiSdkJs.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new GeinsManagementApiSdkJs.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version v1.7.1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The APIOrderOrderComment model constructor.
     * @property {module:model/APIOrderOrderComment}
     */
    APIOrderOrderComment,

    /**
     * The APIOrderTransactionData model constructor.
     * @property {module:model/APIOrderTransactionData}
     */
    APIOrderTransactionData,

    /**
     * The BrandModelsBrandQuery model constructor.
     * @property {module:model/BrandModelsBrandQuery}
     */
    BrandModelsBrandQuery,

    /**
     * The BrandModelsReadBrand model constructor.
     * @property {module:model/BrandModelsReadBrand}
     */
    BrandModelsReadBrand,

    /**
     * The BrandModelsWriteBrand model constructor.
     * @property {module:model/BrandModelsWriteBrand}
     */
    BrandModelsWriteBrand,

    /**
     * The CategoryModelsCategoryQuery model constructor.
     * @property {module:model/CategoryModelsCategoryQuery}
     */
    CategoryModelsCategoryQuery,

    /**
     * The CategoryModelsReadCategory model constructor.
     * @property {module:model/CategoryModelsReadCategory}
     */
    CategoryModelsReadCategory,

    /**
     * The CategoryModelsWriteCategory model constructor.
     * @property {module:model/CategoryModelsWriteCategory}
     */
    CategoryModelsWriteCategory,

    /**
     * The ContainerRestrictionSetupContainerRestrictionConfiguration model constructor.
     * @property {module:model/ContainerRestrictionSetupContainerRestrictionConfiguration}
     */
    ContainerRestrictionSetupContainerRestrictionConfiguration,

    /**
     * The Envelope model constructor.
     * @property {module:model/Envelope}
     */
    Envelope,

    /**
     * The EnvelopeBrandModelsReadBrand model constructor.
     * @property {module:model/EnvelopeBrandModelsReadBrand}
     */
    EnvelopeBrandModelsReadBrand,

    /**
     * The EnvelopeCategoryModelsReadCategory model constructor.
     * @property {module:model/EnvelopeCategoryModelsReadCategory}
     */
    EnvelopeCategoryModelsReadCategory,

    /**
     * The EnvelopeInt model constructor.
     * @property {module:model/EnvelopeInt}
     */
    EnvelopeInt,

    /**
     * The EnvelopeListProductModelsReadFeed model constructor.
     * @property {module:model/EnvelopeListProductModelsReadFeed}
     */
    EnvelopeListProductModelsReadFeed,

    /**
     * The EnvelopeListProductModelsReadProduct model constructor.
     * @property {module:model/EnvelopeListProductModelsReadProduct}
     */
    EnvelopeListProductModelsReadProduct,

    /**
     * The EnvelopeListProductModelsReadProductItem model constructor.
     * @property {module:model/EnvelopeListProductModelsReadProductItem}
     */
    EnvelopeListProductModelsReadProductItem,

    /**
     * The EnvelopeListProductModelsReadRelationType model constructor.
     * @property {module:model/EnvelopeListProductModelsReadRelationType}
     */
    EnvelopeListProductModelsReadRelationType,

    /**
     * The EnvelopeMarketModelsMarket model constructor.
     * @property {module:model/EnvelopeMarketModelsMarket}
     */
    EnvelopeMarketModelsMarket,

    /**
     * The EnvelopePageAreaModelsReadPageArea model constructor.
     * @property {module:model/EnvelopePageAreaModelsReadPageArea}
     */
    EnvelopePageAreaModelsReadPageArea,

    /**
     * The EnvelopePageAreaModelsReadPageAreaFamily model constructor.
     * @property {module:model/EnvelopePageAreaModelsReadPageAreaFamily}
     */
    EnvelopePageAreaModelsReadPageAreaFamily,

    /**
     * The EnvelopeProductModelsReadProduct model constructor.
     * @property {module:model/EnvelopeProductModelsReadProduct}
     */
    EnvelopeProductModelsReadProduct,

    /**
     * The EnvelopeProductModelsReadProductItem model constructor.
     * @property {module:model/EnvelopeProductModelsReadProductItem}
     */
    EnvelopeProductModelsReadProductItem,

    /**
     * The EnvelopeProductParameterModelsReadProductParameter model constructor.
     * @property {module:model/EnvelopeProductParameterModelsReadProductParameter}
     */
    EnvelopeProductParameterModelsReadProductParameter,

    /**
     * The EnvelopeProductParameterModelsReadProductParameterGroup model constructor.
     * @property {module:model/EnvelopeProductParameterModelsReadProductParameterGroup}
     */
    EnvelopeProductParameterModelsReadProductParameterGroup,

    /**
     * The EnvelopeProductParameterModelsReadProductParameterPredefinedValue model constructor.
     * @property {module:model/EnvelopeProductParameterModelsReadProductParameterPredefinedValue}
     */
    EnvelopeProductParameterModelsReadProductParameterPredefinedValue,

    /**
     * The EnvelopeProductParameterModelsReadProductParameterValue model constructor.
     * @property {module:model/EnvelopeProductParameterModelsReadProductParameterValue}
     */
    EnvelopeProductParameterModelsReadProductParameterValue,

    /**
     * The EnvelopeString model constructor.
     * @property {module:model/EnvelopeString}
     */
    EnvelopeString,

    /**
     * The EnvelopeSupplierModelsReadSupplier model constructor.
     * @property {module:model/EnvelopeSupplierModelsReadSupplier}
     */
    EnvelopeSupplierModelsReadSupplier,

    /**
     * The EnvelopeUserModelsReadUserProfile model constructor.
     * @property {module:model/EnvelopeUserModelsReadUserProfile}
     */
    EnvelopeUserModelsReadUserProfile,

    /**
     * The EnvelopeVariantModelsReadVariant model constructor.
     * @property {module:model/EnvelopeVariantModelsReadVariant}
     */
    EnvelopeVariantModelsReadVariant,

    /**
     * The EnvelopeVariantModelsReadVariantGroup model constructor.
     * @property {module:model/EnvelopeVariantModelsReadVariantGroup}
     */
    EnvelopeVariantModelsReadVariantGroup,

    /**
     * The MarketModelsMarket model constructor.
     * @property {module:model/MarketModelsMarket}
     */
    MarketModelsMarket,

    /**
     * The OrderCapture model constructor.
     * @property {module:model/OrderCapture}
     */
    OrderCapture,

    /**
     * The OrderCaptureRow model constructor.
     * @property {module:model/OrderCaptureRow}
     */
    OrderCaptureRow,

    /**
     * The OrderCheckoutOrder model constructor.
     * @property {module:model/OrderCheckoutOrder}
     */
    OrderCheckoutOrder,

    /**
     * The OrderCheckoutOrderRow model constructor.
     * @property {module:model/OrderCheckoutOrderRow}
     */
    OrderCheckoutOrderRow,

    /**
     * The OrderFreightClass model constructor.
     * @property {module:model/OrderFreightClass}
     */
    OrderFreightClass,

    /**
     * The OrderModelsAddress model constructor.
     * @property {module:model/OrderModelsAddress}
     */
    OrderModelsAddress,

    /**
     * The OrderModelsOrder model constructor.
     * @property {module:model/OrderModelsOrder}
     */
    OrderModelsOrder,

    /**
     * The OrderModelsOrderQuery model constructor.
     * @property {module:model/OrderModelsOrderQuery}
     */
    OrderModelsOrderQuery,

    /**
     * The OrderModelsOrderRow model constructor.
     * @property {module:model/OrderModelsOrderRow}
     */
    OrderModelsOrderRow,

    /**
     * The OrderModelsOrderStatus model constructor.
     * @property {module:model/OrderModelsOrderStatus}
     */
    OrderModelsOrderStatus,

    /**
     * The OrderModelsOrderUpdate model constructor.
     * @property {module:model/OrderModelsOrderUpdate}
     */
    OrderModelsOrderUpdate,

    /**
     * The OrderModelsPaymentDetail model constructor.
     * @property {module:model/OrderModelsPaymentDetail}
     */
    OrderModelsPaymentDetail,

    /**
     * The OrderModelsRefund model constructor.
     * @property {module:model/OrderModelsRefund}
     */
    OrderModelsRefund,

    /**
     * The OrderModelsShippingDetail model constructor.
     * @property {module:model/OrderModelsShippingDetail}
     */
    OrderModelsShippingDetail,

    /**
     * The OrderProcessedCapture model constructor.
     * @property {module:model/OrderProcessedCapture}
     */
    OrderProcessedCapture,

    /**
     * The OrderProcessedRefund model constructor.
     * @property {module:model/OrderProcessedRefund}
     */
    OrderProcessedRefund,

    /**
     * The OrderRefund model constructor.
     * @property {module:model/OrderRefund}
     */
    OrderRefund,

    /**
     * The OrderRefundRow model constructor.
     * @property {module:model/OrderRefundRow}
     */
    OrderRefundRow,

    /**
     * The OrderValidateOrderCreationRequest model constructor.
     * @property {module:model/OrderValidateOrderCreationRequest}
     */
    OrderValidateOrderCreationRequest,

    /**
     * The OrderValidateOrderCreationRequestStockItem model constructor.
     * @property {module:model/OrderValidateOrderCreationRequestStockItem}
     */
    OrderValidateOrderCreationRequestStockItem,

    /**
     * The PageAreaModelsReadPageArea model constructor.
     * @property {module:model/PageAreaModelsReadPageArea}
     */
    PageAreaModelsReadPageArea,

    /**
     * The PageAreaModelsReadPageAreaFamily model constructor.
     * @property {module:model/PageAreaModelsReadPageAreaFamily}
     */
    PageAreaModelsReadPageAreaFamily,

    /**
     * The PageAreaModelsReadPageWidget model constructor.
     * @property {module:model/PageAreaModelsReadPageWidget}
     */
    PageAreaModelsReadPageWidget,

    /**
     * The PageAreaModelsReadPageWidgetContainer model constructor.
     * @property {module:model/PageAreaModelsReadPageWidgetContainer}
     */
    PageAreaModelsReadPageWidgetContainer,

    /**
     * The PageAreaModelsWritePageArea model constructor.
     * @property {module:model/PageAreaModelsWritePageArea}
     */
    PageAreaModelsWritePageArea,

    /**
     * The PageAreaModelsWritePageAreaFamily model constructor.
     * @property {module:model/PageAreaModelsWritePageAreaFamily}
     */
    PageAreaModelsWritePageAreaFamily,

    /**
     * The PageResult model constructor.
     * @property {module:model/PageResult}
     */
    PageResult,

    /**
     * The PageWidgetLazyLoadSetupLazyLoadCollectionConfiguration model constructor.
     * @property {module:model/PageWidgetLazyLoadSetupLazyLoadCollectionConfiguration}
     */
    PageWidgetLazyLoadSetupLazyLoadCollectionConfiguration,

    /**
     * The PageWidgetLazyLoadSetupLazyLoadConfiguration model constructor.
     * @property {module:model/PageWidgetLazyLoadSetupLazyLoadConfiguration}
     */
    PageWidgetLazyLoadSetupLazyLoadConfiguration,

    /**
     * The PaymentModelsPaymentOption model constructor.
     * @property {module:model/PaymentModelsPaymentOption}
     */
    PaymentModelsPaymentOption,

    /**
     * The PaymentModelsPaymentOptionQuery model constructor.
     * @property {module:model/PaymentModelsPaymentOptionQuery}
     */
    PaymentModelsPaymentOptionQuery,

    /**
     * The PriceListModelsPriceList model constructor.
     * @property {module:model/PriceListModelsPriceList}
     */
    PriceListModelsPriceList,

    /**
     * The PriceListModelsPriceListPriceResponse model constructor.
     * @property {module:model/PriceListModelsPriceListPriceResponse}
     */
    PriceListModelsPriceListPriceResponse,

    /**
     * The PriceListModelsReadPriceListPrice model constructor.
     * @property {module:model/PriceListModelsReadPriceListPrice}
     */
    PriceListModelsReadPriceListPrice,

    /**
     * The PriceListModelsWritePriceListPrice model constructor.
     * @property {module:model/PriceListModelsWritePriceListPrice}
     */
    PriceListModelsWritePriceListPrice,

    /**
     * The ProductModelsMonitorSku model constructor.
     * @property {module:model/ProductModelsMonitorSku}
     */
    ProductModelsMonitorSku,

    /**
     * The ProductModelsProductCategory model constructor.
     * @property {module:model/ProductModelsProductCategory}
     */
    ProductModelsProductCategory,

    /**
     * The ProductModelsProductQuery model constructor.
     * @property {module:model/ProductModelsProductQuery}
     */
    ProductModelsProductQuery,

    /**
     * The ProductModelsReadFeed model constructor.
     * @property {module:model/ProductModelsReadFeed}
     */
    ProductModelsReadFeed,

    /**
     * The ProductModelsReadFeedMembership model constructor.
     * @property {module:model/ProductModelsReadFeedMembership}
     */
    ProductModelsReadFeedMembership,

    /**
     * The ProductModelsReadImage model constructor.
     * @property {module:model/ProductModelsReadImage}
     */
    ProductModelsReadImage,

    /**
     * The ProductModelsReadProduct model constructor.
     * @property {module:model/ProductModelsReadProduct}
     */
    ProductModelsReadProduct,

    /**
     * The ProductModelsReadProductItem model constructor.
     * @property {module:model/ProductModelsReadProductItem}
     */
    ProductModelsReadProductItem,

    /**
     * The ProductModelsReadProductItemStock model constructor.
     * @property {module:model/ProductModelsReadProductItemStock}
     */
    ProductModelsReadProductItemStock,

    /**
     * The ProductModelsReadProductUrl model constructor.
     * @property {module:model/ProductModelsReadProductUrl}
     */
    ProductModelsReadProductUrl,

    /**
     * The ProductModelsReadRelatedProduct model constructor.
     * @property {module:model/ProductModelsReadRelatedProduct}
     */
    ProductModelsReadRelatedProduct,

    /**
     * The ProductModelsReadRelationType model constructor.
     * @property {module:model/ProductModelsReadRelationType}
     */
    ProductModelsReadRelationType,

    /**
     * The ProductModelsReadShippingFee model constructor.
     * @property {module:model/ProductModelsReadShippingFee}
     */
    ProductModelsReadShippingFee,

    /**
     * The ProductModelsRelatedProductEnvelope model constructor.
     * @property {module:model/ProductModelsRelatedProductEnvelope}
     */
    ProductModelsRelatedProductEnvelope,

    /**
     * The ProductModelsStockEnvelope model constructor.
     * @property {module:model/ProductModelsStockEnvelope}
     */
    ProductModelsStockEnvelope,

    /**
     * The ProductModelsWriteProduct model constructor.
     * @property {module:model/ProductModelsWriteProduct}
     */
    ProductModelsWriteProduct,

    /**
     * The ProductModelsWriteProductItem model constructor.
     * @property {module:model/ProductModelsWriteProductItem}
     */
    ProductModelsWriteProductItem,

    /**
     * The ProductModelsWriteProductItemStock model constructor.
     * @property {module:model/ProductModelsWriteProductItemStock}
     */
    ProductModelsWriteProductItemStock,

    /**
     * The ProductModelsWriteRelatedProduct model constructor.
     * @property {module:model/ProductModelsWriteRelatedProduct}
     */
    ProductModelsWriteRelatedProduct,

    /**
     * The ProductParameterModelsReadProductParameter model constructor.
     * @property {module:model/ProductParameterModelsReadProductParameter}
     */
    ProductParameterModelsReadProductParameter,

    /**
     * The ProductParameterModelsReadProductParameterGroup model constructor.
     * @property {module:model/ProductParameterModelsReadProductParameterGroup}
     */
    ProductParameterModelsReadProductParameterGroup,

    /**
     * The ProductParameterModelsReadProductParameterPredefinedValue model constructor.
     * @property {module:model/ProductParameterModelsReadProductParameterPredefinedValue}
     */
    ProductParameterModelsReadProductParameterPredefinedValue,

    /**
     * The ProductParameterModelsReadProductParameterValue model constructor.
     * @property {module:model/ProductParameterModelsReadProductParameterValue}
     */
    ProductParameterModelsReadProductParameterValue,

    /**
     * The ProductParameterModelsWriteProductParameter model constructor.
     * @property {module:model/ProductParameterModelsWriteProductParameter}
     */
    ProductParameterModelsWriteProductParameter,

    /**
     * The ProductParameterModelsWriteProductParameterGroup model constructor.
     * @property {module:model/ProductParameterModelsWriteProductParameterGroup}
     */
    ProductParameterModelsWriteProductParameterGroup,

    /**
     * The ProductParameterModelsWriteProductParameterPredefinedValue model constructor.
     * @property {module:model/ProductParameterModelsWriteProductParameterPredefinedValue}
     */
    ProductParameterModelsWriteProductParameterPredefinedValue,

    /**
     * The ProductParameterModelsWriteProductParameterValue model constructor.
     * @property {module:model/ProductParameterModelsWriteProductParameterValue}
     */
    ProductParameterModelsWriteProductParameterValue,

    /**
     * The ProductParameterModelsWriteProductParameterValueBatch model constructor.
     * @property {module:model/ProductParameterModelsWriteProductParameterValueBatch}
     */
    ProductParameterModelsWriteProductParameterValueBatch,

    /**
     * The ProductProductItemEnvelope model constructor.
     * @property {module:model/ProductProductItemEnvelope}
     */
    ProductProductItemEnvelope,

    /**
     * The SharedModelsLocalizableContent model constructor.
     * @property {module:model/SharedModelsLocalizableContent}
     */
    SharedModelsLocalizableContent,

    /**
     * The ShippingModelsParcelGroupOptions model constructor.
     * @property {module:model/ShippingModelsParcelGroupOptions}
     */
    ShippingModelsParcelGroupOptions,

    /**
     * The ShippingModelsShippingOption model constructor.
     * @property {module:model/ShippingModelsShippingOption}
     */
    ShippingModelsShippingOption,

    /**
     * The ShippingModelsShippingQuery model constructor.
     * @property {module:model/ShippingModelsShippingQuery}
     */
    ShippingModelsShippingQuery,

    /**
     * The ShippingModelsShippingSubOption model constructor.
     * @property {module:model/ShippingModelsShippingSubOption}
     */
    ShippingModelsShippingSubOption,

    /**
     * The SupplierModelsReadSupplier model constructor.
     * @property {module:model/SupplierModelsReadSupplier}
     */
    SupplierModelsReadSupplier,

    /**
     * The SupplierModelsSupplierQuery model constructor.
     * @property {module:model/SupplierModelsSupplierQuery}
     */
    SupplierModelsSupplierQuery,

    /**
     * The SupplierModelsWriteSupplier model constructor.
     * @property {module:model/SupplierModelsWriteSupplier}
     */
    SupplierModelsWriteSupplier,

    /**
     * The SystemNullableValidationConfiguration model constructor.
     * @property {module:model/SystemNullableValidationConfiguration}
     */
    SystemNullableValidationConfiguration,

    /**
     * The UserModelsReadUserProfile model constructor.
     * @property {module:model/UserModelsReadUserProfile}
     */
    UserModelsReadUserProfile,

    /**
     * The UserModelsUserProfileQuery model constructor.
     * @property {module:model/UserModelsUserProfileQuery}
     */
    UserModelsUserProfileQuery,

    /**
     * The UserModelsWriteUserProfile model constructor.
     * @property {module:model/UserModelsWriteUserProfile}
     */
    UserModelsWriteUserProfile,

    /**
     * The VariantModelsReadVariant model constructor.
     * @property {module:model/VariantModelsReadVariant}
     */
    VariantModelsReadVariant,

    /**
     * The VariantModelsReadVariantGroup model constructor.
     * @property {module:model/VariantModelsReadVariantGroup}
     */
    VariantModelsReadVariantGroup,

    /**
     * The VariantModelsWriteVariant model constructor.
     * @property {module:model/VariantModelsWriteVariant}
     */
    VariantModelsWriteVariant,

    /**
     * The VariantModelsWriteVariantGroup model constructor.
     * @property {module:model/VariantModelsWriteVariantGroup}
     */
    VariantModelsWriteVariantGroup,

    /**
     * The WidgetRestrictionSetupWidgetRestrictionConfiguration model constructor.
     * @property {module:model/WidgetRestrictionSetupWidgetRestrictionConfiguration}
     */
    WidgetRestrictionSetupWidgetRestrictionConfiguration,

    /**
    * The BrandApi service constructor.
    * @property {module:api/BrandApi}
    */
    BrandApi,

    /**
    * The CategoryApi service constructor.
    * @property {module:api/CategoryApi}
    */
    CategoryApi,

    /**
    * The MarketApi service constructor.
    * @property {module:api/MarketApi}
    */
    MarketApi,

    /**
    * The OrderApi service constructor.
    * @property {module:api/OrderApi}
    */
    OrderApi,

    /**
    * The PageAreaApi service constructor.
    * @property {module:api/PageAreaApi}
    */
    PageAreaApi,

    /**
    * The PaymentApi service constructor.
    * @property {module:api/PaymentApi}
    */
    PaymentApi,

    /**
    * The PriceListApi service constructor.
    * @property {module:api/PriceListApi}
    */
    PriceListApi,

    /**
    * The ProductApi service constructor.
    * @property {module:api/ProductApi}
    */
    ProductApi,

    /**
    * The ProductParameterApi service constructor.
    * @property {module:api/ProductParameterApi}
    */
    ProductParameterApi,

    /**
    * The ShippingApi service constructor.
    * @property {module:api/ShippingApi}
    */
    ShippingApi,

    /**
    * The SupplierApi service constructor.
    * @property {module:api/SupplierApi}
    */
    SupplierApi,

    /**
    * The UserApi service constructor.
    * @property {module:api/UserApi}
    */
    UserApi,

    /**
    * The VariantApi service constructor.
    * @property {module:api/VariantApi}
    */
    VariantApi
};
