import { SubmitKey } from '@chat/constant';
import { RequiredLocaleType } from './locals';

const ar: RequiredLocaleType = {
  WIP: 'الميزة لا تزال قيد التطوير...',
  Error: {
    Unauthorized:
      'الوصول غير مصرّح به الآن، يُرجى إدخال رمز التفويض في صفحة الإعدادات.',
  },
  ChatItem: {
    ChatItemCount: (count: number) => ` ${count} محادثات, `,
  },
  Chat: {
    SubTitle: (count: number) => `${count} محادثات مع ChatGPT,`,
    Actions: {
      ChatList: 'عرض قائمة الرسائل',
      CompressedHistory: 'عرض السجل المضغوط لـ Prompt',
      Export: 'تصدير سجل المحادثة',
      Copy: 'نسخ',
      Stop: 'إيقاف',
      Retry: 'إعادة المحاولة',
      Delete: 'Delete',
    },
    Rename: 'إعادة تسمية المحادثة',
    Typing: 'يكتب...',
    Input: (submitKey: string) => {
      let inputHints = ` أدخل الرسالة، ${submitKey} للإرسال`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += '، Shift + Enter للسطر الجديد';
      }
      return inputHints;
    },
    Send: 'إرسال',
    Config: {
      Reset: 'Reset to Default',
      SaveAs: 'Save as Mask',
    },
  },
  Export: {
    Title: 'تصدير سجل المحادثة إلى Markdown',
    Copy: 'نسخ الكل',
    Download: 'تحميل الملف',
    MessageFromYou: 'رسالة منك',
    MessageFromChatGPT: 'رسالة من ChatGPT',
    Share: 'Share to ShareGPT',
    Format: {
      Title: 'Export Format',
      SubTitle: 'Markdown or PNG Image',
    },
    IncludeContext: {
      Title: 'Including Context',
      SubTitle: 'Export context prompts in mask or not',
    },
    Steps: {
      Select: 'Select',
      Preview: 'Preview',
    },
  },
  Select: {
    Search: 'Search',
    All: 'Select All',
    Latest: 'Select Latest',
    Clear: 'Clear',
  },
  Memory: {
    Title: 'الذاكرة التاريخية',
    EmptyContent: 'لا يوجد ذاكرة حتى الآن',
    Send: 'Send Memory',
    Copy: 'نسخ الكل',
    Reset: 'Reset Session',
    ResetConfirm:
      'Resetting will clear the current conversation history and historical memory. Are you sure you want to reset?',
  },
  Home: {
    NewChat: 'محادثة جديدة',
    DeleteChat: 'هل تريد حذف المحادثة المحددة؟',
    DeleteToast: 'Chat Deleted',
    Revert: 'Revert',
  },

  Settings: {
    Title: 'الإعدادات',
    SubTitle: 'خيارات الإعداد',
    Actions: {
      ClearAll: 'مسح جميع البيانات',
      ResetAll: 'إعادة تعيين جميع الخيارات',
      Close: 'إغلاق',
      ConfirmResetAll: 'Are you sure you want to reset all configurations?',
      ConfirmClearAll: 'Are you sure you want to reset all data?',
    },
    Lang: {
      Name: 'Language',
      All: 'All',
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
    Avatar: 'الصورة الرمزية',
    FontSize: {
      Title: 'حجم الخط',
      SubTitle: 'ضبط حجم الخط لمحتوى الدردشة',
    },
    Update: {
      Version: (x: string) => `الإصدار الحالي: ${x}`,
      IsLatest: 'أنت على أحدث إصدار',
      CheckUpdate: 'التحقق من التحديثات',
      IsChecking: 'جارٍ التحقق من التحديثات...',
      FoundUpdate: (x: string) => `تم العثور على إصدار جديد: ${x}`,
      GoToUpdate: 'الانتقال إلى التحديث',
    },
    SendKey: 'مفتاح الإرسال',
    Theme: 'السمة',
    TightBorder: 'حدود متراصة',
    SendPreviewBubble: {
      Title: 'Send Preview Bubble',
      SubTitle: 'Preview markdown in bubble',
    },
    Mask: {
      Title: 'Mask Splash Screen',
      SubTitle: 'Show a mask splash screen before starting new chat',
    },
    Prompt: {
      Disable: {
        Title: 'تعطيل الإكمال التلقائي للكلمات الموجهة',
        SubTitle: 'اكتب / في بداية المربع لتفعيل الإكمال التلقائي',
      },
      List: 'قائمة الكلمات الموجهة المخصصة',
      ListCount: (builtin: number, custom: number) =>
        `مدمج ${builtin} ، تعريف المستخدم ${custom}`,
      Edit: 'تحرير',
      Modal: {
        Title: 'Prompt List',
        Add: 'Add One',
        Search: 'Search Prompts',
      },
      EditModal: {
        Title: 'Edit Prompt',
      },
    },
    HistoryCount: {
      Title: 'عدد الرسائل  المرفقة',
      SubTitle: 'عدد الرسائل المرفقة مع كل طلب',
    },
    CompressThreshold: {
      Title: 'عتبة ضغط طول الرسائل',
      SubTitle: 'سيتم ضغطه إذا تجاوزت طول الرسائل غير المضغوطة القيمة',
    },
    Token: {
      Title: 'API Key',
      SubTitle: 'استخدام مفتاحك الخاص لتجاوز قيود الوصول المصرح به',
      Placeholder: 'OpenAI API Key',
    },
    Usage: {
      Title: 'رصيد الحساب',
      SubTitle(used: any) {
        return `تم استخدام ${used}$ هذا الشهر`;
      },
      IsChecking: 'جارٍ التحقق...',
      Check: 'إعادة التحقق',
      NoAccess: 'أدخل مفتاح API لعرض الرصيد',
    },

    AccessCode: {
      Title: 'رمز التفويض',
      SubTitle: 'الوصول غير مصرّح به حاليًا',
      Placeholder: 'يرجى إدخال رمز التفويض',
    },
    Model: 'النموذج (model)',
    Temperature: {
      Title: 'العشوائية (temperature)',
      SubTitle: 'كلما زادت القيمة، زادت العشوائية في الردود',
    },
    MaxTokens: {
      Title: 'الحد الأقصى للرموز في الرد الواحد (max_tokens)',
      SubTitle: 'أقصى عدد من الرموز المستخدمة في التفاعل الواحد',
    },
    PresencePenalty: {
      Title: 'جدة الموضوع (presence_penalty)',
      SubTitle: 'كلما زادت القيمة، زادت احتمالية التوسع إلى مواضيع جديدة',
    },
  },
  Store: {
    DefaultTopic: 'محادثة جديدة',
    BotHello: 'كيف يمكنني مساعدتك',
    Error: 'حدث خطأ، الرجاء المحاولة مرة أخرى لاحقًا',
    Prompt: {
      History: (content: string) =>
        'هذا ملخص التفاعلات السابقة بين المستخدم والذكاء الاصطناعي كما يلي: ' +
        content,
      Topic:
        "استخدم أربعة إلى خمسة كلمات للإشارة إلى الموضوع الرئيسي للجملة، بدون شرح أو علامات ترقيم أو كلمات عاطفية أو نص إضافي. إذا لم يكن هناك موضوع رئيسي، الرجاء إرسال 'دردشة عامة'",
      Summarize:
        'قم بتلخيص المحادثة بينك وبين المستخدم بإيجاز كما يلي، واحتفظ بها في إطار 200 كلمة',
    },
  },
  Copy: {
    Success: 'تم النسخ إلى الحافظة',
    Failed: 'فشل النسخ، الرجاء منح الإذن للوصول إلى الحافظة',
  },
  Context: {
    Toast: (x: any) => `تم تعيين ${x} من السياقات السابقة`,
    Edit: 'السياقات السابقة والذاكرة ',
    Add: 'إضافة جديدة',
    Clear: 'Context Cleared',
    Revert: 'Revert',
  },
  Plugin: {
    Name: 'Plugin',
  },
  Mask: {
    Name: 'Mask',
    Page: {
      Title: 'Prompt Template',
      SubTitle: (count: number) => `${count} prompt templates`,
      Search: 'Search Templates',
      Create: 'Create',
    },
    Item: {
      Info: (count: number) => `${count} prompts`,
      Chat: 'Chat',
      View: 'View',
      Edit: 'Edit',
      Delete: 'Delete',
      DeleteConfirm: 'Confirm to delete?',
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Edit Prompt Template ${readonly ? '(readonly)' : ''}`,
      Download: 'Download',
      Clone: 'Clone',
    },
    Config: {
      Avatar: 'Bot Avatar',
      Name: 'Bot Name',
      Sync: {
        Title: 'Use Global Config',
        SubTitle: 'Use global config in this chat',
        Confirm: 'Confirm to override custom config with global config?',
      },
      HideContext: {
        Title: 'Hide Context Prompts',
        SubTitle: 'Do not show in-context prompts in chat',
      },
    },
  },
  NewChat: {
    Return: 'Return',
    Skip: 'Just Start',
    Title: 'Pick a Mask',
    SubTitle: 'Chat with the Soul behind the Mask',
    More: 'Find More',
    NotShow: 'Never Show Again',
    ConfirmNoShow: 'Confirm to disable？You can enable it in settings later.',
  },
  UI: {
    Confirm: 'Confirm',
    Cancel: 'Cancel',
    Close: 'Close',
    Create: 'Create',
    Edit: 'Edit',
  },
};
export default ar;
