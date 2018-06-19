var FIELDS = [
    {
      "name": "OBJECTID",
      "operation": "range",
      "input": 'range'
    },
    {
      "name": "SSL",
      "operation": "eq",
      "input": 'text'
    },
    {
      "name": "ASSESSOR_NAME",
      "operation": "regex",
      "input": 'text'
    },
    {
      "name": "LAND_USE_CODE",
      "operation": "eq",
      "input": 'text'
    },
    {
      "name": "LAND_USE_DESCRIPTION",
      "operation": "regex",
      "input": 'text'
    },
    {
      "name": "LANDAREA",
      "operation": "range",
      "input": 'range'
    },
    {
      "name": "PROPERTY_ADDRESS",
      "operation": "regex",
      "input": 'text'
    },
    {
      "name": "OTR_NEIGHBORHOOD_CODE",
      "operation": "eq",
      "input": 'text'
    },
    {
      "name": "OTR_NEIGHBORHOOD_NAME",
      "operation": "regex",
      "input": 'text'
    },
    {
      "name": "OWNER_NAME_PRIMARY",
      "operation": "regex",
      "input": 'text'
    },
    {
      "name": "CAREOF_NAME",
      "operation": "regex",
      "input": 'text'
    },
    {
      "name": "OWNER_ADDRESS_LINE1",
      "operation": "regex",
      "input": 'text'
    },
    {
      "name": "OWNER_ADDRESS_LINE2",
      "operation": "regex",
      "input": 'text'
    },
    {
      "name": "OWNER_ADDRESS_CITYSTZIP",
      "operation": "regex",
      "input": 'text'
    },
    {
      "name": "APPRAISED_VALUE_BASEYEAR_LAND",
      "operation": "range",
      "input": 'range'
    },
    {
      "name": "APPRAISED_VALUE_BASEYEAR_BLDG",
      "operation": "range",
      "input": 'range'
    },
    {
      "name": "APPRAISED_VALUE_PRIOR_LAND",
      "operation": "range",
      "input": 'range'
    },
    {
      "name": "APPRAISED_VALUE_PRIOR_IMPR",
      "operation": "range",
      "input": 'range'
    },
    {
      "name": "APPRAISED_VALUE_PRIOR_TOTAL",
      "operation": "range",
      "input": 'range'
    },
    {
      "name": "APPRAISED_VALUE_CURRENT_LAND",
      "operation": "range",
      "input": 'range'
    },
    {
      "name": "APPRAISED_VALUE_CURRENT_IMPR",
      "operation": "range",
      "input": 'range'
    },
    {
      "name": "APPRAISED_VALUE_CURRENT_TOTAL",
      "operation": "range",
      "input": 'range'
    },
    {
      "name": "PHASEIN_VALUE_CURRENT_LAND",
      "operation": "range",
      "input": 'range'
    },
    {
      "name": "PHASEIN_VALUE_CURRENT_BLDG",
      "operation": "range",
      "input": 'range'
    },
    {
      "name": "VACANT_USE",
      "operation": "eq",
      "input": 'select',
      "values": ["YES","NO"]
    },
    {
      "name": "HOMESTEAD_DESCRIPTION",
      "operation": "eq",
      "input": 'select',
      "values": ["NO EXEMPTION","HOMESTEAD","SENIOR HOMESTEAD"]
    },
    {
      "name": "TAX_TYPE_DESCRIPTION",
      "operation": "eq",
      "input": 'select',
      "values": ["Residential real property, including multifamily","UNDEFINED","Vacant real property","Blighted real property"]
    },
    {
      "name": "TAXRATE",
      "operation": "range",
      "input": 'range'
    },
    {
      "name": "MIXED_USE",
      "operation": "eq",
      "input": 'select',
      "values": ["Y","N","S"]
    },
    {
      "name": "OWNER_OCCUPIED_COOP_UNITS",
      "operation": "range",
      "input": 'number'
    },
    {
      "name": "LAST_SALE_PRICE",
      "operation": "range",
      "input": 'range'
    },
    {
      "name": "LAST_SALE_DATE",
      "operation": "range-date",
      "input": 'datepicker'
    },
    {
      "name": "DEED_DATE",
      "operation": "range-date",
      "input": 'datepicker'
    },
    {
      "name": "CURRENT_ASSESSMENT_CAP",
      "operation": "range",
      "input": 'range'
    },
    {
      "name": "PROPOSED_ASSESSMENT_CAP",
      "operation": "range",
      "input": 'range'
    },
    {
      "name": "OWNER_NAME_SECONDARY",
      "operation": "regex",
      "input": 'text'
    },
    {
      "name": "ADDRESS_ID",
      "operation": "eq",
      "input": 'text'
    },
    {
      "name": "LASTMODIFIEDDATE",
      "operation": "range-date",
      "input": 'datepicker'
    }
];

export default FIELDS
