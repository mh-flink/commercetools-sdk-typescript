/**
 *
 *    Generated file, please do not change!!!
 *    From http://www.commercetools.com/ with love
 *
 *                ,d88b.d88b,
 *                88888888888
 *                `Y8888888Y'
 *                  `Y888Y'
 *                    `Y'
 *
 */

import { Custom } from './customfields'

export interface Asset {
  /**
   *	User-defined identifier for the asset.
   *	Asset keys are unique inside their container (a product variant or a category).
   *
   *
   */
  readonly key: string
  /**
   *
   */
  readonly sources: AssetSource[]
  /**
   *	A localized string is a JSON object where the keys are of [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag), and the values the corresponding strings used for that language.
   *	```json
   *	{
   *	  "de": "Hundefutter",
   *	  "en": "dog food"
   *	}
   *	```
   *
   *
   */
  readonly name: LocalizedString
  /**
   *	A localized string is a JSON object where the keys are of [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag), and the values the corresponding strings used for that language.
   *	```json
   *	{
   *	  "de": "Hundefutter",
   *	  "en": "dog food"
   *	}
   *	```
   *
   *
   */
  readonly description?: LocalizedString
  /**
   *
   */
  readonly tags?: string[]
  /**
   *	The representation to be sent to the server when creating a resource with custom fields.
   *
   */
  readonly custom?: Custom
}
/**
 *	The width and height of the Asset Source.
 */
export interface AssetDimensions {
  /**
   *	The width of the asset source.
   *
   */
  readonly w: number
  /**
   *	The height of the asset source.
   *
   */
  readonly h: number
}
/**
 *	An AssetSource is a representation of an Asset in a specific format, for example, a video in a certain encoding or an image in a certain resolution.
 */
export interface AssetSource {
  /**
   *
   */
  readonly uri: string
  /**
   *
   */
  readonly key?: string
  /**
   *	The width and height of the Asset Source.
   *
   */
  readonly dimensions?: AssetDimensions
  /**
   *
   */
  readonly contentType?: string
}
/**
 *	An Image uploaded to the commercetools platform is stored in a Content Delivery Network and it's available in several pre-defined sizes. If you already have an image stored on an external service, you can save the URL when creating a new product or adding a variant, or you can add it later.
 */
export interface Image {
  /**
   *	URL of the image in its original size. The URL must be unique within a single variant. It can be used to obtain the image in different sizes.
   *
   */
  readonly url: string
  /**
   *	Dimensions of the original image. This can be used by your application, for example, to determine whether the image is large enough to display a zoom view.
   *
   */
  readonly dimensions: AssetDimensions
  /**
   *	Custom label that can be used, for example, as an image description.
   *
   */
  readonly label?: string
}
export interface EnumValue {
  /**
   *
   */
  readonly key: string
  /**
   *
   */
  readonly label: string
}
export interface LocalizedEnumValue {
  /**
   *
   */
  readonly key: string
  /**
   *	A localized string is a JSON object where the keys are of [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag), and the values the corresponding strings used for that language.
   *	```json
   *	{
   *	  "de": "Hundefutter",
   *	  "en": "dog food"
   *	}
   *	```
   *
   *
   */
  readonly label: LocalizedString
}
/**
 *	A localized string is a JSON object where the keys are of [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag), and the values the corresponding strings used for that language.
 *	```json
 *	{
 *	  "de": "Hundefutter",
 *	  "en": "dog food"
 *	}
 *	```
 *
 */
export interface LocalizedString {
  [key: string]: string
}
/**
 *	A representation of the resource to import.
 *	Import resources are similar to commercetools draft types, but they only support key references.
 *	In general, import resources are more granular then the normal commercetools resource.
 *	They are optimized for incremental updates and therefore have a slightly different structure.
 *
 */
export interface ImportResource {
  /**
   *
   */
  readonly key: string
}
/**
 *	References a resource by its key.
 */
export type KeyReference =
  | CartDiscountKeyReference
  | CartKeyReference
  | CategoryKeyReference
  | ChannelKeyReference
  | CustomerGroupKeyReference
  | CustomerKeyReference
  | DiscountCodeKeyReference
  | OrderKeyReference
  | PaymentKeyReference
  | PriceKeyReference
  | ProductDiscountKeyReference
  | ProductKeyReference
  | ProductTypeKeyReference
  | ProductVariantKeyReference
  | ShippingMethodKeyReference
  | StateKeyReference
  | StoreKeyReference
  | TaxCategoryKeyReference
  | TypeKeyReference
/**
 *	References a cart by its key.
 */
export interface CartKeyReference {
  readonly typeId: 'cart'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a cart discount by its key.
 */
export interface CartDiscountKeyReference {
  readonly typeId: 'cart-discount'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a category by its key.
 */
export interface CategoryKeyReference {
  readonly typeId: 'category'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a channel by its key.
 */
export interface ChannelKeyReference {
  readonly typeId: 'channel'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a customer by its key.
 */
export interface CustomerKeyReference {
  readonly typeId: 'customer'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a customer group by its key.
 */
export interface CustomerGroupKeyReference {
  readonly typeId: 'customer-group'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a discount code by its key.
 */
export interface DiscountCodeKeyReference {
  readonly typeId: 'discount-code'
  /**
   *
   */
  readonly key: string
}
/**
 *	References an order by its key.
 */
export interface OrderKeyReference {
  readonly typeId: 'order'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a payment by its key.
 */
export interface PaymentKeyReference {
  readonly typeId: 'payment'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a price by its key.
 */
export interface PriceKeyReference {
  readonly typeId: 'price'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a product by its key.
 */
export interface ProductKeyReference {
  readonly typeId: 'product'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a product discount by its key.
 */
export interface ProductDiscountKeyReference {
  readonly typeId: 'product-discount'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a product type by its key.
 */
export interface ProductTypeKeyReference {
  readonly typeId: 'product-type'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a product variant by its key.
 */
export interface ProductVariantKeyReference {
  readonly typeId: 'product-variant'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a shipping method by its key.
 */
export interface ShippingMethodKeyReference {
  readonly typeId: 'shipping-method'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a state by its key.
 */
export interface StateKeyReference {
  readonly typeId: 'state'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a store by its key.
 */
export interface StoreKeyReference {
  readonly typeId: 'store'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a tax category by its key.
 */
export interface TaxCategoryKeyReference {
  readonly typeId: 'tax-category'
  /**
   *
   */
  readonly key: string
}
/**
 *	References a type by its key.
 */
export interface TypeKeyReference {
  readonly typeId: 'type'
  /**
   *
   */
  readonly key: string
}
export type MoneyType = 'centPrecision' | 'highPrecision'
export type TypedMoney = HighPrecisionMoney | Money
export interface HighPrecisionMoney {
  readonly type: 'highPrecision'
  /**
   *
   */
  readonly fractionDigits?: number
  /**
   *
   */
  readonly centAmount: number
  /**
   *	The currency code compliant to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
   *
   *
   */
  readonly currencyCode: string
  /**
   *
   */
  readonly preciseAmount: number
}
export interface Money {
  readonly type: 'centPrecision'
  /**
   *
   */
  readonly fractionDigits?: number
  /**
   *
   */
  readonly centAmount: number
  /**
   *	The currency code compliant to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
   *
   *
   */
  readonly currencyCode: string
}
export interface DiscountedPrice {
  /**
   *
   */
  readonly value: TypedMoney
  /**
   *	Reference to a ProductDiscount.
   *
   */
  readonly discount: ProductDiscountKeyReference
}
/**
 *	A price tier is selected instead of the default price when a certain quantity of the ProductVariant is added to a cart and ordered.
 *
 */
export interface PriceTier {
  /**
   *	The minimum quantity this price tier is valid for.
   *
   *
   */
  readonly minimumQuantity: number
  /**
   *	The currency of a price tier is always the same as the currency of the base Price.
   *
   */
  readonly value: TypedMoney
}
/**
 *	The type of the import resource.
 *
 */
export type ImportResourceType =
  | 'category'
  | 'customer'
  | 'inventory'
  | 'order'
  | 'order-patch'
  | 'price'
  | 'product'
  | 'product-draft'
  | 'product-type'
  | 'product-variant'
  | 'product-variant-patch'
/**
 *	The type of the referenced resource.
 *
 */
export type ReferenceType =
  | 'cart'
  | 'cart-discount'
  | 'category'
  | 'channel'
  | 'customer'
  | 'customer-group'
  | 'discount-code'
  | 'order'
  | 'payment'
  | 'price'
  | 'product'
  | 'product-discount'
  | 'product-type'
  | 'product-variant'
  | 'shipping-method'
  | 'state'
  | 'store'
  | 'tax-category'
  | 'type'
/**
 *	This enumeration describes the processing state of an import operation.
 *
 */
export type ProcessingState =
  | 'Imported'
  | 'Rejected'
  | 'Unresolved'
  | 'ValidationFailed'
  | 'WaitForMasterVariant'
export interface Address {
  /**
   *
   */
  readonly id?: string
  /**
   *
   */
  readonly key?: string
  /**
   *
   */
  readonly title?: string
  /**
   *
   */
  readonly salutation?: string
  /**
   *
   */
  readonly firstName?: string
  /**
   *
   */
  readonly lastName?: string
  /**
   *
   */
  readonly streetName?: string
  /**
   *
   */
  readonly streetNumber?: string
  /**
   *
   */
  readonly additionalStreetInfo?: string
  /**
   *
   */
  readonly postalCode?: string
  /**
   *
   */
  readonly city?: string
  /**
   *
   */
  readonly region?: string
  /**
   *
   */
  readonly state?: string
  /**
   *	A two-digit country code as per [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
   *
   *
   */
  readonly country: string
  /**
   *
   */
  readonly company?: string
  /**
   *
   */
  readonly department?: string
  /**
   *
   */
  readonly building?: string
  /**
   *
   */
  readonly apartment?: string
  /**
   *
   */
  readonly pOBox?: string
  /**
   *
   */
  readonly phone?: string
  /**
   *
   */
  readonly mobile?: string
  /**
   *
   */
  readonly email?: string
  /**
   *
   */
  readonly fax?: string
  /**
   *
   */
  readonly additionalAddressInfo?: string
  /**
   *
   */
  readonly externalId?: string
}
