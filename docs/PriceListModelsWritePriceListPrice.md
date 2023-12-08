# GeinsSdkApiMgmtJavascript.PriceListModelsWritePriceListPrice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**priceListId** | **Number** | The price list id.    Prices on Campaign price lists can not be updated. Any such entries will be ignored. | [optional] 
**price** | **Number** | The price in the currency of the associated price list.    This value can be either inc or ex VAT, depending on configuration. | [optional] 
**productId** | **String** | The id of the product that this price applies to.    This value can represent different fields, depending on configuration. | [optional] 
**currency** | **String** | The &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_4217\&quot;&gt;3-letter ISO 4217 currency code&lt;/a&gt; for this price.    If ommitted the price will be updated on the default market. | [optional] 
**staggeredCount** | **Number** | Staggered count for this price. Defaults to 1.    This field is ignored for prices on default (Ordinary, Sale and Campaign) price lists. | [optional] 


