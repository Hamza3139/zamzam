# طريقة رفع واستضافة موقع معرض زمزم للستائر على GitHub Pages
# How to Host Zamzam Blinds Website on GitHub Pages

تم تجهيز هذا المشروع بالكامل ليعمل بشكل فوري ومجاني على استضافة **GitHub Pages**، مع معالجة المسارات النسبية للصور والملفات الثابتة (`base: './'`).

---

## الطريقة الأولى: النشر التلقائي عبر GitHub Actions (الأسهل والأفضل) 🚀
## Method 1: Automatic Deployment via GitHub Actions (Recommended)

لقد قمنا بإضافة ملف سير عمل جاهز داخل المشروع في المسار `.github/workflows/deploy.yml`. بمجرد رفع الكود، سيقوم GitHub ببناء الموقع ونشره تلقائياً عند كل تحديث.

### الخطوات (Steps):

1. **إنشاء مستودع جديد على GitHub / Create a new GitHub repo:**
   - ادخل إلى [github.com](https://github.com) وسجل دخولك.
   - اضغط على **New Repository**.
   - اختر اسماً للمشروع، مثلاً: `zamzam-blinds`.
   - اجعل المستودع **Public** (عام) لتفعيل الاستضافة المجانية، ثم اضغط **Create repository**.

2. **رفع الملفات إلى GitHub / Push files to GitHub:**
   افتح موجه الأوامر (Terminal / PowerShell) في مجلد المشروع ونفذ الأوامر التالية:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Zamzam Blinds showroom website"
   git branch -M main
   git remote add origin https://github.com/<اسم-المستخدم-الخاص-بك>/<اسم-المستودع>.git
   git push -u origin main
   ```
   *(استبدل الرابط برابط مستودعك الجديد)*

3. **تفعيل GitHub Pages / Enable GitHub Pages:**
   - في صفحة مستودعك على GitHub، اضغط على تبويب **Settings** (الإعدادات).
   - من القائمة الجانبية، اختر **Pages** (تحت قسم Code and automation).
   - في قسم **Build and deployment**، غيّر خيار **Source** من "Deploy from a branch" إلى:
     👉 **GitHub Actions**
   - احفظ الإعداد.

4. **الموقع أصبح متاحاً / Live Website:**
   - اذهب إلى تبويب **Actions** في مستودعك لمشاهدة عملية البناء (تستغرق أقل من دقيقة).
   - سيكون موقعك متاحاً للجميع على الرابط:
     `https://<YOUR-USERNAME>.github.io/<REPO-NAME>/`

---

## الطريقة الثانية: النشر اليدوي عبر أمر واحد (`npm run deploy`)
## Method 2: One-Command Deploy via `gh-pages`

تم تثبيت حزمة `gh-pages` وإعدادها مسبقاً في `package.json`:

1. أضف سطر `"homepage"` في ملف `package.json`:
   ```json
   "homepage": "https://<YOUR-USERNAME>.github.io/<REPO-NAME>"
   ```
2. نفذ الأمر التالي في موجه الأوامر:
   ```bash
   npm run deploy
   ```
3. في صفحة المستودع: **Settings** -> **Pages** -> اختر الفرع **gh-pages** ومجلد **/(root)** واضغط **Save**.

---

## ميزات تم ضبطها لضمان عمل الموقع بدون مشاكل:
1. **مسارات الملفات النسبية (`base: './'`)**: جميع الصور والملفات ستعمل سواء استضاف الموقع على اسم المستودع الفرعي أو على نطاق خاص (Custom Domain).
2. **شعار واتساب الرسمي المدمج بتقنية SVG**: يظهر بجودة فائقة على كل الشاشات بدون الحاجة لملفات خارجية.
3. **التصميم المتجاوب ودعم اللغتين (العربية والإنجليزية)**.
