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
    <h5>dateFormat(date, format, type, era)</h5>
    <ul>
      <li><p><strong>date</strong> (ค่าวันที่) - [จำเป็น] - new Date(), "2024-6-19"</p></li>
      <li><p><strong>format</strong> (รูปแบบวันที่) - [ไม่บังคับ] - "dd/mm/yy",  "yy/mm/dd", "yy/mm/dd", "dd-mm-yy", "dd mm yy", "yy mm dd, "dd/mm/yy h:m:s", "yy/mm/dd h:m:s", "h:m:s" (default - "dd/mm/yy")</p></li>
      <li><p><strong>type</strong> (ประเภท) - [ไม่บังคับ] - "number" (ตัวเลข), "short" (เดือนตัวย่อ), "full" (เดือนตัวเต็ม) (default - "number")</p></li>
      <li><p><strong>era</strong> (ศักราช) - [ไม่บังคับ] - "be" (พุทธศักราช), "ad" (คริสต์ศักราช) (default - "be")</p></li>
    </ul>
  </li>
  <li>
    <h5>numberFormat(number, decimals, thousandsSeparator)</h5>
    <ul>
      <li><p><strong>number</strong> (ค่าตัวเลข) - [จำเป็น] - 1000, 1000.50, -1000 เป็นต้น</p></li>
      <li><p><strong>decimals</strong> (ทศนิยม) - [ไม่บังคับ] - 0, 1, 2, 3, ...n (จำนวนเต็มบวก) (default - "be")</p></li>
      <li><p><strong>thousandsSeparator</strong> (ตัวคั่นหลักพัน) - [ไม่บังคับ] - ","</p></li>
    </ul>
  </li>
</ul>
