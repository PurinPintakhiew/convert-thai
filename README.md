# convert-thai

## Install (ติดตั้ง)
```npm
npm i convert-thai
```
## Usage (วิธีการใช้งาน)

#### Typescript
```typescript
import { dateFormat, numberFormat } from "convert-thai";

// --- dateFormat
dateFormat(new Date()); // ๑๙/๐๖/๒๕๖๗
dateFormat(new Date(), "dd/mm/yy"); // ๑๙/๐๖/๒๕๖๗
dateFormat(new Date(), "dd/mm/yy h:m:s"); // ๑๙/๐๖/๒๕๖๗ ๑๒:๐๐:๓๕
dateFormat(new Date(), "dd mm yy"); // ๑๙ ๐๖ ๒๕๖๗
dateFormat(new Date(), "dd mm yy", "short"); // ๑๙ มิ.ย. ๒๕๖๗
dateFormat(new Date(), "dd mm yy", "full"); // ๑๙ มิถุนายน ๒๕๖๗

// --- numberFormat
numberFormat(123456789); // ๑๒๓๔๕๖๗๘๙
numberFormat(1234.56789, 2); // ๑๒๓๔.๕๖
numberFormat(123456789, 0, ','); // ๑๒๓,๔๕๖,๗๘๙
numberFormat(-1234); // -๑๒๓๔
numberFormat(-1234, 2); // -๑๒๓๔.๐๐
numberFormat(-1234, 2, ','); // -๑,๒๓๔.๐๐
```

#### Javascript
```javascript
const { dateFormat, numberFormat } = require('convert-thai');

// --- dateFormat
dateFormat(new Date()); // ๑๙/๐๖/๒๕๖๗
dateFormat(new Date(), "dd/mm/yy"); // ๑๙/๐๖/๒๕๖๗
dateFormat(new Date(), "dd/mm/yy h:m:s"); // ๑๙/๐๖/๒๕๖๗ ๑๒:๐๐:๓๕
dateFormat(new Date(), "dd mm yy"); // ๑๙ ๐๖ ๒๕๖๗
dateFormat(new Date(), "dd mm yy", "short"); // ๑๙ มิ.ย. ๒๕๖๗
dateFormat(new Date(), "dd mm yy", "full"); // ๑๙ มิถุนายน ๒๕๖๗

// --- numberFormat
numberFormat(123456789); // ๑๒๓๔๕๖๗๘๙
numberFormat(1234.56789, 2); // ๑๒๓๔.๕๖
numberFormat(123456789, 0, ','); // ๑๒๓,๔๕๖,๗๘๙
numberFormat(-1234); // -๑๒๓๔
numberFormat(-1234, 2); // -๑๒๓๔.๐๐
numberFormat(-1234, 2, ','); // -๑,๒๓๔.๐๐
```
## Description (คำอธิบาย)

<ul>
  <li>
    <div>dateFormat(date, format, type, era)</div>
    <ul>
      <li>date (ค่าวันที่) - new Date(), "2024-6-19"</li>
      <li>format (รูปแบบวันที่) -  "dd/mm/yy",  "yy/mm/dd", "yy/mm/dd", "dd-mm-yy", "dd mm yy", "yy mm dd, "dd/mm/yy h:m:s", "yy/mm/dd h:m:s", "h:m:s" (default - "dd/mm/yy")</li>
      <li>type (ประเภท) - "number" (ตัวเลข), "short" (เดือนตัวย่อ), "full" (เดือนตัวเต็ม) (default - "number")</li>
      <li>era (ศักราช) - "be" (พุทธศักราช), "ad" (คริสต์ศักราช) (default - "be")</li>
    </ul>
  </li>
  <li>
    <div>numberFormat(number, decimals, thousandsSeparator)</div>
    <ul>
      <li>number (ค่าตัวเลข) - 1000, 1000.50, -1000 เป็นต้น</li>
      <li>decimals (ทศนิยม) - 0, 1, 2, 3, ...n (จำนวนเต็มบวก)</li>
      <li>thousandsSeparator (ตัวคั่นหลักพัน) - ","</li>
    </ul>
  </li>
</ul>
