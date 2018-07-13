export const authProps = {
  "location": {
    "pathname": "/login",
    "search": "",
    "hash": "",
    "action": "POP",
    "key": "o7vxqk",
    "query": {}
  },
  "params": {},
  "route": {
    "path": "/login"
  },
  "router": {
    "location": {
      "pathname": "/login",
      "search": "",
      "hash": "",
      "action": "POP",
      "key": "o7vxqk",
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
                    "path": "/rider/:id/ridelist-scheduled"
                  },
                  {
                    "path": "/rider/:id/ridelist-completed"
                  },
                  {
                    "path": "/rider/:id/ridelist-incomplete"
                  },
                  {
                    "path": "/rider/:id/ridelist-canceled"
                  }
                ]
              },
              {
                "path": "/alert-list/:subpage"
              },
              {
                "path": "/ride-list/:subpage"
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
        "path": "/login"
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
                  "path": "/rider/:id/ridelist-scheduled"
                },
                {
                  "path": "/rider/:id/ridelist-completed"
                },
                {
                  "path": "/rider/:id/ridelist-incomplete"
                },
                {
                  "path": "/rider/:id/ridelist-canceled"
                }
              ]
            },
            {
              "path": "/alert-list/:subpage"
            },
            {
              "path": "/ride-list/:subpage"
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
      "path": "/login"
    }
  ],
  "children": null,
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
  "user": {},
  "organization": {},
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
  "riderLocations": {},
  "viewedRiders": [],
  "rideData": [],
  "riderRideData": [],
  "alerts": [],
  "alertTypes": [],
  "alertsQuery": {},
  "autopopulate": {},
  "systemStatus": {},
  "rideListParams": {
    "past": {
      "date_start": "2017-12-12T05:00:00Z",
      "date_end": "2017-12-13T04:59:59Z",
      "ordering": "DESC",
      "page_size": 25,
      "user_timezone": "America/New_York",
      "ride_status": "incomplete,completed"
    }
  },
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
  "actions": {}
}
