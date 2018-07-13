const alertFailedType = {
  "alert_num": 1,
  "total_alerts": 6,
  "results": [
    {
      "id": 1,
      "active": true,
      "type": "Failed Pickup",
      "attributes": {
        "category": "ride",
        "allowed_actions": [
          "rebook",
          "review trip"
        ],
        "warning_level": 1
      },
      "alert_time": "2016-09-01T12:20:00Z",
      "action": null,
      "action_user": null,
      "action_time": null,
      "dropoff_delta": null,
      "rider": 2,
      "rider_name": "Joeseph Smith",
      "ride": {
        "trip_uuid": "0869038761",
        "uber_details_actual": null,
        "uber_details_estimate_latest": {
          "cost_dollars_high": 15,
          "cost_dollars_low": 13,
          "time_of_estimate": "2016-08-01T10:00:00Z",
          "duration_min": 20,
          "pickup_eta": 5,
          "dist_mi": 2.5
        },
        "initiationCode": "",
        "recurring_trip": false,
        "round_trip": true,
        "carrier_name": "Lyft",
        "trip_id": 37,
        "id": 73,
        "uuid": "",
        "total_cost": 0,
        "destination": {
          "id": 1,
          "desc": "City Hospital - Main",
          "isHome": false,
          "rider": null,
          "organization": 1,
          "addr1": "86 Hancock Street",
          "addr2": "",
          "city": "Boston",
          "county": null,
          "state": "MA",
          "zip_code": "02114",
          "lat": 42.358818,
          "lon": -71.064317,
          "tzone": "America/New_York",
          "locked": false,
          "locked_by": null,
          "locked_expiration": null,
          "isLocked": false,
          "status": "A",
          "cohorts": [
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
          ]
        },
        "requested_time": "2016-08-20T11:10:00Z",
        "pickup": {
          "id": 3,
          "desc": "Rider's Home",
          "isHome": true,
          "rider": 2,
          "organization": null,
          "addr1": "401 Park Dr.",
          "addr2": "",
          "city": "Boston",
          "county": null,
          "state": "MA",
          "zip_code": "02115",
          "lat": 42.34454,
          "lon": -71.102261,
          "tzone": "America/New_York",
          "locked": false,
          "locked_by": null,
          "locked_expiration": null,
          "isLocked": false,
          "status": "A",
          "cohorts": []
        },
        "requested_time_option": "pickup",
        "status": "incomplete",
        "emergencyCode": "",
        "requested_duration_min": 20,
        "vehicle_type": 1,
        "billing_code": "City Hospital - Primary Care #12234",
        "appointment_type": null,
        "carrier": 3
      },
      "rider_cohort": "City Hospital",
      "rider_organization": "City Hospital",
      "rider_uuid": "CH06754"
    }
  ]
}

const alertWarningLevelOne = {
  "alert_num": 2,
  "total_alerts": 6,
  "results": [
    {
      "id": 2,
      "active": true,
      "type": "Price Warning",
      "attributes": {
        "category": "price",
        "allowed_actions": [
          "approve",
          "modify"
        ],
        "warning_level": 1,
        "warning_price": 100
      },
      "alert_time": "2016-09-01T12:30:00Z",
      "action": null,
      "action_user": null,
      "action_time": null,
      "dropoff_delta": null,
      "rider": 2,
      "rider_name": "Joeseph Smith",
      "ride": {
        "trip_uuid": "7736206765",
        "uber_details_actual": null,
        "uber_details_estimate_latest": {
          "cost_dollars_high": 48,
          "cost_dollars_low": 40,
          "time_of_estimate": "2016-08-01T10:00:00Z",
          "duration_min": 20,
          "pickup_eta": 5,
          "dist_mi": 2.5
        },
        "initiationCode": "",
        "recurring_trip": false,
        "round_trip": true,
        "carrier_name": "Lyft",
        "trip_id": 9,
        "id": 17,
        "uuid": "",
        "total_cost": 0,
        "destination": {
          "id": 1,
          "desc": "City Hospital - Main",
          "isHome": false,
          "rider": null,
          "organization": 1,
          "addr1": "86 Hancock Street",
          "addr2": "",
          "city": "Boston",
          "county": null,
          "state": "MA",
          "zip_code": "02114",
          "lat": 42.358818,
          "lon": -71.064317,
          "tzone": "America/New_York",
          "locked": false,
          "locked_by": null,
          "locked_expiration": null,
          "isLocked": false,
          "status": "A",
          "cohorts": [
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
          ]
        },
        "requested_time": "2016-10-15T11:10:05Z",
        "pickup": {
          "id": 3,
          "desc": "Rider's Home",
          "isHome": true,
          "rider": 2,
          "organization": null,
          "addr1": "401 Park Dr.",
          "addr2": "",
          "city": "Boston",
          "county": null,
          "state": "MA",
          "zip_code": "02115",
          "lat": 42.34454,
          "lon": -71.102261,
          "tzone": "America/New_York",
          "locked": false,
          "locked_by": null,
          "locked_expiration": null,
          "isLocked": false,
          "status": "A",
          "cohorts": []
        },
        "requested_time_option": "pickup",
        "status": "pending",
        "emergencyCode": "",
        "requested_duration_min": 20,
        "vehicle_type": 1,
        "billing_code": "City Hospital - Primary Care #12234",
        "appointment_type": null,
        "carrier": 3
      },
      "rider_cohort": "City Hospital",
      "rider_organization": "City Hospital",
      "rider_uuid": "CH06754"
    }
  ]
}


const alertWarningLevelTwo = {
  "alert_num": 4,
  "total_alerts": 6,
  "results": [
    {
      "id": 4,
      "active": true,
      "type": "Late Warning",
      "attributes": {
        "category": "time",
        "allowed_actions": [
          "acknowledge",
          "modify"
        ],
        "warning_level": 2
      },
      "alert_time": "2016-09-01T12:50:00Z",
      "action": null,
      "action_user": null,
      "action_time": null,
      "dropoff_delta": 722070.9989484833,
      "rider": 4,
      "rider_name": "Jennifer Barbarino",
      "ride": {
        "trip_uuid": "4194806013",
        "uber_details_actual": {
          "ride_mins_elapsed": null,
          "dest_eta": 25,
          "vehicle_color": "",
          "vehicle_make": "Bugatti",
          "vehicle_picture_url": "https://d1a3f4spazzrp4.cloudfront.net/uberex-sandbox/dist/images/prius.jpg",
          "map_url": "",
          "driver_picture_url": "https://d1a3f4spazzrp4.cloudfront.net/uberex-sandbox/dist/images/driver.jpg",
          "status": "accepted",
          "vehicle_license_plate": "I<3Uber",
          "start_time": null,
          "cost_dollars": null,
          "vehicle_license_plate_state": "",
          "pickup_eta": 12,
          "driver_name:": "Bob",
          "driver_rating": 4.9,
          "driver_phone": "5555555555",
          "beacon_color": "",
          "booking_time": "2016-09-30T11:10:24Z",
          "end_time": null,
          "duration_min": null,
          "vehicle_model": "Veyron",
          "dist_mi": null
        },
        "uber_details_estimate_latest": {
          "cost_dollars_high": 15,
          "cost_dollars_low": 13,
          "time_of_estimate": "2016-08-01T10:00:00Z",
          "duration_min": 40,
          "pickup_eta": 5,
          "dist_mi": 2.5
        },
        "initiationCode": "",
        "recurring_trip": false,
        "round_trip": true,
        "carrier_name": "Lyft",
        "trip_id": 15,
        "id": 29,
        "uuid": "",
        "total_cost": 0,
        "destination": {
          "id": 1,
          "desc": "City Hospital - Main",
          "isHome": false,
          "rider": null,
          "organization": 1,
          "addr1": "86 Hancock Street",
          "addr2": "",
          "city": "Boston",
          "county": null,
          "state": "MA",
          "zip_code": "02114",
          "lat": 42.358818,
          "lon": -71.064317,
          "tzone": "America/New_York",
          "locked": false,
          "locked_by": null,
          "locked_expiration": null,
          "isLocked": false,
          "status": "A",
          "cohorts": [
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
          ]
        },
        "requested_time": "2016-09-30T11:10:00Z",
        "pickup": {
          "id": 5,
          "desc": "Rider's Home",
          "isHome": true,
          "rider": 4,
          "organization": null,
          "addr1": "50 Milk St.",
          "addr2": "",
          "city": "Boston",
          "county": null,
          "state": "MA",
          "zip_code": "02109",
          "lat": 42.356996,
          "lon": -71.057605,
          "tzone": "America/New_York",
          "locked": false,
          "locked_by": null,
          "locked_expiration": null,
          "isLocked": false,
          "status": "A",
          "cohorts": []
        },
        "requested_time_option": "pickup",
        "status": "en-route",
        "emergencyCode": "",
        "requested_duration_min": 20,
        "vehicle_type": 1,
        "billing_code": "City Hospital - Primary Care #12234",
        "appointment_type": null,
        "carrier": 3,
        "tripInProgress": true
      },
      "rider_cohort": "City Hospital",
      "rider_organization": "City Hospital",
      "rider_uuid": "CH23466"
    }
  ]
}
export const alertResponseObjMock = {
  alertFailedType,
  alertWarningLevelOne,
  alertWarningLevelTwo
}
