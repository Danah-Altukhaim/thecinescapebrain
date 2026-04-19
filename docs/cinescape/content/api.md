# Cinema Booking APIs Documentation

Source: `KNCC_Cinema_API_Documentation.pdf` (extracted via `pdftotext -layout`)

---

## Overview

This document defines the core booking flow for the Cinescape cinema platform.

**Base URL:** `https://apiuat.cinescape.com.kw/`

**Endpoints:**

- `POST /api/content/nowshowing` — currently running movies
- `GET /api/content/cinemas` — list of cinema locations
- `POST /api/content/msessionsnew` — showtimes for a given movie/date/cinema
- `POST /api/content/trans/seatlayout` — seat layout for a showtime
- `POST /api/content/trans/reserveseats` — reserve selected seats

### Booking flow

1. Fetch movies
2. Fetch cinemas
3. Fetch showtimes
4. Select seats
5. Reserve seats
6. Payment

### Endpoint summaries

#### Movies API

- **Endpoint:** `POST /api/content/nowshowing`
- **Description:** Fetch currently running movies
- **Sample Request:** {}
- **Sample Response:** { movies: [...] }
- **Test Cases:** 
- Validate response contains movie list
- Validate empty response handling

#### Cinemas API

- **Endpoint:** `GET /api/content/cinemas`
- **Params:** bookType, latitude, longitude
- **Sample Response:** { cinemas: [...] }
- **Test Cases:** 
- Validate cinemas list
- Validate location filtering

#### Showtimes API

- **Endpoint:** `POST /api/content/msessionsnew`
- **Sample Request:** { mid, dated, cinemaIds }
- **Sample Response:** { sessions: [...] }
- **Test Cases:** 
- Validate sessions per movie
- Validate invalid movie id

#### Seat & Booking APIs

- **Endpoint:** `POST /api/content/trans/seatlayout`
- **Endpoint:** `POST /api/content/trans/reserveseats`
- **Flow:** 
1. Fetch movies
2. Fetch cinemas
3. Fetch showtimes
4. Select seats
5. Reserve seats
6. Payment
- **Test Cases:** 
- Seat availability
- Concurrent booking handling

---

## API Details

Each section below contains the sample request URL (and headers, where provided) and the full sample response body as returned by the UAT API.

### Cinemas

**Request URL:** `https://apiuat.cinescape.com.kw/api/content/cinemas?bookType=FOOD&latitude=28.560`


**Sample response:**

```
({
     code = 10001;
     msg = "";
 output =   {
   cinemas =         (
            {
       active = 1;
       address1 = "Al Khiran Mall, Sabah Al Ahmed Sea City";
      address1Ar = "\U0645\U0648\U0644
\U0627\U0644\U062e\U064a\U0631\U0627\U0646\U060c
\U0645\U062f\U064a\U0646\U0629 \U0635\U0628\U0627\U062d
\U0627\U0644\U0623\U062d\U0645\U062f
\U0627\U0644\U0628\U062d\U0631\U064a\U0629";
       address2 = "";
       address2Ar = "";
       alerttxt = "";
       allowOnlineVoucherValidation = 0;
       allowPrintAtHomeBookings = 0;
        appImageUrl =
"https://cdn.uat.cinescape.com.kw/cinema/mob_big/0000000015.jpg";
        appThumbImageUrl =
"https://cdn.uat.cinescape.com.kw/cinema/mob_small/0000000015.jpg";
       city = "";
       currencyCode = KWD;
       description = "";
       descriptionAlt = "";
       displaySofaSeats = 0;
       emailAddress = "";
       experiences =           (
       );
       exps =            (
          );
          food = 1;
          foodEnable = 0;
          foodEndTime = "<null>";
          foodPrepare = 0;
          foodStartTime = "<null>";
          giftStore = 0;
          icon = "";
          id = 0000000015;
          latitude = "28.6701458";
          longitude = "48.3455124";
          loyaltyCode = "<null>";
          name = "Cinescape Khairan";
      nameAlt = "\U0633\U064a\U0646\U0633\U0643\U064a\U0628
\U062e\U064a\U0631\U0627\U0646";
          parkingInfo = "<null>";
          phoneNumber = "";
          priority = 2794337;
          timeZoneId = "<null>";
          webImageUrl = "";
        webThumbImageUrl =
"https://cdn.uat.cinescape.com.kw/cinema/web_small/0000000015.jpg";
          workingHours = "11 AM - 2 AM";
          workingHoursAlt = "11 AM - 2 AM";
     },
               {
          active = 1;
       address1 = "360 Mall, Zahra";
      address1Ar = "\U0645\U0648\U0644 360\U060c
\U0627\U0644\U0632\U0647\U0631\U0627\U0621";
       address2 = "";
       address2Ar = "";
       alerttxt = "";
       allowOnlineVoucherValidation = 0;
       allowPrintAtHomeBookings = 0;
        appImageUrl =
"https://cdn.uat.cinescape.com.kw/cinema/mob_big/0000000001.jpg";
        appThumbImageUrl =
"https://cdn.uat.cinescape.com.kw/cinema/mob_small/0000000001.jpg";
       city = "";
       currencyCode = KWD;
       description = "";
       descriptionAlt = "";
       displaySofaSeats = 0;
       emailAddress = "";
       experiences =           (
       );
       exps =           (
            VIP,
            IMAX,
            4DX,
            DOLBY,
            SCREENX
       );
          food = 1;
          foodEnable = 1;
          foodEndTime = "14:00";
          foodPrepare = 1;
          foodStartTime = "08:00";
          giftStore = 0;
          icon = "";
          id = 0000000001;
          latitude = "29.2678";
          longitude = "47.9919";
          loyaltyCode = "<null>";
          name = "Cinescape 360";
          nameAlt = "\U0633\U064a\U0646\U0633\U0643\U064a\U0628 360";
          parkingInfo = "<null>";
          phoneNumber = "";
          priority = 2821409;
          timeZoneId = "<null>";
          webImageUrl = "";
        webThumbImageUrl =
"https://cdn.uat.cinescape.com.kw/cinema/web_small/0000000001.jpg?v=937";
          workingHours = "08 AM - 10 AM";
          workingHoursAlt = "08 AM - 10 AM";
     },
              {
          active = 1;
          address1 = "The Avenues Mall (Phase 1), Al-Rai";
      address1Ar = "\U0645\U0648\U0644
\U0627\U0644\U0623\U0641\U0646\U064a\U0648\U0632\U060c
\U0627\U0644\U0631\U064a";
       address2 = "";
       address2Ar = "";
       alerttxt = "";
       allowOnlineVoucherValidation = 0;
       allowPrintAtHomeBookings = 0;
        appImageUrl =
"https://cdn.uat.cinescape.com.kw/cinema/mob_big/0000000008.jpg";
        appThumbImageUrl =
"https://cdn.uat.cinescape.com.kw/cinema/mob_small/0000000008.jpg";
       city = "";
       currencyCode = KWD;
       description = "";
       descriptionAlt = "";
       displaySofaSeats = 0;
       emailAddress = "";
       experiences =           (
       );
       exps =           (
            STANDARD,
            VIP,
            IMAX,
            4DX,
            3D,
            DOLBY,
            ELEVEN,
              SCREENX,
              SKYLINE
         );
         food = 1;
         foodEnable = 1;
         foodEndTime = "14:00";
         foodPrepare = 0;
         foodStartTime = "08:00";
         giftStore = 0;
         icon = "";
         id = 0000000008;
         latitude = "29.3023273";
         longitude = "47.926649";
         loyaltyCode = "<null>";
         name = "Cinescape Avenues";
      nameAlt = "\U0633\U064a\U0646\U0633\U0643\U064a\U0628
\U0627\U0644\U0623\U0641\U0646\U064a\U0648\U0632";
         parkingInfo = "<null>";
         phoneNumber = "";
         priority = 2827336;
         timeZoneId = "<null>";
         webImageUrl = "";
        webThumbImageUrl =
"https://cdn.uat.cinescape.com.kw/cinema/web_small/0000000008.jpg?v=317";
         workingHours = "10 AM - 2 AM";
         workingHoursAlt = "08 AM - 10 PM";
     }
          );
     };
     result = success;
})
```

### Movies

**Request URL:** `https://apiuat.cinescape.com.kw/api/content/movies`

- Accept: application/json
- Accept-Language: en
- appversion: 15.15
- platform: IOS
- Authorization: Bearer
- params for api https://apiuat.cinescape.com.kw/api/content/movies

**Sample response:**

```
(["code": 10001, "output": {
     advanceBooking =        (
     );
     advanceBookingHome =        (
     );
     alllanguages =      (
          English,
          Arabic,
          Hindi
);
banners =     (
);
cinemas =         (
          {
     active = 0;
     address1 = "";
     address1Ar = "";
     address2 = "";
     address2Ar = "";
     alerttxt = "";
     allowOnlineVoucherValidation = 0;
     allowPrintAtHomeBookings = 0;
     appImageUrl = "";
     appThumbImageUrl = "";
     city = "";
     currencyCode = KWD;
     description = "";
     descriptionAlt = "";
     displaySofaSeats = 0;
     emailAddress = "";
     experiences =          (
     );
     exps =           (
     );
        food = 0;
        foodEnable = 0;
        foodEndTime = "14:00";
        foodPrepare = 0;
        foodStartTime = "17:00";
        giftStore = 0;
        icon = "";
        id = 0000000002;
        latitude = 0;
        longitude = 0;
        loyaltyCode = "<null>";
        name = "Cinescape Ajial";
     nameAlt = "\U0633\U064a\U0646\U0633\U0643\U064a\U0628
\U0623\U062c\U064a\U0627\U0644";
        parkingInfo = "<null>";
        phoneNumber = "";
        priority = 2;
        timeZoneId = "<null>";
        webImageUrl = "";
        webThumbImageUrl = "";
        workingHours = "08 AM - 10 PM";
        workingHoursAlt = "08 AM - 10 PM";
   },
          {
        active = 1;
     address1 = "360 Mall, Zahra";
     address1Ar = "\U0645\U0648\U0644 360\U060c
\U0627\U0644\U0632\U0647\U0631\U0627\U0621";
     address2 = "";
     address2Ar = "";
     alerttxt = "";
     allowOnlineVoucherValidation = 0;
     allowPrintAtHomeBookings = 0;
      appImageUrl =
"https://cdn.uat.cinescape.com.kw/cinema/mob_big/0000000001.jpg";
      appThumbImageUrl =
"https://cdn.uat.cinescape.com.kw/cinema/mob_small/0000000001.jpg";
     city = "";
     currencyCode = KWD;
     description = "";
     descriptionAlt = "";
     displaySofaSeats = 0;
     emailAddress = "";
     experiences =          (
     );
     exps =           (
          VIP,
          IMAX,
          4DX,
          DOLBY,
          SCREENX
        );
        food = 1;
        foodEnable = 0;
        foodEndTime = "14:00";
        foodPrepare = 1;
        foodStartTime = "08:00";
        giftStore = 0;
        icon = "";
        id = 0000000001;
        latitude = "29.2678";
        longitude = "47.9919";
        loyaltyCode = "<null>";
        name = "Cinescape 360";
        nameAlt = "\U0633\U064a\U0646\U0633\U0643\U064a\U0628 360";
        parkingInfo = "<null>";
        phoneNumber = "";
        priority = 2;
        timeZoneId = "<null>";
        webImageUrl = "";
      webThumbImageUrl =
"https://cdn.uat.cinescape.com.kw/cinema/web_small/0000000001.jpg?v=937";
        workingHours = "08 AM - 10 AM";
        workingHoursAlt = "08 AM - 10 AM";
   },
             {
     active = 1;
     address1 = "The Avenues Mall (Phase 1), Al-Rai";
     address1Ar = "\U0645\U0648\U0644
\U0627\U0644\U0623\U0641\U0646\U064a\U0648\U0632\U060c
\U0627\U0644\U0631\U064a";
     address2 = "";
     address2Ar = "";
     alerttxt = "";
     allowOnlineVoucherValidation = 0;
     allowPrintAtHomeBookings = 0;
      appImageUrl =
"https://cdn.uat.cinescape.com.kw/cinema/mob_big/0000000008.jpg";
      appThumbImageUrl =
"https://cdn.uat.cinescape.com.kw/cinema/mob_small/0000000008.jpg";
     city = "";
     currencyCode = KWD;
     description = "";
     descriptionAlt = "";
     displaySofaSeats = 0;
     emailAddress = "";
     experiences =          (
     );
     exps =           (
          STANDARD,
          VIP,
          IMAX,
         4DX,
         3D,
         DOLBY,
         ELEVEN,
         SCREENX,
         SKYLINE
    );
    food = 1;
    foodEnable = 0;
    foodEndTime = "14:00";
    foodPrepare = 0;
    foodStartTime = "08:00";
    giftStore = 0;
    icon = "";
    id = 0000000008;
    latitude = "29.3023273";
    longitude = "47.926649";
    loyaltyCode = "<null>";
    name = "Cinescape Avenues";
     nameAlt = "\U0633\U064a\U0646\U0633\U0643\U064a\U0628
\U0627\U0644\U0623\U0641\U0646\U064a\U0648\U0632";
    parkingInfo = "<null>";
    phoneNumber = "";
    priority = 4;
    timeZoneId = "<null>";
    webImageUrl = "";
      webThumbImageUrl =
"https://cdn.uat.cinescape.com.kw/cinema/web_small/0000000008.jpg?v=317";
        workingHours = "10 AM - 2 AM";
        workingHoursAlt = "08 AM - 10 PM";
   },
             {
        active = 0;
        address1 = "Al Kout Mall, Fahaheel";
     address1Ar = "\U0627\U0644\U0643\U0648\U062a \U0645\U0648\U0644\U060c
\U0627\U0644\U0641\U062d\U064a\U062d\U064a\U0644";
        address2 = "";
        address2Ar = "";
        alerttxt = "";
        allowOnlineVoucherValidation = 0;
        allowPrintAtHomeBookings = 0;
      appImageUrl =
"https://cdn.uat.cinescape.com.kw/cinema/mob_big/0000000019.jpg";
      appThumbImageUrl =
"https://cdn.uat.cinescape.com.kw/cinema/mob_small/0000000019.jpg";
        city = "";
        currencyCode = "";
        description = "";
        descriptionAlt = "";
        displaySofaSeats = 0;
        emailAddress = "";
        experiences =          (
        );
        exps =           (
        );
        food = 0;
        foodEnable = 0;
        foodEndTime = "<null>";
        foodPrepare = 0;
        foodStartTime = "<null>";
        giftStore = 0;
        icon = "";
        id = 0000000019;
        latitude = "029.07798";
        longitude = "48.13963";
        loyaltyCode = "<null>";
        name = "Cinescape Al-Kout";
     nameAlt = "\U0633\U064a\U0646\U0633\U0643\U064a\U0628
\U0627\U0644\U0643\U0648\U062a";
        parkingInfo = "<null>";
        phoneNumber = "";
        priority = 5;
        timeZoneId = "<null>";
        webImageUrl = "";
      webThumbImageUrl =
"https://cdn.uat.cinescape.com.kw/cinema/web_small/0000000019.jpg?v=506";
        workingHours = "11 AM - 2 AM";
        workingHoursAlt = "11 AM - 2 AM";
   },
             {
        active = 1;
     address1 = "Al Khiran Mall, Sabah Al Ahmed Sea City";
     address1Ar = "\U0645\U0648\U0644
\U0627\U0644\U062e\U064a\U0631\U0627\U0646\U060c
\U0645\U062f\U064a\U0646\U0629 \U0635\U0628\U0627\U062d
\U0627\U0644\U0623\U062d\U0645\U062f
\U0627\U0644\U0628\U062d\U0631\U064a\U0629";
     address2 = "";
     address2Ar = "";
     alerttxt = "";
     allowOnlineVoucherValidation = 0;
     allowPrintAtHomeBookings = 0;
      appImageUrl =
"https://cdn.uat.cinescape.com.kw/cinema/mob_big/0000000015.jpg";
      appThumbImageUrl =
"https://cdn.uat.cinescape.com.kw/cinema/mob_small/0000000015.jpg";
     city = "";
     currencyCode = KWD;
     description = "";
     descriptionAlt = "";
     displaySofaSeats = 0;
     emailAddress = "";
     experiences =          (
     );
     exps =           (
     );
     food = 1;
     foodEnable = 0;
     foodEndTime = "<null>";
        foodPrepare = 0;
        foodStartTime = "<null>";
        giftStore = 0;
        icon = "";
        id = 0000000015;
        latitude = "28.6701458";
        longitude = "48.3455124";
        loyaltyCode = "<null>";
        name = "Cinescape Khairan";
     nameAlt = "\U0633\U064a\U0646\U0633\U0643\U064a\U0628
\U062e\U064a\U0631\U0627\U0646";
        parkingInfo = "<null>";
        phoneNumber = "";
        priority = 6;
        timeZoneId = "<null>";
        webImageUrl = "";
      webThumbImageUrl =
"https://cdn.uat.cinescape.com.kw/cinema/web_small/0000000015.jpg";
        workingHours = "11 AM - 2 AM";
        workingHoursAlt = "11 AM - 2 AM";
   },
          {
        active = 0;
        address1 = "";
        address1Ar = "";
        address2 = "";
        address2Ar = "";
alerttxt = "";
allowOnlineVoucherValidation = 0;
allowPrintAtHomeBookings = 0;
appImageUrl = "";
appThumbImageUrl = "";
city = "";
currencyCode = "";
description = "";
descriptionAlt = "";
displaySofaSeats = 0;
emailAddress = "";
experiences =          (
);
exps =           (
);
food = 0;
foodEnable = 0;
foodEndTime = "<null>";
foodPrepare = 0;
foodStartTime = "<null>";
giftStore = 0;
icon = "";
id = 0000000018;
latitude = 0;
longitude = 0;
loyaltyCode = "<null>";
        name = "Cinescape Al-Fanar";
     nameAlt = "\U0633\U064a\U0646\U0633\U0643\U064a\U0628
\U0627\U0644\U0641\U0646\U0627\U0631";
        parkingInfo = "<null>";
        phoneNumber = "";
        priority = 99;
        timeZoneId = "<null>";
        webImageUrl = "";
      webThumbImageUrl =
"https://cdn.uat.cinescape.com.kw/cinema/web_small/0000000018.jpg?v=790";
        workingHours = "";
        workingHoursAlt = "";
   },
          {
        active = 0;
        address1 = "";
        address1Ar = "";
        address2 = "";
        address2Ar = "";
        alerttxt = "";
        allowOnlineVoucherValidation = 0;
        allowPrintAtHomeBookings = 0;
        appImageUrl = "";
        appThumbImageUrl = "";
        city = "";
        currencyCode = "";
        description = "";
    descriptionAlt = "";
    displaySofaSeats = 0;
    emailAddress = "";
    experiences =          (
    );
    exps =           (
    );
    food = 0;
    foodEnable = 0;
    foodEndTime = "<null>";
    foodPrepare = 0;
    foodStartTime = "<null>";
    giftStore = 0;
    icon = "";
    id = 0000000017;
    latitude = 0;
    longitude = 0;
    loyaltyCode = "<null>";
    name = "Cinescape Al-Bairaq";
     nameAlt = "\U0633\U064a\U0646\U0633\U0643\U064a\U0628
\U0627\U0644\U0628\U064a\U0631\U0642";
    parkingInfo = "<null>";
    phoneNumber = "";
    priority = 99;
    timeZoneId = "<null>";
    webImageUrl = "";
     webThumbImageUrl = "";
     workingHours = "";
     workingHoursAlt = "";
},
          {
     active = 0;
     address1 = "Souq Al Kout, Fahaheel";
     address1Ar = "";
     address2 = "";
     address2Ar = "";
     alerttxt = "";
     allowOnlineVoucherValidation = 0;
     allowPrintAtHomeBookings = 0;
     appImageUrl = "";
     appThumbImageUrl = "";
     city = "";
     currencyCode = "";
     description = "";
     descriptionAlt = "";
     displaySofaSeats = 0;
     emailAddress = "";
     experiences =          (
     );
     exps =           (
     );
     food = 0;
        foodEnable = 0;
        foodEndTime = "<null>";
        foodPrepare = 0;
        foodStartTime = "<null>";
        giftStore = 0;
        icon = "";
        id = 0000000016;
        latitude = 0;
        longitude = 0;
        loyaltyCode = "<null>";
        name = "1954 Film House";
     nameAlt = "\U0633\U064a\U0646\U0633\U0643\U064a\U0628
\U0644\U064a\U0644\U0649";
        parkingInfo = "<null>";
        phoneNumber = "";
        priority = 99;
        timeZoneId = "<null>";
        webImageUrl = "";
        webThumbImageUrl = "";
        workingHours = "";
        workingHoursAlt = "";
   },
          {
        active = 0;
        address1 = "";
        address1Ar = "";
address2 = "";
address2Ar = "";
alerttxt = "";
allowOnlineVoucherValidation = 0;
allowPrintAtHomeBookings = 0;
appImageUrl = "";
appThumbImageUrl = "";
city = "";
currencyCode = "";
description = "";
descriptionAlt = "";
displaySofaSeats = 0;
emailAddress = "";
experiences =          (
);
exps =           (
);
food = 0;
foodEnable = 0;
foodEndTime = "<null>";
foodPrepare = 0;
foodStartTime = "<null>";
giftStore = 0;
icon = "";
id = 0000000023;
latitude = 0;
        longitude = 0;
        loyaltyCode = "<null>";
        name = "Cinescape Marina";
     nameAlt = "\U0633\U064a\U0646\U0633\U0643\U064a\U0628
\U0627\U0644\U0645\U0631\U064a\U0646\U0627";
        parkingInfo = "<null>";
        phoneNumber = "";
        priority = 99;
        timeZoneId = "<null>";
        webImageUrl = "";
        webThumbImageUrl = "";
        workingHours = "";
        workingHoursAlt = "";
   },
          {
        active = 0;
        address1 = "";
        address1Ar = "";
        address2 = "";
        address2Ar = "";
        alerttxt = "";
        allowOnlineVoucherValidation = 0;
        allowPrintAtHomeBookings = 0;
        appImageUrl = "";
        appThumbImageUrl = "";
        city = "";
    currencyCode = "";
    description = "";
    descriptionAlt = "";
    displaySofaSeats = 0;
    emailAddress = "";
    experiences =          (
    );
    exps =           (
    );
    food = 0;
    foodEnable = 0;
    foodEndTime = "<null>";
    foodPrepare = 0;
    foodStartTime = "<null>";
    giftStore = 0;
    icon = "";
    id = 0000000020;
    latitude = 0;
    longitude = 0;
    loyaltyCode = "<null>";
    name = "Cinescape Al-Muhallab";
     nameAlt = "\U0633\U064a\U0646\U0633\U0643\U064a\U0628
\U0627\U0644\U0645\U0647\U0644\U0628";
    parkingInfo = "<null>";
    phoneNumber = "";
    priority = 99;
          timeZoneId = "<null>";
          webImageUrl = "";
      webThumbImageUrl =
"https://cdn.uat.cinescape.com.kw/cinema/web_small/0000000020.jpg?v=881";
          workingHours = "";
          workingHoursAlt = "";
      }
 );
 comingsoon =          (
 );
 cslanguages =         (
 );
  experienceIconUrl = "https://s3.eu-west-
1.amazonaws.com/cinescape.uat/experience/$NAME$.png?v=13";
 experiences =         (
      STANDARD,
      VIP,
      IMAX,
      4DX,
      3D,
      DOLBY,
      ELEVEN,
      SCREENX,
      SKYLINE
 );
 genreList =       (
      " Family",
     Action,
     " Thriller",
     " Romance",
     Adventure,
     Horror,
     " War",
     " Drama",
     " Action",
     " Adventure",
     " Comedy",
     Drama,
     Thriller,
     Crime,
     Biography,
     Animation,
     Comedy,
     Mystery,
     " Horror"
);
lastChance =        (
);
movieTimings =          (
         {
       id = 1;
       name = Morning;
       nameAlt = "\U0635\U0628\U0627\U062d";
     timing = "11:00 - 12:00";
     timingAlt = "";
},
       {
     id = 2;
     name = "After Noon";
     nameAlt = "\U0628\U0639\U062f \U0627\U0644\U0638\U0647\U0631";
     timing = "12:00 - 17:00";
     timingAlt = "";
},
       {
     id = 3;
     name = Evening;
     nameAlt = "\U0627\U062e\U0631 \U0627\U0644\U0646\U0647\U0627\U0631";
     timing = "17:00 - 20:00";
     timingAlt = "";
},
       {
     id = 4;
     name = Night;
     nameAlt = "\U0644\U064a\U0644";
     timing = "20:00 - 23:00";
     timingAlt = "";
},
       {
     id = 5;
         name = "Late Night";
         nameAlt = "\U0645\U062a\U0623\U062e\U0631 \U0644\U064a\U0644";
         timing = "23:00 - 06:00";
         timingAlt = "";
     }
);
nowshowing =              (
           {
         cast =           (
                      {
                firstName = "Kate ";
                firstNameAlt = "<null>";
                id = 0000000753;
                lastName = Winslet;
                lastNameAlt = "<null>";
                personType = Actor;
                urlToDetails = "";
                urlToPicture = "https://cdn.uat.cinescape.com.kw/actor/0000000753.jpg";
           },
                      {
                firstName = "Andy ";
                firstNameAlt = "<null>";
                id = 0000001637;
                lastName = Samberg;
                lastNameAlt = "<null>";
                personType = Actor;
              urlToDetails = "";
              urlToPicture = "";
          }
     );
     comingSoon = 0;
     director =           {
          firstName = Elan;
          firstNameAlt = "<null>";
          id = 0000004791;
          lastName = Kurras;
          lastNameAlt = "<null>";
          personType = Director;
          urlToDetails = "";
          urlToPicture = "";
     };
     distributorName = "IFD Front Row";
     genre = "Biography, Drama, War";
     genreAlt = "null, null";
     hOFilmCode = A000002664;
     id = HO00002440;
     language = English;
     languageAlt = "\U0625\U0646\U062c\U0644\U064a\U0632\U064a";
      mobadvance =
"https://cdn.uat.cinescape.com.kw/movies/mob_advance/HO00002440_059.jpg";
      mobimgbig =
"https://cdn.uat.cinescape.com.kw/movies/mob_big/HO00002440_237.jpg";
      mobimgsmall =
"https://cdn.uat.cinescape.com.kw/movies/mob_small/HO00002440_957.jpg";
     movieCinemas =         (
          0000000001,
          0000000008
     );
     movieExperience =          (
          VIP,
          Standard
     );
     movieTimings =         (
          2,
          3,
          4,
          5
     );
     openingDate = "12 Sep 2024";
     producer = "<null>";
     rating = R18;
     ratingColor = "#EC2027";
     ratingDescription = "Adults - Only viewers of age 18 and above are allowed entry.";
     ratingDescriptionAlt = "\U064a\U0633\U0645\U062d
\U0628\U062f\U062e\U0648\U0644 \U0645\U0646 \U0647\U0645 \U0641\U064a
\U0633\U0646 18 \U0641\U0645\U0627 \U0641\U0648\U0642
\U0641\U0642\U0637.";
     ratingImageBig = "https://cdn.cinescape.com.kw/ratingImages/l-r18.png";
     runTime = 117;
     runTimeStr = "1 hr 57 min";
     scheduledAtCinema = 1;
     shareUrl = "https://cinescapeweb.wemonde.co/movie-details/Lee/HO00002440";
     sliderimgurl = "#825e44";
     subTitle = Arabic;
     subTitleAlt = "\U0639\U0631\U0628\U064a";
     synopsis = "The story of American photographer Lee Miller, a fashion model who
became an acclaimed war correspondent for Vogue magazine during World War II.";
     synopsisAlt = "\U0642\U0635\U0629 \U0627\U0644\U0635\U0648\U0631
\U0627\U0644\U0645\U0631\U064a\U0643\U064a \U0644\U064a
\U0645\U064a\U0644\U0631\U060c \U0639\U0627\U0631\U0636\U0629
\U0627\U0644\U0632\U064a\U0627\U0621 \U0627\U0644\U062a\U064a
\U0623\U0635\U0628\U062d\U062a \U0645\U0631\U0627\U0633\U0644\U0629
\U062d\U0631\U0628 \U0645\U0634\U0647\U0648\U0631\U0629
\U0644\U062c\U0644\U0629
\n\U0641\U0648\U063a \U062e\U0644\U0644 \U0627\U0644\U062d\U0631\U0628
\U0627\U0644\U0639\U0627\U0644\U064a\U0629
\U0627\U0644\U062b\U0627\U0646\U064a\U0629.
";
     tag = NEW;
     tagAr = "\U062c\U062f\U064a\U062f";
     tagColor = "#E12329";
     title = Lee;
     titleAlt = "\U0644\U064a";
     trailerUrl = "https://cdn.cinescape.com.kw/offer/Dirty-Angels.mp4";
      webadvance =
"https://cdn.uat.cinescape.com.kw/movies/web_advance/HO00002440_851.jpg";
      webadvance2 =
"https://cdn.uat.cinescape.com.kw/movies/web_advance2/HO00002440_242.jpg";
      webadvance3 =
"https://cdn.uat.cinescape.com.kw/movies/web_advance3/HO00002440_060.jpg";
      webimgbig =
"https://cdn.uat.cinescape.com.kw/movies/web_big/HO00002440_207.jpg";
      webimgsmall =
"https://cdn.uat.cinescape.com.kw/movies/web_small/HO00002440_613.jpg";
   },
          {
        cast =           (
                     {
               firstName = "Stefano ";
               firstNameAlt = "<null>";
               id = 0000004713;
               lastName = Mordini;
               lastNameAlt = "<null>";
               personType = Director;
               urlToDetails = "";
               urlToPicture = "";
          },
                     {
               firstName = "Katie ";
               firstNameAlt = "<null>";
               id = 0000004714;
               lastName = "Clarkson-Hill";
               lastNameAlt = "<null>";
               personType = Actor;
               urlToDetails = "";
               urlToPicture = "";
          }
     );
     comingSoon = 0;
     director =          {
          firstName = "Singer ";
          firstNameAlt = "<null>";
          id = 0000004712;
          lastName = Amina;
          lastNameAlt = "<null>";
          personType = Actor;
          urlToDetails = "";
          urlToPicture = "";
     };
     distributorName = "IFD - Arabic";
     genre = Horror;
     genreAlt = "<null>";
     hOFilmCode = A000002597;
     id = HO00002382;
     language = Arabic;
     languageAlt = "\U0639\U0631\U0628\U064a";
      mobadvance =
"https://cdn.uat.cinescape.com.kw/movies/mob_advance/HO00002382_532.jpg";
      mobimgbig =
"https://cdn.uat.cinescape.com.kw/movies/mob_big/HO00002382_474.jpg";
      mobimgsmall =
"https://cdn.uat.cinescape.com.kw/movies/mob_small/HO00002382_449.jpg";
     movieCinemas =             (
          0000000001
      );
      movieExperience =             (
           Standard
      );
      movieTimings =            (
           2,
           3,
           4,
           5
      );
      openingDate = "12 Sep 2024";
      producer = "<null>";
      rating = R15;
      ratingColor = "#d55873";
      ratingDescription = "";
      ratingDescriptionAlt = "";
      ratingImageBig = "https://cdn.cinescape.com.kw/ratingImages/l-r15.png";
      runTime = 137;
      runTimeStr = "2 hr 17 min";
      scheduledAtCinema = 1;
      shareUrl = "https://cinescapeweb.wemonde.co/movie-details/Akh-(Kuwaiti)---
Arabic/HO00002382";
      sliderimgurl = "#d4d3d3";
      subTitle = English;
      subTitleAlt = "\U0625\U0646\U062c\U0644\U064a\U0632\U064a";
      synopsis = "Feeling drained of life and purpose, Shihab plans a desert camping trip to
rid himself of his dependent, wheelchair-bound brother Suhail. Upon arrival, a chain of
events is set in motion where ugly truths come to light, exposing the dark side of the
brotherly bond that has plagued humanity since Caine and Abel.";
     synopsisAlt = "\U064a\U0634\U0639\U0631 (\U0634\U0647\U0627\U0628)
\U0628\U0627\U0633\U062a\U0646\U0632\U0627\U0641
\U0627\U0644\U062d\U064a\U0627\U0629
\U0648\U0627\U0644\U063a\U0631\U0636\U060c
\U0648\U064a\U062e\U0637\U0637 \U0644\U0631\U062d\U0644\U0629
\U062a\U062e\U064a\U064a\U0645
\U0635\U062d\U0631\U0627\U0648\U064a\U0629
\U0644\U062a\U062e\U0644\U064a\U0635 \U0646\U0641\U0633\U0647
\U0645\U0646 \U0634\U0642\U064a\U0642\U0647
\U0627\U0644\U0645\U0639\U0627\U0644 \U0639\U0644\U0649
\U0643\U0631\U0633\U064a \U0645\U062a\U062d\U0631\U0643
(\U0633\U0647\U064a\U0644). \U0639\U0646\U062f
\U0627\U0644\U0648\U0635\U0648\U0644\U060c \U064a\U062a\U0645
\U062a\U062d\U0631\U064a\U0643 \U0633\U0644\U0633\U0644\U0629
\U0645\U0646 \U0627\U0644\U0623\U062d\U062f\U0627\U062b
\U062d\U064a\U062b \U062a\U0638\U0647\U0631
\U0627\U0644\U062d\U0642\U0627\U0626\U0642
\U0627\U0644\U0642\U0628\U064a\U062d\U0629\U060c \U0645\U0645\U0627
\U064a\U0643\U0634\U0641 \U0627\U0644\U062c\U0627\U0646\U0628
\U0627\U0644\U0645\U0638\U0644\U0645 \U0645\U0646
\U0627\U0644\U0631\U0627\U0628\U0637\U0629
\U0627\U0644\U0623\U062e\U0648\U064a\U0629 \U0627\U0644\U062a\U064a
\U0627\U0628\U062a\U0644\U064a\U062a \U0628\U0647\U0627
\U0627\U0644\U0628\U0634\U0631\U064a\U0629 \U0645\U0646\U0630
\U0642\U0627\U0628\U064a\U0644 ";
      tag = NEW;
      tagAr = "\U062c\U062f\U064a\U062f";
      tagColor = "#E12329";
      title = "Akh (Kuwaiti) - Arabic ";
      titleAlt = "\U0627\U062e (\U0643\U0648\U064a\U062a\U064a) ";
      trailerUrl = "https://youtu.be/KjelS2ofY1Q";
      webadvance =
"https://cdn.uat.cinescape.com.kw/movies/web_advance/HO00002382_049.jpg";
      webadvance2 =
"https://cdn.uat.cinescape.com.kw/movies/web_advance2/HO00002382_788.jpg";
      webadvance3 =
"https://cdn.uat.cinescape.com.kw/movies/web_advance3/HO00002382_029.jpg";
      webimgbig =
"https://cdn.uat.cinescape.com.kw/movies/web_big/HO00002382_030.jpg";
      webimgsmall =
"https://cdn.uat.cinescape.com.kw/movies/web_small/HO00002382_315.jpg";
   },
          {
        cast =           (
                     {
               firstName = "Megan ";
               firstNameAlt = "<null>";
               id = 0000003474;
               lastName = Fox;
               lastNameAlt = "<null>";
               personType = Actor;
               urlToDetails = "";
               urlToPicture = "";
          },
                     {
               firstName = Michelle;
               firstNameAlt = "<null>";
               id = 0000004790;
               lastName = Morone;
               lastNameAlt = "<null>";
               personType = Actor;
               urlToDetails = "";
              urlToPicture = "";
          }
     );
     comingSoon = 0;
     director =           {
          firstName = "S K ";
          firstNameAlt = "<null>";
          id = 0000004789;
          lastName = Dale;
          lastNameAlt = "<null>";
          personType = Director;
          urlToDetails = "";
          urlToPicture = "";
     };
     distributorName = "Eagle Film";
     genre = Thriller;
     genreAlt = "<null>";
     hOFilmCode = A000002663;
     id = HO00002439;
     language = English;
     languageAlt = "\U0625\U0646\U062c\U0644\U064a\U0632\U064a";
      mobadvance =
"https://cdn.uat.cinescape.com.kw/movies/mob_advance/HO00002439_198.jpg";
      mobimgbig =
"https://cdn.uat.cinescape.com.kw/movies/mob_big/HO00002439_949.jpg";
      mobimgsmall =
"https://cdn.uat.cinescape.com.kw/movies/mob_small/HO00002439_837.jpg";
     movieCinemas =            (
          0000000001,
          0000000008
     );
     movieExperience =             (
          VIP,
          Standard
     );
     movieTimings =            (
          5,
          2,
          3
     );
     openingDate = "12 Sep 2024";
     producer = "<null>";
     rating = PG12;
     ratingColor = "#f78c1e";
     ratingDescription = "";
     ratingDescriptionAlt = "";
     ratingImageBig = "https://cdn.cinescape.com.kw/ratingImages/l-pg12.png";
     runTime = 106;
     runTimeStr = "1 hr 46 min";
     scheduledAtCinema = 1;
      shareUrl = "https://cinescapeweb.wemonde.co/movie-
details/Subservience/HO00002439";
     sliderimgurl = "#9d2207";
      subTitle = Arabic;
      subTitleAlt = "\U0639\U0631\U0628\U064a";
       synopsis = "A lifelike artificially intelligent android, who has the ability to take care of
any family and home. Looking for help with the housework, a struggling father purchases
Alice after his wife becomes sick. Alice suddenly becomes self-aware and wants everything
her new family has to offer, starting with the affection of her owner -- and she'll kill to get
it.";
     synopsisAlt = "\U0631\U0648\U0628\U0648\U062a
\U0646\U0627\U0628\U0636 \U0628\U0627\U0644\U062d\U064a\U0627\U0629
\U064a\U062a\U0645\U062a\U0639
\U0628\U0627\U0644\U0630\U0643\U0627\U0621
\U0627\U0644\U0627\U0635\U0637\U0646\U0627\U0639\U064a\U060c
\U0648\U0644\U062f\U064a\U0647 \U0627\U0644\U0642\U062f\U0631\U0629
\U0639\U0644\U0649 \U0631\U0639\U0627\U064a\U0629 \U0623\U064a
\U0639\U0627\U0626\U0644\U0629 \U0648\U0645\U0646\U0632\U0644.
\U0628\U062d\U062b\U064b\U0627 \U0639\U0646
\U0645\U0633\U0627\U0639\U062f\U0629 \U0641\U064a
\U0627\U0644\U0623\U0639\U0645\U0627\U0644
\U0627\U0644\U0645\U0646\U0632\U0644\U064a\U0629\U060c
\U064a\U0634\U062a\U0631\U064a \U0627\U0644\U0623\U0628
\U0627\U0644\U0645\U0643\U0627\U0641\U062d \U0623\U0644\U064a\U0633
\U0628\U0639\U062f \U0623\U0646 \U0645\U0631\U0636\U062a
\U0632\U0648\U062c\U062a\U0647. \U062a\U0635\U0628\U062d
\"\U0623\U0644\U064a\U0633\" \U0641\U062c\U0623\U0629
\U0648\U0627\U0639\U064a\U0629 \U0628\U0630\U0627\U062a\U0647\U0627
\U0648\U062a\U0631\U064a\U062f \U0643\U0644 \U0645\U0627
\U062a\U0642\U062f\U0645\U0647
\U0639\U0627\U0626\U0644\U062a\U0647\U0627
\U0627\U0644\U062c\U062f\U064a\U062f\U0629\U060c
\U0628\U062f\U0621\U064b\U0627 \U0645\U0646
\U0639\U0627\U0637\U0641\U0629 \U0645\U0627\U0644\U0643\U0647\U0627 -
\U0648\U0633\U062a";
      tag = NEW;
      tagAr = "\U062c\U062f\U064a\U062f";
      tagColor = "#E12329";
      title = Subservience;
      titleAlt = "\U0633\U0628\U0633\U064a\U0631\U0641\U064a\U0646\U0633";
        trailerUrl = "https://youtu.be/6DWTElLWkLQ";
      webadvance =
"https://cdn.uat.cinescape.com.kw/movies/web_advance/HO00002439_250.jpg";
      webadvance2 =
"https://cdn.uat.cinescape.com.kw/movies/web_advance2/HO00002439_218.jpg";
      webadvance3 =
"https://cdn.uat.cinescape.com.kw/movies/web_advance3/HO00002439_396.jpg";
      webimgbig =
"https://cdn.uat.cinescape.com.kw/movies/web_big/HO00002439_103.jpg";
      webimgsmall =
"https://cdn.uat.cinescape.com.kw/movies/web_small/HO00002439_810.jpg";
   },
          {
        cast =           (
                     {
               firstName = "Hesham ";
               firstNameAlt = "<null>";
               id = 0000001639;
               lastName = Maged;
               lastNameAlt = "<null>";
               personType = Actor;
               urlToDetails = "";
               urlToPicture = "";
          },
                     {
               firstName = "Amina ";
               firstNameAlt = "<null>";
               id = 0000001793;
         lastName = Khalil;
         lastNameAlt = "<null>";
         personType = Actor;
         urlToDetails = "";
         urlToPicture = "";
     }
);
comingSoon = 0;
director =           {
     firstName = Moataz;
     firstNameAlt = "<null>";
     id = 0000004300;
     lastName = "El Tony";
     lastNameAlt = "<null>";
     personType = Director;
     urlToDetails = "";
     urlToPicture = "";
};
distributorName = "IFD - Arabic";
genre = Comedy;
genreAlt = "<null>";
hOFilmCode = A000002627;
id = HO00002407;
language = Arabic;
languageAlt = "\U0639\U0631\U0628\U064a";
      mobadvance =
"https://cdn.uat.cinescape.com.kw/movies/mob_advance/HO00002407_044.jpg";
      mobimgbig =
"https://cdn.uat.cinescape.com.kw/movies/mob_big/HO00002407_610.jpg";
      mobimgsmall =
"https://cdn.uat.cinescape.com.kw/movies/mob_small/HO00002407_456.jpg";
     movieCinemas =            (
          0000000001,
          0000000008
     );
     movieExperience =             (
          Standard
     );
     movieTimings =            (
          2,
          3,
          4,
          5
     );
     openingDate = "01 Aug 2024";
     producer = "<null>";
     rating = R15;
     ratingColor = "#d55873";
     ratingDescription = "";
     ratingDescriptionAlt = "";
     ratingImageBig = "https://cdn.cinescape.com.kw/ratingImages/l-r15.png";
     runTime = 113;
      runTimeStr = "1 hr 53 min";
      scheduledAtCinema = 1;
      shareUrl = "https://cinescapeweb.wemonde.co/movie-details/Ex-Merati-(Egyptian)-
--Arabic/HO00002407";
      sliderimgurl = "#de3a77";
      subTitle = None;
      subTitleAlt = None;
      synopsis = "Released early from prison, vengeful ex-convict Taha discovers his wife's
betrayal and plots revenge against her and her new husband, unaware it's his psychiatrist.";
     synopsisAlt = "\U0628\U0639\U062f \U0627\U0637\U0644\U0627\U0642
\U0633\U0631\U0627\U062d\U06be \U0645\U0628\U0643\U0631\U0627
\U0645\U0646 \U0627\U0644\U0633\U062c\U0646\U060c
\U06cc\U0643\U062a\U0634\U0641 \U0627\U0644\U0645\U062f\U0627\U0646
\U0627\U0644\U0633\U0627\U0628\U0642
\U0627\U0644\U0627\U0646\U062a\U0642\U0627\U0645\U064a \U0637\U06be
\U062e\U06cc\U0627\U0646\U0629 \U0632\U0648\U062c\U062a\U06be
\U0648\U06cc\U062e\U0637\U0637
\U0644\U0644\U0627\U0646\U062a\U0642\U0627\U0645
\n\U0645\U0646\U06be\U0627 \U0648\U0645\U0646
\U0632\U0648\U062c\U06be\U0627
\U0627\U0644\U062c\U062f\U06cc\U062f\U060c \U063a\U06cc\U0631
\U0645\U062f\U0631\U0643 \U0623\U0646\U06be
\U0637\U0628\U06cc\U0628\U06be \U0627\U0644\U0646\U0641\U0633\U064a.";
      tag = "";
      tagAr = "<null>";
      tagColor = "<null>";
      title = "Ex Merati (Egyptian) - Arabic";
     titleAlt = "\U0627\U0643\U0633 \U0645\U0631\U0627\U062a\U064a
(\U0645\U0635\U0631\U064a) - \U0639\U0631\U0628\U064a";
      trailerUrl = "https://youtu.be/FcYqLdfCDRg?si=T-9j-GGbRMI4hvML";
      webadvance =
"https://cdn.uat.cinescape.com.kw/movies/web_advance/HO00002407_977.jpg";
      webadvance2 =
"https://cdn.uat.cinescape.com.kw/movies/web_advance2/HO00002407_861.jpg";
      webadvance3 =
"https://cdn.uat.cinescape.com.kw/movies/web_advance3/HO00002407_527.jpg";
      webimgbig =
"https://cdn.uat.cinescape.com.kw/movies/web_big/HO00002407_686.jpg";
      webimgsmall =
"https://cdn.uat.cinescape.com.kw/movies/web_small/HO00002407_669.jpg";
   },
          {
        cast =           (
                     {
               firstName = Don;
               firstNameAlt = "<null>";
               id = 0000004202;
               lastName = Johnson;
               lastNameAlt = "<null>";
               personType = Actor;
               urlToDetails = "";
               urlToPicture = "";
          },
                     {
               firstName = Issabelle;
               firstNameAlt = "<null>";
               id = 0000004788;
               lastName = Fuhrman;
               lastNameAlt = "<null>";
               personType = Actor;
              urlToDetails = "";
              urlToPicture = "";
          }
     );
     comingSoon = 0;
     director =           {
          firstName = "Andy ";
          firstNameAlt = "<null>";
          id = 0000004787;
          lastName = Tennant;
          lastNameAlt = "<null>";
          personType = Director;
          urlToDetails = "";
          urlToPicture = "";
     };
     distributorName = "Falcon Film";
     genre = Thriller;
     genreAlt = "<null>";
     hOFilmCode = A000002662;
     id = HO00002438;
     language = English;
     languageAlt = "\U0625\U0646\U062c\U0644\U064a\U0632\U064a";
      mobadvance =
"https://cdn.uat.cinescape.com.kw/movies/mob_advance/HO00002438_833.jpg";
      mobimgbig =
"https://cdn.uat.cinescape.com.kw/movies/mob_big/HO00002438_422.jpg";
      mobimgsmall =
"https://cdn.uat.cinescape.com.kw/movies/mob_small/HO00002438_769.jpg";
     movieCinemas =            (
          0000000001,
          0000000008
     );
     movieExperience =             (
          Standard
     );
     movieTimings =            (
          1,
          2,
          4,
          5
     );
     openingDate = "12 Sep 2024";
     producer = "<null>";
     rating = G;
     ratingColor = "#00af6d";
     ratingDescription = "";
     ratingDescriptionAlt = "";
     ratingImageBig = "https://cdn.cinescape.com.kw/ratingImages/l-g.png";
     runTime = 86;
     runTimeStr = "1 hr 26 min";
     scheduledAtCinema = 1;
     shareUrl = "https://cinescapeweb.wemonde.co/movie-details/Unit-
234/HO00002438";
         sliderimgurl = "#4c6b6d";
         subTitle = ":Arabic";
         subTitleAlt = ":Arabic";
      synopsis = "A lone employee at a remote storage facility must fight for survival
against a ruthless gang after a shocking discovery.";
     synopsisAlt = "\U064a\U062c\U0628 \U0639\U0644\U0649
\U0627\U0644\U0648\U0638\U0641 \U0627\U0644\U0648\U062d\U064a\U062f
\U0641\U064a \U0645\U0646\U0634\U0623\U0629
\U062a\U062e\U0632\U064a\U0646 \U0639\U0646 \U0628\U0639\U062f
\U0627\U0644\U0643\U0641\U0627\U062d \U0645\U0646 \U0623\U062c\U0644
\U0627\U0644\U0628\U0642\U0627\U0621 \U0639\U0644\U0649
\U0642\U064a\U062f \U0627\U0644\U062d\U064a\U0627\U0629 \U0636\U062f
\n.\U0639\U0635\U0627\U0628\U0629 \U0644 \U062a\U0631\U062d\U0645
\U0628\U0639\U062f \U0627\U0643\U062a\U0634\U0627\U0641
\U0635\U0627\U062f\U0645";
         tag = NEW;
         tagAr = "\U062c\U062f\U064a\U062f";
         tagColor = "#E12329";
         title = "Unit 234";
         titleAlt = "\U0662\U0663\U0664 \U064a\U0648\U0646\U062a";
         trailerUrl = "https://youtu.be/lRm8x6_4te4";
      webadvance =
"https://cdn.uat.cinescape.com.kw/movies/web_advance/HO00002438_824.jpg";
      webadvance2 =
"https://cdn.uat.cinescape.com.kw/movies/web_advance2/HO00002438_417.jpg";
      webadvance3 =
"https://cdn.uat.cinescape.com.kw/movies/web_advance3/HO00002438_877.jpg";
      webimgbig =
"https://cdn.uat.cinescape.com.kw/movies/web_big/HO00002438_208.jpg";
      webimgsmall =
"https://cdn.uat.cinescape.com.kw/movies/web_small/HO00002438_906.jpg";
    },
     {
cast =              (
                {
          firstName = "Wyatt ";
          firstNameAlt = "<null>";
          id = 0000002466;
          lastName = Bowen;
          lastNameAlt = "<null>";
          personType = Actor;
          urlToDetails = "";
          urlToPicture = "";
     },
                {
          firstName = Mark;
          firstNameAlt = "<null>";
          id = 0000004793;
          lastName = Camacho;
          lastNameAlt = "<null>";
          personType = Actor;
          urlToDetails = "";
          urlToPicture = "";
     }
);
comingSoon = 0;
director =              {
     firstName = David;
          firstNameAlt = "<null>";
          id = 0000004792;
          lastName = Alaux;
          lastNameAlt = "<null>";
          personType = Director;
          urlToDetails = "";
          urlToPicture = "";
     };
     distributorName = "Grand Ent. LLC ";
     genre = "Animation, Adventure";
     genreAlt = "<null>";
     hOFilmCode = A000002666;
     id = HO00002442;
     language = English;
     languageAlt = "\U0625\U0646\U062c\U0644\U064a\U0632\U064a";
      mobadvance =
"https://cdn.uat.cinescape.com.kw/movies/mob_advance/HO00002442_705.jpg";
      mobimgbig =
"https://cdn.uat.cinescape.com.kw/movies/mob_big/HO00002442_377.jpg";
      mobimgsmall =
"https://cdn.uat.cinescape.com.kw/movies/mob_small/HO00002442_681.jpg";
     movieCinemas =            (
          0000000001,
          0000000008
     );
     movieExperience =              (
          Standard
     );
     movieTimings =         (
          1,
          2,
          3
     );
     openingDate = "12 Sep 2024";
     producer = "<null>";
     rating = PG;
     ratingColor = "#f9c611";
     ratingDescription = "Parental Guidance - Ages below 13 are required to be
accompanied by a parent or an adult of age 18 and above.";
     ratingDescriptionAlt = "\U0645\U0631\U0627\U0642\U0628\U0629
\U0648\U0644\U064a \U0623\U0645\U0631 - \U064a\U0633\U0645\U062d
\U0628\U062f\U062e\U0648\U0644 \U0643\U0627\U0641\U0629
\U0627\U0644\U0623\U0639\U0645\U0627\U0631\U060c
\U0648\U064a\U0634\U062a\U0631\U0637 \U0644\U0645\U0646 \U0647\U0645
\U0641\U064a \U0633\U0646 \U0623\U0642\U0644 \U0645\U0646 13
\U0645\U0631\U0627\U0641\U0642\U0629 \U0648\U0644\U064a
\U0623\U0645\U0631 \U0623\U0648 \U0634\U062e\U0635
\U0628\U0639\U0645\U0631 18 \U0641\U0645\U0627 \U0641\U0648\U0642.";
     ratingImageBig = "https://cdn.cinescape.com.kw/ratingImages/l-pg.png";
     runTime = 89;
     runTimeStr = "1 hr 29 min";
     scheduledAtCinema = 1;
     shareUrl = "https://cinescapeweb.wemonde.co/movie-details/The-Jungle-Bunch:-
World-Tour/HO00002442";
     sliderimgurl = "#f2aec7";
     subTitle = Arabic;
     subTitleAlt = "\U0639\U0631\U0628\U064a";
      synopsis = "When a mysterious Super-Villain covers the jungle with a toxic pink foam
that explodes on contact with water, the Jungle Bunch is called to the rescue. With less than
a month before the rainy season, the race is on.";
     synopsisAlt = "\U0639\U0646\U062f\U0645\U0627 \U064a\U063a\U0637\U064a
\U0627\U0644\U0634\U0631\U064a\U0631 \U062e\U0627\U0631\U0642
\U0648\U0627\U0644\U063a\U0627\U0645\U0636
\U0627\U0644\U063a\U0627\U0628\U0629 \U0628\U0631\U063a\U0648\U0629
\U0648\U0631\U062f\U064a\U0629 \U0633\U0627\U0645\U0629
\U062a\U0646\U0641\U062c\U0631 \U0639\U0646\U062f
\U0645\U0644\U0627\U0645\U0633\U0629
\U0627\U0644\U0645\U0627\U0621\U060c \U064a\U062a\U0645
\U0627\U0633\U062a\U062f\U0639\U0627\U0621
\U0645\U062c\U0645\U0648\U0639\U0629
\U0627\U0644\U0623\U062f\U063a\U0627\U0644
\U0644\U0644\U0625\U0646\U0642\U0627\U0630. \U0645\U0639
\U0623\U0642\U0644 \U0645\U0646 \U0634\U0647\U0631 \U0642\U0628\U0644
\U0645\U0648\U0633\U0645 \U0627\U0644\U0623\U0645\U0637\U0627\U0631.";
         tag = NEW;
         tagAr = "\U062c\U062f\U064a\U062f";
         tagColor = "#E12329";
         title = "The Jungle Bunch: World Tour";
     titleAlt = "\U0630\U0627 \U064a\U0646\U0642\U0644 \U0628\U0646\U062c:
\U0648\U0648\U0631\U0644\U062f \U062a\U0648\U0631 ";
         trailerUrl = "https://youtu.be/lZaUO5yQJ80";
      webadvance =
"https://cdn.uat.cinescape.com.kw/movies/web_advance/HO00002442_965.jpg";
      webadvance2 =
"https://cdn.uat.cinescape.com.kw/movies/web_advance2/HO00002442_609.jpg";
      webadvance3 =
"https://cdn.uat.cinescape.com.kw/movies/web_advance3/HO00002442_500.jpg";
      webimgbig =
"https://cdn.uat.cinescape.com.kw/movies/web_big/HO00002442_018.jpg";
      webimgsmall =
"https://cdn.uat.cinescape.com.kw/movies/web_small/HO00002442_983.jpg";
    },
     {
cast =              (
                {
          firstName = "Antonio ";
          firstNameAlt = "<null>";
          id = 0000000350;
          lastName = Banderas;
          lastNameAlt = "<null>";
          personType = Actor;
          urlToDetails = "";
          urlToPicture = "";
     },
                {
          firstName = "Jonathan ";
          firstNameAlt = "<null>";
          id = 0000000576;
          lastName = "Rhys Meyers";
          lastNameAlt = "<null>";
          personType = Actor;
          urlToDetails = "";
          urlToPicture = "";
     }
);
comingSoon = 0;
director =              {
     firstName = Thomas;
          firstNameAlt = "<null>";
          id = 0000004675;
          lastName = Vincent;
          lastNameAlt = "<null>";
          personType = Director;
          urlToDetails = "";
          urlToPicture = "";
     };
     distributorName = "Phars Film";
     genre = "Action, Thriller";
     genreAlt = "\U0623\U0643\U0634\U0646\U060c
\U0625\U062b\U0627\U0631\U0629";
     hOFilmCode = A000002665;
     id = HO00002441;
     language = English;
     languageAlt = "\U0625\U0646\U062c\U0644\U064a\U0632\U064a";
      mobadvance =
"https://cdn.uat.cinescape.com.kw/movies/mob_advance/HO00002441_487.jpg";
      mobimgbig =
"https://cdn.uat.cinescape.com.kw/movies/mob_big/HO00002441_732.jpg";
      mobimgsmall =
"https://cdn.uat.cinescape.com.kw/movies/mob_small/HO00002441_592.jpg";
     movieCinemas =             (
          0000000001,
          0000000008
     );
     movieExperience =              (
          VIP,
          Standard
     );
     movieTimings =            (
          1,
          2,
          3,
          5
     );
     openingDate = "12 Sep 2024";
     producer = "<null>";
     rating = PG12;
     ratingColor = "#f78c1e";
     ratingDescription = "";
     ratingDescriptionAlt = "";
     ratingImageBig = "https://cdn.cinescape.com.kw/ratingImages/l-pg12.png";
     runTime = 94;
     runTimeStr = "1 hr 34 min";
     scheduledAtCinema = 1;
     shareUrl = "https://cinescapeweb.wemonde.co/movie-details/The-Clean-Up-
Crew/HO00002441";
     sliderimgurl = "#f03c18";
     subTitle = Arabic;
     subTitleAlt = "\U0639\U0631\U0628\U064a";
     synopsis = "A crime scene cleanup crew stumbles upon a briefcase full of money and
becomes targets in a dangerous battle against criminals and corrupt officials.";
     synopsisAlt = "\U064a\U062a\U0639\U062b\U0631 \U0637\U0627\U0642\U0645
\U062a\U0646\U0638\U064a\U0641 \U0645\U0633\U0631\U062d
\U0627\U0644\U062c\U0631\U064a\U0645\U0629 \U0639\U0644\U0649
\U062d\U0642\U064a\U0628\U0629 \U0645\U0644\U064a\U0626\U0629
\U0628\U0627\U0644\U0627\U0644 \U0648\U064a\U0635\U0628\U062d
\U0623\U0647\U062f\U0627\U0641\U0627 \U0641\U064a
\U0645\U0639\U0631\U0643\U0629 \U062e\U0637\U064a\U0631\U0629
\U0636\U062f
\n.\U0627\U0644\U062c\U0631\U0645\U064a
\U0648\U0627\U0644\U0633\U0624\U0648\U0644\U064a
\U0627\U0644\U0641\U0627\U0633\U062f\U064a\U0646";
        tag = NEW;
        tagAr = "\U062c\U062f\U064a\U062f";
        tagColor = "#E12329";
        title = "The Clean Up Crew";
     titleAlt = "\U0630\U0627 \U0643\U0644\U064a \U0627\U0628
\U0643\U0631\U0648";
        trailerUrl = "https://youtu.be/be3AWYM3GH8";
      webadvance =
"https://cdn.uat.cinescape.com.kw/movies/web_advance/HO00002441_215.jpg";
      webadvance2 =
"https://cdn.uat.cinescape.com.kw/movies/web_advance2/HO00002441_996.jpg";
      webadvance3 =
"https://cdn.uat.cinescape.com.kw/movies/web_advance3/HO00002441_019.jpg";
      webimgbig =
"https://cdn.uat.cinescape.com.kw/movies/web_big/HO00002441_956.jpg";
      webimgsmall =
"https://cdn.uat.cinescape.com.kw/movies/web_small/HO00002441_227.jpg";
   },
          {
        cast =          (
                    {
              firstName = "Turlough ";
              firstNameAlt = "<null>";
          id = 0000004778;
          lastName = Convery;
          lastNameAlt = "<null>";
          personType = Actor;
          urlToDetails = "";
          urlToPicture = "";
     },
                {
          firstName = "Benny ";
          firstNameAlt = "<null>";
          id = 0000004779;
          lastName = "O. Arthur";
          lastNameAlt = "<null>";
          personType = Actor;
          urlToDetails = "";
          urlToPicture = "";
     }
);
comingSoon = 0;
director =            {
     firstName = "Francois ";
     firstNameAlt = "<null>";
     id = 0000004777;
     lastName = Simord;
     lastNameAlt = "<null>";
     personType = Director;
          urlToDetails = "";
          urlToPicture = "";
     };
     distributorName = "Italia Film";
     genre = "Action, Horror";
     genreAlt = "<null>";
     hOFilmCode = A000002655;
     id = HO00002432;
     language = English;
     languageAlt = "\U0625\U0646\U062c\U0644\U064a\U0632\U064a";
      mobadvance =
"https://cdn.uat.cinescape.com.kw/movies/mob_advance/HO00002432_995.jpg";
      mobimgbig =
"https://cdn.uat.cinescape.com.kw/movies/mob_big/HO00002432_025.jpg";
      mobimgsmall =
"https://cdn.uat.cinescape.com.kw/movies/mob_small/HO00002432_962.jpg";
     movieCinemas =            (
          0000000001,
          0000000008
     );
     movieExperience =             (
          Standard
     );
     movieTimings =            (
          4,
          5,
          2
      );
      openingDate = "05 Sep 2024";
      producer = "<null>";
      rating = G;
      ratingColor = "#00af6d";
      ratingDescription = "";
      ratingDescriptionAlt = "";
      ratingImageBig = "https://cdn.cinescape.com.kw/ratingImages/l-g.png";
      runTime = 80;
      runTimeStr = "1 hr 20 min";
      scheduledAtCinema = 1;
    shareUrl = "https://cinescapeweb.wemonde.co/movie-details/Wake-
Up/HO00002432";
      sliderimgurl = "#ba2631";
      subTitle = Arabic;
      subTitleAlt = "\U0639\U0631\U0628\U064a";
       synopsis = "In an attempt to draw attention to the environmental crisis, young
activists decide to invade and vandalize a furniture store. The protest quickly turns into a
massacre when they find themselves trapped with a hunting-obsessed night
\nguard. ";
     synopsisAlt = "\U0641\U064a \U0645\U062d\U0627\U0648\U0644\U0629
\U0644\U0644\U0641\U062a \U0627\U0644\U0646\U062a\U0628\U0627\U0647
\U0625\U0644\U0649 \U0627\U0644\U0632\U0645\U0629
\U0627\U0644\U0628\U064a\U0626\U064a\U0629\U060c
\U064a\U0642\U0631\U0631 \U0627\U0644\U0646\U0634\U0637\U0627\U0621
\U0627\U0644\U0634\U0628\U0627\U0628 \U063a\U0632\U0648
\U0645\U062a\U062c\U0631 \U0623\U062b\U0627\U062b
\U0648\U062a\U062e\U0631\U064a\U0628\U0647.
\U0633\U0631\U0639\U0627\U0646 \U0645\U0627
\n.\U064a\U062a\U062d\U0648\U0644
\U0627\U0644\U062d\U062a\U062c\U0627\U062c \U0625\U0644\U0649
\U0645\U0630\U0628\U062d\U0629 \U0639\U0646\U062f\U0645\U0627
\U064a\U062c\U062f\U0648\U0646 \U0623\U0646\U0641\U0633\U0647\U0645
\U0645\U062d\U0627\U0635\U0631\U064a\U0646 \U0645\U0639
\U062d\U0627\U0631\U0633 \U0644\U064a\U0644\U064a
\U0645\U0647\U0648\U0648\U0633 \U0628\U0627\U0644\U0635\U064a\U062f";
        tag = "";
        tagAr = "<null>";
        tagColor = "<null>";
        title = "Wake Up";
        titleAlt = " \U0648\U064a\U0643 \U0627\U0628";
        trailerUrl = "https://youtu.be/H5pptacusy4";
      webadvance =
"https://cdn.uat.cinescape.com.kw/movies/web_advance/HO00002432_878.jpg";
      webadvance2 =
"https://cdn.uat.cinescape.com.kw/movies/web_advance2/HO00002432_136.jpg";
      webadvance3 =
"https://cdn.uat.cinescape.com.kw/movies/web_advance3/HO00002432_807.jpg";
      webimgbig =
"https://cdn.uat.cinescape.com.kw/movies/web_big/HO00002432_238.jpg";
      webimgsmall =
"https://cdn.uat.cinescape.com.kw/movies/web_small/HO00002432_764.jpg";
   },
          {
        cast =          (
                    {
              firstName = "Susan ";
              firstNameAlt = "<null>";
              id = 0000001814;
              lastName = Sarandon;
          lastNameAlt = "<null>";
          personType = Actor;
          urlToDetails = "";
          urlToPicture = "";
     },
                {
          firstName = "Bill ";
          firstNameAlt = "<null>";
          id = 0000004243;
          lastName = Nighy;
          lastNameAlt = "<null>";
          personType = Actor;
          urlToDetails = "";
          urlToPicture = "";
     }
);
comingSoon = 0;
director =             {
     firstName = Kevin;
     firstNameAlt = "<null>";
     id = 0000004780;
     lastName = Donovan;
     lastNameAlt = "<null>";
     personType = Director;
     urlToDetails = "";
     urlToPicture = "";
     };
     distributorName = "Front Row";
     genre = "Animation, Comedy";
     genreAlt = "<null>";
     hOFilmCode = A000002656;
     id = HO00002433;
     language = English;
     languageAlt = "\U0625\U0646\U062c\U0644\U064a\U0632\U064a";
      mobadvance =
"https://cdn.uat.cinescape.com.kw/movies/mob_advance/HO00002433_203.jpg";
      mobimgbig =
"https://cdn.uat.cinescape.com.kw/movies/mob_big/HO00002433_379.jpg";
      mobimgsmall =
"https://cdn.uat.cinescape.com.kw/movies/mob_small/HO00002433_748.jpg";
     movieCinemas =         (
          0000000001
     );
     movieExperience =          (
          Standard
     );
     movieTimings =         (
          2,
          3
     );
     openingDate = "05 Sep 2024";
     producer = "<null>";
     rating = PG15;
      ratingColor = "#c16f29";
      ratingDescription = "";
      ratingDescriptionAlt = "";
      ratingImageBig = "https://cdn.cinescape.com.kw/ratingImages/l-pg15.png";
      runTime = 87;
      runTimeStr = "1 hr 27 min";
      scheduledAtCinema = 1;
      shareUrl = "https://cinescapeweb.wemonde.co/movie-details/Gracie-and-Pedro:-
Pets-to-the-Rescue/HO00002433";
      sliderimgurl = "#af7100";
      subTitle = Arabic;
      subTitleAlt = "\U0639\U0631\U0628\U064a";
      synopsis = "Pets Gracie and Pedro get separated from owners during move. They
journey facing challenges, aided by owners' viral song, encountering characters until
reunited with Sophie and Gavin, finding way home.";
     synopsisAlt = "\U064a\U062a\U0645 \U0641\U0635\U0644
\U0627\U0644\U062d\U064a\U0648\U0627\U0646\U0627\U062a
\U0627\U0644\U0644\U064a\U0641\U0629 \U0642\U0631\U064a\U0633\U064a
\U0648\U0628\U064a\U062f\U0631\U0648 \U0639\U0646
\U0627\U0644\U0627\U0644\U0643\U064a \U0623\U062b\U0646\U0627\U0621
\U0627\U0644\U0646\U062a\U0642\U0627\U0644. \U0625\U0646\U0647\U0645
\U064a\U0633\U0627\U0641\U0631\U0648\U0646
\U0644\U0648\U0627\U062c\U0647\U0629
\n\U0627\U0644\U062a\U062d\U062f\U064a\U0627\U062a\U060c
\U0628\U0645\U0633\U0627\U0639\U062f\U0629
\U0627\U0644\U063a\U0646\U064a\U0629
\U0627\U0644\U0641\U064a\U0631\U0648\U0633\U064a\U0629
\U0644\U0644\U0645\U0627\U0644\U0643\U064a\U060c
\U0648\U064a\U0648\U0627\U062c\U0647\U0648\U0646
\U0627\U0644\U0634\U062e\U0635\U064a\U0627\U062a \U062d\U062a\U0649
\U0644\U0645 \U0634\U0645\U0644\U0647\U0645 \U0645\U0639
\U0635\U0648\U0641\U064a
\n.\U0648\U063a\U0627\U0641\U0646\U060c
\U0648\U064a\U062c\U062f\U0648\U0646
\U0627\U0644\U0637\U0631\U064a\U0642 \U0625\U0644\U0649
\U0627\U0644\U0646\U0632\U0644";
        tag = "";
        tagAr = "<null>";
        tagColor = "<null>";
        title = "Gracie and Pedro: Pets to the Rescue";
     titleAlt = "\U0642\U0631\U064a\U0633\U064a \U0627\U0646\U062f
\U0628\U064a\U062f\U0631\U0648: \U0628\U062a\U0633 \U062a\U0648
\U0630\U0627 \U0631\U0633\U0643\U064a\U0648";
        trailerUrl = "https://youtu.be/s1rM2zLQ2xg";
      webadvance =
"https://cdn.uat.cinescape.com.kw/movies/web_advance/HO00002433_642.jpg";
      webadvance2 =
"https://cdn.uat.cinescape.com.kw/movies/web_advance2/HO00002433_407.jpg";
      webadvance3 =
"https://cdn.uat.cinescape.com.kw/movies/web_advance3/HO00002433_207.jpg";
      webimgbig =
"https://cdn.uat.cinescape.com.kw/movies/web_big/HO00002433_844.jpg";
      webimgsmall =
"https://cdn.uat.cinescape.com.kw/movies/web_small/HO00002433_540.jpg";
   },
          {
        cast =          (
                    {
              firstName = "Frank ";
              firstNameAlt = "<null>";
              id = 0000000664;
              lastName = Grillo;
              lastNameAlt = "<null>";
          personType = Actor;
          urlToDetails = "";
          urlToPicture = "";
     },
                {
          firstName = Rhona;
          firstNameAlt = "<null>";
          id = 0000004767;
          lastName = Mitra;
          lastNameAlt = "<null>";
          personType = Actor;
          urlToDetails = "";
          urlToPicture = "";
     }
);
comingSoon = 0;
director =            {
     firstName = "Isaac ";
     firstNameAlt = "<null>";
     id = 0000000708;
     lastName = Florentine;
     lastNameAlt = "<null>";
     personType = Director;
     urlToDetails = "";
     urlToPicture = "";
};
     distributorName = "Falcon Film";
     genre = Action;
     genreAlt = "\U0623\U0643\U0634\U0646";
     hOFilmCode = A000002648;
     id = HO00002425;
     language = English;
     languageAlt = "\U0625\U0646\U062c\U0644\U064a\U0632\U064a";
      mobadvance =
"https://cdn.uat.cinescape.com.kw/movies/mob_advance/HO00002425_413.jpg";
      mobimgbig =
"https://cdn.uat.cinescape.com.kw/movies/mob_big/HO00002425_158.jpg";
      mobimgsmall =
"https://cdn.uat.cinescape.com.kw/movies/mob_small/HO00002425_625.jpg";
     movieCinemas =         (
          0000000001,
          0000000008
     );
     movieExperience =          (
          Standard
     );
     movieTimings =         (
          4,
          5,
          1
     );
     openingDate = "29 Aug 2024";
     producer = "<null>";
      rating = PG12;
      ratingColor = "#f78c1e";
      ratingDescription = "";
      ratingDescriptionAlt = "";
      ratingImageBig = "https://cdn.cinescape.com.kw/ratingImages/l-pg12.png";
      runTime = 94;
      runTimeStr = "1 hr 34 min";
      scheduledAtCinema = 1;
    shareUrl = "https://cinescapeweb.wemonde.co/movie-details/Hounds-of-
War/HO00002425";
      sliderimgurl = "#940b0c";
      subTitle = Arabic;
      subTitleAlt = "\U0639\U0631\U0628\U064a";
       synopsis = "After a mission goes wrong, only one of a group of mercenaries is left
alive to take avenge for this brothers.";
     synopsisAlt = "\U0628\U0639\U062f \U0623\U0646
\U062a\U0633\U0648\U0621 \U0627\U0644\U0645\U0647\U0645\U0629\U060c
\U0644\U0645 \U064a\U062a\U0628\U0642 \U0633\U0648\U0649
\U0648\U0627\U062d\U062f \U0645\U0646
\U0645\U062c\U0645\U0648\U0639\U0629 \U0645\U0646
\U0627\U0644\U0645\U0631\U062a\U0632\U0642\U0629 \U0639\U0644\U0649
\U0642\U064a\U062f \U0627\U0644\U062d\U064a\U0627\U0629
\U0644\U0644\U0627\U0646\U062a\U0642\U0627\U0645 \U0645\U0646
\U0647\U0624\U0644\U0627\U0621
\n.\U0627\U0644\U0625\U062e\U0648\U0629";
      tag = "";
      tagAr = "<null>";
      tagColor = "<null>";
      title = "Hounds of War";
     titleAlt = "\U0647\U0627\U0648\U0646\U062f\U0632 \U0627\U0648\U0641
\U0648\U0648\U0631";
     trailerUrl = "ht
```

### Show times

**Request URL:** `https://apiuat.cinescape.com.kw/api/content/msessionsnew`

- Accept: application/json
- Accept-Language: en
- appversion: 15.15
- platform: IOS
- Authorization: Bearer
- params for api https://apiuat.cinescape.com.kw/api/content/msessionsnew

**Sample response:**

```
(["code": 10001, "msg": , "result": success, "output": {
  daySessions =       (
        {
      cinema =            {
        active = 1;
        address1 = "360 Mall, Zahra";
      address1Ar = "\U0645\U0648\U0644 360\U060c
\U0627\U0644\U0632\U0647\U0631\U0627\U0621";
        address2 = "";
        address2Ar = "";
        alerttxt = "";
       allowOnlineVoucherValidation = 0;
       allowPrintAtHomeBookings = 0;
        appImageUrl =
"https://cdn.uat.cinescape.com.kw/cinema/mob_big/0000000001.jpg";
        appThumbImageUrl =
"https://cdn.uat.cinescape.com.kw/cinema/mob_small/0000000001.jpg";
       city = "";
       currencyCode = KWD;
       description = "";
       descriptionAlt = "";
       displaySofaSeats = 0;
       emailAddress = "";
       experiences =           (
       );
       exps =          (
            VIP,
            IMAX,
            4DX,
            DOLBY,
            SCREENX
       );
       food = 1;
       foodEnable = 0;
       foodEndTime = "14:00";
       foodPrepare = 1;
          foodStartTime = "08:00";
          giftStore = 0;
          icon = "";
          id = 0000000001;
          latitude = "29.2678";
          longitude = "47.9919";
          loyaltyCode = "<null>";
          name = "Cinescape 360";
          nameAlt = "\U0633\U064a\U0646\U0633\U0643\U064a\U0628 360";
          parkingInfo = "<null>";
          phoneNumber = "";
          priority = 2;
          timeZoneId = "<null>";
          webImageUrl = "";
        webThumbImageUrl =
"https://cdn.uat.cinescape.com.kw/cinema/web_small/0000000001.jpg?v=937";
          workingHours = "08 AM - 10 AM";
          workingHoursAlt = "08 AM - 10 AM";
     };
     experienceSessions =            (
                   {
            experience = Standard;
            experienceAlt = "\U0627\U0633\U0627\U0633\U064a";
         experienceIcon = "https://s3.eu-west-
1.amazonaws.com/cinescape.uat/experience/standard.png?v=1";
         showCount = 4;
         shows =           (
                      {
            allocatedSeating = 1;
            allowChildAdmits = 1;
            allowComplimentaryTickets = 1;
            allowTicketSales = true;
            cinemaId = 0000000001;
            cinemaOperatorCode = 0001;
            experience = Standard;
            experienceAlt = "\U0627\U0633\U0627\U0633\U064a";
            experienceIcon = "https://s3.eu-west-
1.amazonaws.com/cinescape.uat/experience/standard.png?v=1";
            format = "";
            formatCode = 0000000001;
            formatHOPK = 0000000001;
            id = "0000000001-228235";
            premium = 1;
            priceGroupCode = 0002;
            scheduledFilmId = HO00002382;
            screenName = "Screen 4";
            screenNameAlt = "";
            screenNumber = 4;
            seatsAvailable = 154;
            sessionBusinessDate = "2026-03-30T21:00:00.000+00:00";
                sessionBusinessDateStr = "2026-03-31";
                sessionDisplayPriority = 0;
                sessionId = 228235;
                showTime = "15:00";
                showtime = "2026-03-31T12:00:00.000+00:00";
                soldoutStatus = 0;
                typeCode = N;
           },
                          {
                allocatedSeating = 1;
                allowChildAdmits = 1;
                allowComplimentaryTickets = 1;
                allowTicketSales = true;
                cinemaId = 0000000001;
                cinemaOperatorCode = 0001;
                experience = Standard;
                experienceAlt = "\U0627\U0633\U0627\U0633\U064a";
            experienceIcon = "https://s3.eu-west-
1.amazonaws.com/cinescape.uat/experience/standard.png?v=1";
                format = "";
                formatCode = 0000000001;
                formatHOPK = 0000000001;
                id = "0000000001-228005";
                premium = 1;
                priceGroupCode = 0002;
                scheduledFilmId = HO00002382;
                screenName = "Screen 4";
                screenNameAlt = "";
                screenNumber = 4;
                seatsAvailable = 154;
                sessionBusinessDate = "2026-03-30T21:00:00.000+00:00";
                sessionBusinessDateStr = "2026-03-31";
                sessionDisplayPriority = 0;
                sessionId = 228005;
                showTime = "18:05";
                showtime = "2026-03-31T15:05:00.000+00:00";
                soldoutStatus = 0;
                typeCode = N;
           },
                          {
                allocatedSeating = 1;
                allowChildAdmits = 1;
                allowComplimentaryTickets = 1;
                allowTicketSales = true;
                cinemaId = 0000000001;
                cinemaOperatorCode = 0001;
                experience = Standard;
                experienceAlt = "\U0627\U0633\U0627\U0633\U064a";
            experienceIcon = "https://s3.eu-west-
1.amazonaws.com/cinescape.uat/experience/standard.png?v=1";
     format = "";
     formatCode = 0000000001;
     formatHOPK = 0000000001;
     id = "0000000001-228402";
     premium = 1;
     priceGroupCode = 0002;
     scheduledFilmId = HO00002382;
     screenName = "Screen 4";
     screenNameAlt = "";
     screenNumber = 4;
     seatsAvailable = 154;
     sessionBusinessDate = "2026-03-30T21:00:00.000+00:00";
     sessionBusinessDateStr = "2026-03-31";
     sessionDisplayPriority = 0;
     sessionId = 228402;
     showTime = "21:00";
     showtime = "2026-03-31T18:00:00.000+00:00";
     soldoutStatus = 0;
     typeCode = N;
},
               {
     allocatedSeating = 1;
     allowChildAdmits = 1;
     allowComplimentaryTickets = 1;
     allowTicketSales = true;
            cinemaId = 0000000001;
            cinemaOperatorCode = 0001;
            experience = Standard;
            experienceAlt = "\U0627\U0633\U0627\U0633\U064a";
            experienceIcon = "https://s3.eu-west-
1.amazonaws.com/cinescape.uat/experience/standard.png?v=1";
            format = "";
            formatCode = 0000000001;
            formatHOPK = 0000000001;
            id = "0000000001-228027";
            premium = 1;
            priceGroupCode = 0002;
            scheduledFilmId = HO00002382;
            screenName = "Screen 4";
            screenNameAlt = "";
            screenNumber = 4;
            seatsAvailable = 154;
            sessionBusinessDate = "2026-03-30T21:00:00.000+00:00";
            sessionBusinessDateStr = "2026-03-31";
            sessionDisplayPriority = 0;
            sessionId = 228027;
            showTime = "00:00";
            showtime = "2026-03-31T21:00:00.000+00:00";
            soldoutStatus = 0;
            typeCode = N;
                   }
              );
          }
     );
     showCount = 4;
     shows =               (
                       {
              allocatedSeating = 1;
              allowChildAdmits = 1;
              allowComplimentaryTickets = 1;
              allowTicketSales = true;
              cinemaId = 0000000001;
              cinemaOperatorCode = 0001;
              experience = Standard;
              experienceAlt = "\U0627\U0633\U0627\U0633\U064a";
         experienceIcon = "https://s3.eu-west-
1.amazonaws.com/cinescape.uat/experience/standard.png?v=1";
              format = "";
              formatCode = 0000000001;
              formatHOPK = 0000000001;
              id = "0000000001-228005";
              premium = 1;
              priceGroupCode = 0002;
              scheduledFilmId = HO00002382;
              screenName = "Screen 4";
            screenNameAlt = "";
            screenNumber = 4;
            seatsAvailable = 154;
            sessionBusinessDate = "2026-03-30T21:00:00.000+00:00";
            sessionBusinessDateStr = "2026-03-31";
            sessionDisplayPriority = 0;
            sessionId = 228005;
            showTime = "18:05";
            showtime = "2026-03-31T15:05:00.000+00:00";
            soldoutStatus = 0;
            typeCode = N;
       },
                  {
            allocatedSeating = 1;
            allowChildAdmits = 1;
            allowComplimentaryTickets = 1;
            allowTicketSales = true;
            cinemaId = 0000000001;
            cinemaOperatorCode = 0001;
            experience = Standard;
            experienceAlt = "\U0627\U0633\U0627\U0633\U064a";
         experienceIcon = "https://s3.eu-west-
1.amazonaws.com/cinescape.uat/experience/standard.png?v=1";
            format = "";
            formatCode = 0000000001;
     formatHOPK = 0000000001;
     id = "0000000001-228027";
     premium = 1;
     priceGroupCode = 0002;
     scheduledFilmId = HO00002382;
     screenName = "Screen 4";
     screenNameAlt = "";
     screenNumber = 4;
     seatsAvailable = 154;
     sessionBusinessDate = "2026-03-30T21:00:00.000+00:00";
     sessionBusinessDateStr = "2026-03-31";
     sessionDisplayPriority = 0;
     sessionId = 228027;
     showTime = "00:00";
     showtime = "2026-03-31T21:00:00.000+00:00";
     soldoutStatus = 0;
     typeCode = N;
},
           {
     allocatedSeating = 1;
     allowChildAdmits = 1;
     allowComplimentaryTickets = 1;
     allowTicketSales = true;
     cinemaId = 0000000001;
            cinemaOperatorCode = 0001;
            experience = Standard;
            experienceAlt = "\U0627\U0633\U0627\U0633\U064a";
         experienceIcon = "https://s3.eu-west-
1.amazonaws.com/cinescape.uat/experience/standard.png?v=1";
            format = "";
            formatCode = 0000000001;
            formatHOPK = 0000000001;
            id = "0000000001-228235";
            premium = 1;
            priceGroupCode = 0002;
            scheduledFilmId = HO00002382;
            screenName = "Screen 4";
            screenNameAlt = "";
            screenNumber = 4;
            seatsAvailable = 154;
            sessionBusinessDate = "2026-03-30T21:00:00.000+00:00";
            sessionBusinessDateStr = "2026-03-31";
            sessionDisplayPriority = 0;
            sessionId = 228235;
            showTime = "15:00";
            showtime = "2026-03-31T12:00:00.000+00:00";
            soldoutStatus = 0;
            typeCode = N;
       },
               {
         allocatedSeating = 1;
         allowChildAdmits = 1;
         allowComplimentaryTickets = 1;
         allowTicketSales = true;
         cinemaId = 0000000001;
         cinemaOperatorCode = 0001;
         experience = Standard;
         experienceAlt = "\U0627\U0633\U0627\U0633\U064a";
         experienceIcon = "https://s3.eu-west-
1.amazonaws.com/cinescape.uat/experience/standard.png?v=1";
         format = "";
         formatCode = 0000000001;
         formatHOPK = 0000000001;
         id = "0000000001-228402";
         premium = 1;
         priceGroupCode = 0002;
         scheduledFilmId = HO00002382;
         screenName = "Screen 4";
         screenNameAlt = "";
         screenNumber = 4;
         seatsAvailable = 154;
         sessionBusinessDate = "2026-03-30T21:00:00.000+00:00";
         sessionBusinessDateStr = "2026-03-31";
         sessionDisplayPriority = 0;
                   sessionId = 228402;
                   showTime = "21:00";
                   showtime = "2026-03-31T18:00:00.000+00:00";
                   soldoutStatus = 0;
                   typeCode = N;
               }
          );
     }
);
days =             (
               {
          d = 31;
          dt = "2026-03-31";
          enable = 1;
          showDateStr = "<null>";
          showdate = "31 Mar 2026";
          wd = Today;
          wdf = Tuesday;
     },
               {
          d = 01;
          dt = "2026-04-01";
          enable = 1;
          showDateStr = "<null>";
          showdate = "01 Apr 2026";
     wd = Wed;
     wdf = Wednesday;
},
       {
     d = 02;
     dt = "2026-04-02";
     enable = 1;
     showDateStr = "<null>";
     showdate = "02 Apr 2026";
     wd = Thu;
     wdf = Thursday;
},
       {
     d = 03;
     dt = "2026-04-03";
     enable = 1;
     showDateStr = "<null>";
     showdate = "03 Apr 2026";
     wd = Fri;
     wdf = Friday;
},
       {
     d = 04;
     dt = "2026-04-04";
     enable = 1;
     showDateStr = "<null>";
     showdate = "04 Apr 2026";
     wd = Sat;
     wdf = Saturday;
},
       {
     d = 05;
     dt = "2026-04-05";
     enable = 1;
     showDateStr = "<null>";
     showdate = "05 Apr 2026";
     wd = Sun;
     wdf = Sunday;
},
       {
     d = 06;
     dt = "2026-04-06";
     enable = 1;
     showDateStr = "<null>";
     showdate = "06 Apr 2026";
     wd = Mon;
     wdf = Monday;
},
       {
     d = 07;
     dt = "2026-04-07";
     enable = 1;
     showDateStr = "<null>";
     showdate = "07 Apr 2026";
     wd = Tue;
     wdf = Tuesday;
},
       {
     d = 08;
     dt = "2026-04-08";
     enable = 1;
     showDateStr = "<null>";
     showdate = "08 Apr 2026";
     wd = Wed;
     wdf = Wednesday;
},
       {
     d = 09;
     dt = "2026-04-09";
     enable = 1;
     showDateStr = "<null>";
     showdate = "09 Apr 2026";
     wd = Thu;
     wdf = Thursday;
},
       {
     d = 10;
     dt = "2026-04-10";
     enable = 1;
     showDateStr = "<null>";
     showdate = "10 Apr 2026";
     wd = Fri;
     wdf = Friday;
},
       {
     d = 11;
     dt = "2026-04-11";
     enable = 1;
     showDateStr = "<null>";
     showdate = "11 Apr 2026";
     wd = Sat;
     wdf = Saturday;
},
       {
     d = 12;
     dt = "2026-04-12";
     enable = 1;
     showDateStr = "<null>";
     showdate = "12 Apr 2026";
     wd = Sun;
     wdf = Sunday;
},
       {
     d = 13;
     dt = "2026-04-13";
     enable = 1;
     showDateStr = "<null>";
     showdate = "13 Apr 2026";
     wd = Mon;
     wdf = Monday;
},
       {
     d = 14;
     dt = "2026-04-14";
     enable = 1;
     showDateStr = "<null>";
     showdate = "14 Apr 2026";
     wd = Tue;
     wdf = Tuesday;
},
       {
     d = 15;
     dt = "2026-04-15";
     enable = 1;
     showDateStr = "<null>";
     showdate = "15 Apr 2026";
     wd = Wed;
     wdf = Wednesday;
},
       {
     d = 16;
     dt = "2026-04-16";
     enable = 1;
     showDateStr = "<null>";
     showdate = "16 Apr 2026";
     wd = Thu;
     wdf = Thursday;
},
       {
     d = 17;
     dt = "2026-04-17";
     enable = 1;
     showDateStr = "<null>";
     showdate = "17 Apr 2026";
     wd = Fri;
     wdf = Friday;
},
       {
     d = 18;
     dt = "2026-04-18";
     enable = 1;
     showDateStr = "<null>";
     showdate = "18 Apr 2026";
     wd = Sat;
     wdf = Saturday;
},
       {
     d = 19;
     dt = "2026-04-19";
     enable = 1;
     showDateStr = "<null>";
     showdate = "19 Apr 2026";
     wd = Sun;
     wdf = Sunday;
},
       {
     d = 20;
     dt = "2026-04-20";
     enable = 1;
     showDateStr = "<null>";
     showdate = "20 Apr 2026";
     wd = Mon;
     wdf = Monday;
},
       {
     d = 21;
     dt = "2026-04-21";
     enable = 1;
     showDateStr = "<null>";
     showdate = "21 Apr 2026";
     wd = Tue;
     wdf = Tuesday;
},
       {
     d = 22;
     dt = "2026-04-22";
     enable = 1;
     showDateStr = "<null>";
     showdate = "22 Apr 2026";
     wd = Wed;
     wdf = Wednesday;
},
       {
     d = 23;
     dt = "2026-04-23";
     enable = 1;
     showDateStr = "<null>";
     showdate = "23 Apr 2026";
     wd = Thu;
     wdf = Thursday;
},
       {
     d = 24;
     dt = "2026-04-24";
     enable = 1;
     showDateStr = "<null>";
     showdate = "24 Apr 2026";
     wd = Fri;
     wdf = Friday;
},
       {
     d = 25;
     dt = "2026-04-25";
     enable = 1;
     showDateStr = "<null>";
     showdate = "25 Apr 2026";
     wd = Sat;
     wdf = Saturday;
},
       {
     d = 26;
     dt = "2026-04-26";
     enable = 1;
     showDateStr = "<null>";
     showdate = "26 Apr 2026";
     wd = Sun;
     wdf = Sunday;
},
       {
     d = 27;
     dt = "2026-04-27";
     enable = 1;
     showDateStr = "<null>";
     showdate = "27 Apr 2026";
     wd = Mon;
     wdf = Monday;
},
       {
     d = 28;
     dt = "2026-04-28";
     enable = 1;
     showDateStr = "<null>";
     showdate = "28 Apr 2026";
     wd = Tue;
     wdf = Tuesday;
},
       {
     d = 29;
     dt = "2026-04-29";
     enable = 1;
     showDateStr = "<null>";
     showdate = "29 Apr 2026";
     wd = Wed;
     wdf = Wednesday;
},
       {
     d = 30;
     dt = "2026-04-30";
     enable = 1;
     showDateStr = "<null>";
     showdate = "30 Apr 2026";
     wd = Thu;
     wdf = Thursday;
},
       {
     d = 01;
     dt = "2026-05-01";
     enable = 1;
     showDateStr = "<null>";
     showdate = "01 May 2026";
     wd = Fri;
     wdf = Friday;
},
       {
     d = 02;
     dt = "2026-05-02";
     enable = 1;
     showDateStr = "<null>";
     showdate = "02 May 2026";
     wd = Sat;
     wdf = Saturday;
},
       {
     d = 03;
     dt = "2026-05-03";
     enable = 1;
     showDateStr = "<null>";
     showdate = "03 May 2026";
     wd = Sun;
     wdf = Sunday;
},
       {
     d = 04;
     dt = "2026-05-04";
     enable = 1;
     showDateStr = "<null>";
     showdate = "04 May 2026";
     wd = Mon;
          wdf = Monday;
     },
            {
          d = 05;
          dt = "2026-05-05";
          enable = 1;
          showDateStr = "<null>";
          showdate = "05 May 2026";
          wd = Tue;
          wdf = Tuesday;
     },
            {
          d = 06;
          dt = "2026-05-06";
          enable = 1;
          showDateStr = "<null>";
          showdate = "06 May 2026";
          wd = Wed;
          wdf = Wednesday;
     }
);
movie =         {
     cast =         (
                {
            firstName = "Stefano ";
          firstNameAlt = "<null>";
          id = 0000004713;
          lastName = Mordini;
          lastNameAlt = "<null>";
          personType = Director;
          urlToDetails = "";
          urlToPicture = "";
     },
              {
          firstName = "Katie ";
          firstNameAlt = "<null>";
          id = 0000004714;
          lastName = "Clarkson-Hill";
          lastNameAlt = "<null>";
          personType = Actor;
          urlToDetails = "";
          urlToPicture = "";
     }
);
comingSoon = 0;
director =          {
     firstName = "Singer ";
     firstNameAlt = "<null>";
     id = 0000004712;
     lastName = Amina;
        lastNameAlt = "<null>";
        personType = Actor;
        urlToDetails = "";
        urlToPicture = "";
   };
   distributorName = "IFD - Arabic";
   genre = Horror;
   genreAlt = "<null>";
   hOFilmCode = A000002597;
   id = HO00002382;
   language = Arabic;
   languageAlt = "\U0639\U0631\U0628\U064a";
    mobadvance =
"https://cdn.uat.cinescape.com.kw/movies/mob_advance/HO00002382_532.jpg";
    mobimgbig =
"https://cdn.uat.cinescape.com.kw/movies/mob_big/HO00002382_474.jpg";
    mobimgsmall =
"https://cdn.uat.cinescape.com.kw/movies/mob_small/HO00002382_449.jpg";
   movieCinemas =            (
        0000000001
   );
   movieExperience =             (
        Standard
   );
   movieTimings =            (
        2,
         3,
         4,
         5
    );
    openingDate = "12 Sep 2024";
    producer = "<null>";
    rating = R15;
    ratingColor = "#d55873";
    ratingDescription = "";
    ratingDescriptionAlt = "";
    ratingImageBig = "https://cdn.cinescape.com.kw/ratingImages/l-r15.png";
    runTime = 137;
    runTimeStr = "2 hr 17 min";
    scheduledAtCinema = 1;
   shareUrl = "https://cinescapeweb.wemonde.co/movie-details/Akh-(Kuwaiti)---
Arabic/HO00002382";
    sliderimgurl = "#d4d3d3";
    subTitle = English;
    subTitleAlt = "\U0625\U0646\U062c\U0644\U064a\U0632\U064a";
     synopsis = "Feeling drained of life and purpose, Shihab plans a desert camping
trip to rid himself of his dependent, wheelchair-bound brother Suhail. Upon arrival,
a chain of events is set in motion where ugly truths come to light, exposing the dark
side of the brotherly bond that has plagued humanity since Caine and Abel.";
   synopsisAlt = "\U064a\U0634\U0639\U0631 (\U0634\U0647\U0627\U0628)
\U0628\U0627\U0633\U062a\U0646\U0632\U0627\U0641
\U0627\U0644\U062d\U064a\U0627\U0629
\U0648\U0627\U0644\U063a\U0631\U0636\U060c
\U0648\U064a\U062e\U0637\U0637 \U0644\U0631\U062d\U0644\U0629
\U062a\U062e\U064a\U064a\U0645
\U0635\U062d\U0631\U0627\U0648\U064a\U0629
\U0644\U062a\U062e\U0644\U064a\U0635 \U0646\U0641\U0633\U0647
\U0645\U0646 \U0634\U0642\U064a\U0642\U0647
\U0627\U0644\U0645\U0639\U0627\U0644 \U0639\U0644\U0649
\U0643\U0631\U0633\U064a \U0645\U062a\U062d\U0631\U0643
(\U0633\U0647\U064a\U0644). \U0639\U0646\U062f
\U0627\U0644\U0648\U0635\U0648\U0644\U060c \U064a\U062a\U0645
\U062a\U062d\U0631\U064a\U0643 \U0633\U0644\U0633\U0644\U0629
\U0645\U0646 \U0627\U0644\U0623\U062d\U062f\U0627\U062b
\U062d\U064a\U062b \U062a\U0638\U0647\U0631
\U0627\U0644\U062d\U0642\U0627\U0626\U0642
\U0627\U0644\U0642\U0628\U064a\U062d\U0629\U060c
\U0645\U0645\U0627 \U064a\U0643\U0634\U0641
\U0627\U0644\U062c\U0627\U0646\U0628
\U0627\U0644\U0645\U0638\U0644\U0645 \U0645\U0646
\U0627\U0644\U0631\U0627\U0628\U0637\U0629
\U0627\U0644\U0623\U062e\U0648\U064a\U0629
\U0627\U0644\U062a\U064a \U0627\U0628\U062a\U0644\U064a\U062a
\U0628\U0647\U0627 \U0627\U0644\U0628\U0634\U0631\U064a\U0629
\U0645\U0646\U0630 \U0642\U0627\U0628\U064a\U0644 ";
   tag = NEW;
   tagAr = "\U062c\U062f\U064a\U062f";
   tagColor = "#E12329";
   title = "Akh (Kuwaiti) - Arabic ";
   titleAlt = "\U0627\U062e (\U0643\U0648\U064a\U062a\U064a) ";
   trailerUrl = "https://youtu.be/KjelS2ofY1Q";
    webadvance =
"https://cdn.uat.cinescape.com.kw/movies/web_advance/HO00002382_049.jpg";
    webadvance2 =
"https://cdn.uat.cinescape.com.kw/movies/web_advance2/HO00002382_788.jpg";
    webadvance3 =
"https://cdn.uat.cinescape.com.kw/movies/web_advance3/HO00002382_029.jpg";
    webimgbig =
"https://cdn.uat.cinescape.com.kw/movies/web_big/HO00002382_030.jpg";
    webimgsmall =
"https://cdn.uat.cinescape.com.kw/movies/web_small/HO00002382_315.jpg";
  };
}])
```
