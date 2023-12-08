# GeinsSdkApiMgmtJavascript.ProductModelsWriteProduct

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**articleNumber** | **String** | The article number of the product. | [optional] 
**names** | [**[SharedModelsLocalizableContent]**](SharedModelsLocalizableContent.md) | The localized names of the product. | [optional] 
**active** | **Boolean** | The current state of the product. | [optional] 
**purchasePrice** | **Number** | The purchase price in the currency defined in PurchasePriceCurrency. | [optional] 
**purchasePriceCurrency** | **String** | The &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_4217\&quot;&gt;3-letter ISO 4217 currency code&lt;/a&gt; for the amount given in PurchasePrice. | [optional] 
**shortTexts** | [**[SharedModelsLocalizableContent]**](SharedModelsLocalizableContent.md) | Localized short texts for the product. | [optional] 
**longTexts** | [**[SharedModelsLocalizableContent]**](SharedModelsLocalizableContent.md) | Localized long texts for the product. | [optional] 
**techTexts** | [**[SharedModelsLocalizableContent]**](SharedModelsLocalizableContent.md) | Localized tech texts for the product. | [optional] 
**brandId** | **Number** | The brand of the product. | [optional] 
**supplierId** | **Number** | The supplier id of the product. | [optional] 
**items** | [**[ProductModelsWriteProductItem]**](ProductModelsWriteProductItem.md) | The items belonging to the product.  Only valid for product creation. | [optional] 
**categoryIds** | **[Number]** | The category ids the product belongs to. | [optional] 
**parameterValues** | [**[ProductParameterModelsWriteProductParameterValue]**](ProductParameterModelsWriteProductParameterValue.md) | The parameter values associated with the product.    Only valid for product creation. | [optional] 
**variants** | [**[VariantModelsWriteVariant]**](VariantModelsWriteVariant.md) | The variants for this product. | [optional] 
**markets** | [**[MarketModelsMarket]**](MarketModelsMarket.md) | The markets for this product. | [optional] 
**freightClassId** | **Number** | Id of freight class. | [optional] 
**intrastatCode** | **String** | Intrastat code of the product. | [optional] 
**countryOfOrigin** | **String** | Country of orgin of product. | [optional] 
**variantGroupId** | **Number** | Id of Variant Group to whom the product should be associated. | [optional] 
**vat** | **Number** | ID or rate of VAT (On create and if no VAT is provided then default VAT will be used). | [optional] 
**vatType** | **String** | Defines how VAT parameter should be interpreted.    Actual &#x3D; VAT parameter is interpreted as VAT rate.    VatId &#x3D; VAT parameter is interpreted as VAT Id. | [optional] 
**externalId** | **String** | External id of the product. | [optional] 
**activationDate** | **Date** | Activation date for the product. | [optional] 


