/**
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Address } from './address';
import { SupplierLineItemProduct } from './supplierLineItemProduct';
import { SupplierLineItemSpec } from './supplierLineItemSpec';


export interface SupplierLineItem {
    ID?: string;
    ProductID?: string;
    Quantity?: number;
    DateAdded?: string;
    QuantityShipped?: number;
    UnitPrice?: number;
    LineTotal?: number;
    CostCenter?: string;
    DateNeeded?: string;
    ShippingAccount?: string;
    ShippingAddressID?: string;
    ShipFromAddressID?: string;
    Product?: SupplierLineItemProduct;
    ShippingAddress?: Address;
    ShipFromAddress?: Address;
    SupplierID?: string;
    Specs?: Array<SupplierLineItemSpec>;
}
