import { createSlice } from '@reduxjs/toolkit';

const shippingSlice = createSlice({
  name: 'formData',
  initialState: {
    service: {},
    interShipment: {},
    shippingRate: {},
    SROrderRate: {},
    sendReceive: {},
    paymentBreakdownData: {},
    haulage: {},
    bulkDropoffItems: [],
  },

  reducers: {
    updateSelectedService: (state, action) => {
      state.service = action.payload;
    },

    updatePickupDeets: (state, action) => {
      state.interShipment.pickup_details = action.payload;
    },
    updateDropoffDeets: (state, action) => {
      state.interShipment.dropoff_details = action.payload;
    },
    updateShippingItems: (state, action) => {
      state.interShipment.shipment_items = action.payload;
    },

    getOrderDetails: (state, action) => {
      state.interShipment.otherDatas = {
        ...state.interShipment.otherDatas,
        ...action.payload,
      };
    },

    getOfficeAddressId: (state, action) => {
      state.interShipment.otherDatas.office_address_id = action.payload;
    },

    getShipmentRates: (state, action) => {
      state.shippingRate = action.payload;
    },

    // =======SEND AND RECIEVE SART========

    updateSRPickupDeets: (state, action) => {
      state.sendReceive.pickup_details = action.payload;
    },
    updateSRDropoffDeets: (state, action) => {
      state.sendReceive.dropoff_details = action.payload;
    },
    updateSRShippingItems: (state, action) => {
      state.sendReceive.order_items = action.payload;
    },

    getOtherSRDatas: (state, action) => {
      state.sendReceive.otherSRDatas = {
        ...state.sendReceive.otherSRDatas,
        ...action.payload,
      };
    },

    getSROrderRates: (state, action) => {
      state.SROrderRate = action.payload;
    },

    // =======SEND AND RECIEVE END========

    // =======HAULAGE SART========

    getHaulage: (state, action) => {
      state.haulage = { ...state.haulage, ...action.payload };
    },
    // =======HAULAGE END========

    // =======BULK ORDERS SART========

    getBulkOrderDropoffItems: (state, action) => {
      state.bulkDropoffItems = action.payload;
    },
    // =======BULK ORDERS END========

    getPaymentBreakdwownData: (state, action) => {
      state.paymentBreakdownData = action.payload;
    },
  },
});

export const {
  updateSelectedService,
  updatePickupDeets,
  updateDropoffDeets,
  updateShippingItems,
  getShipmentRates,
  getOrderDetails,
  getOfficeAddressId,
  updateSRDropoffDeets,
  updateSRPickupDeets,
  updateSRShippingItems,
  getOtherSRDatas,
  getSROrderRates,
  getPaymentBreakdwownData,
  getHaulage,
  getBulkOrderDropoffItems,
} = shippingSlice.actions;

export const selectedService = (state) => state.shippingSlice.service;

export const selectShipment = (state) => state.shippingSlice.interShipment;

export const selectSendReceive = (state) => state.shippingSlice.sendReceive;

export const selectShipmentRates = (state) => state.shippingSlice.shippingRate;

export const selectSRRates = (state) => state.shippingSlice.SROrderRate;

export const selectPaymentBreakdown = (state) =>
  state.shippingSlice.paymentBreakdownData;

export const selectHaulage = (state) => state.shippingSlice.haulage;

export const selectBulkDropoff = (state) =>
  state.shippingSlice.bulkDropoffItems;

export default shippingSlice.reducer;
