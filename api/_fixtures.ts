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
        "key": "category",
        "type": "text",
        "label": "Category",
        "required": false,
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
        "key": "category",
        "type": "text",
        "label": "Category",
        "required": false,
        "localized": false
      },
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
        "category": "Conversational Intent",
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
        "category": "Conversational Intent",
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
        "category": "Conversational Intent",
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
        "category": "Conversational Intent",
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
        "category": "Conversational Intent",
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
        "category": "Conversational Intent",
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
        "category": "Conversational Intent",
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
        "category": "Conversational Intent",
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
        "category": "Conversational Intent",
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
        "category": "Conversational Intent",
        "description": "User can't log in (forgot password and/or username).",
        "ai_instructions": "Direct the user to the \"forgot password\" option on the login page and ask them to enter their registered email. If that doesn't work, escalate to the Call Center (180-3456). Never collect or echo passwords in chat."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "i4a01011-4444-4444-8444-000000000011",
      "data": {
        "category": "API",
        "name": "booking_flow_overview",
        "description": "The end-to-end sequence of Cinescape API calls that power a ticket booking.",
        "ai_instructions": "A full booking traverses six ordered steps: (1) fetch movies via POST /api/content/nowshowing, (2) fetch cinemas via GET /api/content/cinemas, (3) fetch showtimes via POST /api/content/msessionsnew, (4) fetch seat layout via POST /api/content/trans/seatlayout, (5) reserve seats via POST /api/content/trans/reserveseats, and (6) hand off to payment. Each step's outputs feed the next (a movie's id -> mid, a cinema's id -> cinemaIds, a session's sessionId -> seatlayout input). Do not skip steps: the seat layout must be fetched before seats can be reserved, and reservation must succeed before payment begins. If a step fails, stop and surface the error rather than fabricating downstream values."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "i4a01012-4444-4444-8444-000000000012",
      "data": {
        "category": "API",
        "name": "base_url_and_auth",
        "description": "Base URL, required headers, and authentication scheme for the Cinescape API.",
        "ai_instructions": "The documented base URL is https://apiuat.cinescape.com.kw/ (UAT environment). Requests carry these headers per the spec: Accept: application/json, Accept-Language: en (or ar for Arabic content), appversion: 15.15, platform: IOS, and Authorization: Bearer. The doc lists 'Authorization: Bearer' but does not specify how the token is obtained or rotated; escalate if the agent needs to authenticate a real request. There is no documented production base URL in this spec."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "i4a01013-4444-4444-8444-000000000013",
      "data": {
        "category": "API",
        "name": "fetch_now_showing",
        "description": "Endpoint for retrieving currently running movies.",
        "ai_instructions": "Call POST /api/content/nowshowing with an empty JSON body ({}). The response wraps a code (10001 on success), msg, result, and output. The output contains nowshowing (array of movies), comingsoon, alllanguages (English, Arabic, Hindi), genreList, experiences (STANDARD, VIP, IMAX, 4DX, 3D, DOLBY, ELEVEN, SCREENX, SKYLINE), movieTimings (1 Morning 11:00-12:00, 2 After Noon 12:00-17:00, 3 Evening 17:00-20:00, 4 Night 20:00-23:00, 5 Late Night 23:00-06:00), and cinemas. Each movie object exposes id (HO-prefixed, e.g. HO00002440), hOFilmCode (A-prefixed), title/titleAlt, language/languageAlt, subTitle/subTitleAlt, genre, rating (R15/R18/etc), runTime (minutes) and runTimeStr, movieCinemas (array of cinema ids where it plays), movieExperience, openingDate (format '12 Sep 2024'), synopsis/synopsisAlt, trailerUrl, and shareUrl."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "i4a01014-4444-4444-8444-000000000014",
      "data": {
        "category": "API",
        "name": "fetch_cinemas",
        "description": "Endpoint for listing cinema locations with optional filtering.",
        "ai_instructions": "Call GET /api/content/cinemas with query params bookType, latitude, and longitude. The sample request is /api/content/cinemas?bookType=FOOD&latitude=28.560. The only bookType value demonstrated in the spec is FOOD (food-order flow); other possible values are not documented — escalate if the user needs a non-food bookType. latitude/longitude are used for proximity filtering but the spec does not state whether they are required or how distance ranking is computed. Each cinema in output.cinemas has id (10-digit zero-padded, e.g. 0000000001 = Cinescape 360, 0000000008 = Cinescape Avenues, 0000000015 = Cinescape Khairan, 0000000019 = Cinescape Al-Kout), name/nameAlt, address1/address1Ar, latitude, longitude, active (1=open, 0=hidden), exps (supported experiences such as VIP, IMAX, 4DX, DOLBY, SCREENX, ELEVEN, SKYLINE), food flag, foodEnable, foodStartTime/foodEndTime, workingHours, currencyCode (KWD), and image URLs (appImageUrl, webThumbImageUrl, etc.)."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "i4a01015-4444-4444-8444-000000000015",
      "data": {
        "category": "API",
        "name": "cinema_id_conventions",
        "description": "How cinema IDs are encoded in API responses and requests.",
        "ai_instructions": "Cinema IDs are 10-character zero-padded numeric strings (e.g. 0000000001, 0000000008, 0000000015, 0000000019, 0000000020). Known active IDs from the sample response: 0000000001 Cinescape 360 (360 Mall, Zahra), 0000000008 Cinescape Avenues (The Avenues Mall Phase 1, Al-Rai), 0000000015 Cinescape Khairan (Al Khiran Mall). IDs seen with active=0 in the sample: 0000000002 Ajial, 0000000016 1954 Film House, 0000000017 Al-Bairaq, 0000000018 Al-Fanar, 0000000019 Al-Kout, 0000000020 Al-Muhallab, 0000000023 Marina. When passing these to msessionsnew via cinemaIds, preserve the full zero-padded form. The spec does not include a governorate field — cinema-to-governorate mapping must be derived from address1 strings (e.g. 'Al-Rai' = Farwaniya), so escalate if a structured governorate filter is needed."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "i4a01016-4444-4444-8444-000000000016",
      "data": {
        "category": "API",
        "name": "fetch_showtimes",
        "description": "Endpoint for retrieving session times for a movie at a given date and cinema.",
        "ai_instructions": "Call POST /api/content/msessionsnew with body { mid, dated, cinemaIds }. mid is the movie id (HO-prefixed, e.g. HO00002382). dated is the target show date in YYYY-MM-DD format (e.g. 2026-03-31). cinemaIds is the 10-char zero-padded cinema id (the spec's sample treats it as a single value; whether it accepts arrays is not documented — escalate if multiple cinemas are needed in one call). The response output contains days (a multi-week array of selectable dates, each with dt=YYYY-MM-DD, showdate='31 Mar 2026', wd short weekday or 'Today', wdf full weekday, enable 0/1), daySessions (per-cinema groupings), movie (full movie object), and each session object (under experienceSessions[].shows[] or shows[]) exposes sessionId (integer, e.g. 228235), id ('cinemaId-sessionId' such as '0000000001-228235'), showTime (local 'HH:mm'), showtime (ISO UTC, e.g. '2026-03-31T12:00:00.000+00:00'), sessionBusinessDateStr (YYYY-MM-DD business date, may differ from calendar date for late-night shows), experience, formatCode, screenName, screenNumber, seatsAvailable, soldoutStatus, allowTicketSales, and typeCode."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "i4a01017-4444-4444-8444-000000000017",
      "data": {
        "category": "API",
        "name": "fetch_seat_layout",
        "description": "Endpoint for retrieving the seat map for a selected showtime.",
        "ai_instructions": "Call POST /api/content/trans/seatlayout to retrieve the seat map for a chosen session. The spec lists the endpoint but does NOT include a sample request body or a sample response — do not invent field names such as seat rows, seat statuses, or pricing tiers. At minimum the request is expected to carry the session identifier from msessionsnew (sessionId or the composite id like '0000000001-228235'), but exact param names are not documented. If the agent needs to call this endpoint, treat the request/response shape as unknown and escalate, or consult a newer version of the API documentation."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "i4a01018-4444-4444-8444-000000000018",
      "data": {
        "category": "API",
        "name": "reserve_seats",
        "description": "Endpoint for reserving the selected seats ahead of payment.",
        "ai_instructions": "Call POST /api/content/trans/reserveseats after the user has picked seats from the seat layout. The spec lists the endpoint under 'Seat & Booking APIs' but provides no sample request body, no sample response, and no field list — the documented test cases are 'seat availability' and 'concurrent booking handling', implying the call may fail if seats are taken mid-flow. Do not hallucinate field names for the request (expected to include at least sessionId and the chosen seat identifiers) or response. Treat a successful reservation as a short-lived hold that must be followed by the payment step; escalate for the hold duration since it is not documented."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "i4a01019-4444-4444-8444-000000000019",
      "data": {
        "category": "API",
        "name": "payment_handoff",
        "description": "What happens after reserveseats succeeds.",
        "ai_instructions": "The documented booking flow ends with step 6 'Payment' after reserveseats. The spec does not name a payment endpoint, gateway, or callback URL — payment is described only as the final stage that consumes a successful seat reservation. Do not invent a payment API path. If the agent needs to drive a real payment, escalate or consult a separate payments integration doc; the cinema-content API surface documented here stops at reserveseats."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "i4a01020-4444-4444-8444-000000000020",
      "data": {
        "category": "API",
        "name": "response_envelope_shape",
        "description": "Common top-level response wrapper used by every documented endpoint.",
        "ai_instructions": "Every sample response shares the same envelope: code (integer, 10001 on success in all samples), msg (string, empty on success), result ('success' on success), and output (the payload object). Consumers should branch on code and/or result rather than assuming HTTP 200 alone means success. The spec does not enumerate non-10001 codes, does not list error messages, and does not document rate limits, retry policy, or pagination — if the agent encounters a non-success code, surface msg verbatim and escalate rather than guessing the meaning."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "i4a01021-4444-4444-8444-000000000021",
      "data": {
        "category": "API",
        "name": "localization_fields",
        "description": "How bilingual (English/Arabic) content is represented across responses.",
        "ai_instructions": "Text fields come in pairs: the English/default value on the bare name (title, name, address1, synopsis, genre, subTitle, workingHours, experience, ratingDescription) and the Arabic counterpart on a suffixed key — usually 'Alt' (nameAlt, titleAlt, synopsisAlt, subTitleAlt, experienceAlt, languageAlt, ratingDescriptionAlt, workingHoursAlt) but sometimes 'Ar' (address1Ar, address2Ar, tagAr). In the raw plist-style sample dumps Arabic strings appear as \\U-escaped Unicode code points. The supported content languages listed in alllanguages are English, Arabic, and Hindi. When surfacing text to a user, select the variant matching their locale; if the Alt/Ar field is empty or '<null>', fall back to the English value rather than showing a blank."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "i4a01022-4444-4444-8444-000000000022",
      "data": {
        "category": "API",
        "name": "date_and_time_formats",
        "description": "Date and time formats the agent must produce or parse across endpoints.",
        "ai_instructions": "Requests use YYYY-MM-DD for the msessionsnew 'dated' param (e.g. 2026-03-31). Responses mix several formats that the agent must not confuse: days[].dt is YYYY-MM-DD, days[].showdate is human-readable 'DD Mon YYYY' (e.g. '31 Mar 2026'), days[].wd is a short weekday or the literal 'Today', and days[].wdf is the full weekday. Session objects carry showTime as local 'HH:mm' 24-hour (e.g. '15:00', '21:00', '00:00') and showtime as a UTC ISO timestamp with +00:00 offset (e.g. '2026-03-31T12:00:00.000+00:00'); local Kuwait time is +03:00, so a local 15:00 appears as 12:00:00.000+00:00 in the UTC field. sessionBusinessDate/sessionBusinessDateStr represent the cinema's business day and can differ from the calendar date for post-midnight shows (a 00:00 local show on 2026-03-31 still belongs to business day 2026-03-31 in the sample). openingDate uses 'DD Mon YYYY' like '12 Sep 2024'."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "i4a01023-4444-4444-8444-000000000023",
      "data": {
        "category": "Data Snapshot",
        "name": "customer_contact_volume_snapshot",
        "description": "Monthly phone + WhatsApp contact volume, May 2025 – April 2026.",
        "ai_instructions": "Total customer contacts over the 12-month window: 73,728 (Calls 66,647, WhatsApp 7,081). Key trends: WhatsApp went from 0 to 1,549/month (first non-zero month Sep 2025, reaching ~24.5% share by Apr 2026). Calls peaked at 9,280 in Jun 2025 and dropped to ~4K–5K by late 2025 — Feb 2026 is an anomalous low (1,952) that should be flagged for verification, not quoted as a baseline. Overall total volume fell from ~9K/month to ~6K/month even after WhatsApp came online — use this as the deflection-sizing target when prioritizing AI-agent coverage. Source: cinescape mind/content/contact_volume.md (+ .csv). Do not cite exact monthly numbers without re-reading the source."
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
        "category": "Terms & Conditions",
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
        "category": "Terms & Conditions",
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
        "category": "Terms & Conditions",
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
        "category": "Terms & Conditions",
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
        "category": "Terms & Conditions",
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
        "category": "Terms & Conditions",
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
        "category": "Terms & Conditions",
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
        "category": "Terms & Conditions",
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
        "category": "Terms & Conditions",
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
        "category": "Terms & Conditions",
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
        "category": "Terms & Conditions",
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
        "category": "Terms & Conditions",
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
        "category": "Terms & Conditions",
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
        "category": "Terms & Conditions",
        "scenario_en": "Wallet / loyalty account — data updates",
        "scenario_ar": "المحفظة / حساب الولاء — تحديث البيانات",
        "policy_en": "Customers are responsible for keeping personal info (name, email, phone) up to date via their account page, customer service desks, or the call center. Cinescape disclaims liability for missed notifications due to outdated info.",
        "policy_ar": "يتحمّل العميل مسؤولية تحديث بياناته الشخصية (الاسم، البريد، الهاتف) عبر الحساب الشخصي على الموقع أو من خلال مكاتب خدمة العملاء أو مركز الاتصال. وتخلي الشركة مسؤوليتها عن أي إشعار يفوت بسبب بيانات غير محدثة."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01015-6666-4666-8666-000000000015",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Authorized booking channels",
        "scenario_ar": "قنوات الحجز المعتمدة",
        "policy_en": "Movie tickets and food orders may be purchased only through the Cinescape app, website, or the company's authorized points of sale.",
        "policy_ar": "يُسمح بشراء تذاكر الأفلام والطلبات الغذائية فقط عبر تطبيق سينسكيب أو الموقع الإلكتروني أو نقاط البيع المعتمدة التابعة للشركة."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01016-6666-4666-8666-000000000016",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Guest checkout account security",
        "scenario_ar": "أمان الحساب عند الحجز كضيف",
        "policy_en": "Cinescape recommends creating an account to book smoothly; customers who book as guests are responsible for the confidentiality of their information and password, and any use of the account by a third party is at their own risk.",
        "policy_ar": "توصي سينسكيب بإنشاء حساب لإتمام الحجز بسهولة، ويتحمل العميل الذي يحجز كضيف مسؤولية الحفاظ على سرية بياناته وكلمة المرور، وأي استخدام للحساب من قبل أي طرف آخر يقع تحت مسؤوليته الشخصية."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01017-6666-4666-8666-000000000017",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Customer responsibility for booking accuracy",
        "scenario_ar": "مسؤولية العميل عن دقة بيانات الحجز",
        "policy_en": "The customer is responsible for reviewing all reservation details (date, time, theater, movie, seat category and type, and age classification) before payment. Kuwait National Cinema Company will not refund or change the reservation due to such errors.",
        "policy_ar": "يتحمل العميل مسؤولية مراجعة كافة تفاصيل الحجز (التاريخ، الوقت، دار العرض، الفيلم، فئة ونوع المقعد، والتصنيف العمري) قبل الدفع، ولن تقوم شركة السينما الكويتية الوطنية باسترجاع أو تغيير الحجز فيما يتعلق بتلك الأخطاء."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01018-6666-4666-8666-000000000018",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Point-of-sale error reporting window",
        "scenario_ar": "مهلة الإبلاغ عن أخطاء نقاط البيع",
        "policy_en": "Any error made during a reservation at points of sale or self-service machines must be reported within a maximum of 15 minutes from the time of booking. Sales staff are not responsible for informing customers of a film's age classification; that is the customer's sole responsibility.",
        "policy_ar": "يجب الإبلاغ عن أي خطأ عند الحجز عبر نقاط البيع أو الأجهزة الذاتية خلال مدة أقصاها 15 دقيقة من وقت الحجز، علماً بأن موظفي المبيعات غير مسؤولين عن إفادة العملاء بالتصنيف العمري لأي فيلم وهي من مسؤولية العميل فقط."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01019-6666-4666-8666-000000000019",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Availability and price changes",
        "scenario_ar": "التوفر وتغيير الأسعار",
        "policy_en": "All purchases are subject to availability, and prices are subject to change by the company.",
        "policy_ar": "كافة عمليات الشراء تخضع لتوفرها، والأسعار قابلة للتغيير من قبل الشركة."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01020-6666-4666-8666-000000000020",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Ticket category upgrade",
        "scenario_ar": "ترقية فئة التذكرة",
        "policy_en": "Tickets may be upgraded to a higher category (e.g., Regular to Premium, Premium to VIP) at any time before the show starts, subject to availability.",
        "policy_ar": "يمكن ترقية التذكرة إلى فئة أعلى (مثلاً من عادي إلى بريميوم أو من بريميوم إلى VIP) في أي وقت قبل بدء العرض وحسب التوفر.",
        "exception_en": "This upgrade option is not valid with any promotional offers.",
        "exception_ar": "هذا الخيار غير صالح مع أي عروض ترويجية."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01021-6666-4666-8666-000000000021",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Reservation confirmation requirement",
        "scenario_ar": "اشتراط تأكيد الحجز",
        "policy_en": "A reservation is only considered confirmed after payment is completed and an electronic confirmation is received via email, the app, or an invoice issued from the company's point of sale.",
        "policy_ar": "يعتبر الحجز مؤكداً فقط بعد إتمام عملية الدفع والحصول على تأكيد إلكتروني عبر البريد الإلكتروني أو التطبيق أو فاتورة صادرة من نقاط البيع التابعة للشركة."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01022-6666-4666-8666-000000000022",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Acceptance of Terms & Conditions",
        "scenario_ar": "قبول الشروط والأحكام",
        "policy_en": "By completing the booking process through the Cinescape mobile app or website, the customer acknowledges having read, understood, and fully agreed to these Terms and Conditions.",
        "policy_ar": "بإتمام عملية الحجز عبر تطبيق سينسكيب أو الموقع الإلكتروني، يُقرّ العميل بقراءته وفهمه وموافقته الكاملة على هذه الشروط والأحكام."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01023-6666-4666-8666-000000000023",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Cinema entry credentials",
        "scenario_ar": "إثبات الدخول إلى دور العرض",
        "policy_en": "Entry to the cinema or screen requires a reservation ID or QR code available through the Cinescape website, the Cinescape app, or the email confirmation.",
        "policy_ar": "يتطلب الدخول إلى السينما أو الشاشات تقديم معرّف الحجز أو رمز الاستجابة السريع المتاح عبر الموقع الإلكتروني أو تطبيق سينسكيب أو التأكيد عبر البريد الإلكتروني."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01024-6666-4666-8666-000000000024",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Seat movement inside auditorium",
        "scenario_ar": "التنقل بين المقاعد داخل القاعة",
        "policy_en": "Moving between seats or changing seats inside the auditorium is strictly prohibited. The company reserves the right to change seats after booking if necessary and in the public interest.",
        "policy_ar": "يُمنع منعاً باتاً التنقل بين المقاعد أو تغييرها داخل القاعة، ويحق للشركة تغيير المقاعد بعد حجزها من قبل العميل إذا اقتضت الحاجة وحفاظاً على المصلحة العامة."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01025-6666-4666-8666-000000000025",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Food order pickup window",
        "scenario_ar": "مدة استلام الطلبات الغذائية",
        "policy_en": "Once a food order has been prepared, the customer must receive it within a maximum of 30 minutes. The company is not responsible if a delay results in the food or beverages becoming hot or cold, and orders will not be rescheduled to another time or day.",
        "policy_ar": "إذا تم تجهيز الطلب الغذائي، يجب على العميل استلامه خلال مدة أقصاها 30 دقيقة، ولن تتحمل الشركة أي مسؤولية إذا أدى التأخر في الاستلام إلى سخونة أو برودة الطعام أو المشروبات، ولا يُسمح بتأجيل الطلب لاستلامه في وقت أو يوم آخر."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01026-6666-4666-8666-000000000026",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Lobby order number display",
        "scenario_ar": "عرض رقم الطلب على شاشة اللوبي",
        "policy_en": "Order numbers are removed from the lobby pickup screen one hour after the order has been prepared.",
        "policy_ar": "تُزال أرقام الطلبات من شاشة اللوبي لاستلام الطلبات بعد مرور ساعة واحدة من تحضير الطلب."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01027-6666-4666-8666-000000000027",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Company error refund entitlement",
        "scenario_ar": "استرداد قيمة الحجز عند خطأ الشركة",
        "policy_en": "If an error is caused by the company (such as cancellation of a movie screening or unavailability of a booked meal), the customer is entitled to a refund or to an electronic balance or voucher of equivalent value.",
        "policy_ar": "في حال حدوث خطأ من قبل الشركة (مثل إلغاء عرض فيلم أو عدم توفر الوجبة المحجوزة)، يحق للعميل استرداد المبلغ أو الحصول على رصيد إلكتروني أو قسيمة شرائية بنفس القيمة."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01028-6666-4666-8666-000000000028",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "CCTV surveillance footage requests",
        "scenario_ar": "طلبات الاطلاع على تسجيلات كاميرات المراقبة",
        "policy_en": "In accordance with Kuwaiti Ministry of Interior laws, all cinema locations and halls are equipped with 24-hour CCTV surveillance. Requests to view or copy camera footage are strictly prohibited except by official letter based on an investigation by the country's official investigative authorities.",
        "policy_ar": "وفقاً لقوانين وزارة الداخلية الكويتية، فإن كافة مواقع السينما وصالاتها مجهّزة بكاميرات مراقبة على مدار الساعة، ويُمنع منعاً باتاً مشاهدة أو نسخ مقاطع من تصوير الكاميرات إلا بموجب كتاب رسمي بناءً على تحقيق لدى جهات التحقيق الرسمية بالدولة."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01029-6666-4666-8666-000000000029",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Quiet conduct in auditorium",
        "scenario_ar": "الهدوء داخل قاعة العرض",
        "policy_en": "Loud talking, singing, shouting, or any behavior that may disturb others during the movie is prohibited inside the auditorium.",
        "policy_ar": "يُمنع التحدث بصوت مرتفع أو الغناء أو الصراخ أو أي سلوك قد يسبب إزعاجاً للآخرين أثناء عرض الفيلم داخل القاعة."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01030-6666-4666-8666-000000000030",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Adherence to public morals",
        "scenario_ar": "الالتزام بالآداب العامة",
        "policy_en": "Any behavior that conflicts with public values and morals or disrupts order within the theater is prohibited.",
        "policy_ar": "يُحظر أي تصرف يتعارض مع القيم والأخلاقيات العامة أو يخلّ بالنظام داخل القاعة."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01031-6666-4666-8666-000000000031",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Smart device use during shows",
        "scenario_ar": "استخدام الأجهزة الذكية أثناء العرض",
        "policy_en": "Phones and smart devices must be set to silent before the show begins, and notifications and screen backlights must be turned off.",
        "policy_ar": "يجب ضبط الهواتف والأجهزة الذكية على الوضع الصامت قبل بدء العرض، وإطفاء الإشعارات والإضاءة الخلفية للشاشة."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01032-6666-4666-8666-000000000032",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Respect for seats and aisles",
        "scenario_ar": "احترام المقاعد والممرات",
        "policy_en": "Guests may not place their feet or shoes on the seats, sit in the aisles, or obstruct others' movement.",
        "policy_ar": "لا يُسمح بوضع الأقدام أو الأحذية على المقاعد، أو الجلوس في الممرات، أو عرقلة حركة الآخرين."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01033-6666-4666-8666-000000000033",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Compliance with staff instructions and removal",
        "scenario_ar": "الامتثال لتعليمات الموظفين والإخراج من القاعة",
        "policy_en": "Cinema staff instructions must be followed at all times. The company reserves the right to ask any customer to leave the cinema immediately, without prior notice, warning, or justification, if they violate the cinema's terms, regulations, or instructions, and the customer is not entitled to any refund or compensation.",
        "policy_ar": "يجب اتباع تعليمات موظفي السينما في جميع الأوقات، وتحتفظ الشركة بحقها في مطالبة أي عميل بمغادرة السينما فوراً دون إشعار مسبق أو تنبيه أو تقديم أي مبرر في حال مخالفته لأي من الشروط أو اللوائح أو التعليمات، ولا يحق للعميل في هذه الحالة المطالبة بأي استرداد أو تعويض."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01034-6666-4666-8666-000000000034",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Movie content responsibility and censorship",
        "scenario_ar": "مسؤولية محتوى الأفلام والرقابة",
        "policy_en": "The company assumes no responsibility for the content of films shown, as they are licensed and approved by the competent regulatory authority at the Kuwaiti Ministry of Information. Any deletions or modifications to the film version are made per regulatory instructions, and the customer is not entitled to claim a refund or compensation as a result.",
        "policy_ar": "لا تتحمل الشركة أي مسؤولية عن مضمون أو محتوى الأفلام المعروضة، إذ يتم ترخيصها ومجازتها من الجهة الرقابية المختصة في وزارة الإعلام بدولة الكويت، وأي محذوفات أو تعديلات تتم على نسخة الفيلم تكون وفقاً لاشتراطات وتعليمات الجهات الرقابية، ولا يحق للعميل المطالبة باسترجاع مبلغ الحجز أو أي تعويض نتيجة لذلك."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01035-6666-4666-8666-000000000035",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Free entry for guests with special needs",
        "scenario_ar": "دخول مجاني لذوي الاحتياجات الخاصة",
        "policy_en": "The company allows customers with special needs (wheelchair users) free entry to the screens upon presentation of a valid disability card issued by the Public Authority for the Disabled in the State of Kuwait, provided a designated space for this category is available inside the hall.",
        "policy_ar": "تتيح الشركة للعملاء من ذوي الاحتياجات الخاصة (مستخدمي الكراسي المتحركة) الدخول مجاناً إلى صالات العرض عند تقديم بطاقة إعاقة سارية المفعول صادرة من الهيئة العامة لشؤون ذوي الإعاقة في دولة الكويت، شريطة توفّر مكان مخصص لهذه الفئة داخل القاعة."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01036-6666-4666-8666-000000000036",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Intellectual property of Cinescape content",
        "scenario_ar": "حقوق الملكية الفكرية لمحتوى سينسكيب",
        "policy_en": "All content published on Cinescape's website, applications, and smart devices — including text, graphics, logos, notices, images, video clips, promotional materials, applications, and software — is the sole property of Kuwait National Cinema Company, protected under Kuwaiti intellectual property laws. Copying, reproducing, distributing, publishing, or modifying any of these materials for any commercial or personal purpose without prior written permission is prohibited, and the company reserves the right to take legal action against any infringement.",
        "policy_ar": "تعود ملكية كافة المحتويات المنشورة على الموقع الإلكتروني والتطبيقات والأجهزة الذكية — بما في ذلك النصوص والرسومات والشعارات والإشعارات والصور ومقاطع الفيديو والمواد الترويجية والتطبيقات والبرمجيات — إلى شركة السينما الكويتية الوطنية وحدها، وتخضع لقوانين حقوق الملكية الفكرية المعمول بها في دولة الكويت. يُحظر نسخ أو إعادة إنتاج أو توزيع أو نشر أو تعديل أي من هذه المواد لأي غرض تجاري أو شخصي دون إذن خطي مسبق، وتحتفظ الشركة بحقها في اتخاذ الإجراءات القانونية ضد أي انتهاك."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01037-6666-4666-8666-000000000037",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Website and app use disclaimer",
        "scenario_ar": "إخلاء المسؤولية عن استخدام الموقع والتطبيق",
        "policy_en": "The company shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use of or inability to use the Cinescape website or its applications.",
        "policy_ar": "لا تتحمل الشركة أي مسؤولية عن الأضرار المباشرة أو غير المباشرة أو العرضية أو الخاصة أو التبعية التي قد تنشأ عن استخدام الموقع الإلكتروني أو التطبيقات التابعة له أو عدم القدرة على استخدامها."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01038-6666-4666-8666-000000000038",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Third-party linked websites",
        "scenario_ar": "روابط مواقع الأطراف الثالثة",
        "policy_en": "The company disclaims any liability for any content, opinions, or materials posted on third-party websites, even if those websites are linked from the company's website via hyperlinks. Access to such sites is at the user's own risk.",
        "policy_ar": "تخلي الشركة مسؤوليتها عن أي محتوى أو آراء أو مواد منشورة في مواقع إلكترونية تابعة لأطراف ثالثة، حتى وإن كانت تلك المواقع مرتبطة بموقع الشركة عبر روابط، ويقع على عاتق المستخدم وحده الدخول إلى تلك المواقع وتحمل المخاطر المترتبة على ذلك."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01039-6666-4666-8666-000000000039",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Amendments to Terms & Conditions",
        "scenario_ar": "تعديل الشروط والأحكام",
        "policy_en": "The company reserves the right to amend or update these Terms and Conditions at any time without prior notice. Customers are responsible for regularly reviewing them, and continued use of the company's services after amendments are posted constitutes express acceptance of the amended terms.",
        "policy_ar": "تحتفظ الشركة بالحق الكامل في تعديل أو تحديث هذه الشروط والأحكام في أي وقت ودون إشعار مسبق، ويكون على العميل مسؤولية مراجعتها بانتظام، ويُعد استمرار استخدام خدمات الشركة بعد نشر التعديلات موافقة صريحة على الشروط المعدلة."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01040-6666-4666-8666-000000000040",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Skyline force majeure compensation",
        "scenario_ar": "التعويض عن تجربة سكايلاين في الظروف القاهرة",
        "policy_en": "If force majeure circumstances lead to the suspension or cancellation of the Skyline Experience, customers are entitled to claim compensation for their reservations in accordance with the company's applicable policy.",
        "policy_ar": "في حال حدوث ظروف قاهرة تؤدي إلى توقف أو إلغاء تجربة سكايلاين، يحق للعملاء المطالبة بالتعويض عن حجوزاتهم وفقاً لسياسة الشركة المتبعة في هذا الشأن."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01041-6666-4666-8666-000000000041",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Customer Care contact channels",
        "scenario_ar": "قنوات التواصل مع خدمة العملاء",
        "policy_en": "Customers requiring assistance with bookings, refunds, cancellations, or any other matter may contact the Customer Care Center via the online feedback link https://www.cinescape.com.kw/contactus or by calling 180-3456 during working hours.",
        "policy_ar": "يمكن للعملاء الذين يحتاجون إلى مساعدة بشأن الحجوزات أو الاسترداد أو الإلغاء أو أي مسألة أخرى التواصل مع مركز خدمة العملاء عبر رابط التعليق https://www.cinescape.com.kw/contactus أو بالاتصال على 1803456 خلال ساعات العمل الرسمية."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01042-6666-4666-8666-000000000042",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Governing law and jurisdiction",
        "scenario_ar": "القانون الواجب التطبيق والاختصاص القضائي",
        "policy_en": "These Terms and Conditions are governed by and construed in accordance with the laws of the State of Kuwait, and any disputes arising from the use of Kuwait National Cinema Company services are subject to the exclusive jurisdiction of the courts in the State of Kuwait.",
        "policy_ar": "تخضع هذه الشروط والأحكام لقوانين دولة الكويت، وفي حال وجود اختلاف حول تفسير أو تنفيذ أيٍّ منها ينعقد الاختصاص الحصري للمحاكم الكويتية."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01043-6666-4666-8666-000000000043",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Social media co-posting approval",
        "scenario_ar": "الموافقة على النشر المشترك عبر وسائل التواصل",
        "policy_en": "KNCC reserves the right to approve all content shared through its social media channels, and co-posting or story collaborations are only accepted upon written approval from KNCC's marketing team.",
        "policy_ar": "تحتفظ شركة السينما الكويتية الوطنية بالحق في الموافقة على جميع المحتويات المنشورة عبر قنوات تواصلها الاجتماعي، ولا يتم قبول النشر المشترك أو التعاون في القصص إلا بعد الحصول على موافقة خطية من فريق التسويق."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01044-6666-4666-8666-000000000044",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Third-party brand post alignment",
        "scenario_ar": "توافق منشورات العلامات الخارجية",
        "policy_en": "Posts created by third-party brands for co-posting or tagging must not conflict with Cinescape's brand values or existing partnerships, and sponsored content must be clearly disclosed and free of political, religious, or culturally sensitive messaging.",
        "policy_ar": "يجب ألا تتعارض المنشورات التي تنشئها العلامات التجارية الخارجية للنشر المشترك أو الوسم مع قيم علامة سينسكيب أو شراكاتها الحالية، ويجب توضيح المحتوى المدعوم بشكل صريح وخلوّه من أي رسائل سياسية أو دينية أو حساسة ثقافياً."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01045-6666-4666-8666-000000000045",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Popcorn box artwork submission",
        "scenario_ar": "تقديم تصاميم إعلانات علب البوبكورن",
        "policy_en": "Popcorn box ad designs must align with Cinescape's visual and brand standards, must not include offensive, religious, or competitive material, and all artwork must be submitted for approval a minimum of 14 days prior to print deadlines. KNCC reserves the right to reject or request revisions on any submitted artwork.",
        "policy_ar": "يجب أن تتماشى تصاميم إعلانات علب البوبكورن مع المعايير البصرية وهوية علامة سينسكيب، وألا تتضمن أي محتوى مسيء أو ديني أو منافس، ويجب تقديم جميع التصاميم قبل 14 يوماً على الأقل من مواعيد الطباعة، وتحتفظ الشركة بالحق في رفض أي عمل فني أو طلب تعديلات عليه."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01046-6666-4666-8666-000000000046",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Flyer distribution scope",
        "scenario_ar": "نطاق توزيع المنشورات",
        "policy_en": "Flyer agreements cover distribution only; printing is the client's responsibility. Flyers may be distributed only within designated KNCC-approved zones, and content must be pre-approved and not conflict with KNCC's brand or community guidelines.",
        "policy_ar": "يشمل الاتفاق توزيع المنشورات فقط، أما الطباعة فعلى نفقة العميل، ويُسمح بتوزيع المنشورات فقط ضمن المناطق المحددة والمعتمدة من الشركة، ويجب الحصول على موافقة مسبقة على المحتوى بحيث لا يتعارض مع هوية الشركة أو إرشاداتها المجتمعية."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01047-6666-4666-8666-000000000047",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Booth sampling activation rules",
        "scenario_ar": "قواعد الأجنحة والأنشطة الترويجية",
        "policy_en": "Direct sales are not permitted during booth activations; sampling and engagement must be complimentary and adhere to KNCC's code of conduct. All setups require prior approval, booth dimensions must comply with location limitations, activations must not obstruct cinema operations or foot traffic, and brands may not collect personal data without prior written agreement.",
        "policy_ar": "لا يُسمح بالبيع المباشر خلال الأنشطة الترويجية داخل الأجنحة، ويجب أن تكون أنشطة التذوق والتفاعل مجانية وملتزمة بمدونة سلوك الشركة، كما يجب الحصول على موافقة مسبقة على جميع التجهيزات، وأن تتوافق أبعاد الأجنحة مع قيود الموقع، وألا تعيق الأنشطة العمليات التشغيلية أو حركة الزوار، ولا يجوز جمع البيانات الشخصية إلا بموافقة خطية مسبقة."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01048-6666-4666-8666-000000000048",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Photoshoot and filming approvals",
        "scenario_ar": "موافقات جلسات التصوير والتسجيل",
        "policy_en": "All photoshoots and filming must be approved in advance by KNCC's operations team. The client must follow all location rules, respect guest privacy, avoid disrupting daily operations, and share branding, usage rights, and publication plans for approval in advance. KNCC reserves the right to pause or cancel any shoot if guidelines are violated.",
        "policy_ar": "يجب الحصول على موافقة مسبقة من فريق العمليات في الشركة لأي جلسة تصوير، ويلتزم العميل بجميع قوانين الموقع واحترام خصوصية الزوار وتجنب تعطيل العمليات اليومية، ومشاركة عناصر العلامة التجارية وحقوق الاستخدام وخطط النشر مسبقاً للموافقة عليها، وتحتفظ الشركة بحقها في إيقاف أو إلغاء أي جلسة في حال مخالفة التعليمات."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01049-6666-4666-8666-000000000049",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Full-day photoshoot scheduling",
        "scenario_ar": "جدولة جلسات التصوير الكاملة",
        "policy_en": "All shoot timings must be approved by KNCC's management; full-day shoots require separate approvals, and scheduling shoots outside of operational hours is recommended.",
        "policy_ar": "يجب الموافقة على جميع أوقات التصوير من قبل إدارة الشركة، علماً أن جلسات التصوير الكاملة ليوم واحد تتطلب موافقات منفصلة، ويُوصى بجدولتها خارج ساعات التشغيل."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01050-6666-4666-8666-000000000050",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Digital lobby screen rental submission",
        "scenario_ar": "تأجير الشاشات الرقمية في اللوبي",
        "policy_en": "Clients may rent digital lobby screens for an agreed-upon duration and content. All creative content must be submitted 5 business days in advance for technical and content review, and KNCC may reject or request edits to any content that violates brand, ethical, censorship, or technical standards.",
        "policy_ar": "يمكن للعملاء استئجار الشاشات الرقمية في لوبي السينما لمدة ومحتوى متفق عليهما، ويجب تقديم جميع المواد الإعلانية قبل 5 أيام عمل من موعد العرض للمراجعة التقنية والمحتوى، ويحق للشركة رفض أو طلب تعديل أي محتوى يخالف المعايير التقنية أو الأخلاقية أو الرقابية أو العلامة التجارية."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01051-6666-4666-8666-000000000051",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Private show candles prohibition",
        "scenario_ar": "منع الشموع في العروض الخاصة",
        "policy_en": "Candles of any kind are strictly prohibited inside cinema premises during private shows, including as part of birthday cake celebrations.",
        "policy_ar": "يُمنع منعاً باتاً استخدام الشموع بأي نوع داخل صالات السينما خلال العروض الخاصة، بما في ذلك مع احتفالات كعكة عيد الميلاد."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01052-6666-4666-8666-000000000052",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Private show helium balloons",
        "scenario_ar": "بالونات الهيليوم في العروض الخاصة",
        "policy_en": "Helium-filled balloons are not permitted inside the cinema during private shows; only regular air-filled balloons are allowed.",
        "policy_ar": "لا يُسمح باستخدام البالونات المملوءة بالهيليوم داخل السينما في العروض الخاصة، ويُسمح فقط بالبالونات المملوءة بالهواء العادي."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01053-6666-4666-8666-000000000053",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Private show confetti prohibition",
        "scenario_ar": "منع القصاصات الورقية في العروض الخاصة",
        "policy_en": "The use of confetti or confetti cannons is strictly prohibited within cinema premises during private shows.",
        "policy_ar": "يُمنع منعاً باتاً استخدام القصاصات الورقية (Confetti) أو مدافع القصاصات داخل صالات السينما خلال العروض الخاصة."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01054-6666-4666-8666-000000000054",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Promotion payment before activation",
        "scenario_ar": "الدفع قبل بدء النشاط الترويجي",
        "policy_en": "For promotional bookings, payment must be settled before activation, and all bookings remain subject to availability.",
        "policy_ar": "بالنسبة للحجوزات الترويجية، يجب تسوية المدفوعات قبل بدء النشاط، وتبقى جميع الحجوزات خاضعة لتوفر المواعيد."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01055-6666-4666-8666-000000000055",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "KNCC right to cancel or reschedule services",
        "scenario_ar": "حق الشركة في إلغاء أو إعادة جدولة الخدمات",
        "policy_en": "Kuwait National Cinema Company reserves the right to cancel or reschedule any booked promotional service due to operational or emergency circumstances, and KNCC's decisions on approvals, cancellations, or disputes are final and binding.",
        "policy_ar": "تحتفظ شركة السينما الكويتية الوطنية بالحق في إلغاء أو إعادة جدولة أي خدمة ترويجية محجوزة بسبب ظروف تشغيلية أو طارئة، وتكون قرارات الشركة المتعلقة بالموافقات أو الإلغاءات أو النزاعات نهائية وملزمة."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01056-6666-4666-8666-000000000056",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Client-caused damage penalties",
        "scenario_ar": "غرامات الأضرار الناجمة عن العميل",
        "policy_en": "Any damage to property or disruption of service caused by clients during promotional activities will result in penalties and repair fees charged to the client.",
        "policy_ar": "أي أضرار بالممتلكات أو تعطيل للخدمات ناجم عن العملاء خلال الأنشطة الترويجية ستترتب عليه غرامات ورسوم إصلاح على العميل."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01057-6666-4666-8666-000000000057",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Promotional offer ministry license",
        "scenario_ar": "ترخيص الوزارة للعروض الترويجية",
        "policy_en": "All promotional activities involving offers or discounts must be supported by an official license from the competent government authority (Ministry). This requirement applies to every promotion.",
        "policy_ar": "يجب أن تكون جميع الأنشطة الترويجية التي تتضمن عروضاً أو خصومات مدعومة بترخيص رسمي صادر عن الجهة الحكومية المختصة (الوزارة)، وينطبق هذا الشرط على جميع العروض الترويجية."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01058-6666-4666-8666-000000000058",
      "data": {
        "category": "Terms & Conditions",
        "scenario_en": "Bank promotion terms variability",
        "scenario_ar": "تباين شروط العروض البنكية",
        "policy_en": "Each bank promotion is subject to its own separate terms and conditions; current bank promotions are listed for NBK Kuwait (https://www.cinescape.com.kw/promotion/7) and Gulf Bank (https://www.cinescape.com.kw/promotion/11).",
        "policy_ar": "يخضع كل عرض بنكي لشروطه وأحكامه الخاصة، والعروض البنكية الحالية مذكورة لبنك الكويت الوطني (https://www.cinescape.com.kw/promotion/7) وبنك الخليج (https://www.cinescape.com.kw/promotion/11)."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01059-6666-4666-8666-000000000059",
      "data": {
        "category": "Privacy Policy",
        "scenario_en": "Personal information collected",
        "scenario_ar": "المعلومات الشخصية التي يتم جمعها",
        "policy_en": "Kuwait National Cinema Company (KNCC) collects the following personal information from its users and customers: name, email address, mobile number, date of birth, city, location preferences, seating preferences, experience preferences, movie-rating preferences, and information about online purchases (booking and transaction information).",
        "policy_ar": "تجمع شركة السينما الكويتية الوطنية البيانات الشخصية التالية من مستخدميها وعملائها: الاسم، عنوان البريد الإلكتروني، رقم الهاتف النقال، تاريخ الميلاد، المدينة، تفضيلات الموقع، تفضيلات المقاعد، تفضيلات التجارب السينمائية، تفضيلات تصنيف الأفلام، بالإضافة إلى معلومات حول المشتريات عبر الإنترنت (معلومات الحجز والمعاملات)."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01060-6666-4666-8666-000000000060",
      "data": {
        "category": "Privacy Policy",
        "scenario_en": "How collected data is used",
        "scenario_ar": "كيفية استخدام البيانات المجمّعة",
        "policy_en": "KNCC uses the collected data to send email campaigns with updates and offers, to send app push notifications that enhance the in-app experience, and to improve its services based on user preferences and feedback.",
        "policy_ar": "تستخدم شركة السينما الكويتية الوطنية البيانات المجمّعة لإرسال حملات البريد الإلكتروني بالتحديثات والعروض، ولإرسال إشعارات التطبيق التي تعزز تجربة الاستخدام، ولتحسين خدماتها بناءً على تفضيلات المستخدمين وملاحظاتهم."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01061-6666-4666-8666-000000000061",
      "data": {
        "category": "Privacy Policy",
        "scenario_en": "Data sharing with third parties",
        "scenario_ar": "مشاركة البيانات مع أطراف ثالثة",
        "policy_en": "KNCC does not share your personal data with any third parties and is committed to keeping your information confidential and secure.",
        "policy_ar": "لا تشارك شركة السينما الكويتية الوطنية بياناتك الشخصية مع أي طرف ثالث، وهي ملتزمة بالحفاظ على سرية معلوماتك وأمانها."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01062-6666-4666-8666-000000000062",
      "data": {
        "category": "Privacy Policy",
        "scenario_en": "Data security practices",
        "scenario_ar": "ممارسات أمان البيانات",
        "policy_en": "KNCC employs stringent security measures and practices to ensure the confidentiality and security of personal data, and continuously reviews and enhances its security protocols to protect against unauthorized access or disclosure.",
        "policy_ar": "تعتمد شركة السينما الكويتية الوطنية تدابير وممارسات أمنية صارمة لضمان سرية وأمان البيانات الشخصية، وتقوم بمراجعة وتعزيز بروتوكولاتها الأمنية باستمرار للحماية من الوصول غير المصرح به أو الإفصاح."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01063-6666-4666-8666-000000000063",
      "data": {
        "category": "Privacy Policy",
        "scenario_en": "Cookies and session tracking",
        "scenario_ar": "ملفات تعريف الارتباط وتتبع الجلسات",
        "policy_en": "KNCC uses cookies to maintain user sessions on its website; cookies remember preferences and login status to improve browsing. Users can manage cookie settings through their browser.",
        "policy_ar": "تستخدم شركة السينما الكويتية الوطنية ملفات تعريف الارتباط للحفاظ على جلسات المستخدم على موقعها الإلكتروني؛ وتساعد هذه الملفات على تذكر التفضيلات وحالة تسجيل الدخول لتحسين التصفح. يمكن للمستخدم إدارة إعدادات ملفات تعريف الارتباط من خلال متصفحه."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01064-6666-4666-8666-000000000064",
      "data": {
        "category": "Privacy Policy",
        "scenario_en": "Account deletion rights",
        "scenario_ar": "حق حذف الحساب",
        "policy_en": "Every user has the option to permanently delete their account from within the account settings. Choosing to delete an account securely removes personal data from KNCC's online systems.",
        "policy_ar": "لكل مستخدم الحق في حذف حسابه بشكل دائم من خلال إعدادات الحساب، ويؤدي اختيار الحذف إلى إزالة البيانات الشخصية بأمان من أنظمة الشركة عبر الإنترنت."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01065-6666-4666-8666-000000000065",
      "data": {
        "category": "Privacy Policy",
        "scenario_en": "Opting out of marketing communications",
        "scenario_ar": "إلغاء الاشتراك في الاتصالات التسويقية",
        "policy_en": "Users can opt out of KNCC marketing communications by enabling or disabling the relevant settings inside the Cinescape application. KNCC respects user preferences and honors the choice to receive or not receive marketing communications.",
        "policy_ar": "يمكن للمستخدم إلغاء الاشتراك في الاتصالات التسويقية من شركة السينما الكويتية الوطنية عن طريق تفعيل أو تعطيل الإعدادات ذات الصلة داخل تطبيق سينسكيب. وتحترم الشركة تفضيلات المستخدم وتلتزم باختياره في تلقّي أو عدم تلقّي الاتصالات التسويقية."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01066-6666-4666-8666-000000000066",
      "data": {
        "category": "Privacy Policy",
        "scenario_en": "Data retention period",
        "scenario_ar": "فترة الاحتفاظ بالبيانات",
        "policy_en": "KNCC retains personal information for as long as necessary for the purposes outlined in the Privacy Policy or as required by applicable laws.",
        "policy_ar": "تحتفظ شركة السينما الكويتية الوطنية بالبيانات الشخصية للمدة اللازمة للأغراض المحددة في سياسة الخصوصية أو وفقاً لما تقتضيه القوانين المعمول بها."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01067-6666-4666-8666-000000000067",
      "data": {
        "category": "Privacy Policy",
        "scenario_en": "Legal basis for data processing",
        "scenario_ar": "الأساس القانوني لمعالجة البيانات",
        "policy_en": "The legal basis for processing personal data is user consent and KNCC's legitimate interest.",
        "policy_ar": "يستند الأساس القانوني لمعالجة البيانات الشخصية إلى موافقة المستخدم والمصلحة المشروعة للشركة."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01068-6666-4666-8666-000000000068",
      "data": {
        "category": "Privacy Policy",
        "scenario_en": "International data transfers",
        "scenario_ar": "نقل البيانات دولياً",
        "policy_en": "Where applicable, KNCC may transfer personal data internationally and takes measures to ensure the security of the data during such transfers.",
        "policy_ar": "قد تقوم شركة السينما الكويتية الوطنية، عند الاقتضاء، بنقل البيانات الشخصية دولياً، وتتخذ التدابير اللازمة لضمان أمان البيانات أثناء هذا النقل."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01069-6666-4666-8666-000000000069",
      "data": {
        "category": "Privacy Policy",
        "scenario_en": "User rights over personal data",
        "scenario_ar": "حقوق المستخدم على بياناته الشخصية",
        "policy_en": "Users have the right to access, correct, or delete the processing of their personal information. For inquiries about these rights, users should contact KNCC through its customer support channels.",
        "policy_ar": "يحق للمستخدم الوصول إلى بياناته الشخصية أو تصحيحها أو حذف معالجتها، وللاستفسار عن هذه الحقوق يرجى التواصل مع الشركة عبر قنوات دعم العملاء."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01070-6666-4666-8666-000000000070",
      "data": {
        "category": "Privacy Policy",
        "scenario_en": "Third-party site links",
        "scenario_ar": "روابط المواقع الخارجية",
        "policy_en": "KNCC's Privacy Policy does not cover third-party sites linked from its platform, and users are encouraged to review the privacy policies of those external sites.",
        "policy_ar": "لا تغطي سياسة الخصوصية الخاصة بالشركة المواقع التابعة لأطراف ثالثة المرتبطة بمنصتها، ويُشجَّع المستخدمون على مراجعة سياسات الخصوصية لتلك المواقع الخارجية."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01071-6666-4666-8666-000000000071",
      "data": {
        "category": "Privacy Policy",
        "scenario_en": "Notification of policy changes",
        "scenario_ar": "إشعار تغييرات السياسة",
        "policy_en": "The Privacy Policy is subject to periodic updates. It is the user's responsibility to review the policy periodically for changes; KNCC will clearly display the last-updated date at the top of the policy.",
        "policy_ar": "تخضع سياسة الخصوصية لتحديثات دورية، ومن مسؤولية المستخدم مراجعة السياسة بانتظام للاطلاع على أي تغييرات، وستعرض الشركة تاريخ آخر تحديث بشكل واضح في أعلى السياسة."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01072-6666-4666-8666-000000000072",
      "data": {
        "category": "Privacy Policy",
        "scenario_en": "Compliance with local Kuwaiti law",
        "scenario_ar": "الامتثال للقوانين المحلية في الكويت",
        "policy_en": "KNCC's privacy practices comply with applicable local data-protection laws in the State of Kuwait.",
        "policy_ar": "تتوافق ممارسات الخصوصية لدى شركة السينما الكويتية الوطنية مع قوانين حماية البيانات المعمول بها في دولة الكويت."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "m6a01073-6666-4666-8666-000000000073",
      "data": {
        "category": "Privacy Policy",
        "scenario_en": "Emergency handling of personal data",
        "scenario_ar": "التعامل مع البيانات في حالات الطوارئ",
        "policy_en": "In emergency situations or exceptional circumstances, KNCC will handle personal data to the extent necessary to inform and protect its users.",
        "policy_ar": "في حالات الطوارئ أو الظروف الاستثنائية، ستتعامل شركة السينما الكويتية الوطنية مع البيانات الشخصية بالقدر اللازم لإبلاغ المستخدمين وحمايتهم."
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
