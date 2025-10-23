# ĐẶC TẢ DỰ ÁN WEBSITE KỶ NIỆM 80 NĂM QUỐC KHÁNH 2/9

## TỔNG QUAN DỰ ÁN

Website kỷ niệm 80 năm Ngày Quốc khánh Việt Nam (2/9/1945 - 2/9/2025) với giao diện hiện đại, nhiều hiệu ứng animation và màu sắc chủ đạo đỏ-vàng của quốc kỳ Việt Nam.

### Đặc điểm nổi bật:
- Giao diện sang trọng, hiện đại với nhiều hiệu ứng 3D, gradient và animation
- Responsive design hoàn chỉnh cho mobile, tablet và desktop
- Sử dụng Next.js 15 với App Router mới nhất
- Tích hợp Tailwind CSS 4 với custom animations
- Tối ưu hóa hình ảnh với Next.js Image component

---

## TECH STACK

### Framework & Libraries:
```json
{
  "next": "^15.5.6",
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "tailwindcss": "^4",
  "@tailwindcss/postcss": "^4",
  "typescript": "^5"
}
```

### Build Tools:
- Next.js Turbopack (cho dev và build)
- PostCSS
- ESLint

---

## CẤU TRÚC THỨ MỤC

```
webai/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Trang chủ (MAIN PAGE - QUAN TRỌNG)
│   │   ├── layout.tsx            # Layout chính
│   │   ├── globals.css           # CSS toàn cục với animations
│   │   ├── favicon.ico           # Icon trang
│   │   ├── about/                # Trang giới thiệu (có thể bỏ)
│   │   ├── events/               # Trang sự kiện (có thể bỏ)
│   │   └── news/                 # Trang tin tức (có thể bỏ)
│   └── components/
│       ├── Header.tsx            # Component header
│       └── Footer.tsx            # Component footer
├── public/
│   ├── tan-trao.jpg              # Hình ảnh lịch sử
│   ├── Flag_of_North_Vietnam.svg.webp
│   └── [các file svg khác]
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

---

## CHI TIẾT TRANG CHỦ (page.tsx)

Trang chủ được chia thành các section chính sau:

### 1. HERO SECTION (Banner chính)
**Vị trí:** Đầu trang
**Chiều cao:** py-48 (padding top/bottom lớn)

#### Cấu trúc layers (từ dưới lên):
1. **Background Image Layer:**
   - Hình ảnh từ Unsplash về Quốc khánh Việt Nam
   - URL: `https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=2070&auto=format&fit=crop`
   - Hiệu ứng: scale-110, transition-transform duration-1000
   - Gradient overlay: from-red-600/70 via-red-700/60 to-orange-600/50

2. **Animated Gradient Layer:**
   - Class: gradient-animate
   - Gradient: from-red-600/30 via-transparent to-yellow-600/30
   - Animation: Gradient shift 8s infinite

3. **Decorative Particles:**
   - 5 particles nhỏ màu trắng opacity 20%
   - Animation: particleFloat 8s linear infinite
   - Vị trí random: top 10%, 20%, 40%, 60%, 80%

4. **Floating Flag Decorations:**
   - 4 cờ Việt Nam với kích thước khác nhau (w-16 đến w-32)
   - Class: float-animate (animation lên xuống)
   - Opacity: 15%
   - Animation delay khác nhau: 0s, 1s, 2s, 3s
   - SVG URL: `https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg`

#### Nội dung chính (z-10 relative):
1. **Logo/Icon trung tâm:**
   - Hình tròn (rounded-full) w-28 h-28
   - Background: white/95 với backdrop-blur
   - Chứa cờ Việt Nam
   - Class: star-animate (nhấp nhoáy)
   - Ring: ring-4 ring-yellow-400/50

2. **Tiêu đề chính:**
   ```
   Chào mừng Kỷ niệm
   80 năm Quốc khánh 2/9
   ```
   - Font size: text-7xl
   - Font weight: font-extrabold
   - Dòng thứ 2: text-yellow-300 với drop-shadow-2xl và text-glow
   - Class: fade-in-up

3. **Badge năm:**
   - "1945 - 2025"
   - Background: white/20 với backdrop-blur
   - Border: 2px border-white/30
   - Padding: px-8 py-3
   - Class: glass, neon-border

4. **Mô tả:**
   - "Tám mươi năm xây dựng và phát triển đất nước"
   - Text: text-2xl, text-white/95
   - Max width: max-w-3xl

5. **Call-to-action Buttons:**
   - 2 nút: "Khám phá sự kiện" (vàng) và "Tìm hiểu thêm" (trắng)
   - Classes:
     - Nút vàng: bg-gradient-to-r from-yellow-400 to-yellow-500
     - Nút trắng: bg-white/95 backdrop-blur
   - Hover effects: scale-105, -translate-y-1
   - Class: ripple-effect

6. **Wave Separator:**
   - SVG wave ở bottom
   - Path: Curved wave shape
   - Fill: white

---

### 2. DIVIDER (Đường phân cách với icon)
**Pattern lặp lại giữa các sections:**
```html
<div class="container mx-auto px-4">
  <div class="flex items-center justify-center gap-4">
    <div class="h-px flex-1 bg-gradient-to-r from-transparent via-red-300 to-red-600"></div>
    <span class="text-3xl">[ICON]</span>
    <div class="h-px flex-1 bg-gradient-to-l from-transparent via-red-300 to-red-600"></div>
  </div>
</div>
```
**Icons khác nhau:** 🇻🇳, ⭐, 🏆, etc.

---

### 3. TIMELINE SECTION (Dấu mốc lịch sử)
**Background:** bg-gradient-to-b from-white via-gray-50 to-white
**Padding:** py-24

#### Header:
- Icon: 📜 (text-6xl) với class parallax-float
- Tiêu đề: "Dấu mốc lịch sử" (text-6xl font-bold text-red-700)
- Underline: w-32 h-1.5 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600
- Subtitle: "Hành trình 80 năm vẻ vang của dân tộc"

#### Timeline Structure (Zigzag Layout):
**CSS Classes quan trọng:**
- Container: `.timeline-modern`
- Vertical line: `.timeline-line` (absolute, left 50%, gradient line)
- Items: `.timeline-item.left` và `.timeline-item.right` (xen kẽ)

**4 Timeline Items:**

1. **1945 - Cách mạng Tháng Tám**
   - Position: Left
   - Icon: 🏛️
   - Color scheme: Red
   - Nội dung: "Nước Việt Nam Dân chủ Cộng hòa ra đời..."

2. **1975 - Thống nhất đất nước**
   - Position: Right
   - Icon: ⭐
   - Color scheme: Red
   - Nội dung: "Hoàn thành cuộc kháng chiến chống Mỹ..."

3. **1986 - Đổi mới đất nước**
   - Position: Left
   - Icon: 🚀
   - Color scheme: Red
   - Nội dung: "Khởi động công cuộc Đổi Mới..."

4. **2025 - 80 năm Quốc khánh**
   - Position: Right
   - Icon: 🎉
   - Background: gradient-to-br from-yellow-50 via-orange-50 to-red-50
   - Border: border-yellow-400
   - Nội dung: "Tự hào nhìn lại 80 năm..."

#### Timeline Card Structure:
```html
<div class="timeline-item [left/right]">
  <div class="timeline-icon">[EMOJI]</div>
  <div class="timeline-content card-3d">
    <div class="timeline-year text-glow">[YEAR]</div>
    <h3 class="timeline-title">[TITLE]</h3>
    <div class="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400"></div>
    <p class="timeline-description">[DESCRIPTION]</p>
  </div>
</div>
```

#### Stats Cards (Grid 4 cột):
- 80 năm vẻ vang
- 100M+ dân số
- 54 dân tộc
- ∞ Tinh thần bất diệt

---

### 4. SỰ KIỆN NỔI BẬT SECTION
**Background:** bg-gradient-to-b from-white via-red-50/30 to-white
**Padding:** py-24

#### Header:
- Icon: ⭐ với parallax-float
- Tiêu đề: "Sự kiện Nổi bật"
- Underline: w-32 h-1.5 bg-gradient-to-r from-yellow-400 via-red-600 to-yellow-400

#### Event Cards (Grid 3 cột):

**Card 1 - Lễ diễu binh:**
- Header color: bg-gradient-to-br from-red-600 to-red-700
- Icon: 🎖️ (text-9xl)
- Badge: 2/9/2025 • 8:00 AM
- Location: Quảng trường Ba Đình, Hà Nội
- Description: "Lễ diễu binh long trọng..."
- Link color: text-red-600

**Card 2 - Chương trình nghệ thuật:**
- Header color: bg-gradient-to-br from-yellow-400 to-yellow-500
- Icon: 🎭
- Badge: 2/9/2025 • 7:30 PM
- Location: Nhà hát Lớn Hà Nội
- Description: "Đêm nghệ thuật hoành tráng..."
- Link color: text-yellow-700

**Card 3 - Triển lãm:**
- Header color: bg-gradient-to-br from-red-500 to-orange-600
- Icon: 📸
- Badge: 1/9 - 30/9/2025
- Location: Bảo tàng Lịch sử Quốc gia
- Description: "Hơn 500 bức ảnh quý..."
- Link color: text-orange-700
- Span: md:col-span-2 lg:col-span-1

#### Card Hover Effects:
- Icon: group-hover:scale-125 group-hover:rotate-12
- Transform: translateY(-10px) scale(1.02)
- Shadow: shadow-2xl
- Gradient overlay appears

#### Bottom CTA:
- Button: "Xem tất cả sự kiện"
- Style: bg-gradient-to-r from-red-600 via-red-700 to-red-600
- Classes: ripple-effect, hover:scale-105

---

### 5. THÀNH TỰU VẺ VANG SECTION
**Background:** bg-gradient-to-b from-white to-gray-50
**Padding:** py-24

#### Header:
- Icon: 🏆
- Tiêu đề: "Thành tựu Vẻ vang"
- Underline: w-24 h-1 bg-gradient-to-r from-red-600 to-orange-500

#### Achievement Cards (Grid 4 cột):

**Card 1 - Dân số:**
- Gradient: from-red-500 to-red-700
- Icon: 🏆
- Number: 100+
- Label: "Triệu dân số"
- Detail: "Dân số đông thứ 15 thế giới"

**Card 2 - Kinh tế:**
- Gradient: from-yellow-500 to-orange-600
- Icon: 📈
- Number: Top 40
- Label: "Nền kinh tế thế giới"
- Detail: "GDP tăng trưởng ấn tượng"

**Card 3 - Giáo dục:**
- Gradient: from-blue-500 to-indigo-600
- Icon: 🎓
- Number: 95%+
- Label: "Tỷ lệ biết chữ"
- Detail: "Giáo dục phát triển toàn diện"

**Card 4 - Quan hệ quốc tế:**
- Gradient: from-green-500 to-emerald-600
- Icon: 🌏
- Number: 190+
- Label: "Quan hệ ngoại giao"
- Detail: "Hội nhập quốc tế sâu rộng"

#### Card Structure:
```html
<div class="relative group">
  <div class="absolute inset-0 bg-gradient-to-br [COLOR] blur-xl opacity-20"></div>
  <div class="relative bg-white rounded-2xl shadow-xl card-hover border-2">
    <div class="w-20 h-20 bg-gradient-to-br [COLOR] rounded-full [ICON]"></div>
    <div class="text-5xl font-extrabold bg-gradient-to-br bg-clip-text text-transparent">
      [NUMBER]
    </div>
    <div class="w-16 h-1 bg-gradient-to-r [COLOR]"></div>
    <p class="font-semibold">[LABEL]</p>
    <p class="text-xs text-gray-500">[DETAIL]</p>
  </div>
</div>
```

#### Additional Stats (Grid 4 cột nhỏ):
- 63 Tỉnh/Thành phố
- 54 Dân tộc anh em
- 8 Di sản thế giới
- ∞ Tinh thần bất diệt

---

### 6. QUOTE SECTION
**Background:** bg-gradient-to-br from-red-700 via-red-800 to-red-900
**Text:** text-white
**Padding:** py-24

#### Decorative Flags:
- 2 cờ Việt Nam floating (opacity 10%)
- Top-left và bottom-right
- Class: float-animate

#### Quote Content:
- Flag icon: 🇻🇳 (text-7xl) với star-animate
- Underline: w-20 h-1 bg-yellow-400
- Quote: "Không có gì quý hơn độc lập, tự do"
  - Font: text-4xl font-bold italic
  - Style: Blockquote
- Author: "- Chủ tịch Hồ Chí Minh -"
  - Color: text-yellow-300
  - Background: white/10 backdrop-blur
  - Shape: rounded-full

---

### 7. FOOTER (Embedded in page.tsx)
**Background:** bg-gradient-to-b from-gray-900 to-black
**Text:** text-white
**Padding:** py-16

#### Grid Layout (4 cột):

**Column 1 (span 2 cột):**
- Logo section với cờ Việt Nam
- Tiêu đề: "Quốc khánh 2/9"
- Subtitle: "Kỷ niệm 80 năm vẻ vang"
- Description text về website

**Column 2 - Liên kết nhanh:**
- Links to: Sự kiện, Thành tựu, Lịch sử
- Style: text-gray-400 hover:text-white
- Arrow prefix: →

**Column 3 - Liên hệ:**
- Email: info@quockhanh.vn
- Phone: 1900 1945
- Address: Hà Nội, Việt Nam
- Icons: 📧 📱 📍

#### Bottom Section:
- Divider: w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent
- Copyright: "© 2025 Kỷ niệm 80 năm Quốc khánh Việt Nam"
- Special message: ❤️ "Được tạo với tình yêu dành cho Tổ quốc"
  - Icon: pulse-animate

---

## COMPONENTS

### Header Component (Header.tsx)

**Location:** src/components/Header.tsx

#### Structure:
```tsx
<header class="bg-gradient-to-r from-red-700 via-red-600 to-red-700 sticky top-0 z-50 gradient-animate">
  <div class="container mx-auto px-4">
    <div class="flex justify-between items-center py-5">
      <!-- Logo Section -->
      <div class="flex items-center space-x-4">
        <div class="w-12 h-12 bg-white rounded-full">
          [Vietnam Flag Image]
        </div>
        <div>
          <h1 class="text-3xl font-bold">Quốc Khánh 2/9</h1>
          <p class="text-sm text-yellow-200">Kỷ niệm 80 năm</p>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="hidden md:block">
        <ul class="flex space-x-8">
          <li>Trang chủ</li>
          <li>Sự kiện</li>
          <li>Tin tức</li>
          <li>Giới thiệu</li>
        </ul>
      </nav>

      <!-- Mobile Menu Button -->
      <button class="md:hidden">[Hamburger Icon]</button>
    </div>
  </div>

  <!-- Decorative Border -->
  <div class="h-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400"></div>
</header>
```

#### Navigation Links:
- Each link has:
  - Base: text-lg font-medium
  - Hover: text-yellow-300
  - Underline animation: w-0 to w-full transition

#### Features:
- Sticky positioning (sticky top-0)
- Gradient background animation
- Responsive (hidden navigation on mobile)
- Flag image in circular container

---

### Footer Component (Footer.tsx)

**Location:** src/components/Footer.tsx

#### Structure:
```tsx
<footer class="bg-gradient-to-b from-gray-900 to-black text-gray-300">
  <!-- Top Border -->
  <div class="h-1 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600"></div>

  <div class="container mx-auto px-4 py-12">
    <!-- Grid 3 columns -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">

      <!-- Column 1: Info -->
      <div>
        <div class="flex items-center space-x-3">
          [Flag Logo]
          <h3>Quốc Khánh 2/9</h3>
        </div>
        <p>Kỷ niệm 80 năm Cách mạng tháng Tám...</p>
      </div>

      <!-- Column 2: Quick Links -->
      <div>
        <h3>Liên kết nhanh</h3>
        <ul>
          <li>→ Trang chủ</li>
          <li>→ Sự kiện</li>
          <li>→ Tin tức</li>
          <li>→ Giới thiệu</li>
        </ul>
      </div>

      <!-- Column 3: Contact -->
      <div>
        <h3>Thông tin</h3>
        <p>📍 Hà Nội, Việt Nam</p>
        <p>📧 info@quockhanh2-9.vn</p>
        <p>🌐 www.quockhanh2-9.vn</p>
      </div>
    </div>

    <!-- Divider -->
    <div class="border-t border-gray-800"></div>

    <!-- Copyright -->
    <div>
      <p>© 2025 Ban Tổ chức...</p>
      <p class="text-yellow-400">🇻🇳 Tự hào Việt Nam - Hào hùng lịch sử</p>
    </div>
  </div>
</footer>
```

---

## ROOT LAYOUT (layout.tsx)

**Location:** src/app/layout.tsx

```tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "80th National Day",
  description: "Website for the 80th anniversary of Vietnam's National Day",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

---

## STYLES & ANIMATIONS (globals.css)

### CSS Variables:
```css
:root {
  --background-rgb: 255, 255, 255;
  --foreground-rgb: 20, 20, 20;
  --primary-rgb: 218, 37, 51;      /* Đỏ cờ VN */
  --secondary-rgb: 255, 204, 0;    /* Vàng cờ VN */
  --accent-rgb: 237, 28, 36;
}
```

### Custom Utility Classes:
```css
.bg-primary { background-color: rgb(var(--primary-rgb)); }
.bg-secondary { background-color: rgb(var(--secondary-rgb)); }
.text-primary { color: rgb(var(--primary-rgb)); }
.text-secondary { color: rgb(var(--secondary-rgb)); }
.border-primary { border-color: rgb(var(--primary-rgb)); }
```

### Animations:

#### 1. Star Animation (Twinkle):
```css
@keyframes twinkle {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.1); }
}
.star-animate {
  animation: twinkle 2s ease-in-out infinite;
}
```

#### 2. Gradient Shift:
```css
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.gradient-animate {
  background-size: 200% 200%;
  animation: gradient-shift 8s ease infinite;
}
```

#### 3. Card Hover:
```css
.card-hover {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.card-hover:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(218, 37, 51, 0.2);
}
```

#### 4. Float Animation:
```css
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-20px) rotate(5deg); }
  66% { transform: translateY(-10px) rotate(-5deg); }
}
.float-animate {
  animation: float 6s ease-in-out infinite;
}
```

#### 5. Fade In Up:
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}
```

#### 6. Pulse:
```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
.pulse-animate {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

#### 7. Shimmer Effect:
```css
@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}
.shimmer {
  background: linear-gradient(90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  background-size: 1000px 100%;
  animation: shimmer 3s infinite;
}
```

#### 8. Parallax Float:
```css
@keyframes parallaxFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
.parallax-float {
  animation: parallaxFloat 6s ease-in-out infinite;
}
```

#### 9. Particle Float:
```css
@keyframes particleFloat {
  0% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 0;
  }
  50% { opacity: 1; }
  100% {
    transform: translate(100px, -100px) rotate(360deg);
    opacity: 0;
  }
}
.particle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: radial-gradient(circle, rgba(218, 37, 51, 0.8), transparent);
  border-radius: 50%;
  animation: particleFloat 8s linear infinite;
}
```

#### 10. Neon Glow:
```css
@keyframes neonGlow {
  0%, 100% {
    box-shadow: 0 0 5px rgba(218, 37, 51, 0.5),
                0 0 10px rgba(218, 37, 51, 0.3),
                0 0 15px rgba(218, 37, 51, 0.2);
  }
  50% {
    box-shadow: 0 0 10px rgba(218, 37, 51, 0.8),
                0 0 20px rgba(218, 37, 51, 0.5),
                0 0 30px rgba(218, 37, 51, 0.3);
  }
}
.neon-border {
  animation: neonGlow 2s ease-in-out infinite;
}
```

#### 11. Ripple Effect:
```css
@keyframes ripple {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
}
.ripple-effect {
  position: relative;
  overflow: hidden;
}
.ripple-effect::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  background: rgba(218, 37, 51, 0.5);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
}
.ripple-effect:active::after {
  animation: ripple 0.6s ease-out;
}
```

### Special Effects:

#### Glass Morphism:
```css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

#### Text Glow:
```css
.text-glow {
  text-shadow: 0 0 20px rgba(218, 37, 51, 0.5),
               0 0 30px rgba(218, 37, 51, 0.3),
               0 0 40px rgba(218, 37, 51, 0.2);
}
```

#### 3D Card Transform:
```css
.card-3d {
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
}
.card-3d:hover {
  transform: rotateY(5deg) rotateX(5deg);
}
```

### Timeline Specific Styles:

#### Timeline Container:
```css
.timeline-modern {
  position: relative;
  padding: 4rem 0;
}
```

#### Timeline Line:
```css
.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg,
    transparent 0%,
    rgba(218, 37, 51, 0.3) 10%,
    rgba(218, 37, 51, 0.8) 50%,
    rgba(218, 37, 51, 0.3) 90%,
    transparent 100%
  );
  transform: translateX(-50%);
}
```

#### Timeline Item:
```css
.timeline-item {
  position: relative;
  margin-bottom: 6rem;
  opacity: 0;
  animation: slideInTimeline 0.6s ease-out forwards;
}

@keyframes slideInTimeline {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

#### Timeline Content:
```css
.timeline-content {
  position: relative;
  width: 45%;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(249, 250, 251, 0.95));
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
}

.timeline-content:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 60px rgba(218, 37, 51, 0.2);
  border-color: rgba(218, 37, 51, 0.3);
}
```

#### Timeline Icon:
```css
.timeline-icon {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #da2533, #ed1c24);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 10px 30px rgba(218, 37, 51, 0.4);
  border: 4px solid white;
  z-index: 20;
}
```

#### Timeline Year:
```css
.timeline-year {
  display: inline-block;
  font-size: 3rem;
  font-weight: 900;
  background: linear-gradient(135deg, #da2533, #ed1c24);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 10px rgba(218, 37, 51, 0.3));
}
```

### Custom Scrollbar:
```css
::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: rgb(var(--primary-rgb));
  border-radius: 6px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgb(var(--accent-rgb));
}
```

### Smooth Scrolling:
```css
html {
  scroll-behavior: smooth;
}
```

---

## TAILWIND CONFIG

**File:** tailwind.config.ts

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary-rgb))',
        secondary: 'rgb(var(--secondary-rgb))',
      }
    },
  },
  plugins: [],
}
export default config
```

---

## IMAGES & ASSETS

### External Images (từ URLs):

1. **Hero Background:**
   - URL: `https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=2070&auto=format&fit=crop`
   - Description: Vietnam National Day celebration

2. **Vietnam Flag SVG:**
   - URL: `https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg`
   - Usage: Header logo, decorative elements, hero section

### Local Images (public folder):
- tan-trao.jpg
- Flag_of_North_Vietnam.svg.webp
- Various SVG icons (file.svg, globe.svg, next.svg, etc.)

### Image Optimization:
- Sử dụng Next.js `<Image>` component
- Props: `fill`, `priority`, `className`
- Object-fit: `object-cover` hoặc `object-contain`

---

## RESPONSIVE DESIGN

### Breakpoints (Tailwind defaults):
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

### Mobile Adaptations:

#### Hero Section:
- Text sizes: text-4xl (mobile) → text-7xl (desktop)
- Padding: py-32 (mobile) → py-48 (desktop)
- Buttons: Stack vertically (flex-col) → Row (sm:flex-row)

#### Timeline:
- Desktop: Zigzag layout (left/right)
- Mobile: All items aligned left, timeline line at left edge (left: 30px)
- Content width: calc(100% - 80px)

#### Event Cards:
- Grid: 1 column (mobile) → 2 columns (md) → 3 columns (lg)

#### Achievement Cards:
- Grid: 2 columns → 4 columns (lg)

#### Header Navigation:
- Hidden on mobile (md:hidden)
- Mobile menu button visible (md:block)

---

## COLOR PALETTE

### Primary Colors:
- **Red (Primary):** #DA2533 (rgb(218, 37, 51))
- **Yellow (Secondary):** #FFCC00 (rgb(255, 204, 0))
- **Accent Red:** #ED1C24 (rgb(237, 28, 36))

### Gradients:

1. **Hero Background:**
   - from-red-600/70 via-red-700/60 to-orange-600/50

2. **Button Gradient (Yellow):**
   - from-yellow-400 to-yellow-500
   - Hover: from-yellow-300 to-yellow-400

3. **Button Gradient (Red):**
   - from-red-600 via-red-700 to-red-600

4. **Timeline Icon:**
   - from #da2533 to #ed1c24 (135deg)

5. **Achievement Card Gradients:**
   - Red: from-red-500 to-red-700
   - Yellow: from-yellow-500 to-orange-600
   - Blue: from-blue-500 to-indigo-600
   - Green: from-green-500 to-emerald-600

### Text Colors:
- Primary text: text-gray-800
- Secondary text: text-gray-600
- Light text: text-gray-400
- White text: text-white
- Highlighted: text-yellow-300, text-red-700

---

## TYPOGRAPHY

### Fonts:
- **Sans:** Geist (Google Fonts)
- **Mono:** Geist Mono (Google Fonts)

### Font Sizes (Tailwind):
- xs: 0.75rem
- sm: 0.875rem
- base: 1rem
- lg: 1.125rem
- xl: 1.25rem
- 2xl: 1.5rem
- 3xl: 1.875rem
- 4xl: 2.25rem
- 5xl: 3rem
- 6xl: 3.75rem
- 7xl: 4.5rem
- 9xl: 8rem

### Font Weights:
- font-light (300)
- font-medium (500)
- font-semibold (600)
- font-bold (700)
- font-extrabold (800)
- font-black (900)

---

## SPACING & LAYOUT

### Container:
- Class: `container mx-auto px-4 md:px-6`
- Max width: Auto (based on Tailwind defaults)

### Section Padding:
- Mobile: py-16
- Desktop: py-24

### Gap Spacing:
- Small: gap-4
- Medium: gap-6, gap-8
- Large: gap-10, gap-12

### Border Radius:
- Small: rounded-xl (0.75rem)
- Medium: rounded-2xl (1rem)
- Large: rounded-3xl (1.5rem)
- Full: rounded-full (9999px)

---

## INTERACTIVE ELEMENTS

### Buttons:

**Primary CTA (Yellow):**
```html
<button class="px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 font-bold rounded-full hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/50 ripple-effect">
  [Text]
</button>
```

**Secondary CTA (White):**
```html
<button class="px-10 py-5 bg-white/95 backdrop-blur-sm text-red-700 font-bold rounded-full hover:bg-white border-2 border-white/50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-white/50 ripple-effect">
  [Text]
</button>
```

**Tertiary CTA (Red):**
```html
<button class="px-12 py-5 bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white font-bold rounded-full hover:from-red-700 hover:via-red-800 hover:to-red-700 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-red-600/50 ripple-effect">
  [Text]
</button>
```

### Links:

**Navigation Link:**
```html
<a class="relative group text-lg font-medium hover:text-yellow-300 transition-colors duration-300">
  [Text]
  <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
</a>
```

**Card Link:**
```html
<a class="inline-flex items-center gap-2 text-red-600 font-bold hover:text-red-700 hover:gap-4 transition-all px-4 py-2 bg-red-50 rounded-full">
  Xem chi tiết
  <span class="group-hover/link:translate-x-1 transition-transform">→</span>
</a>
```

### Hover States:
- Scale up: `hover:scale-105`
- Translate up: `hover:-translate-y-1`
- Color change: `hover:text-yellow-300`
- Shadow: `hover:shadow-2xl`
- Gap increase: `hover:gap-4`

---

## BUILD & DEVELOPMENT

### NPM Scripts:
```json
{
  "dev": "next dev --turbopack",
  "build": "next build --turbopack",
  "start": "next start",
  "lint": "eslint"
}
```

### Development:
```bash
npm run dev
# Server: http://localhost:3000
```

### Production Build:
```bash
npm run build
npm start
```

---

## HƯỚNG DẪN TÁI TẠO PROJECT

### Bước 1: Khởi tạo project
```bash
npx create-next-app@latest webai --typescript --tailwind --app
cd webai
```

### Bước 2: Cài đặt dependencies
```bash
npm install
```

### Bước 3: Cấu trúc thư mục
Tạo folders:
- src/app/ (đã có sẵn)
- src/components/

### Bước 4: Tạo files theo thứ tự:

1. **globals.css** - Copy toàn bộ CSS từ spec trên
2. **tailwind.config.ts** - Config như spec
3. **Header.tsx** - Component header
4. **Footer.tsx** - Component footer
5. **layout.tsx** - Root layout
6. **page.tsx** - Main homepage

### Bước 5: Replace code

**Thay thế nội dung từng file:**
- Mở file trong editor
- Copy code từ specification này
- Paste vào file
- Save

### Bước 6: Test responsive
```bash
npm run dev
```

Kiểm tra trên:
- Desktop (1920px)
- Tablet (768px)
- Mobile (375px)

### Bước 7: Build production
```bash
npm run build
npm start
```

---

## CHÚ THÍCH QUAN TRỌNG

### Icons & Emojis:
Tất cả icons đều là Unicode emoji, không cần library:
- 🇻🇳 (Vietnam flag)
- 📜 (scroll)
- ⭐ (star)
- 🎖️ (medal)
- 🎭 (theater)
- 📸 (camera)
- 🏆 (trophy)
- 📈 (chart)
- 🎓 (graduation)
- 🌏 (globe)
- ❤️ (heart)

### Animation Delays:
Stagger animations để tạo hiệu ứng cascading:
- Timeline items: 0.1s, 0.2s, 0.3s, 0.4s
- Float animations: 0s, 1s, 2s, 3s

### Z-Index Layers:
- Background images: z-0 (default)
- Decorative elements: z-10
- Timeline icons: z-20
- Header (sticky): z-50

### Performance Tips:
1. Sử dụng `priority` prop cho hero image
2. Lazy load images không trong viewport
3. Optimize CSS animations với `will-change`
4. Use `backdrop-filter` sparingly (có thể ảnh hưởng performance)

---

## CHECKLIST HOÀN THÀNH

### UI Elements:
- [ ] Hero section với parallax background
- [ ] Floating flags và particles
- [ ] Timeline với zigzag layout
- [ ] Event cards với hover effects
- [ ] Achievement stats cards
- [ ] Quote section
- [ ] Header component với sticky nav
- [ ] Footer component
- [ ] All dividers with icons

### Animations:
- [ ] Star twinkle
- [ ] Gradient shift
- [ ] Float animation
- [ ] Fade in up
- [ ] Card hover 3D
- [ ] Particle float
- [ ] Neon glow
- [ ] Ripple effect
- [ ] Parallax float
- [ ] Timeline slide in

### Responsive:
- [ ] Mobile layout (< 768px)
- [ ] Tablet layout (768px - 1024px)
- [ ] Desktop layout (> 1024px)
- [ ] Navigation menu toggle
- [ ] Timeline mobile adaptation

### Colors & Branding:
- [ ] Red-yellow color scheme
- [ ] Vietnam flag integration
- [ ] Gradient backgrounds
- [ ] Text glows và shadows

---

## KẾT LUẬN

File specification này chứa **TẤT CẢ** thông tin cần thiết để tái tạo lại website kỷ niệm 80 năm Quốc khánh 2/9 bao gồm:

✅ Cấu trúc HTML chi tiết từng section
✅ Tất cả CSS classes và animations
✅ Component structure hoàn chỉnh
✅ Responsive breakpoints
✅ Color palette và typography
✅ Image sources và optimization
✅ Build configuration

**Gemini (hoặc bất kỳ AI nào) có thể đọc file này và sinh lại 100% code của project.**

---

**Ngày tạo:** 23/10/2025
**Phiên bản:** 1.0
**Tác giả:** AI Documentation Generator
