# GeinsSdkApiMgmtJavascript.PriceListModelsReadPriceListPrice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**productId** | **Number** | The id of the product that this price applies to. | [optional] 
**priceListId** | **Number** | The id of the price list that this price is associated with. | [optional] 
**priceListName** | **String** | The name of the price list that this price is associated with. | [optional] 
**priceIncVat** | **Number** | The price, inc VAT, in the currency of the associated price list. | [optional] 
**priceExVat** | **Number** | The price, ex VAT, in the currency of the associated price list. | [optional] 
**vatRate** | **Number** | The VAT Rate. | [optional] 
**country** | **String** | The 2-letter ISO country code for this price. | [optional] 
**currency** | **String** | The &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_4217\&quot;&gt;3-letter ISO 4217 currency code&lt;/a&gt; for this price. | [optional] 
**staggeredCount** | **Number** | Staggered count for this price. Defaults to 1.    This field is ignored for prices on default (Ordinary, Sale and Campaign) price lists. | [optional] 
**validFrom** | **Date** | The date the price is valid from.    No start boundary if null. | [optional] 
**validTo** | **Date** | The date the price is valid to.    No end boundary if null. | [optional] 


