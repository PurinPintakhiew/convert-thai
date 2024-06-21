# convert-thai

## Install (ติดตั้ง)
#### Using npm
```npm
npm i convert-thai
```
#### Using Yarn
```npm
yarn add convert-thai
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

 * `dateFormat(date, format, type, era)`
    * `date` (ค่าวันที่) - [จำเป็น] - new Date(), "2024-6-19"
    * `format` (รูปแบบวันที่) - [ไม่บังคับ] - "dd/mm/yy",  "yy/mm/dd", "yy/mm/dd", "dd-mm-yy", "dd mm yy", "yy mm dd, "dd/mm/yy h:m:s", "yy/mm/dd h:m:s", "h:m:s" (default - "dd/mm/yy")
    * `type` (ประเภท) - [ไม่บังคับ] - "number" (ตัวเลข), "short" (เดือนตัวย่อ), "full" (เดือนตัวเต็ม) (default - "number")
    * `era` (ศักราช) - [ไม่บังคับ] - "be" (พุทธศักราช), "ad" (คริสต์ศักราช) (default - "be")
    
* `numberFormat(number, decimals, thousandsSeparator)`
   * `number` (ค่าตัวเลข) - [จำเป็น] - 1000, 1000.50, -1000 เป็นต้น
   * `decimals` (ทศนิยม) - [ไม่บังคับ] - 0, 1, 2, 3, ...n (จำนวนเต็มบวก) (default - "be")
   * `thousandsSeparator` (ตัวคั่นหลักพัน) - [ไม่บังคับ] - ","
