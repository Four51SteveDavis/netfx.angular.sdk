/**
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ShipmentDestinationAddress } from './shipmentDestinationAddress';
import { ShipmentItem } from './shipmentItem';
import { ShipmentOriginAddress } from './shipmentOriginAddress';


export interface ShipmentRate {
    Origin?: ShipmentOriginAddress;
    Destination?: ShipmentDestinationAddress;
    PickupAppointmentDate?: string;
    PickupAppointmentStart?: string;
    PickupAppointmentEnd?: string;
    DeliveryAppointmentEnd?: string;
    DeliveryAppointmentDate?: string;
    DeliveryAppointmentStart?: string;
    PalletQuantity?: number;
    UnitOfWeight?: string;
    Items?: Array<ShipmentItem>;
    Take?: number;
    SCAC?: string;
    TransitDays?: number;
    Guarantee?: string;
    CarrierName?: string;
}