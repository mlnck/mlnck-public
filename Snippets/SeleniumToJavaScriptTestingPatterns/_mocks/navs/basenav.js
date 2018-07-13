/*After we are able to integrate true backend queries we should be able to remove the import from below */
import SinonNav, {sinonNavActions, sinonNavAlertActions} from '../../navs/basenav/nav/sinonBase'

export const topNavProps = {
  "location": {
    "pathname": "/invoice",
    "search": "",
    "hash": "",
    "action": "POP",
    "key": null,
    "query": {}
  },
  "params": {},
  "route": {
    "childRoutes": [
      {
        "path": "/"
      },
      {
        "path": "/administration/:adminPage"
      },
      {
        "path": "/add-a-rider"
      },
      {
        "path": "/invoice"
      },
      {
        "path": "/rider/:id",
        "childRoutes": [
          {
            "path": "/rider/:id/book-trip"
          },
          {
            "path": "/rider/:id/edit-trip/:tripID"
          },
          {
            "path": "/rider/:id/trip/:tripID"
          },
          {
            "path": "/rider/:id/recurring-trip/:recurringTripID"
          },
          {
            "path": "/rider/:id/ridelist/:rideListType"
          }
        ]
      },
      {
        "path": "/alert-list/:subpage"
      },
      {
        "path": "/all-rides/:subpage"
      },
      {
        "path": "/analytics/:subpage",
        "childRoutes": [
          {
            "path": "/analytics/:subpage/:category"
          }
        ]
      },
      {
        "path": "/unauthorized"
      },
      {
        "path": "/consent",
        "childRoutes": [
          {
            "path": "/consent/:orgRoute"
          },
          {
            "path": "/consent/demo"
          }
        ]
      },
      {
        "path": "/zendesk_sso"
      },
      {
        "path": "/terms-of-use"
      },
      {
        "path": "/privacy-policy"
      },
      {
        "path": "/contact-us"
      }
    ]
  },
  "router": {
    "location": {
      "pathname": "/",
      "search": "",
      "hash": "",
      "action": "POP",
      "key": null,
      "query": {}
    },
    "params": {},
    "routes": [
      {
        "childRoutes": [
          {
            "path": "/login"
          },
          {
            "path": "/auth"
          },
          {
            "path": "/logout"
          },
          {
            "path": "/forgot-password"
          },
          {
            "path": "/reset-password"
          },
          {
            "path": "/upload"
          },
          {
            "path": "/rating",
            "childRoutes": [
              {
                "path": "/rating/:whitelabel"
              }
            ]
          },
          {
            "path": "/map"
          },
          {
            "childRoutes": [
              {
                "path": "/"
              },
              {
                "path": "/administration/:adminPage"
              },
              {
                "path": "/add-a-rider"
              },
              {
                "path": "/invoice"
              },
              {
                "path": "/rider/:id",
                "childRoutes": [
                  {
                    "path": "/rider/:id/book-trip"
                  },
                  {
                    "path": "/rider/:id/edit-trip/:tripID"
                  },
                  {
                    "path": "/rider/:id/trip/:tripID"
                  },
                  {
                    "path": "/rider/:id/recurring-trip/:recurringTripID"
                  },
                  {
                    "path": "/rider/:id/ridelist/:rideListType"
                  }
                ]
              },
              {
                "path": "/alert-list/:subpage"
              },
              {
                "path": "/all-rides/:subpage"
              },
              {
                "path": "/analytics/:subpage",
                "childRoutes": [
                  {
                    "path": "/analytics/:subpage/:category"
                  }
                ]
              },
              {
                "path": "/unauthorized"
              },
              {
                "path": "/consent",
                "childRoutes": [
                  {
                    "path": "/consent/:orgRoute"
                  },
                  {
                    "path": "/consent/demo"
                  }
                ]
              },
              {
                "path": "/zendesk_sso"
              },
              {
                "path": "/terms-of-use"
              },
              {
                "path": "/privacy-policy"
              },
              {
                "path": "/contact-us"
              }
            ]
          },
          {
            "path": "*"
          }
        ]
      },
      {
        "childRoutes": [
          {
            "path": "/"
          },
          {
            "path": "/administration/:adminPage"
          },
          {
            "path": "/add-a-rider"
          },
          {
            "path": "/invoice"
          },
          {
            "path": "/rider/:id",
            "childRoutes": [
              {
                "path": "/rider/:id/book-trip"
              },
              {
                "path": "/rider/:id/edit-trip/:tripID"
              },
              {
                "path": "/rider/:id/trip/:tripID"
              },
              {
                "path": "/rider/:id/recurring-trip/:recurringTripID"
              },
              {
                "path": "/rider/:id/ridelist/:rideListType"
              }
            ]
          },
          {
            "path": "/alert-list/:subpage"
          },
          {
            "path": "/all-rides/:subpage"
          },
          {
            "path": "/analytics/:subpage",
            "childRoutes": [
              {
                "path": "/analytics/:subpage/:category"
              }
            ]
          },
          {
            "path": "/unauthorized"
          },
          {
            "path": "/consent",
            "childRoutes": [
              {
                "path": "/consent/:orgRoute"
              },
              {
                "path": "/consent/demo"
              }
            ]
          },
          {
            "path": "/zendesk_sso"
          },
          {
            "path": "/terms-of-use"
          },
          {
            "path": "/privacy-policy"
          },
          {
            "path": "/contact-us"
          }
        ]
      },
      {
        "path": "/"
      }
    ]
  },
  "routeParams": {},
  "routes": [
    {
      "childRoutes": [
        {
          "path": "/login"
        },
        {
          "path": "/auth"
        },
        {
          "path": "/logout"
        },
        {
          "path": "/forgot-password"
        },
        {
          "path": "/reset-password"
        },
        {
          "path": "/upload"
        },
        {
          "path": "/rating",
          "childRoutes": [
            {
              "path": "/rating/:whitelabel"
            }
          ]
        },
        {
          "path": "/map"
        },
        {
          "childRoutes": [
            {
              "path": "/"
            },
            {
              "path": "/administration/:adminPage"
            },
            {
              "path": "/add-a-rider"
            },
            {
              "path": "/invoice"
            },
            {
              "path": "/rider/:id",
              "childRoutes": [
                {
                  "path": "/rider/:id/book-trip"
                },
                {
                  "path": "/rider/:id/edit-trip/:tripID"
                },
                {
                  "path": "/rider/:id/trip/:tripID"
                },
                {
                  "path": "/rider/:id/recurring-trip/:recurringTripID"
                },
                {
                  "path": "/rider/:id/ridelist/:rideListType"
                }
              ]
            },
            {
              "path": "/alert-list/:subpage"
            },
            {
              "path": "/all-rides/:subpage"
            },
            {
              "path": "/analytics/:subpage",
              "childRoutes": [
                {
                  "path": "/analytics/:subpage/:category"
                }
              ]
            },
            {
              "path": "/unauthorized"
            },
            {
              "path": "/consent",
              "childRoutes": [
                {
                  "path": "/consent/:orgRoute"
                },
                {
                  "path": "/consent/demo"
                }
              ]
            },
            {
              "path": "/zendesk_sso"
            },
            {
              "path": "/terms-of-use"
            },
            {
              "path": "/privacy-policy"
            },
            {
              "path": "/contact-us"
            }
          ]
        },
        {
          "path": "*"
        }
      ]
    },
    {
      "childRoutes": [
        {
          "path": "/"
        },
        {
          "path": "/administration/:adminPage"
        },
        {
          "path": "/add-a-rider"
        },
        {
          "path": "/invoice"
        },
        {
          "path": "/rider/:id",
          "childRoutes": [
            {
              "path": "/rider/:id/book-trip"
            },
            {
              "path": "/rider/:id/edit-trip/:tripID"
            },
            {
              "path": "/rider/:id/trip/:tripID"
            },
            {
              "path": "/rider/:id/recurring-trip/:recurringTripID"
            },
            {
              "path": "/rider/:id/ridelist/:rideListType"
            }
          ]
        },
        {
          "path": "/alert-list/:subpage"
        },
        {
          "path": "/all-rides/:subpage"
        },
        {
          "path": "/analytics/:subpage",
          "childRoutes": [
            {
              "path": "/analytics/:subpage/:category"
            }
          ]
        },
        {
          "path": "/unauthorized"
        },
        {
          "path": "/consent",
          "childRoutes": [
            {
              "path": "/consent/:orgRoute"
            },
            {
              "path": "/consent/demo"
            }
          ]
        },
        {
          "path": "/zendesk_sso"
        },
        {
          "path": "/terms-of-use"
        },
        {
          "path": "/privacy-policy"
        },
        {
          "path": "/contact-us"
        }
      ]
    },
    {
      "path": "/"
    }
  ],
  "language": "EN",
  "supportedLanguages": [
    {
      "key": "EN",
      "label": "English"
    },
    {
      "key": "ES",
      "label": "Español"
    }
  ],
  "user": {
    "id": 2,
    "last_login": "2018-01-17T19:36:12.946205Z",
    "status": "A",
    "date_joined": "2016-06-16T00:00:00Z",
    "first_name": "Mary",
    "last_name": "Irving",
    "organization": "City Hospital",
    "org_pk": 1,
    "organization_type": "S",
    "organization_demo": true,
    "cohort": [
      {
        "name": "City Hospital",
        "display_name": "City Hospital",
        "id": 1,
        "demo_org": true,
        "active": true,
        "mileage_alert": null,
        "max_mileage": null,
        "alias": null
      }
    ],
    "email": "user@cityhospital.com",
    "phone": null,
    "org_admin": true,
    "is_superuser": false,
    "user_type": "A",
    "access_invoicing": true,
    "access_administration_portal": true,
    "access_analytics": true,
    "simulated_organization": null,
    "days_til_password_expires": null,
    "google_maps_api_key": "AIzaSyDIV41o4vXmnrvigVNJ_Q-4ay6OPG8cCdg"
  },
  "organization": {
    "pk": 1,
    "name": "City Hospital",
    "display_name": "",
    "type": "S",
    "warning_price": 100,
    "warning_price_admin_approval": false,
    "carriers": [
      {
        "pk": 1,
        "name": "Uber",
        "on_demand": true,
        "has_coordinates": false,
        "auto_consent": false,
        "call_driver_allowed": true,
        "booking_time_window": null,
        "allow_second_leg": false,
        "phone_required": true,
        "is_manual": false,
        "driver_instructions": false,
        "show_prices": true
      },
      {
        "pk": 3,
        "name": "Lyft",
        "on_demand": true,
        "has_coordinates": true,
        "auto_consent": true,
        "call_driver_allowed": true,
        "booking_time_window": null,
        "allow_second_leg": false,
        "phone_required": true,
        "is_manual": false,
        "driver_instructions": false,
        "show_prices": true
      }
    ],
    "authFlow": true,
    "default_pickup": null,
    "default_pickup_desc": null,
    "append_route": "",
    "logo_url": null,
    "phone_required": true,
    "mileage_alert": null,
    "ceiling_max_price": null,
    "demo": true,
    "fail_ride_after": 30,
    "max_cancellation": null,
    "user_timeout": 60,
    "password_validators": [
      "1 number minimum",
      "8 character minimum"
    ],
    "password_reset_cycle": 0,
    "max_mileage": null,
    "custom_consent": {
      "consent_link_name": "",
      "consent_text": "",
      "consent_link": ""
    },
    "billing_details": {
      "volume": {
        "0": 2
      },
      "monthly_minimum": 0
    },
    "cro_status": false,
    "billing_codes": true,
    "insurance": true,
    "appointment_type": true
  },
  "carriers": [
    {
      "pk": 1,
      "name": "Uber",
      "on_demand": true,
      "has_coordinates": false,
      "auto_consent": false,
      "call_driver_allowed": true,
      "booking_time_window": null,
      "allow_second_leg": false,
      "phone_required": true,
      "is_manual": false,
      "driver_instructions": false,
      "show_prices": true,
      "vehicle_types": [
        {
          "pk": 1,
          "vehicle_type": "uberX",
          "localized_display_name": "uberX",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 2,
          "vehicle_type": "uberXL",
          "localized_display_name": "uberXL",
          "capacity": 6,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 3,
          "vehicle_type": "ESPAÑOL",
          "localized_display_name": "ESPAÑOL",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 4,
          "vehicle_type": "uberSUV",
          "localized_display_name": "uberSUV",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 5,
          "vehicle_type": "Assist",
          "localized_display_name": "Assist",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": [
            1
          ]
        },
        {
          "pk": 6,
          "vehicle_type": "UberBLACK",
          "localized_display_name": "UberBLACK",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 7,
          "vehicle_type": "WAV",
          "localized_display_name": "WAV",
          "capacity": 4,
          "ride_type": 2,
          "special_accommodations": [
            2
          ]
        },
        {
          "pk": 8,
          "vehicle_type": "SUV",
          "localized_display_name": "SUV",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 9,
          "vehicle_type": "uberWAV",
          "localized_display_name": "uberWAV",
          "capacity": 4,
          "ride_type": 2,
          "special_accommodations": [
            2
          ]
        },
        {
          "pk": 10,
          "vehicle_type": "uberASSIST",
          "localized_display_name": "uberASSIST",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": [
            1
          ]
        },
        {
          "pk": 11,
          "vehicle_type": "uberESPAÑOL",
          "localized_display_name": "uberESPAÑOL",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 12,
          "vehicle_type": "BLACK",
          "localized_display_name": "BLACK",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 13,
          "vehicle_type": "POOL",
          "localized_display_name": "POOL",
          "capacity": 2,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 14,
          "vehicle_type": "uberSELECT",
          "localized_display_name": "uberSELECT",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 15,
          "vehicle_type": "SELECT",
          "localized_display_name": "SELECT",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 16,
          "vehicle_type": "UberLUX",
          "localized_display_name": "UberLUX",
          "capacity": 6,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 17,
          "vehicle_type": "uberSKI",
          "localized_display_name": "uberSKI",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 18,
          "vehicle_type": "TAXI",
          "localized_display_name": "TAXI",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 19,
          "vehicle_type": "WINEXL",
          "localized_display_name": "WINEXL",
          "capacity": 6,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 20,
          "vehicle_type": "WINE",
          "localized_display_name": "WINE",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 21,
          "vehicle_type": "uberPOOL",
          "localized_display_name": "uberPOOL",
          "capacity": 2,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 22,
          "vehicle_type": "uberSKI BLACK",
          "localized_display_name": "uberSKI BLACK",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 23,
          "vehicle_type": "PREMIUM SUV",
          "localized_display_name": "PREMIUM SUV",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 24,
          "vehicle_type": "PREMIUM",
          "localized_display_name": "PREMIUM",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 25,
          "vehicle_type": "uberTAXI",
          "localized_display_name": "uberTAXI",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 26,
          "vehicle_type": "Wheelchair",
          "localized_display_name": "Wheelchair",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 27,
          "vehicle_type": "uberX + Car Seat",
          "localized_display_name": "uberX + Car Seat",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 28,
          "vehicle_type": "SUV + Car Seat",
          "localized_display_name": "SUV + Car Seat",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 29,
          "vehicle_type": "BLACK CAR + Car Seat",
          "localized_display_name": "BLACK CAR + Car Seat",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 30,
          "vehicle_type": "LUX",
          "localized_display_name": "LUX",
          "capacity": 6,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 31,
          "vehicle_type": "LUX SUV",
          "localized_display_name": "LUX SUV",
          "capacity": 6,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 32,
          "vehicle_type": "Maitland",
          "localized_display_name": "Maitland",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 33,
          "vehicle_type": "uberXL + Car Seat",
          "localized_display_name": "uberXL + Car Seat",
          "capacity": 6,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 34,
          "vehicle_type": "DC7-StPete",
          "localized_display_name": "DC7-StPete",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 35,
          "vehicle_type": "DC8-Largo",
          "localized_display_name": "DC8-Largo",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 36,
          "vehicle_type": "DC6-Seminole",
          "localized_display_name": "DC6-Seminole",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 37,
          "vehicle_type": "DC4-Gateway",
          "localized_display_name": "DC4-Gateway",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 38,
          "vehicle_type": "DC5-PinellasPark",
          "localized_display_name": "DC5-PinellasPark",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 39,
          "vehicle_type": "DC3-NWpinellas",
          "localized_display_name": "DC3-NWpinellas",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 40,
          "vehicle_type": "DC2-NEpinellas",
          "localized_display_name": "DC2-NEpinellas",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 41,
          "vehicle_type": "PSTA-Huey/Lemon",
          "localized_display_name": "PSTA-Huey/Lemon",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 42,
          "vehicle_type": "uberTAXI VAN",
          "localized_display_name": "uberTAXI VAN",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 43,
          "vehicle_type": "Lake Mary",
          "localized_display_name": "Lake Mary",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 44,
          "vehicle_type": "Altamonte",
          "localized_display_name": "Altamonte",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 45,
          "vehicle_type": "Longwood",
          "localized_display_name": "Longwood",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 46,
          "vehicle_type": "Sanford",
          "localized_display_name": "Sanford",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 47,
          "vehicle_type": "uberCAB",
          "localized_display_name": "uberCAB",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 48,
          "vehicle_type": "uberCAB (WAV)",
          "localized_display_name": "uberCAB (WAV)",
          "capacity": 4,
          "ride_type": 2,
          "special_accommodations": [
            2
          ]
        },
        {
          "pk": 49,
          "vehicle_type": "Pool9",
          "localized_display_name": "Pool9",
          "capacity": 2,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 50,
          "vehicle_type": "Pool1",
          "localized_display_name": "Pool1",
          "capacity": 2,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 51,
          "vehicle_type": "EXPRESS POOL",
          "localized_display_name": "EXPRESS POOL",
          "capacity": 2,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 52,
          "vehicle_type": "LUX XL",
          "localized_display_name": "LUX XL",
          "capacity": 6,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 53,
          "vehicle_type": "XL",
          "localized_display_name": "XL",
          "capacity": 6,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 54,
          "vehicle_type": "Airport Unavailable",
          "localized_display_name": "Airport Unavailable",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 55,
          "vehicle_type": "TAXI WAV",
          "localized_display_name": "TAXI WAV",
          "capacity": 4,
          "ride_type": 2,
          "special_accommodations": [
            2
          ]
        },
        {
          "pk": 56,
          "vehicle_type": "UberBLACK with Car Seat",
          "localized_display_name": "UberBLACK with Car Seat",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 57,
          "vehicle_type": "Family 6",
          "localized_display_name": "Family 6",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 58,
          "vehicle_type": "DCTA",
          "localized_display_name": "DCTA",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 59,
          "vehicle_type": "UberSKI SELECT",
          "localized_display_name": "UberSKI SELECT",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 60,
          "vehicle_type": "For Hire",
          "localized_display_name": "For Hire",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 61,
          "vehicle_type": "Commute",
          "localized_display_name": "Commute",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        }
      ]
    },
    {
      "pk": 2,
      "name": "Humana",
      "on_demand": false,
      "has_coordinates": true,
      "auto_consent": true,
      "call_driver_allowed": false,
      "booking_time_window": 720,
      "allow_second_leg": true,
      "phone_required": false,
      "is_manual": false,
      "driver_instructions": true,
      "show_prices": false,
      "vehicle_types": [
        {
          "pk": 62,
          "vehicle_type": "Shared Van",
          "localized_display_name": "Shared Van",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        }
      ]
    },
    {
      "pk": 3,
      "name": "Lyft",
      "on_demand": true,
      "has_coordinates": true,
      "auto_consent": true,
      "call_driver_allowed": true,
      "booking_time_window": null,
      "allow_second_leg": false,
      "phone_required": true,
      "is_manual": false,
      "driver_instructions": false,
      "show_prices": true,
      "vehicle_types": [
        {
          "pk": 63,
          "vehicle_type": "lyft_luxsuv",
          "localized_display_name": "Lyft Lux SUV",
          "capacity": 6,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 64,
          "vehicle_type": "lyft_lux",
          "localized_display_name": "Lyft Lux",
          "capacity": 6,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 65,
          "vehicle_type": "lyft_premier",
          "localized_display_name": "Lyft Premier",
          "capacity": 6,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 66,
          "vehicle_type": "lyft_plus",
          "localized_display_name": "Lyft Plus",
          "capacity": 6,
          "ride_type": 1,
          "special_accommodations": []
        },
        {
          "pk": 67,
          "vehicle_type": "lyft",
          "localized_display_name": "Lyft",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": []
        }
      ]
    }
  ],
  "vehicleTypes": {
    "1": {
      "vehicle_type": "uberX",
      "localized_display_name": "uberX",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "2": {
      "vehicle_type": "uberXL",
      "localized_display_name": "uberXL",
      "capacity": 6,
      "ride_type": 1,
      "special_accommodations": []
    },
    "3": {
      "vehicle_type": "ESPAÑOL",
      "localized_display_name": "ESPAÑOL",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "4": {
      "vehicle_type": "uberSUV",
      "localized_display_name": "uberSUV",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "5": {
      "vehicle_type": "Assist",
      "localized_display_name": "Assist",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": [
        1
      ]
    },
    "6": {
      "vehicle_type": "UberBLACK",
      "localized_display_name": "UberBLACK",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "7": {
      "vehicle_type": "WAV",
      "localized_display_name": "WAV",
      "capacity": 4,
      "ride_type": 2,
      "special_accommodations": [
        2
      ]
    },
    "8": {
      "vehicle_type": "SUV",
      "localized_display_name": "SUV",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "9": {
      "vehicle_type": "uberWAV",
      "localized_display_name": "uberWAV",
      "capacity": 4,
      "ride_type": 2,
      "special_accommodations": [
        2
      ]
    },
    "10": {
      "vehicle_type": "uberASSIST",
      "localized_display_name": "uberASSIST",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": [
        1
      ]
    },
    "11": {
      "vehicle_type": "uberESPAÑOL",
      "localized_display_name": "uberESPAÑOL",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "12": {
      "vehicle_type": "BLACK",
      "localized_display_name": "BLACK",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "13": {
      "vehicle_type": "POOL",
      "localized_display_name": "POOL",
      "capacity": 2,
      "ride_type": 1,
      "special_accommodations": []
    },
    "14": {
      "vehicle_type": "uberSELECT",
      "localized_display_name": "uberSELECT",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "15": {
      "vehicle_type": "SELECT",
      "localized_display_name": "SELECT",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "16": {
      "vehicle_type": "UberLUX",
      "localized_display_name": "UberLUX",
      "capacity": 6,
      "ride_type": 1,
      "special_accommodations": []
    },
    "17": {
      "vehicle_type": "uberSKI",
      "localized_display_name": "uberSKI",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "18": {
      "vehicle_type": "TAXI",
      "localized_display_name": "TAXI",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "19": {
      "vehicle_type": "WINEXL",
      "localized_display_name": "WINEXL",
      "capacity": 6,
      "ride_type": 1,
      "special_accommodations": []
    },
    "20": {
      "vehicle_type": "WINE",
      "localized_display_name": "WINE",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "21": {
      "vehicle_type": "uberPOOL",
      "localized_display_name": "uberPOOL",
      "capacity": 2,
      "ride_type": 1,
      "special_accommodations": []
    },
    "22": {
      "vehicle_type": "uberSKI BLACK",
      "localized_display_name": "uberSKI BLACK",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "23": {
      "vehicle_type": "PREMIUM SUV",
      "localized_display_name": "PREMIUM SUV",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "24": {
      "vehicle_type": "PREMIUM",
      "localized_display_name": "PREMIUM",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "25": {
      "vehicle_type": "uberTAXI",
      "localized_display_name": "uberTAXI",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "26": {
      "vehicle_type": "Wheelchair",
      "localized_display_name": "Wheelchair",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "27": {
      "vehicle_type": "uberX + Car Seat",
      "localized_display_name": "uberX + Car Seat",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "28": {
      "vehicle_type": "SUV + Car Seat",
      "localized_display_name": "SUV + Car Seat",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "29": {
      "vehicle_type": "BLACK CAR + Car Seat",
      "localized_display_name": "BLACK CAR + Car Seat",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "30": {
      "vehicle_type": "LUX",
      "localized_display_name": "LUX",
      "capacity": 6,
      "ride_type": 1,
      "special_accommodations": []
    },
    "31": {
      "vehicle_type": "LUX SUV",
      "localized_display_name": "LUX SUV",
      "capacity": 6,
      "ride_type": 1,
      "special_accommodations": []
    },
    "32": {
      "vehicle_type": "Maitland",
      "localized_display_name": "Maitland",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "33": {
      "vehicle_type": "uberXL + Car Seat",
      "localized_display_name": "uberXL + Car Seat",
      "capacity": 6,
      "ride_type": 1,
      "special_accommodations": []
    },
    "34": {
      "vehicle_type": "DC7-StPete",
      "localized_display_name": "DC7-StPete",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "35": {
      "vehicle_type": "DC8-Largo",
      "localized_display_name": "DC8-Largo",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "36": {
      "vehicle_type": "DC6-Seminole",
      "localized_display_name": "DC6-Seminole",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "37": {
      "vehicle_type": "DC4-Gateway",
      "localized_display_name": "DC4-Gateway",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "38": {
      "vehicle_type": "DC5-PinellasPark",
      "localized_display_name": "DC5-PinellasPark",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "39": {
      "vehicle_type": "DC3-NWpinellas",
      "localized_display_name": "DC3-NWpinellas",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "40": {
      "vehicle_type": "DC2-NEpinellas",
      "localized_display_name": "DC2-NEpinellas",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "41": {
      "vehicle_type": "PSTA-Huey/Lemon",
      "localized_display_name": "PSTA-Huey/Lemon",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "42": {
      "vehicle_type": "uberTAXI VAN",
      "localized_display_name": "uberTAXI VAN",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "43": {
      "vehicle_type": "Lake Mary",
      "localized_display_name": "Lake Mary",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "44": {
      "vehicle_type": "Altamonte",
      "localized_display_name": "Altamonte",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "45": {
      "vehicle_type": "Longwood",
      "localized_display_name": "Longwood",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "46": {
      "vehicle_type": "Sanford",
      "localized_display_name": "Sanford",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "47": {
      "vehicle_type": "uberCAB",
      "localized_display_name": "uberCAB",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "48": {
      "vehicle_type": "uberCAB (WAV)",
      "localized_display_name": "uberCAB (WAV)",
      "capacity": 4,
      "ride_type": 2,
      "special_accommodations": [
        2
      ]
    },
    "49": {
      "vehicle_type": "Pool9",
      "localized_display_name": "Pool9",
      "capacity": 2,
      "ride_type": 1,
      "special_accommodations": []
    },
    "50": {
      "vehicle_type": "Pool1",
      "localized_display_name": "Pool1",
      "capacity": 2,
      "ride_type": 1,
      "special_accommodations": []
    },
    "51": {
      "vehicle_type": "EXPRESS POOL",
      "localized_display_name": "EXPRESS POOL",
      "capacity": 2,
      "ride_type": 1,
      "special_accommodations": []
    },
    "52": {
      "vehicle_type": "LUX XL",
      "localized_display_name": "LUX XL",
      "capacity": 6,
      "ride_type": 1,
      "special_accommodations": []
    },
    "53": {
      "vehicle_type": "XL",
      "localized_display_name": "XL",
      "capacity": 6,
      "ride_type": 1,
      "special_accommodations": []
    },
    "54": {
      "vehicle_type": "Airport Unavailable",
      "localized_display_name": "Airport Unavailable",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "55": {
      "vehicle_type": "TAXI WAV",
      "localized_display_name": "TAXI WAV",
      "capacity": 4,
      "ride_type": 2,
      "special_accommodations": [
        2
      ]
    },
    "56": {
      "vehicle_type": "UberBLACK with Car Seat",
      "localized_display_name": "UberBLACK with Car Seat",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "57": {
      "vehicle_type": "Family 6",
      "localized_display_name": "Family 6",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "58": {
      "vehicle_type": "DCTA",
      "localized_display_name": "DCTA",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "59": {
      "vehicle_type": "UberSKI SELECT",
      "localized_display_name": "UberSKI SELECT",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "60": {
      "vehicle_type": "For Hire",
      "localized_display_name": "For Hire",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "61": {
      "vehicle_type": "Commute",
      "localized_display_name": "Commute",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "62": {
      "vehicle_type": "Shared Van",
      "localized_display_name": "Shared Van",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    },
    "63": {
      "vehicle_type": "lyft_luxsuv",
      "localized_display_name": "Lyft Lux SUV",
      "capacity": 6,
      "ride_type": 1,
      "special_accommodations": []
    },
    "64": {
      "vehicle_type": "lyft_lux",
      "localized_display_name": "Lyft Lux",
      "capacity": 6,
      "ride_type": 1,
      "special_accommodations": []
    },
    "65": {
      "vehicle_type": "lyft_premier",
      "localized_display_name": "Lyft Premier",
      "capacity": 6,
      "ride_type": 1,
      "special_accommodations": []
    },
    "66": {
      "vehicle_type": "lyft_plus",
      "localized_display_name": "Lyft Plus",
      "capacity": 6,
      "ride_type": 1,
      "special_accommodations": []
    },
    "67": {
      "vehicle_type": "lyft",
      "localized_display_name": "Lyft",
      "capacity": 4,
      "ride_type": 1,
      "special_accommodations": []
    }
  },
  "map": {},
  "trip": {},
  "nextRoute": null,
  "riderSearchResults": [],
  "rideEstimate": {},
  "currentRiderData": {},
  "currentRiderNotes": [],
  "currentTrip": {},
  "trips": {},
  "cohorts": [],
  "billingCodes": [],
  "appointmentTypes": [],
  "invoiceContacts": [],
  "riderLocations": {},
  "viewedRiders": [],
  "rideData": {
    "list": {},
    "calendar": {}
  },
  "riderRideData": [],
  "alerts": [],
  "alertTypes": [],
  "alertsQuery": {},
  "autopopulate": {},
  "systemStatus": {},
  "sideMenuExpanded": false,
  "mobileSearchActive": false,
  "helpPhone": "6172199522",
  "helpEmail": "help@circulation.com",
  "cancelReasons": [
    {
      "label": "Re-scheduling",
      "apiKey": "re-scheduling"
    },
    {
      "label": "Rider sick",
      "apiKey": "sick"
    },
    {
      "label": "Rider got another ride",
      "apiKey": "got another ride"
    },
    {
      "label": "Made a mistake",
      "apiKey": "made a mistake"
    },
    {
      "label": "Weather",
      "apiKey": "weather"
    },
    {
      "label": "Other",
      "apiKey": "other"
    }
  ],
  "bulkCancelReasons": [
    {
      "label": "Weather",
      "apiKey": "weather"
    },
    {
      "label": "Facility closed",
      "apiKey": "facility closed"
    },
    {
      "label": "Other",
      "apiKey": "other"
    }
  ],
  "approveReasons": [
    {
      "label": "Traffic",
      "apiKey": "traffic"
    },
    {
      "label": "Weather",
      "apiKey": "weather"
    },
    {
      "label": "Mobility issues",
      "apiKey": "mobility issues"
    },
    {
      "label": "No other suitable transportation",
      "apiKey": "no other suitable transportation option"
    },
    {
      "label": "Medical necessity",
      "apiKey": "medical necessity"
    },
    {
      "label": "Other",
      "apiKey": "other"
    }
  ],
  "notificationOptions": [
    {
      "label": "Booking",
      "key": "notify_when_booking"
    },
    {
      "label": "Day Before",
      "key": "notify_when_day_before"
    },
    {
      "label": "Car Dispatched",
      "key": "notify_when_car_dispatched"
    },
    {
      "label": "Complete",
      "key": "notify_when_complete"
    },
    {
      "label": "Send Initiation Code",
      "key": "notify_when_initiation_code"
    }
  ],
  "inProgressStatus": [
    "booking",
    "en-route",
    "in-transit"
  ],
  "repeatOptions": [
    {
      "unit": "never",
      "label": "never",
      "suppressInfo": true
    },
    {
      "unit": "day",
      "label": "daily",
      "append": "day",
      "maxOccurances": 365
    },
    {
      "unit": "week",
      "label": "weekly",
      "format": "dddd",
      "suffix": "s",
      "maxOccurances": 52
    },
    {
      "unit": "month",
      "label": "monthly",
      "format": "Do",
      "prefix": "the ",
      "maxOccurances": 12
    },
    {
      "unit": "custom",
      "label": "custom"
    }
  ],
  "defaultPage": "/",
  "showPrices": true,
  "autoConsent": true,
  "orgCarriers": [
    {
      "pk": 1,
      "name": "Uber",
      "on_demand": true,
      "has_coordinates": false,
      "auto_consent": false,
      "call_driver_allowed": true,
      "booking_time_window": null,
      "allow_second_leg": false,
      "phone_required": true,
      "is_manual": false,
      "driver_instructions": false,
      "show_prices": true
    },
    {
      "pk": 3,
      "name": "Lyft",
      "on_demand": true,
      "has_coordinates": true,
      "auto_consent": true,
      "call_driver_allowed": true,
      "booking_time_window": null,
      "allow_second_leg": false,
      "phone_required": true,
      "is_manual": false,
      "driver_instructions": false,
      "show_prices": true
    }
  ],
  "onDemand": true,
  "specialAccoms": [
    {
      "id": 1,
      "type": "door-to-door assistance",
      "vehicles": [
        {
          "pk": 5,
          "vehicle_type": "Assist",
          "localized_display_name": "Assist",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": [
            1
          ]
        },
        {
          "pk": 10,
          "vehicle_type": "uberASSIST",
          "localized_display_name": "uberASSIST",
          "capacity": 4,
          "ride_type": 1,
          "special_accommodations": [
            1
          ]
        }
      ]
    },
    {
      "id": 2,
      "type": "wheelchair",
      "vehicles": [
        {
          "pk": 7,
          "vehicle_type": "WAV",
          "localized_display_name": "WAV",
          "capacity": 4,
          "ride_type": 2,
          "special_accommodations": [
            2
          ]
        },
        {
          "pk": 9,
          "vehicle_type": "uberWAV",
          "localized_display_name": "uberWAV",
          "capacity": 4,
          "ride_type": 2,
          "special_accommodations": [
            2
          ]
        },
        {
          "pk": 48,
          "vehicle_type": "uberCAB (WAV)",
          "localized_display_name": "uberCAB (WAV)",
          "capacity": 4,
          "ride_type": 2,
          "special_accommodations": [
            2
          ]
        },
        {
          "pk": 55,
          "vehicle_type": "TAXI WAV",
          "localized_display_name": "TAXI WAV",
          "capacity": 4,
          "ride_type": 2,
          "special_accommodations": [
            2
          ]
        }
      ]
    },
    {
      "id": 3,
      "type": "large wheelchair",
      "vehicles": []
    },
    {
      "id": 4,
      "type": "walker with lift",
      "vehicles": []
    }
  ],
  "actions": sinonNavActions,
  "smallScreen": false,
  "alertCount":4
}

export const sidebarProps = topNavProps;
export const footerProps = topNavProps;
export const alertCardsProps = { alertCount:3, totalAlerts:3, ...sinonNavAlertActions }
