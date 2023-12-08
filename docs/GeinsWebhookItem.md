# GeinsSdkApiMgmtJavascript.GeinsWebhookItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Webhook Id | [optional] 
**entity** | **Number** | Type of entity.    0 &#x3D; NOT_SET    1 &#x3D; Brand    2 &#x3D; Capture    3 &#x3D; Category    4 &#x3D; Customer    5 &#x3D; Order    6 &#x3D; PageWidget    7 &#x3D; Product    8 &#x3D; Refund    9 &#x3D; Supplier | [optional] 
**name** | **String** | Webhook Name | [optional] 
**description** | **String** | Webhook Description | [optional] 
**actions** | **String** | Comma separated list of actions to listen for.   Possible actions per entity are:  - **Product, Brand, Category, Supplier** - &#x60;create&#x60;, &#x60;update&#x60;, &#x60;delete&#x60;  - **Order** - &#x60;create&#x60;, &#x60;update&#x60;, &#x60;cancel&#x60;, &#x60;activate&#x60;, &#x60;lock&#x60;, &#x60;complete&#x60;  - **Capture, Refund** - &#x60;create&#x60;  - **PageWidget** - &#x60;update&#x60;, &#x60;delete&#x60;  - **Customer** - &#x60;delete&#x60;, &#x60;passwordreset&#x60;, &#x60;obfuscate&#x60; | [optional] 
**method** | **String** | Http Method to use | [optional] 
**url** | **String** | Url to send the webhook to. Placeholders can be used to customize the URL.   - _Always available placeholders:_     - &#x60;{{entity}}&#x60; - Product, Brand, Category, etc    - &#x60;{{action}}&#x60; - create, update, delete, etc    - &#x60;{{account}}&#x60; - usually the name of your webshop    - &#x60;{{environment}}&#x60; - prod, dev, qa, etc    - &#x60;{{id}}&#x60; -(can be a comma separated list of ids.  - _Partially available placeholders:_     - &#x60;{{paymentName}}&#x60; - name of payment method. Only applicable for capture and refund    - &#x60;{{channelName}}&#x60; - name of the channel (web site). Only applicable for capture and refund    - &#x60;{{channelUrl}}&#x60; - url of the channel (web site). Only applicable for password reset    - &#x60;{{resetKey}}&#x60; - key for password reset. Only applicable for password reset    **Note:** Not all placeholders are available for all combinations of entities and actions. Ensure that the placeholders you use are relevant to the webhook&#39;s entity and action. | [optional] 
**body** | **String** | Body of the webhook. Placeholders can be used to customize the body.   - _Always available placeholders:_     - &#x60;{{entity}}&#x60; - Product, Brand, Category, etc    - &#x60;{{action}}&#x60; - create, update, delete, etc    - &#x60;{{account}}&#x60; - usually the name of your webshop    - &#x60;{{environment}}&#x60; - prod, dev, qa, etc    - &#x60;{{id}}&#x60; -(can be a comma separated list of ids.  - _Partially available placeholders:_     - &#x60;{{paymentName}}&#x60; - name of payment method. Only applicable for capture and refund    - &#x60;{{channelName}}&#x60; - name of the channel (web site). Only applicable for capture and refund    - &#x60;{{channelUrl}}&#x60; - url of the channel (web site). Only applicable for password reset    - &#x60;{{resetKey}}&#x60; - key for password reset. Only applicable for password reset    **Note:** Not all placeholders are available for all combinations of entities and actions. Ensure that the placeholders you use are relevant to the webhook&#39;s entity and action. | [optional] 
**headers** | **String** | Headers to send with the webhook | [optional] 
**retry** | **Boolean** | True if the webhook should be retried on failure. Retries are attempted up to 3 times with an interval of 10 minutes.    - Each retry attempt will include a unique HTTP header called &#x60;x-Idempotency-Key&#x60; and a timestamp for when the webhook event was initiated. This key serves as an identifier for each specific webhook event and remains the same for all retry attempts of the same webhook event.    - The primary purpose of the &#x60;x-Idempotency-Key&#x60; is to enable the receiving system to identify and handle duplicate webhook events, thus preventing duplicate processing of the same webhook event.    - The timestamp header is called &#x60;x-timestamp&#x60;. | [optional] 



## Enum: EntityEnum


* `0` (value: `0`)

* `1` (value: `1`)

* `2` (value: `2`)

* `3` (value: `3`)

* `4` (value: `4`)

* `5` (value: `5`)

* `6` (value: `6`)

* `7` (value: `7`)

* `8` (value: `8`)

* `9` (value: `9`)




