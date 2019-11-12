import {ShippingOptions, shippingRate} from "./constants";

export const getShippingCost = (weight, shippingOption) => {
    return `$${(weight * shippingRate * (shippingOption === ShippingOptions.ground ? 1 : 1.5)).toFixed(2)}`;
};