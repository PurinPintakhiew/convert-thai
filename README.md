# convert-thai
This package is used for converting date and number data into Thai format. (แพ็คเกจนี้ใช้สำหรับแปลงข้อมูลวันที่และตัวเลขเป็นรูปแบบภาษาไทย)
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

 * **`dateFormat(date, format, type, era)`**
    * `date` (ค่าวันที่) - [จำเป็น]
      * `new Date()`
      * `"2024-6-19"`
    * `format` (รูปแบบวันที่) - [ไม่บังคับ] - (default - "dd/mm/yy")
      *  `"dd/mm/yy"` ๑๙/๐๖/๒๕๖๗
      *  `"yy/mm/dd"` ๒๕๖๗/๐๖/๑๙
      *  `"dd-mm-yy"` ๑๙-๐๖-๒๕๖๗
      *  `"yy-mm-dd"` ๒๕๖๗-๐๖-๑๙
      *  `"dd mm yy"` ๑๙ ๐๖ ๒๕๖๗
      *  `"yy mm dd"` ๒๕๖๗ ๐๖ ๑๙
      *  `"dd/mm/yy h:m:s"` ๑๙/๐๖/๒๕๖๗ ๑๒:๐๐:๓๕
      *  `"yy/mm/dd h:m:s"` ๒๕๖๗/๐๖/๑๙ ๑๒:๐๐:๓๕
      *  `"h:m:s"` ๑๒:๐๐:๓๕
    * `type` (ประเภท) - [ไม่บังคับ] - (default - "number")
      * `"number"` (ตัวเลข)  ๑๙ ๐๖ ๒๕๖๗
      * `"short"` (เดือนตัวย่อ) ๑๙ มิ.ย. ๒๕๖๗
      * `"full"` (เดือนตัวเต็ม) ๑๙ มิถุนายน ๒๕๖๗
    * `era` (ศักราช) - [ไม่บังคับ] - (default - "be")
      * `"be"` (พุทธศักราช)
      * `"ad"` (คริสต์ศักราช)
    
* **`numberFormat(number, decimals, thousandsSeparator)`**
   * `number` (ค่าตัวเลข) - [จำเป็น] - 1000, 1000.50, -1000 เป็นต้น
   * `decimals` (ทศนิยม) - [ไม่บังคับ] - 0, 1, 2, 3, ...n (จำนวนเต็มบวก)
   * `thousandsSeparator` (ตัวคั่นหลักพัน) - [ไม่บังคับ] - ","
