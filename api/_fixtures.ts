// Static fixture data for the Vercel demo deploy; writes do not persist.
// Kept in sync with infra/seed/index.ts, which round-trips this snapshot
// into the local Postgres DB so `pnpm seed` produces the same content.
//
// Domain: Cinescape (Kuwait National Cinema Company / KNCC) — sourced from
// `cinescape mind/content/{api,terms_and_conditions,privacy,faq,contact_volume}.md`.
// The FAQ module mirrors the authoritative live-site FAQ (scraped 2026-04-19) and
// is supplemented with T&C-sourced entries for policy questions the live FAQ omits.

export const MODULES = [
  {
    "id": "5709042f-40bd-4ad9-882d-cb301b94e7ba",
    "slug": "branches",
    "label": "Cinemas & Hours",
    "icon": "map-pin",
    "fieldDefinitions": [
      {
        "key": "name",
        "type": "text",
        "label": "Name",
        "required": true,
        "localized": true
      },
      {
        "key": "governorate",
        "type": "select",
        "label": "Governorate",
        "options": [
          "Hawalli",
          "Jahra",
          "Ahmadi",
          "Farwaniya",
          "Al-Asimah",
          "Mubarak Al-Kabeer"
        ],
        "required": true,
        "localized": false
      },
      {
        "key": "status",
        "type": "select",
        "label": "Status",
        "options": [
          "Active",
          "CLOSED",
          "Temp Closed"
        ],
        "required": true,
        "localized": false
      },
      {
        "key": "google_maps_url",
        "type": "url",
        "label": "Maps",
        "required": false,
        "localized": false
      },
      {
        "key": "hours_regular",
        "type": "hours",
        "label": "Hours",
        "required": true,
        "localized": false
      },
      {
        "key": "experiences",
        "type": "text",
        "label": "Experiences",
        "required": false,
        "localized": false
      }
    ]
  },
  {
    "id": "14126df4-e36c-451e-a448-d5206c06eff0",
    "slug": "escalation_rules",
    "label": "Escalation Rules",
    "icon": "alert-triangle",
    "fieldDefinitions": [
      {
        "key": "trigger",
        "type": "textarea",
        "label": "Trigger",
        "required": true,
        "localized": false
      },
      {
        "key": "channel",
        "type": "select",
        "label": "Channel",
        "options": [
          "human_chat",
          "phone",
          "email",
          "whatsapp"
        ],
        "required": true,
        "localized": false
      },
      {
        "key": "webhook_url",
        "type": "url",
        "label": "Webhook",
        "required": false,
        "localized": false
      }
    ]
  },
  {
    "id": "2eeb15ca-2aec-46ad-b680-bfff2e5cd5b3",
    "slug": "faqs",
    "label": "FAQs (EN + AR)",
    "icon": "help-circle",
    "fieldDefinitions": [
      {
        "key": "question",
        "type": "text",
        "label": "Question",
        "required": true,
        "localized": true
      },
      {
        "key": "answer",
        "type": "textarea",
        "label": "Answer",
        "required": true,
        "localized": true
      },
      {
        "key": "category",
        "type": "text",
        "label": "Category",
        "required": false,
        "localized": false
      }
    ]
  },
  {
    "id": "ee8f4713-d157-47e6-848a-9757ad82a1cb",
    "slug": "intents",
    "label": "Instructions",
    "icon": "target",
    "fieldDefinitions": [
      {
        "key": "name",
        "type": "text",
        "label": "Name",
        "required": true,
        "localized": false
      },
      {
        "key": "description",
        "type": "textarea",
        "label": "Intent",
        "required": false,
        "localized": false
      },
      {
        "key": "ai_instructions",
        "type": "textarea",
        "label": "AI Instructions",
        "required": false,
        "localized": false
      }
    ]
  },
  {
    "id": "b265f169-81ec-451c-9b38-ca26e4d28dd9",
    "slug": "partners",
    "label": "Partners",
    "icon": "handshake",
    "fieldDefinitions": [
      {
        "key": "name",
        "type": "text",
        "label": "Name",
        "required": true,
        "localized": false
      },
      {
        "key": "type",
        "type": "select",
        "label": "Type",
        "options": [
          "Bank",
          "Loyalty",
          "Corporate",
          "Other"
        ],
        "required": true,
        "localized": false
      },
      {
        "key": "notes",
        "type": "textarea",
        "label": "Notes",
        "required": false,
        "localized": true
      }
    ]
  },
  {
    "id": "ed196f30-c108-4935-b3b9-5755ba64cc1b",
    "slug": "policy_matrix",
    "label": "Policies & Rules",
    "icon": "shield",
    "fieldDefinitions": [
      {
        "key": "scenario",
        "type": "text",
        "label": "Scenario",
        "required": true,
        "localized": true
      },
      {
        "key": "policy",
        "type": "textarea",
        "label": "Policy",
        "required": true,
        "localized": true
      },
      {
        "key": "exception",
        "type": "textarea",
        "label": "Exception",
        "required": false,
        "localized": true
      }
    ]
  },
  {
    "id": "ffebff5c-c9ef-4143-9489-a50b52f7e0a2",
    "slug": "promotions",
    "label": "Active Offers",
    "icon": "tag",
    "fieldDefinitions": [
      {
        "key": "name",
        "type": "text",
        "label": "Name",
        "required": true,
        "localized": false
      },
      {
        "key": "type",
        "type": "select",
        "label": "Type",
        "options": [
          "Promo",
          "Seasonal",
          "Bank"
        ],
        "required": true,
        "localized": false
      },
      {
        "key": "message",
        "type": "textarea",
        "label": "Offer description",
        "required": true,
        "localized": true
      },
      {
        "key": "start_date",
        "type": "date",
        "label": "Start",
        "required": false,
        "localized": false
      },
      {
        "key": "end_date",
        "type": "date",
        "label": "End",
        "required": false,
        "localized": false
      }
    ]
  }
] as const;

type FixtureEntry = {
  id: string;
  data: Record<string, unknown>;
  status: string;
  updatedAt: string;
};

export const ENTRIES_BY_SLUG: Record<string, FixtureEntry[]> = {
  "branches": [
    {
      "id": "c1a01001-1111-4111-8111-000000000001",
      "data": {
        "status": "Active",
        "name_en": "Cinescape 360",
        "name_ar": "سينسكيب 360",
        "governorate": "Hawalli",
        "hours_regular": [{"days": "Daily", "time": "10AM-2AM"}],
        "google_maps_url": "https://maps.app.goo.gl/360Mall",
        "experiences": "VIP, IMAX, 4DX, DOLBY, SCREENX"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "c1a01002-1111-4111-8111-000000000002",
      "data": {
        "status": "Active",
        "name_en": "Cinescape Avenues",
        "name_ar": "سينسكيب الأفنيوز",
        "governorate": "Farwaniya",
        "hours_regular": [{"days": "Daily", "time": "10AM-2AM"}],
        "google_maps_url": "https://maps.app.goo.gl/AvenuesMall",
        "experiences": "VIP, IMAX, 4DX, Skyline"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "c1a01003-1111-4111-8111-000000000003",
      "data": {
        "status": "Active",
        "name_en": "Cinescape Khairan",
        "name_ar": "سينسكيب الخيران",
        "governorate": "Ahmadi",
        "hours_regular": [{"days": "Daily", "time": "11AM-2AM"}],
        "google_maps_url": "https://maps.app.goo.gl/AlKhiranMall",
        "experiences": "Family, General, VIP"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "c1a01004-1111-4111-8111-000000000004",
      "data": {
        "status": "Active",
        "name_en": "Cinescape Ajial (Ajyal)",
        "name_ar": "سينسكيب أجيال",
        "governorate": "Ahmadi",
        "hours_regular": [{"days": "Daily", "time": "10AM-12AM"}],
        "google_maps_url": "https://maps.app.goo.gl/AjyalMall",
        "experiences": "Family, General — under-3 free entry on Tuesdays (G/PG only, shares parent seat)"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "c1a01005-1111-4111-8111-000000000005",
      "data": {
        "status": "Active",
        "name_en": "Cinescape Al-Kout",
        "name_ar": "سينسكيب الكوت",
        "governorate": "Ahmadi",
        "hours_regular": [{"days": "Daily", "time": "11AM-2AM"}],
        "google_maps_url": "https://maps.app.goo.gl/AlKoutMall",
        "experiences": "Family, General, VIP"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "c1a01006-1111-4111-8111-000000000006",
      "data": {
        "status": "Active",
        "name_en": "Cinescape Al-Fanar",
        "name_ar": "سينسكيب الفنار",
        "governorate": "Hawalli",
        "hours_regular": [{"days": "Daily", "time": "10AM-1AM"}],
        "google_maps_url": "https://maps.app.goo.gl/AlFanarMall",
        "experiences": "Family, General, VIP"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "c1a01007-1111-4111-8111-000000000007",
      "data": {
        "status": "Active",
        "name_en": "Cinescape Al-Bairaq",
        "name_ar": "سينسكيب البيرق",
        "governorate": "Ahmadi",
        "hours_regular": [{"days": "Daily", "time": "10AM-12AM"}],
        "google_maps_url": "https://maps.app.goo.gl/BairaqMall",
        "experiences": "Family, General"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "c1a01008-1111-4111-8111-000000000008",
      "data": {
        "status": "Active",
        "name_en": "Cinescape Marina",
        "name_ar": "سينسكيب مارينا",
        "governorate": "Hawalli",
        "hours_regular": [{"days": "Daily", "time": "10AM-1AM"}],
        "google_maps_url": "https://maps.app.goo.gl/MarinaMall",
        "experiences": "Family, General, VIP"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "c1a01009-1111-4111-8111-000000000009",
      "data": {
        "status": "Active",
        "name_en": "Cinescape Al-Muhallab",
        "name_ar": "سينسكيب المهلب",
        "governorate": "Hawalli",
        "hours_regular": [{"days": "Daily", "time": "10AM-12AM"}],
        "google_maps_url": "https://maps.app.goo.gl/AlMuhallabComplex",
        "experiences": "Family, General"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    }
  ],
  "escalation_rules": [
    {
      "id": "e2a01001-2222-4222-8222-000000000001",
      "data": {
        "channel": "phone",
        "trigger": "Refund Request — refund, money back, charge dispute, didn't get my electronic balance. Escalate to Customer Care (180-3456). SLA: 4 hours. Auto: Refunds for card payments are credited as electronic balance to your Cinescape wallet — let me connect you to Customer Care to verify.",
        "webhook_url": "https://hooks.cinescape.com.kw/escalations/refunds"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "e2a01002-2222-4222-8222-000000000002",
      "data": {
        "channel": "phone",
        "trigger": "Cancellation past 2-hour window — show already started or under 2hr. Escalate to Customer Care. SLA: same day. Auto: Cancellations are accepted up to 2 hours before showtime per T&C — connecting you to Customer Care if there are exceptional circumstances (movie cancellation, KNCC error).",
        "webhook_url": "https://hooks.cinescape.com.kw/escalations/cancellation"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "e2a01003-2222-4222-8222-000000000003",
      "data": {
        "channel": "human_chat",
        "trigger": "4DX safety question — pregnant, heart/back/neck issue, weight, child age/height. Escalate to Branch Manager. SLA: 30 min. Auto: 4DX has medical and physical restrictions — for your safety, let me connect you to the branch team to confirm eligibility.",
        "webhook_url": "https://hooks.cinescape.com.kw/escalations/4dx-safety"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "e2a01004-2222-4222-8222-000000000004",
      "data": {
        "channel": "human_chat",
        "trigger": "Lost Item — left my bag, phone, ID inside the cinema. Escalate to Branch Manager. SLA: 2 hours. Auto: We understand. Connecting you to the branch where you watched — please have your booking reference ready.",
        "webhook_url": "https://hooks.cinescape.com.kw/escalations/lost-item"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "e2a01005-2222-4222-8222-000000000005",
      "data": {
        "channel": "phone",
        "trigger": "Private show / theater rental — birthday, meeting, private event, full theater booking. Escalate to Sales / Customer Care (180-3456). SLA: 24 hours. Auto: Yes — you can book a whole theater. Connecting you to Customer Care to arrange.",
        "webhook_url": "https://hooks.cinescape.com.kw/escalations/private-show"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "e2a01006-2222-4222-8222-000000000006",
      "data": {
        "channel": "human_chat",
        "trigger": "Technical issue — website down, app error, payment failed, kiosk broken, can't print ticket. Escalate to IT Support. SLA: 4 hours. Auto: Sorry about that. Logging the issue — Customer Care can also re-issue your ticket if your booking went through.",
        "webhook_url": "https://hooks.cinescape.com.kw/escalations/technical"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "e2a01007-2222-4222-8222-000000000007",
      "data": {
        "channel": "phone",
        "trigger": "Account recovery — forgot username AND password, can't log in. Escalate to Customer Care. SLA: same day. Auto: Please call 180-3456 — Customer Care can help recover both your username and password.",
        "webhook_url": "https://hooks.cinescape.com.kw/escalations/account-recovery"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "e2a01008-2222-4222-8222-000000000008",
      "data": {
        "channel": "human_chat",
        "trigger": "Accessibility / disability — wheelchair access, free-entry claim with disability card, special needs entry. Escalate to Customer Care. SLA: 2 hours. Auto: Wheelchair accessibility is available at all Cinescape cinemas; head to any location for help booking a wheelchair-specified spot. Free entry applies on presentation of a valid PAD disability card where a designated space is available. Connecting you to Customer Care.",
        "webhook_url": "https://hooks.cinescape.com.kw/escalations/accessibility"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    }
  ],
  "faqs": [
    {
      "id": "f3a01001-3333-4333-8333-000000000001",
      "data": {
        "category": "General",
        "question_en": "What rules to conform to when visiting Cinescape cinemas?",
        "question_ar": "ما القواعد الواجب الالتزام بها عند زيارة سينما سينسكيب؟",
        "answer_en": "The following to be considered prior to booking:\n. Booking a ticket is required to all individuals attending (All ages included)\n. Suitable seating type and category\n. Suitable age rating as set by Kuwait's Ministry of Information\n. Conforming to all other KNCC rules (https://www.cinescape.com.kw/FAQs/entryrules)",
        "answer_ar": "يجب مراعاة التالي قبل الحجز:\n. حجز تذكرة مطلوب لكل الحضور (جميع الأعمار)\n. اختيار نوع وفئة المقعد المناسبة\n. التصنيف العمري المناسب وفق ما تحدده وزارة الإعلام الكويتية\n. الالتزام بكافة قواعد KNCC الأخرى (https://www.cinescape.com.kw/FAQs/entryrules)"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "f3a01002-3333-4333-8333-000000000002",
      "data": {
        "category": "General",
        "question_en": "What age ratings are there for Kuwait cinemas?",
        "question_ar": "ما هي التصنيفات العمرية المعتمدة في سينما الكويت؟",
        "answer_en": "In accordance with Kuwait's Ministry of Information Law (4 of the year 2025), the following age ratings are set for movies showing in cinema theaters and visitors are required to verify their age where applicable:\n\nG (Everyone - All ages are allowed entry). PG 12 (Parental Guidance - Ages below 12 are required to be accompanied by a parent or an adult of age 18 and above). PG 15 (Parental Guidance - Ages below 15 are required to be accompanied by a parent or an adult of age 18 and above). R 15 (Only ages 15 and above are allowed entry). R 18 (Adults - Only ages 18 and above are allowed entry).",
        "answer_ar": "وفقاً لقانون وزارة الإعلام الكويتية رقم 4 لسنة 2025، اعتُمدت التصنيفات العمرية التالية للأفلام المعروضة في دور السينما، وعلى الزائر إثبات عمره عند الحاجة:\n\nG (للجميع - يُسمح بالدخول لجميع الأعمار). PG 12 (إرشاد الوالدين - من هم دون 12 سنة يجب أن يُرافقهم ولي أمر أو بالغ 18+). PG 15 (إرشاد الوالدين - من هم دون 15 سنة يجب أن يُرافقهم ولي أمر أو بالغ 18+). R 15 (الدخول لمن هم 15 سنة فأكثر فقط). R 18 (للبالغين - الدخول لمن هم 18 سنة فأكثر فقط)."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "f3a01003-3333-4333-8333-000000000003",
      "data": {
        "category": "General",
        "question_en": "What are the cinematic experiences available at Cinescape and the prices for each of them?",
        "question_ar": "ما هي التجارب السينمائية المتاحة لدى سينسكيب وأسعار كل منها؟",
        "answer_en": "Standard (2D/3D Digital/Laser): the cinema as we all know it, with standard or Premium seats (Larger leather seats equipped with a USB port and a back recliner feature) – Price: 3.5 KD Standard seats – 4 KD Premium seats\n\nELEVEN (2D/3D Laser): Introducing Barco Laser projection and Dolby Atmos sound system, with standard or Premium seats (Larger leather seats equipped with a USB port and a back recliner feature) – Price: 3.5 KD Standard seats – 4 KD Premium seats\n\nIMAX (2D/3D Laser): The largest screen and aspect ratio, providing 26% more images compared to a standard screen, with standard or Premium seats (Larger leather seats equipped with a USB port and a back recliner feature) – Price: 4 KD Standard seats – 4.5 Premium seats\n\nDolby Cinema (2D/3D Laser): the latest theater experiences in Kuwait, with Dolby Vision feature that provide more vivid colors, and the Dolby Atmos sound system known for its history and quality, with Premium seats (Larger leather seats equipped with a USB port and a back recliner feature) – Price: 4.5 KD\n\nScreenX (2D Digital): Enjoy 270 degrees angle of vision with 3 projectors instead of 1! with standard seats – Price: 4.5 KD\n\n4DX (2D/3D Digital/Laser): The most immersive experience in cinema, with moving seats interactively with the movie scenes along with 20 realistic effect like water drop and smoke! Price: 8 KD\n\n4DXScreen (2D/3D Laser): Combining two existing experiences (4DX & ScreenX), this is the latest addition to Cinescape at for the 1st time in the middle east – Price: 8 KD\n\nVIP (2D/3D Digital/Laser): Where luxury meets comfort, enjoy our VIP experience with VIP seats designed for maximum comfort with back and leg recliner feature, and a special concession cafeteria to the ticket holders – Price: 8 KD",
        "answer_ar": "Standard (2D/3D رقمي/ليزر): السينما التقليدية كما نعرفها، مع مقاعد عادية أو بريميوم (مقاعد جلدية أكبر مزوّدة بمنفذ USB وخاصية إمالة الظهر) — السعر: 3.5 د.ك للمقعد العادي — 4 د.ك للمقعد بريميوم\n\nELEVEN (2D/3D ليزر): نقدم عرض Barco Laser ونظام الصوت Dolby Atmos، مع مقاعد عادية أو بريميوم (مقاعد جلدية أكبر مزوّدة بمنفذ USB وخاصية إمالة الظهر) — السعر: 3.5 د.ك للمقعد العادي — 4 د.ك للمقعد بريميوم\n\nIMAX (2D/3D ليزر): أكبر شاشة ونسبة عرض، توفر صورة أكبر بنسبة 26% مقارنة بالشاشة العادية، مع مقاعد عادية أو بريميوم (مقاعد جلدية أكبر مزوّدة بمنفذ USB وخاصية إمالة الظهر) — السعر: 4 د.ك للمقعد العادي — 4.5 د.ك للمقعد بريميوم\n\nDolby Cinema (2D/3D ليزر): أحدث تجارب العرض في الكويت، بتقنية Dolby Vision لألوان أكثر حيوية، ونظام Dolby Atmos الصوتي المعروف بجودته، مع مقاعد بريميوم (مقاعد جلدية أكبر مزوّدة بمنفذ USB وخاصية إمالة الظهر) — السعر: 4.5 د.ك\n\nScreenX (2D رقمي): استمتع بزاوية رؤية 270 درجة عبر 3 أجهزة عرض بدلاً من جهاز واحد! مع مقاعد عادية — السعر: 4.5 د.ك\n\n4DX (2D/3D رقمي/ليزر): التجربة الأكثر انغماساً في السينما، بمقاعد متحركة تتفاعل مع مشاهد الفيلم إلى جانب 20 تأثيراً واقعياً مثل رذاذ الماء والدخان! السعر: 8 د.ك\n\n4DXScreen (2D/3D ليزر): الجمع بين تجربتَي 4DX و ScreenX، أحدث إضافة إلى سينسكيب ولأول مرة في الشرق الأوسط — السعر: 8 د.ك\n\nVIP (2D/3D رقمي/ليزر): حيث تلتقي الفخامة بالراحة، استمتع بتجربة VIP مع مقاعد مصممة لأقصى درجات الراحة بخاصية إمالة الظهر والأرجل، وكافتيريا مأكولات خاصة لحاملي التذاكر — السعر: 8 د.ك"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "f3a01004-3333-4333-8333-000000000004",
      "data": {
        "category": "General",
        "question_en": "Do the cinemas have accessibility for wheelchairs?",
        "question_ar": "هل تتوفر في دور العرض إمكانية وصول للكراسي المتحركة؟",
        "answer_en": "Yes, Wheelchair accessibility is available in all cinemas and visitors can head to any location for further assistance on booking a wheelchair specified spot to enjoy their favorite movie.",
        "answer_ar": "نعم، تتوفر إمكانية وصول الكراسي المتحركة في جميع دور العرض، ويمكن للزائر التوجّه إلى أي فرع للحصول على مزيد من المساعدة في حجز مكان مخصّص للكرسي المتحرك للاستمتاع بفيلمه المفضل."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "f3a01005-3333-4333-8333-000000000005",
      "data": {
        "category": "Cinescape Account & Booking",
        "question_en": "What are the benefits of having a Cinescape account in the app/website?",
        "question_ar": "ما فوائد امتلاك حساب سينسكيب في التطبيق/الموقع؟",
        "answer_en": "Having an account will allow you to have access to all your booking history, you may also cancel your booking (at least 2 hrs. prior to the start of the movie) with a touch of a button and may use the refunded amount transferred to your Cinescape wallet at any other time (no expiry date).",
        "answer_ar": "يتيح لك الحساب الاطلاع على سجل حجوزاتك بالكامل، ويمكنك أيضاً إلغاء حجزك (قبل بدء الفيلم بساعتين على الأقل) بضغطة زر، واستخدام المبلغ المُسترَد المُحوَّل إلى محفظة سينسكيب الخاصة بك في أي وقت آخر (دون تاريخ انتهاء)."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "f3a01006-3333-4333-8333-000000000006",
      "data": {
        "category": "Cinescape Account & Booking",
        "question_en": "I forgot my username and/or password. What can I do?",
        "question_ar": "نسيت اسم المستخدم و/أو كلمة المرور. ماذا أفعل؟",
        "answer_en": "Choose the \"forgot password\" option and enter your email address, otherwise contact 1803456 for further assitance",
        "answer_ar": "اختر خيار «نسيت كلمة المرور» وأدخل بريدك الإلكتروني، وإلا فاتصل بالرقم 1803456 لمزيد من المساعدة"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "f3a01007-3333-4333-8333-000000000007",
      "data": {
        "category": "Cinescape Account & Booking",
        "question_en": "When do bookings usually open for new releases and coming soon movies?",
        "question_ar": "متى تُفتح عادةً الحجوزات للأفلام الجديدة والأفلام القادمة؟",
        "answer_en": "Movies are released every Thursday through the year (cinemas only close during the last 10 days of Ramadan), and bookings become available every Monday/Tuesday in the app/website/box office. In some cases, advance bookings can be available prior to the release of the movie (a week or more).",
        "answer_ar": "تُطرح الأفلام كل يوم خميس على مدار السنة (تُغلق دور العرض فقط خلال آخر 10 أيام من رمضان)، وتُفتح الحجوزات كل اثنين/ثلاثاء في التطبيق/الموقع/شباك التذاكر. في بعض الحالات، قد تُتاح الحجوزات المسبقة قبل طرح الفيلم (بأسبوع أو أكثر)."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "f3a01008-3333-4333-8333-000000000008",
      "data": {
        "category": "Cinescape Account & Booking",
        "question_en": "Can I cancel my booking?",
        "question_ar": "هل يمكنني إلغاء حجزي؟",
        "answer_en": "In case you booked through your account in the app/website, you may head to \"my bookings\" section and cancel the tickets, the amount will be refunded immediately to your Cinescape Wallet with no expiry date.\n\nIn case you booked using the guest sign-in feature in the app/website, you may create a Cinescape account and then contact 1803456 for further assistance in cancelling your tickets (Working hours can be found in the contact us tab).\n\nIn case you booked through the box office, you may head to the nearest box office to cancel your ticket.\n\nAll the above are accepted if done at least 2 hours prior to the start of the movie.",
        "answer_ar": "إذا حجزت عبر حسابك في التطبيق/الموقع، يمكنك التوجّه إلى قسم «حجوزاتي» وإلغاء التذاكر، وسيتم إعادة المبلغ فوراً إلى محفظة سينسكيب الخاصة بك دون تاريخ انتهاء.\n\nإذا حجزت باستخدام خاصية الدخول كضيف في التطبيق/الموقع، يمكنك إنشاء حساب سينسكيب ثم الاتصال بالرقم 1803456 للحصول على مزيد من المساعدة في إلغاء تذاكرك (ساعات العمل موجودة في تبويب «اتصل بنا»).\n\nإذا حجزت عبر شباك التذاكر، يمكنك التوجّه إلى أقرب شباك تذاكر لإلغاء تذكرتك.\n\nكل ما سبق يُقبل إذا تم قبل بدء الفيلم بساعتين على الأقل."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "f3a01009-3333-4333-8333-000000000009",
      "data": {
        "category": "Cinescape Account & Booking",
        "question_en": "How to know if my booking is successful/confirmed?",
        "question_ar": "كيف أعرف إذا كان حجزي ناجحاً/مؤكداً؟",
        "answer_en": "A confirmation message will be displayed on your device with your booking details, and an email will be sent to your email address of the confirmation and your Booking ID & QR code.\n\nIf booked through a Cinescape account, details can be found in \"my bookings\" section of the app/website.\n\nYou may verify your booking at the cinema entrance by the QR code or a printed ticket.",
        "answer_ar": "ستظهر رسالة تأكيد على جهازك تحتوي على تفاصيل حجزك، وسيُرسَل بريد إلكتروني إلى عنوانك بالتأكيد وبرقم الحجز ورمز QR.\n\nإذا حجزت عبر حساب سينسكيب، يمكنك العثور على التفاصيل في قسم «حجوزاتي» على التطبيق/الموقع.\n\nيمكنك التحقق من حجزك عند مدخل السينما عبر رمز QR أو تذكرة مطبوعة."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "f3a01010-3333-4333-8333-000000000010",
      "data": {
        "category": "Cinescape Account & Booking",
        "question_en": "Can I book a whole cinema theatre for a private event?",
        "question_ar": "هل يمكنني حجز قاعة سينما كاملة لفعالية خاصة؟",
        "answer_en": "Private bookings are available for all theaters in Cinescape, starting from 168 KD, for further assistance you may contact 1803456 (Working hours can be found in the contact us tab).",
        "answer_ar": "تتوفر الحجوزات الخاصة لجميع قاعات سينسكيب ابتداءً من 168 د.ك، ولمزيد من المساعدة يمكنك الاتصال بالرقم 1803456 (ساعات العمل موجودة في تبويب «اتصل بنا»)."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "f3a01011-3333-4333-8333-000000000011",
      "data": {
        "category": "Cancellation & Refunds",
        "question_en": "How do refunds work?",
        "question_ar": "كيف تعمل عمليات الاسترجاع؟",
        "answer_en": "Card payments are credited as electronic balance to your Cinescape Wallet with no expiry date — not refunded to the original card. The balance can be used for any future booking.",
        "answer_ar": "تُقيَّد مدفوعات البطاقات البنكية كرصيد إلكتروني في محفظة سينسكيب دون تاريخ انتهاء — ولا تُعاد إلى البطاقة الأصلية. يمكن استخدام الرصيد في أي حجز مستقبلي."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "f3a01012-3333-4333-8333-000000000012",
      "data": {
        "category": "Cancellation & Refunds",
        "question_en": "Are food orders refundable?",
        "question_ar": "هل الطلبات الغذائية قابلة للاسترجاع؟",
        "answer_en": "Food orders are refundable on the same day only if 'Prepare Your Order' has not been clicked, and the order has not been prepared or received. After that, no refund or exchange.",
        "answer_ar": "الطلبات الغذائية قابلة للاسترجاع في نفس اليوم فقط إذا لم يُضغط زر «تجهيز الطلب» ولم يتم تحضير الطلب أو استلامه. بعد ذلك لا استرجاع ولا استبدال."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "f3a01013-3333-4333-8333-000000000013",
      "data": {
        "category": "Accessibility",
        "question_en": "Is there any benefit for wheelchair users?",
        "question_ar": "هل توجد مزايا لمستخدمي الكراسي المتحركة؟",
        "answer_en": "Customers with special needs (wheelchair users) receive free entry to the screens on presentation of a valid disability card issued by the Public Authority for the Disabled in Kuwait, provided a designated wheelchair space is available in the hall.",
        "answer_ar": "يحصل العملاء من ذوي الاحتياجات الخاصة (مستخدمو الكراسي المتحركة) على دخول مجاني إلى الصالات عند تقديم بطاقة إعاقة سارية صادرة عن الهيئة العامة لشؤون ذوي الإعاقة بدولة الكويت، شريطة توفر مكان مخصّص للكرسي المتحرك داخل القاعة."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "f3a01015-3333-4333-8333-000000000015",
      "data": {
        "category": "4DX",
        "question_en": "Who cannot watch 4DX?",
        "question_ar": "من غير المسموح له بمشاهدة 4DX؟",
        "answer_en": "Pregnant women, people weighing over 120 kg, viewers with heart/back/neck problems, those with motion sickness, and the elderly.",
        "answer_ar": "النساء الحوامل، من يزيد وزنهم عن 120 كجم، من يعانون من مشاكل في القلب أو الظهر أو الرقبة، من يعانون من دوار الحركة، وكبار السن."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "f3a01016-3333-4333-8333-000000000016",
      "data": {
        "category": "4DX",
        "question_en": "Can children watch 4DX?",
        "question_ar": "هل يمكن للأطفال مشاهدة 4DX؟",
        "answer_en": "Children may enter 4DX if they are over 4 years old AND at least 100 cm tall.",
        "answer_ar": "يُسمح للأطفال بدخول 4DX إذا كان عمرهم فوق 4 سنوات وطولهم لا يقل عن 100 سم."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "f3a01017-3333-4333-8333-000000000017",
      "data": {
        "category": "4DX",
        "question_en": "What should I know about the 4DX experience?",
        "question_ar": "ماذا يجب أن أعرف عن تجربة 4DX؟",
        "answer_en": "Seats have flashing lights, smoke and scents, strong vibrations, and water spray. Hot beverages are not allowed inside 4DX theaters.",
        "answer_ar": "تشمل المقاعد أضواء وماضة، دخان وروائح، اهتزازات قوية، ورذاذ ماء. يُمنع إدخال المشروبات الساخنة داخل قاعات 4DX."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "f3a01018-3333-4333-8333-000000000018",
      "data": {
        "category": "Age & Entry",
        "question_en": "What age rules apply?",
        "question_ar": "ما هي قواعد الفئات العمرية؟",
        "answer_en": "Cinescape complies with Ministry of Information resolutions No. 30 of 2016 and No. 3 of 2025. Customers younger than the movie's age rating will not be admitted, and tickets are not refunded in that case.",
        "answer_ar": "يلتزم سينسكيب بقرارات وزارة الإعلام رقم 30 لسنة 2016 ورقم 3 لسنة 2025. لا يُسمح بدخول من هم دون التصنيف العمري للفيلم، ولا تُسترد قيمة التذاكر في هذه الحالة."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "f3a01019-3333-4333-8333-000000000019",
      "data": {
        "category": "Age & Entry",
        "question_en": "Are there free-entry exceptions for kids?",
        "question_ar": "هل توجد استثناءات للدخول المجاني للأطفال؟",
        "answer_en": "Children under 3 get free entry on Tuesdays only at Cinescape Ajyal — one child per parent, sharing the parent's seat, for G or PG rated films only.",
        "answer_ar": "الأطفال دون 3 سنوات يحصلون على دخول مجاني يوم الثلاثاء فقط في سينسكيب أجيال — طفل واحد لكل ولي أمر يشارك مقعد ولي الأمر، للأفلام المصنفة G أو PG فقط."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "f3a01020-3333-4333-8333-000000000020",
      "data": {
        "category": "Pricing & Promotions",
        "question_en": "Are there any discount days?",
        "question_ar": "هل توجد أيام خصم؟",
        "answer_en": "50% off every Monday on all cinema experiences — excluding VIP and Skyline.",
        "answer_ar": "خصم 50% كل يوم اثنين على كافة تجارب السينما — باستثناء تذاكر VIP وسكايلاين."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "f3a01021-3333-4333-8333-000000000021",
      "data": {
        "category": "Pricing & Promotions",
        "question_en": "Can I upgrade my ticket?",
        "question_ar": "هل يمكنني ترقية تذكرتي؟",
        "answer_en": "Yes — tickets can be upgraded to a higher category (Regular → Premium → VIP) any time before the show, subject to availability. Not valid with any promotional offer.",
        "answer_ar": "نعم — يمكن ترقية التذكرة إلى فئة أعلى (عادي → بريميوم → VIP) في أي وقت قبل العرض حسب التوفر. غير صالح مع أي عرض ترويجي."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "f3a01022-3333-4333-8333-000000000022",
      "data": {
        "category": "Contact",
        "question_en": "How do I contact Cinescape?",
        "question_ar": "كيف أتواصل مع سينسكيب؟",
        "answer_en": "Call Center: 180-3456 (also 180-FILM). Email: ask@cinescape.com.kw. Contact form: https://www.cinescape.com.kw/contactus. WhatsApp is also available via the 180-3456 line.",
        "answer_ar": "مركز الاتصال: 180-3456 (أو 180-FILM). البريد: ask@cinescape.com.kw. نموذج التواصل: https://www.cinescape.com.kw/contactus. كما يتوفر واتساب عبر رقم 180-3456."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    }
  ],
  "intents": [
    {
      "id": "i4a01001-4444-4444-8444-000000000001",
      "data": {
        "name": "now_showing",
        "description": "User wants to see what movies are currently playing.",
        "ai_instructions": "Call POST /api/content/nowshowing. Return movie titles, MOI Law 4/2025 age ratings (G, PG 12, PG 15, R 15, R 18), and runtime. New movies release every Thursday year-round (cinemas close only during the last 10 days of Ramadan); bookings open every Monday/Tuesday. If user mentions a cinema or location, follow up with cinemas + showtimes."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "i4a01002-4444-4444-8444-000000000002",
      "data": {
        "name": "find_cinema",
        "description": "User wants the nearest or a specific Cinescape cinema, or wants to filter by experience (Standard, ELEVEN, IMAX, Dolby Cinema, ScreenX, 4DX, 4DXScreen, VIP, Skyline).",
        "ai_instructions": "Call GET /api/content/cinemas?bookType=...&latitude=...&longitude=... If user mentions an experience, filter on the `exps` array of the cinema response. Ticket prices per FAQ (KWD): Standard/ELEVEN 3.5 (4.0 Premium); IMAX 4.0 (4.5 Premium); Dolby Cinema 4.5; ScreenX 4.5; 4DX / 4DXScreen / VIP 8.0."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "i4a01003-4444-4444-8444-000000000003",
      "data": {
        "name": "get_showtimes",
        "description": "User wants showtimes for a movie at a cinema on a specific date.",
        "ai_instructions": "Call POST /api/content/msessionsnew with body { mid, dated, cinemaIds }. If date is missing, ask for it (default to today only if user implied it)."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "i4a01004-4444-4444-8444-000000000004",
      "data": {
        "name": "book_seats",
        "description": "User wants to reserve specific seats for a showtime.",
        "ai_instructions": "Sequence: POST /api/content/trans/seatlayout to fetch the seat map, then POST /api/content/trans/reserveseats. Note: a confirmed booking requires payment to complete (handled outside the bot). Remind the user that family seating rules apply (Family seats restricted to females or mixed groups staying together)."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "i4a01005-4444-4444-8444-000000000005",
      "data": {
        "name": "cancel_booking",
        "description": "User wants to cancel a confirmed booking.",
        "ai_instructions": "Eligibility: cancellation is allowed up to 2 hours before showtime. Path by channel: (a) booked through app/website account → \"My Bookings\" → cancel (amount refunded immediately to Cinescape Wallet, no expiry); (b) booked as guest in app/website → user must create an account, then contact 180-3456 for assistance; (c) booked at box office → visit the nearest box office. Refund routing: card payments → electronic balance in Cinescape Wallet, NOT refunded to the original card. If under 2hrs OR food order with 'Prepare Your Order' clicked → not refundable, escalate."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "i4a01006-4444-4444-8444-000000000006",
      "data": {
        "name": "refund_status",
        "description": "User asks where their refund is.",
        "ai_instructions": "Refunds for card payments are credited as electronic balance in the customer's Cinescape Wallet (no expiry date) — they are NEVER refunded to the original bank card. If the customer expects a card refund, gently correct and explain they can use the wallet balance for any future booking. Escalate if the wallet balance is missing."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "i4a01007-4444-4444-8444-000000000007",
      "data": {
        "name": "fourdx_eligibility",
        "description": "User asks who can watch 4DX.",
        "ai_instructions": "Prohibited: pregnant, elderly, heart/back/neck issues, motion sickness, over 120 kg. Conditional: children must be over 4 yrs AND at least 100 cm tall. Always remind hot beverages are not allowed in 4DX. If unsafe, escalate to branch staff."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "i4a01008-4444-4444-8444-000000000008",
      "data": {
        "name": "private_show",
        "description": "User wants to book a whole theater (birthday, school trip, corporate event).",
        "ai_instructions": "Private bookings are available for all Cinescape theaters starting from 168 KWD. Hand off to Customer Care at 180-3456 to arrange. Private-show rules: cancellation must be 24+ hours before showtime; no outside food/drinks except birthday cakes; no candles, helium balloons, confetti, or confetti cannons; age ratings still apply."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "i4a01009-4444-4444-8444-000000000009",
      "data": {
        "name": "monday_discount",
        "description": "User asks about discount day(s).",
        "ai_instructions": "Monday = 50% off all cinema experiences EXCEPT VIP and Skyline. Not stackable with other promotions. Direct user to book through app/website."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "i4a01010-4444-4444-8444-000000000010",
      "data": {
        "name": "account_recovery",
        "description": "User can't log in (forgot password and/or username).",
        "ai_instructions": "Direct the user to the \"forgot password\" option on the login page and ask them to enter their registered email. If that doesn't work, escalate to the Call Center (180-3456). Never collect or echo passwords in chat."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    }
  ],
  "partners": [
    {
      "id": "p5a01001-5555-4555-8555-000000000001",
      "data": {
        "name": "NBK (National Bank of Kuwait)",
        "type": "Bank",
        "notes_en": "Bank promotion with its own T&Cs. See https://www.cinescape.com.kw/promotion/7. NBK card holders get specific Cinescape offers — terms set by NBK.",
        "notes_ar": "عرض بنكي وفقاً لشروطه الخاصة. راجع https://www.cinescape.com.kw/promotion/7. يحصل حاملو بطاقات الوطني على عروض خاصة من سينسكيب وفق شروط البنك."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "p5a01002-5555-4555-8555-000000000002",
      "data": {
        "name": "Gulf Bank",
        "type": "Bank",
        "notes_en": "Bank promotion with its own T&Cs. See https://www.cinescape.com.kw/promotion/11. Gulf Bank card holders get specific Cinescape offers — terms set by the bank.",
        "notes_ar": "عرض بنكي وفقاً لشروطه الخاصة. راجع https://www.cinescape.com.kw/promotion/11. يحصل حاملو بطاقات بنك الخليج على عروض خاصة من سينسكيب وفق شروط البنك."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "p5a01003-5555-4555-8555-000000000003",
      "data": {
        "name": "Cinescape Club Card",
        "type": "Loyalty",
        "notes_en": "Cinescape's loyalty wallet. Used for booking, recharge codes (sold at any cinema or online), and as the destination for refund credits on Club Card payments.",
        "notes_ar": "محفظة الولاء الخاصة بسينسكيب. تُستخدم للحجز ولرموز الشحن (التي تُباع في أي فرع أو عبر الإنترنت)، وهي وجهة الرصيد المسترجع لمدفوعات بطاقة الولاء."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "p5a01004-5555-4555-8555-000000000004",
      "data": {
        "name": "Public Authority for the Disabled (PAD) — Kuwait",
        "type": "Corporate",
        "notes_en": "Holders of a valid PAD-issued disability card (wheelchair users) receive free entry to screens where a designated wheelchair space is available in the hall.",
        "notes_ar": "يحصل حاملو بطاقة الإعاقة السارية الصادرة من الهيئة العامة لشؤون ذوي الإعاقة (مستخدمو الكراسي المتحركة) على دخول مجاني إلى الصالات عند توفر مكان مخصّص للكرسي المتحرك داخل القاعة."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    }
  ],
  "policy_matrix": [
    {
      "id": "m6a01001-6666-4666-8666-000000000001",
      "data": {
        "scenario_en": "Cancellation window",
        "scenario_ar": "نافذة الإلغاء",
        "policy_en": "Cancellation is allowed up to 2 hours before the show starts. After that window, the booking is non-refundable and non-cancellable.",
        "policy_ar": "يُسمح بالإلغاء حتى ساعتين قبل بدء العرض. بعد هذه المدة، يصبح الحجز غير قابل للاسترجاع أو الإلغاء.",
        "exception_en": "If Cinescape causes the issue (movie cancelled, booked meal unavailable), the customer is entitled to a refund or an electronic balance/voucher of equal value.",
        "exception_ar": "في حال كان الخلل من قِبل الشركة (إلغاء فيلم، عدم توفر الوجبة المحجوزة)، يحق للعميل استرداد المبلغ أو الحصول على رصيد إلكتروني/قسيمة بنفس القيمة."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01002-6666-4666-8666-000000000002",
      "data": {
        "scenario_en": "Refund routing — card payments",
        "scenario_ar": "توجيه الاسترجاع — مدفوعات البطاقات البنكية",
        "policy_en": "Card payments are NOT refunded to the original card. The amount is credited as electronic balance to the customer's Cinescape wallet / loyalty card and can be used for future bookings.",
        "policy_ar": "لا تُسترد مدفوعات البطاقات البنكية إلى البطاقة الأصلية. يُقيَّد المبلغ كرصيد إلكتروني في محفظة سينسكيب / بطاقة الولاء الخاصة بالعميل، ويمكن استخدامه في الحجوزات المستقبلية."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01003-6666-4666-8666-000000000003",
      "data": {
        "scenario_en": "Food orders — refundability",
        "scenario_ar": "الطلبات الغذائية — قابلية الاسترجاع",
        "policy_en": "Food orders are refundable on the same day only if 'Prepare Your Order' has not been clicked, the order has not been requested at the counter, and has not been received. Once 'Prepare Your Order' is clicked, no refund or exchange.",
        "policy_ar": "الطلبات الغذائية قابلة للاسترجاع في نفس يوم الحجز فقط إذا لم يُضغط زر «تجهيز الطلب»، ولم يُطلب التحضير في الكاونتر، ولم يُستلم. بمجرد الضغط على «تجهيز الطلب» لا استرجاع ولا استبدال.",
        "exception_en": "If a prepared order is delayed, the customer must collect within 30 minutes; Cinescape is not responsible for hot/cold quality after that. Order numbers disappear from the lobby screen 1 hour after preparation.",
        "exception_ar": "إذا تأخر استلام الطلب المُحضَّر، يجب الاستلام خلال 30 دقيقة؛ ولا تتحمل الشركة المسؤولية عن سخونة/برودة الطعام بعد ذلك. تُزال أرقام الطلبات من شاشة اللوبي بعد ساعة من التحضير."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01004-6666-4666-8666-000000000004",
      "data": {
        "scenario_en": "Age classification & verification",
        "scenario_ar": "التصنيف العمري والتحقق",
        "policy_en": "Cinescape complies with MOI Decisions 30/2016 and 3/2025. Customers younger than a movie's rating are not admitted, and tickets are NOT refunded. Verification is by civil ID, passport, or any official photo ID showing date of birth.",
        "policy_ar": "يلتزم سينسكيب بقراري وزارة الداخلية رقم 30/2016 و3/2025. لا يُسمح بدخول من هم دون التصنيف العمري للفيلم، ولا تُسترد قيمة التذاكر. يتم التحقق عبر الهوية المدنية، جواز السفر، أو أي مستند رسمي يحمل صورة وتاريخ ميلاد.",
        "exception_en": "Children under 3 get free entry on Tuesdays only at Cinescape Ajyal, one child per parent sharing the parent's seat, for G/PG rated films only.",
        "exception_ar": "الأطفال دون 3 سنوات يحصلون على دخول مجاني يوم الثلاثاء فقط في سينسكيب أجيال، طفل واحد لكل ولي أمر يشارك مقعد ولي الأمر، وللأفلام المصنفة G أو PG فقط."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01005-6666-4666-8666-000000000005",
      "data": {
        "scenario_en": "Seat categories",
        "scenario_ar": "فئات المقاعد",
        "policy_en": "Family: females (individual/groups) or mixed-age groups who stay together. General: all (M/F, all ages). VIP: all (M/F, all ages). Skyline & VIP are excluded from the Monday 50% discount. Seat changes after booking are prohibited.",
        "policy_ar": "عائلية: للإناث (فردي/مجموعات) أو مجموعات مختلطة من جميع الأعمار يظلون سوياً. عامة: للجميع (ذكوراً وإناثاً، جميع الأعمار). VIP: للجميع. تذاكر سكايلاين و VIP مستثناة من خصم الاثنين 50%. تغيير المقاعد بعد الحجز ممنوع.",
        "exception_en": "Cinescape may re-seat customers in the public interest after booking.",
        "exception_ar": "يحق لسينسكيب تغيير مقاعد العملاء بعد الحجز إذا اقتضت المصلحة العامة."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01006-6666-4666-8666-000000000006",
      "data": {
        "scenario_en": "4DX safety restrictions",
        "scenario_ar": "اشتراطات سلامة 4DX",
        "policy_en": "Prohibited: pregnant women, elderly, people with heart/back/neck problems, motion sickness, anyone over 120 kg. Conditional: children must be over 4 years AND at least 100 cm tall. Hot beverages are not allowed inside 4DX theaters (they spill when seats move).",
        "policy_ar": "غير مسموح: النساء الحوامل، كبار السن، من يعانون من مشاكل قلب/ظهر/رقبة، دوار الحركة، من يزيد وزنهم عن 120 كجم. مشروط: الأطفال فوق 4 سنوات وبطول لا يقل عن 100 سم. المشروبات الساخنة ممنوعة داخل قاعات 4DX (تنسكب مع حركة المقاعد)."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01007-6666-4666-8666-000000000007",
      "data": {
        "scenario_en": "Smoking & e-cigarettes",
        "scenario_ar": "التدخين والسجائر الإلكترونية",
        "policy_en": "Per Article 56 of Environmental Protection Law 42/2014, all forms of smoking — including tobacco cigarettes, e-cigarettes, e-shisha, or any similar device — are strictly prohibited inside all enclosed spaces, including movie theaters.",
        "policy_ar": "وفقاً للمادة 56 من قانون حماية البيئة 42/2014، يُمنع منعاً باتاً التدخين بأي وسيلة (سجائر تبغ، سجائر إلكترونية، شيشة إلكترونية، أو أي جهاز مشابه) داخل جميع الأماكن المغلقة بما فيها دور العرض."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01008-6666-4666-8666-000000000008",
      "data": {
        "scenario_en": "Photography & recording inside theaters",
        "scenario_ar": "التصوير والتسجيل داخل الصالات",
        "policy_en": "Photography or video recording is strictly prohibited inside theaters without prior written approval from KNCC management. Recording or copying any part of a film during screening is an intellectual property violation and exposes the offender to legal action.",
        "policy_ar": "يُمنع منعاً باتاً التصوير الفوتوغرافي أو الفيديو داخل صالات العرض دون موافقة خطية مسبقة من إدارة الشركة. تسجيل أو نسخ أي جزء من الفيلم أثناء عرضه يُعد انتهاكاً لحقوق الملكية الفكرية ويُعرّض مرتكبه للمساءلة القانونية."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01009-6666-4666-8666-000000000009",
      "data": {
        "scenario_en": "Outside food & beverages",
        "scenario_ar": "الأطعمة والمشروبات من الخارج",
        "policy_en": "Only food and beverages purchased from KNCC outlets are permitted inside the cinema.",
        "policy_ar": "يُسمح فقط بإدخال الأطعمة والمشروبات المشتراة من منافذ بيع الشركة.",
        "exception_en": "For private shows, outside food/beverages are not permitted EXCEPT birthday cakes. Candles, helium balloons, confetti, and confetti cannons are strictly prohibited.",
        "exception_ar": "في العروض الخاصة، يُمنع إدخال الأطعمة والمشروبات من الخارج باستثناء كعكات أعياد الميلاد. يُمنع منعاً باتاً استخدام الشموع، البالونات بالهيليوم، القصاصات، أو مدافع القصاصات."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01010-6666-4666-8666-000000000010",
      "data": {
        "scenario_en": "Gift cards — expiry",
        "scenario_ar": "بطاقات الهدايا — الصلاحية",
        "policy_en": "All gift cards expire one year from the date of purchase. After expiry, the remaining amount cannot be refunded, extended, or exchanged.",
        "policy_ar": "تنتهي صلاحية كل بطاقات الهدايا بعد سنة واحدة من تاريخ الشراء. بعد انتهاء الصلاحية لا يمكن استرداد الرصيد المتبقي أو تمديده أو استبداله."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01011-6666-4666-8666-000000000011",
      "data": {
        "scenario_en": "Skyline experience — refundability",
        "scenario_ar": "تجربة سكايلاين — الاسترجاع",
        "policy_en": "All food and beverages ordered as part of the Skyline Experience are non-refundable after booking and payment.",
        "policy_ar": "جميع المأكولات والمشروبات ضمن تجربة سكايلاين غير قابلة للاسترجاع بعد إتمام الحجز والدفع.",
        "exception_en": "Force majeure circumstances that suspend or cancel the experience entitle customers to compensation per Cinescape policy.",
        "exception_ar": "في حال ظروف قاهرة تؤدي إلى توقف أو إلغاء التجربة، يحق للعملاء المطالبة بالتعويض وفقاً لسياسة الشركة."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01012-6666-4666-8666-000000000012",
      "data": {
        "scenario_en": "Lost / damaged personal property",
        "scenario_ar": "فقد أو تلف الممتلكات الشخصية",
        "policy_en": "Cinescape is NOT responsible for lost or damaged personal property inside theaters or any of its facilities. Customers are fully responsible for their own belongings.",
        "policy_ar": "لا تتحمل الشركة بأي حال من الأحوال مسؤولية فقد أو تلف الممتلكات الشخصية للعملاء داخل صالات العرض أو أي من مرافقها. يكون العميل مسؤولاً عن ممتلكاته الشخصية بالكامل."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01013-6666-4666-8666-000000000013",
      "data": {
        "scenario_en": "Private show — cancellation",
        "scenario_ar": "العروض الخاصة — الإلغاء",
        "policy_en": "Private show cancellations may be made up to 24 hours before the scheduled showtime. No refunds for cancellations within 24 hours of the show.",
        "policy_ar": "يمكن إلغاء العروض الخاصة قبل 24 ساعة من الموعد المحدد. لا تُسترد المبالغ في حال الإلغاء خلال أقل من 24 ساعة من موعد العرض."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01014-6666-4666-8666-000000000014",
      "data": {
        "scenario_en": "Wallet / loyalty account — data updates",
        "scenario_ar": "المحفظة / حساب الولاء — تحديث البيانات",
        "policy_en": "Customers are responsible for keeping personal info (name, email, phone) up to date via their account page, customer service desks, or the call center. Cinescape disclaims liability for missed notifications due to outdated info.",
        "policy_ar": "يتحمّل العميل مسؤولية تحديث بياناته الشخصية (الاسم، البريد، الهاتف) عبر الحساب الشخصي على الموقع أو من خلال مكاتب خدمة العملاء أو مركز الاتصال. وتخلي الشركة مسؤوليتها عن أي إشعار يفوت بسبب بيانات غير محدثة."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    }
  ],
  "promotions": [
    {
      "id": "r7a01001-7777-4777-8777-000000000001",
      "data": {
        "name": "Monday 50% off",
        "type": "Promo",
        "message_en": "🎬 50% off every Monday on all cinema experiences. Excludes VIP and Skyline. Not valid with any other promotional offer or upgrade.",
        "message_ar": "🎬 خصم 50% كل يوم اثنين على كافة تجارب السينما. لا يشمل تذاكر VIP وسكايلاين. غير صالح مع أي عرض ترويجي آخر أو مع ترقية التذكرة."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "r7a01002-7777-4777-8777-000000000002",
      "data": {
        "name": "Tuesday under-3 free entry",
        "type": "Promo",
        "message_en": "👶 Children under 3 enter free on Tuesdays — at Cinescape Ajyal only, one child per parent sharing the parent's seat, for G/PG-rated films only.",
        "message_ar": "👶 الأطفال دون 3 سنوات بدخول مجاني يوم الثلاثاء — في سينسكيب أجيال فقط، طفل واحد لكل ولي أمر يشارك مقعد ولي الأمر، وللأفلام المصنفة G أو PG فقط."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "r7a01003-7777-4777-8777-000000000003",
      "data": {
        "name": "Free entry with PAD disability card",
        "type": "Promo",
        "message_en": "♿ Customers with special needs (wheelchair users) receive free entry to the screens on presentation of a valid disability card issued by the Public Authority for the Disabled in Kuwait, provided a designated wheelchair space is available in the hall.",
        "message_ar": "♿ يحصل العملاء من ذوي الاحتياجات الخاصة (مستخدمو الكراسي المتحركة) على دخول مجاني إلى الصالات عند تقديم بطاقة إعاقة سارية من الهيئة العامة لشؤون ذوي الإعاقة بدولة الكويت، شريطة توفر مكان مخصّص للكرسي المتحرك داخل القاعة."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "r7a01004-7777-4777-8777-000000000004",
      "data": {
        "name": "NBK card promotion",
        "type": "Bank",
        "message_en": "🏦 NBK card holders enjoy a Cinescape promotion — terms and conditions set by NBK. Details: https://www.cinescape.com.kw/promotion/7",
        "message_ar": "🏦 يحصل حاملو بطاقات بنك الكويت الوطني على عرض سينسكيب — يخضع لشروط وأحكام البنك. التفاصيل: https://www.cinescape.com.kw/promotion/7"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "r7a01005-7777-4777-8777-000000000005",
      "data": {
        "name": "Gulf Bank card promotion",
        "type": "Bank",
        "message_en": "🏦 Gulf Bank card holders enjoy a Cinescape promotion — terms and conditions set by Gulf Bank. Details: https://www.cinescape.com.kw/promotion/11",
        "message_ar": "🏦 يحصل حاملو بطاقات بنك الخليج على عرض سينسكيب — يخضع لشروط وأحكام البنك. التفاصيل: https://www.cinescape.com.kw/promotion/11"
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "r7a01006-7777-4777-8777-000000000006",
      "data": {
        "name": "Ticket upgrade",
        "type": "Promo",
        "message_en": "⬆️ Upgrade your ticket to a higher category (Regular → Premium → VIP) any time before the show, subject to availability. Not valid with any other promotional offer.",
        "message_ar": "⬆️ يمكنك ترقية تذكرتك إلى فئة أعلى (عادي → بريميوم → VIP) في أي وقت قبل العرض حسب التوفر. غير صالح مع أي عرض ترويجي آخر."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    }
  ]
};
