import { SubmitKey } from '@chat/constant';

const In = {
  WIP: 'यह सुविधा अभी भी विकास के अधीन है...',
  Error: {
    Unauthorized:
      'एक्सेस पासवर्ड गलत या खाली है, कृपया [सेटिंग्स](/#/settings) पृष्ठ पर जाएं और सही एक्सेस पासवर्ड दर्ज करें, या अपनी स्वयं की OpenAI API कुंजी भरें।',
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} संदेशों`,
  },
  Chat: {
    SubTitle: (count: number) => `${count}ChatGPT ${count} के साथ संदेश`,
    Actions: {
      ChatList: 'चैट सूची पर जाएं',
      CompressedHistory: 'संपीड़ित इतिहास मेमोरी प्रॉम्प्ट',
      Export: 'सभी संदेशों को मार्कडाउन के रूप में निर्यात करें',
      Copy: 'सभी को कॉपी करें',
      Stop: 'रुकना',
      Retry: 'पुन: प्रयास करें',
      Delete: 'मिटाना',
    },
    Rename: 'चैट का नाम बदलें',
    Typing: 'टाइपिंग…',
    Input: (submitKey: string) => {
      let inputHints = `${submitKey} भेजने के लिए`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += '，Shift + Enter के लिए दर्ज करें';
      }
      return inputHints + '，/ खोज करने के लिए संकेत';
    },
    Send: 'भेजना',
    Config: {
      Reset: 'वितथ पर ले जाएं',
      SaveAs: 'मास्क के रूप में सहेजें',
    },
  },
  Export: {
    Title: 'सभी संदेश',
    Copy: 'सभी को कॉपी करें',
    Download: 'डाउनलोड करना',
    MessageFromYou: 'आप से संदेश',
    MessageFromChatGPT: 'संदेश प्रेषक ChatGPT',
    Share: "साझा ShareGPT",
    Format: {
      Title: "निर्यात प्रपत्रt",
      SubTitle: "मार्कडाउन या पीएनजी छवि",
    },
    IncludeContext: {
      Title: "प्रसंग सहित",
      SubTitle: "निर्यात संदर्भ मास्क में संकेत देता है या नहीं",
    },
    Steps: {
      Select: "चुनना",
      Preview: "पूर्व दर्शन",
    },
  },
  Select: {
    Search: "खोज",
    All: "सबका चयन करें",
    Latest: "नवीनतम का चयन करें",
    Clear: "साफ़",
  },
  Memory: {
    Title: 'मेमोरी प्रॉम्प्ट',
    EmptyContent: 'अभी तक कुछ भी नहीं।',
    Send: 'मेमोरी भेजें',
    Copy: 'मेमोरी कॉपी करें',
    Reset: 'सत्र रीसेट करें',
    ResetConfirm:
      'रीसेट करने से वर्तमान वार्तालाप इतिहास और ऐतिहासिक स्मृति साफ़ हो जाएगी। क्या आप वाकई रीसेट करना चाहते हैं?',
  },
  Home: {
    NewChat: 'नई चैट',
    DeleteChat: 'चयनित वार्तालाप को हटाने की पुष्टि करें?',
    DeleteToast: 'चैट हटाई गई',
    Revert: 'फिर लौट आना',
  },
  Settings: {
    Title: 'समायोजन',
    SubTitle: 'सभी सेटिंग्स',
    Actions: {
      ClearAll: 'सभी डेटा साफ़ करें',
      ResetAll: 'सभी सेटिंग्स को रीसेट',
      Close: 'बंद करें',
      ConfirmResetAll: 'सभी कॉन्फ़िगरेशन को रीसेट करने की पुष्टि करें?',
      ConfirmClearAll: 'सभी डेटा साफ़ करने की पुष्टि करें?',
    },
    Lang: {
      Name: 'Language', // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: 'सारी भाषाएँ',
      Options: {
        cn: '简体中文',
        en: 'English',
        ar: 'عربية',
        in: 'हिंदी',
        tw: '繁體中文',
        es: 'Español',
        it: 'Italiano',
        tr: 'Türkçe',
        jp: '日本語',
        de: 'Deutsch',
        vi: 'Tiếng Việt',
        ru: 'Русский',
        cs: 'Čeština',
      },
    },
    Avatar: 'अवतार',
    FontSize: {
      Title: 'फ़ॉन्ट आकार',
      SubTitle: 'चैट फ़ॉन्ट आकार',
    },

    Update: {
      Version: (x: string) => `वर्तमान संस्करण: ${x}`,
      IsLatest: 'यह नवीनतम संस्करण है',
      CheckUpdate: 'अपडेट की जांच करें',
      IsChecking: 'अपडेट की जांच हो रही है...',
      FoundUpdate: (x: string) => `नया संस्करण मिला: ${x}`,
      GoToUpdate: 'अपडेट पर जाएं',
    },
    SendKey: 'कुंजी भेजें',
    Theme: 'थीम',
    TightBorder: 'नो बॉर्डर मोड',
    SendPreviewBubble: {
      Title: 'पूर्वावलोकन बबल',
      SubTitle: 'पूर्वावलोकन बबल में मार्कडाउन सामग्री का पूर्वावलोकन करें',
    },
    Mask: {
      Title: 'मास्क स्टार्टअप पेज',
      SubTitle: 'नई चैट बनाते समय, मास्क स्टार्टअप पृष्ठ प्रदर्शित करें',
    },
    Prompt: {
      Disable: {
        Title: 'प्रॉम्प्ट शब्द स्वत: पूर्णता अक्षम करें',
        SubTitle:
          'स्वत: पूर्णता ट्रिगर करने के लिए इनपुट बॉक्स की शुरुआत में / दर्ज करें',
      },
      List: 'कस्टम संकेत शब्दों की सूची',
      ListCount: (builtin: number, custom: number) =>
        `बिल्ट-इन ${builtin} बार, यूज़र-डिफ़ाइंड ${custom} बार`,
      Edit: 'संपादन करना',
      Modal: {
        Title: 'प्रॉम्प्ट शब्द सूची',
        Add: 'नया जोड़ो',
        Search: 'प्रॉम्प्ट शब्द खोजें',
      },
      EditModal: {
        Title: 'शीघ्र शब्द संपादित करें',
      },
    },
    HistoryCount: {
      Title: 'संलग्न ऐतिहासिक संदेशों की संख्या',
      SubTitle: 'प्रत्येक अनुरोध द्वारा किए गए ऐतिहासिक संदेशों की संख्या',
    },
    CompressThreshold: {
      Title: 'ऐतिहासिक संदेश लंबाई संपीड़न सीमा',
      SubTitle:
        'जब असम्पीडित ऐतिहासिक संदेश इस मान से अधिक हो जाता है, तो इसे संकुचित कर दिया जाएगा',
    },
    Token: {
      Title: 'API Key',
      SubTitle:
        'पासवर्ड एक्सेस प्रतिबंधों को बायपास करने के लिए अपनी स्वयं की कुंजी का उपयोग करें',
      Placeholder: 'OpenAI API Key',
    },

    Usage: {
      Title: 'तुला राशि जाँच',
      SubTitle(used: any, total: any) {
        return `इस महीने $${used} का उपयोग किया गया, कुल सदस्यता $${total}`;
      },
      IsChecking: 'जांच रही है...',
      Check: 'रीचेक करें',
      NoAccess:
        'शेष राशि देखने के लिए API कुंजी दर्ज करें या पासवर्ड एक्सेस करें',
    },
    AccessCode: {
      Title: 'एक्सेस पासवर्ड',
      SubTitle: 'व्यवस्थापक ने एन्क्रिप्टेड एक्सेस सक्षम किया है',
      Placeholder: 'कृपया एक्सेस पासवर्ड दर्ज करें',
    },
    Model: 'नमूना (model)',
    Temperature: {
      Title: 'यादृच्छिकता (तापमान)',
      SubTitle: 'जितना बड़ा मूल्य, उतना ही यादृच्छिक उत्तर',
    },
    MaxTokens: {
      Title: 'एकल उत्तर सीमा (max_tokens)',
      SubTitle: 'एकल इंटरैक्शन में उपयोग किए जाने वाले टोकन की अधिकतम संख्या',
    },
    PresencePenalty: {
      Title: 'विषय ताजगी (presence_penalty)',
      SubTitle:
        'जितना बड़ा मान होगा, उतनी ही अधिक संभावना है कि यह एक नए विषय पर विस्तृत होगा',
    },
  },
  Store: {
    DefaultTopic: 'नई चैट',
    BotHello: 'क्या मैं आपके लिए कुछ कर सकता हूं',
    Error: 'एक त्रुटि हुई है। कृपया बाद में दोबारा प्रयास करें',
    Prompt: {
      History: (content: string) =>
        'यहाँ ai और उपयोगकर्ता के बीच सारांश के रूप में ऐतिहासिक चैट का सारांश दिया गया है:' +
        content,
      Topic:
        'बिना स्पष्टीकरण, विराम चिह्न, मोडल कण, या अनावश्यक पाठ के इस वाक्य के संक्षिप्त विषय पर सीधे लौटने के लिए चार से पांच शब्दों का प्रयोग करें। यदि कोई विषय नहीं है, तो कृपया सीधे "चैट" पर लौटें।',
      Summarize:
        '200 शब्दों के भीतर नियंत्रित अनुवर्ती संदर्भ संकेत के रूप में, आपके और उपयोगकर्ता के बीच संवाद को संक्षेप में सारांशित करें',
    },
  },
  Copy: {
    Success: 'क्लिपबोर्ड पर लिखा गया',
    Failed: 'प्रतिलिपि विफल, कृपया क्लिपबोर्ड अनुमति प्रदान करें',
  },
  Context: {
    Toast: (x: any) => `सेट कर दिया गया है ${x} पूर्व-संदर्भ`,
    Edit: 'वर्तमान संवाद सेटिंग',
    Add: 'एक डिफ़ॉल्ट संवाद जोड़ें',
    Clear: "Context Cleared",
    Revert: "Revert",
  },
  Plugin: {
    Name: 'लगाना',
  },
  Mask: {
    Name: 'नकाब',
    Page: {
      Title: 'प्रीसेट कैरेक्टर मास्क',
      SubTitle: (count: number) => `${count} डिफ़ॉल्ट भूमिका परिभाषाएँ`,
      Search: 'खोज चरित्र मुखौटा',
      Create: 'नया निर्माण',
    },
    Item: {
      Info: (count: number) => `शामिल करना ${count} पूर्व निर्धारित संवाद`,
      Chat: 'संवाद',
      View: 'देखें',
      Edit: 'संपादित करें',
      Delete: 'हटाएं',
      DeleteConfirm: 'हटाने की पुष्टि करें?',
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `प्रीसेट मास्क संपादित करें ${readonly ? '(केवल पढ़ने के लिए) ' : ''}`,
      Download: 'डाउनलोड प्रीसेट',
      Clone: 'क्लोन प्रीसेट',
    },
    Config: {
      Avatar: 'चरित्र अवतार',
      Name: 'भूमिका का नाम',
      Sync: {
        Title: "वैश्विक कॉन्फ़िग का उपयोग करें",
        SubTitle: "इस चैट में वैश्विक कॉन्फ़िगरेशन का उपयोग करें",
        Confirm: "ग्लोबल कॉन्फिग के साथ कस्टम कॉन्फिग को ओवरराइड करने की पुष्टि करें?",
      },
      HideContext: {
        Title: "प्रसंग संकेत छिपाएँ",
        SubTitle: "चैट में संदर्भ-संबंधी संकेत न दिखाएं",
      },
    },
  },
  NewChat: {
    Return: 'वापसी',
    Skip: 'सीधे प्रारंभ करें',
    NotShow: 'अब और नहीं दिखाएँ',
    ConfirmNoShow:
      'अक्षम करने की पुष्टि करें? एक बार अक्षम करने के बाद इसे सेटिंग में किसी भी समय पुन: सक्षम किया जा सकता है।',
    Title: 'एक मुखौटा उठाओ',
    SubTitle: 'अभी शुरू करो, नकाब के पीछे सोच रही आत्मा से टकराओ',
    More: 'सभी देखें',
  },

  UI: {
    Confirm: 'पुष्टि करें',
    Cancel: 'रद्द करें',
    Close: 'बंद करें',
    Create: 'बनाएं',
    Edit: 'संपादित करें',
  },
};

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
export type LocaleType = DeepPartial<typeof In>;
export type RequiredLocaleType = typeof In;

export default In;
