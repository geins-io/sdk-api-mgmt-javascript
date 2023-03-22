# GeinsManagementApiSdkJs.OrderModelsOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The unique identifier for this order. | [optional] 
**externalId** | **String** | The unique external identifier for this order. | [optional] 
**personalId** | **String** | The social security number, or organisational number of the customer. | [optional] 
**customerId** | **Number** | The unique identifier of the customer placing this order. | [optional] 
**customerTypeId** | **Number** | Customer type. Usually 1 for private customers and 2 for companies. This field is customer specific | [optional] 
**createdAt** | **Date** | Datetime when the order was created. | [optional] 
**updatedAt** | **Date** | Datetime when the order was last updated. | [optional] 
**completedAt** | **Date** | The DateTime when the order was completed (delivered, payed). | [optional] 
**status** | **String** | The order status. Possbile values: cancelled, on-hold, inactive, refunded, partial,  pending-payment, out-of-stock, backorder, completed, pending. | [optional] 
**currency** | **String** | ISO Currency code. | [optional] 
**currencyRate** | **Number** | The Currency Rate to SEK. | [optional] 
**marketId** | **Number** | The unique identifier for the market this order originates from. | [optional] 
**marketName** | **String** | The market name. Usually this is the equal to the site name. | [optional] 
**language** | **String** | Two-letter Language code. | [optional] 
**orderTotal** | **Number** | Order total. | [optional] 
**expectedSum** | **Number** | Expected total sum to be paid after discount and balance.   &lt;para&gt;The value is usually taken directly from the payment provider and represents the actual reserved amount.&lt;/para&gt;&lt;para&gt;If this differs from OrderTotal, actions should be taken to ensure they match. This usually happens due to rounding.&lt;/para&gt; | [optional] 
**vATTotal** | **Number** | Order VAT total. | [optional] 
**orderValueIncVat** | **Number** | Order value inc vat after discount but before balance | [optional] 
**orderValueExVat** | **Number** | Order value ex vat after discount but before balance | [optional] 
**itemValueIncVat** | **Number** | Item value inc vat excluding fees and discount | [optional] 
**itemValueExVat** | **Number** | Item value ex vat excluding fees and discount | [optional] 
**discount** | **Number** | Total discount inc vat. | [optional] 
**discountExVat** | **Number** | Total discount ex vat. | [optional] 
**fromBalance** | **Number** | The amount which was withdrawn from the customers balance inc vat. | [optional] 
**shippingFee** | **Number** | Shipping fee inc vat. | [optional] 
**shippingFeeExVat** | **Number** | Shipping fee ex vat. | [optional] 
**paymentFee** | **Number** | Payment fee inc vat. | [optional] 
**paymentFeeExVat** | **Number** | Payment fee ex vat. | [optional] 
**message** | **String** | Order message. Can contain instructions from customer or added details about the order. | [optional] 
**orderMessages** | **[String]** | Internal order messages. Can contain internal details about the order. | [optional] 
**paymentDetails** | [**[OrderModelsPaymentDetail]**](OrderModelsPaymentDetail.md) | List of payment details &lt;seealso cref&#x3D;\&quot;T:Order.Models.PaymentDetail\&quot; /&gt;. | [optional] 
**shippingDetails** | [**[OrderModelsShippingDetail]**](OrderModelsShippingDetail.md) | List of shipping details &lt;seealso cref&#x3D;\&quot;T:Order.Models.ShippingDetail\&quot; /&gt;. | [optional] 
**shippingAddress** | [**OrderModelsAddress**](OrderModelsAddress.md) |  | [optional] 
**billingAddress** | [**OrderModelsAddress**](OrderModelsAddress.md) |  | [optional] 
**rows** | [**[OrderModelsOrderRow]**](OrderModelsOrderRow.md) | List of order rows | [optional] 
**refunds** | [**[OrderModelsRefund]**](OrderModelsRefund.md) | List of order refunds &lt;seealso cref&#x3D;\&quot;T:Order.Models.Refund\&quot; /&gt;. | [optional] 
**ip** | **String** | Customer IP-number. | [optional] 
**userAgent** | **String** | Customer User Agent. | [optional] 
**serviceLocation** | **String** | Chosen service location. | [optional] 
**campaignCode** | **String** | Campaign code applied to the order. | [optional] 
**campaignCodeId** | **Number** | The internal id of the applied campaign code. | [optional] 
**percent** | **Number** | General percent discount applied to the order. | [optional] 
**desiredDeliveryDate** | **Date** | The desired delivery date of the order. | [optional] 
**gender** | **Boolean** | The gender of the customer. True &#x3D; male, False &#x3D; female, null &#x3D; unknown. | [optional] 
**cartId** | **Number** | The unique identifier for the cart from which this order originates. | [optional] 
**sessionId** | **String** | The session id for the from which this order originates. | [optional] 
**externalOrderStatus** | **Number** |  | [optional] 
**campaignIds** | **[String]** | The ids for the campaigns applied to this order (not rows) | [optional] 
**campaignNames** | **[String]** | The names for the campaigns applied to this order (not rows) | [optional] 
**metaData** | **{String: String}** | The order meta data to store additional information about the order. Eg. customer specific shipping data to include for nShift checkout (former UDC) shipments | [optional] 
**publicId** | **String** | The public id of this order. | [optional] 



## Enum: ExternalOrderStatusEnum


* `0` (value: `0`)

* `10` (value: `10`)

* `20` (value: `20`)

* `30` (value: `30`)

* `40` (value: `40`)




