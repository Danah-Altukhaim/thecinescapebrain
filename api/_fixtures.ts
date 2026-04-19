// Static fixture data for the Vercel demo deploy; writes do not persist.
// Kept in sync with infra/seed/index.ts, which round-trips this snapshot
// into the local Postgres DB so `pnpm seed` produces the same content.
//
// Domain: Cinescape (Kuwait National Cinema Company / KNCC) — sourced from
// cinescape/content/{api,terms_and_conditions,privacy,faq,contact_volume}.md.

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
        "trigger": "Accessibility / disability — wheelchair access, lifetime free membership claim, special needs entry. Escalate to Customer Care. SLA: 2 hours. Auto: All Cinescape locations have wheelchair spaces, and wheelchair users are eligible for lifetime free membership. Connecting you to Customer Care.",
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
        "category": "Booking",
        "question_en": "When can I book tickets for new movies?",
        "question_ar": "متى يمكنني حجز تذاكر الأفلام الجديدة؟",
        "answer_en": "Starting from Wednesday of every week, you may book any movie released throughout that week.",
        "answer_ar": "ابتداءً من يوم الأربعاء من كل أسبوع، يمكنك حجز أي فيلم يُعرض خلال ذلك الأسبوع."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "f3a01002-3333-4333-8333-000000000002",
      "data": {
        "category": "Booking",
        "question_en": "How do I book online?",
        "question_ar": "كيف أحجز عبر الإنترنت؟",
        "answer_en": "After creating your Cinescape account, you can book tickets online using your registered Cinescape Club Card or a bank card.",
        "answer_ar": "بعد إنشاء حسابك في سينسكيب، يمكنك حجز التذاكر عبر الإنترنت باستخدام بطاقة الولاء أو بطاقتك البنكية."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "f3a01003-3333-4333-8333-000000000003",
      "data": {
        "category": "Booking",
        "question_en": "How many tickets can I book at once?",
        "question_ar": "كم عدد التذاكر التي يمكنني حجزها في المرة الواحدة؟",
        "answer_en": "You can book up to 10 tickets per transaction.",
        "answer_ar": "يمكنك حجز ما يصل إلى 10 تذاكر في كل عملية حجز."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "f3a01004-3333-4333-8333-000000000004",
      "data": {
        "category": "Booking",
        "question_en": "How do I collect my tickets after booking?",
        "question_ar": "كيف أستلم تذاكري بعد الحجز؟",
        "answer_en": "Head to the kiosk machine at your booked cinema, follow the on-screen instructions, and enter your booking code — your tickets will be printed.",
        "answer_ar": "توجّه إلى جهاز الكشك في فرع الحجز، اتبع التعليمات على الشاشة، وأدخل رمز الحجز — وستتم طباعة تذاكرك."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "f3a01005-3333-4333-8333-000000000005",
      "data": {
        "category": "Booking",
        "question_en": "How do I confirm my booking succeeded?",
        "question_ar": "كيف أتأكد من نجاح الحجز؟",
        "answer_en": "Once your reservation succeeds, a confirmation message is shown on your device. Cinescape also sends SMS and email confirmation to the contact info on your profile.",
        "answer_ar": "عند نجاح الحجز تظهر رسالة تأكيد على جهازك. كما يرسل سينسكيب رسالة SMS وبريداً إلكترونياً على بيانات التواصل المسجلة في حسابك."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "f3a01006-3333-4333-8333-000000000006",
      "data": {
        "category": "Booking",
        "question_en": "Can I book a whole theater for a birthday or private event?",
        "question_ar": "هل يمكنني حجز قاعة كاملة لعيد ميلاد أو فعالية خاصة؟",
        "answer_en": "Yes — you can book any theater for birthday parties or private events. Contact the call center on 180-3456 to arrange.",
        "answer_ar": "نعم — يمكنك حجز أي قاعة لحفلات أعياد الميلاد أو الفعاليات الخاصة. اتصل بمركز الاتصال على 180-3456 للترتيب."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "f3a01007-3333-4333-8333-000000000007",
      "data": {
        "category": "Cancellation & Refunds",
        "question_en": "Can I cancel my reservation?",
        "question_ar": "هل يمكنني إلغاء حجزي؟",
        "answer_en": "Yes — cancellations are accepted up to 2 hours before the show starts.",
        "answer_ar": "نعم — يُقبل الإلغاء حتى ساعتين قبل بدء العرض."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "f3a01008-3333-4333-8333-000000000008",
      "data": {
        "category": "Cancellation & Refunds",
        "question_en": "How do refunds work?",
        "question_ar": "كيف تعمل عمليات الاسترجاع؟",
        "answer_en": "Card payments are credited as electronic balance to your Cinescape wallet — not refunded to the original card. Cinescape Club Card payments are credited back to the Club Card.",
        "answer_ar": "تُقيَّد مدفوعات البطاقات البنكية كرصيد إلكتروني في محفظتك — ولا تُعاد إلى البطاقة الأصلية. مدفوعات بطاقة الولاء تُعاد إلى بطاقة الولاء."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "f3a01009-3333-4333-8333-000000000009",
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
      "id": "f3a01010-3333-4333-8333-000000000010",
      "data": {
        "category": "Account",
        "question_en": "I forgot my password.",
        "question_ar": "نسيت كلمة المرور.",
        "answer_en": "On the login page, enter your email address and choose how you'd like to retrieve your password.",
        "answer_ar": "في صفحة تسجيل الدخول، أدخل بريدك الإلكتروني واختر طريقة استرداد كلمة المرور."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "f3a01011-3333-4333-8333-000000000011",
      "data": {
        "category": "Account",
        "question_en": "I forgot my username AND password.",
        "question_ar": "نسيت اسم المستخدم وكلمة المرور.",
        "answer_en": "Contact the Call Center on 180-3456 for help retrieving them.",
        "answer_ar": "اتصل بمركز الاتصال على 180-3456 للمساعدة في استردادهما."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "f3a01012-3333-4333-8333-000000000012",
      "data": {
        "category": "Club Card",
        "question_en": "How do I recharge my Club Card?",
        "question_ar": "كيف أشحن بطاقة الولاء؟",
        "answer_en": "Buy a recharge code at any Cinescape cinema, or recharge online through the website.",
        "answer_ar": "اشترِ رمز شحن من أي فرع لسينسكيب، أو اشحن عبر الإنترنت من خلال الموقع."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "f3a01013-3333-4333-8333-000000000013",
      "data": {
        "category": "Accessibility",
        "question_en": "Is there wheelchair access?",
        "question_ar": "هل يتوفر وصول للكراسي المتحركة؟",
        "answer_en": "Yes — there are wheelchair spaces at all Cinescape cinema locations.",
        "answer_ar": "نعم — تتوفر أماكن للكراسي المتحركة في جميع فروع سينسكيب."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "f3a01014-3333-4333-8333-000000000014",
      "data": {
        "category": "Accessibility",
        "question_en": "Is there any benefit for wheelchair users?",
        "question_ar": "هل توجد مزايا لمستخدمي الكراسي المتحركة؟",
        "answer_en": "Yes — wheelchair users are eligible for a lifetime free membership with Cinescape. Free entry also applies on presentation of a valid disability card from the Public Authority for the Disabled in Kuwait.",
        "answer_ar": "نعم — يحق لمستخدمي الكراسي المتحركة الحصول على عضوية مجانية مدى الحياة مع سينسكيب. الدخول المجاني متاح أيضاً عند تقديم بطاقة إعاقة سارية من الهيئة العامة لشؤون ذوي الإعاقة."
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
        "ai_instructions": "Call POST /api/content/nowshowing. Return movie titles, age ratings, and runtime. If user mentions a cinema or location, follow up with cinemas + showtimes."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "i4a01002-4444-4444-8444-000000000002",
      "data": {
        "name": "find_cinema",
        "description": "User wants the nearest or a specific Cinescape cinema, or wants to filter by experience (4DX, IMAX, Skyline).",
        "ai_instructions": "Call GET /api/content/cinemas?bookType=...&latitude=...&longitude=... If user mentions an experience, filter on the `exps` array of the cinema response."
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
        "ai_instructions": "Eligibility: cancellation is allowed up to 2 hours before showtime. Refund routing: card payments → electronic balance in Cinescape wallet (NOT refunded to card). Club Card → credited back to Club Card. If under 2hrs OR food order with 'Prepare Your Order' clicked → not refundable, escalate."
      },
      "status": "active",
      "updatedAt": "2026-04-19T00:00:00.000Z"
    },
    {
      "id": "i4a01006-4444-4444-8444-000000000006",
      "data": {
        "name": "refund_status",
        "description": "User asks where their refund is.",
        "ai_instructions": "Refunds for card payments are credited as electronic balance to the customer's Cinescape wallet/loyalty card — they are NEVER refunded to the original bank card. If the customer expects a card refund, gently correct and explain they can use the wallet balance for any future booking. Escalate if the wallet balance is missing."
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
        "ai_instructions": "Hand off to Customer Care at 180-3456. Mention private-show rules: cancellation must be 24+ hours before showtime; no outside food/drinks except birthday cakes; no candles, helium balloons, confetti, or confetti cannons; age ratings still apply."
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
        "description": "User can't log in.",
        "ai_instructions": "If only password forgotten → direct to login page password-reset flow. If both username AND password forgotten → escalate to Call Center (180-3456). Never collect or echo passwords in chat."
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
        "notes_en": "Holders of a valid PAD-issued disability card receive free entry to the cinema where designated wheelchair spaces are available. Wheelchair users are eligible for a lifetime free Cinescape membership.",
        "notes_ar": "يحصل حاملو بطاقة الإعاقة السارية الصادرة من الهيئة العامة لشؤون ذوي الإعاقة على دخول مجاني عند توفر أماكن مخصصة للكراسي المتحركة. كما يحق لمستخدمي الكراسي المتحركة الحصول على عضوية سينسكيب مجانية مدى الحياة."
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
        "name": "Wheelchair lifetime free membership",
        "type": "Promo",
        "message_en": "♿ Wheelchair users are eligible for a lifetime free Cinescape membership. Free entry also applies on presentation of a valid disability card from the Public Authority for the Disabled in Kuwait, where designated wheelchair spaces are available.",
        "message_ar": "♿ يحق لمستخدمي الكراسي المتحركة الحصول على عضوية سينسكيب مجانية مدى الحياة. كما يُتاح الدخول المجاني عند تقديم بطاقة إعاقة سارية من الهيئة العامة لشؤون ذوي الإعاقة، حيث تتوفر أماكن مخصصة."
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
