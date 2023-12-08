# GeinsSdkApiMgmtJavascript.ProductModelsWriteProductItemStock

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A value to uniquely identity a single product item.    This value can represent different fields, depending on configuration. | [optional] 
**stock** | **Number** | The stock value. | [optional] 
**stockSellable** | **Number** | The sellable stock value.    This value is read only. | [optional] 
**stockType** | **Number** | The type of stock to be updated.    0 &#x3D; Available. Sets the actual count of items in warehouse.    1 &#x3D; Oversellable. Sets the count for items that are available for purchase but not in physical stock.    2 &#x3D; Static. Sets the count for items that have a static count that is always available (eg. digital gift cards).               When set, the stock count should be considered the max amount a customer can put in cart for the current item. | [optional] 



## Enum: StockTypeEnum


* `0` (value: `0`)

* `1` (value: `1`)

* `2` (value: `2`)




