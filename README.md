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
import { dateFormat, numberFormat, bathText, convertThai } from "convert-thai";

// --- convertThai
convertThai.dateFormat(new Date()) // ๒๑/๐๖/๒๕๖๗
convertThai.numberFormat(1000) // ๑๐๐๐
convertThai.bathText(1000) // หนึ่งพันบาทถ้วน

// --- dateFormat
dateFormat(new Date()); // ๒๑/๐๖/๒๕๖๗
dateFormat("2024-6-21"); // ๒๑/๐๖/๒๕๖๗
dateFormat(new Date(), "dd/mm/yyyy"); // ๒๑/๐๖/๒๕๖๗
dateFormat(new Date(), "dd/mm/yyy HH:MM:ss"); // ๒๑/๐๖/๒๕๖๗ ๑๒:๐๐:๓๕
dateFormat(new Date(), "dd mmm yyyy"); // ๒๑ มิ.ย. ๒๕๖๗
dateFormat(new Date(), "dd mmmm yyyy"); // ๒๑ มิถุนายน ๒๕๖๗
dateFormat(new Date(), "dddd dd mmmm yyyy"); // ศุกร์ ๒๑ มิถุนายน ๒๕๖๗
dateFormat(new Date(), "dd/mm/yyyy", "ad"); // ๒๑/๐๖/๒๐๒๔

// --- numberFormat
numberFormat(123456); // ๑๒๓๔๕๖
numberFormat(123.456, 2); // ๑๒๓.๔๕
numberFormat(123456789, 0, ','); // ๑๒๓,๔๕๖,๗๘๙
numberFormat(-1234); // -๑๒๓๔
numberFormat(-1234, 2); // -๑๒๓๔.๐๐
numberFormat(-1234, 2, ','); // -๑,๒๓๔.๐๐

// --- bathText
bathText(1000); // หนึ่งพันบาทถ้วน
bathText(1000000); // หนึ่งล้านบาทถ้วน
bathText(3750.85) // สามพันเจ็ดร้อยห้าสิบบาทแปดสิบห้าสตางค์
```

#### Javascript
```javascript
const { dateFormat, numberFormat, bathText, convertThai } = require('convert-thai');

// --- convertThai
convertThai.dateFormat(new Date()) // ๒๑/๐๖/๒๕๖๗
convertThai.numberFormat(1000) // ๑๐๐๐
convertThai.bathText(1000) // หนึ่งพันบาทถ้วน

// --- dateFormat
dateFormat(new Date()); // ๒๑/๐๖/๒๕๖๗
dateFormat("2024-6-21"); // ๒๑/๐๖/๒๕๖๗
dateFormat(new Date(), "dd/mm/yyyy"); // ๒๑/๐๖/๒๕๖๗
dateFormat(new Date(), "dd/mm/yyy HH:MM:ss"); // ๒๑/๐๖/๒๕๖๗ ๑๒:๐๐:๓๕
dateFormat(new Date(), "dd mmm yyyy"); // ๒๑ มิ.ย. ๒๕๖๗
dateFormat(new Date(), "dd mmmm yyyy"); // ๒๑ มิถุนายน ๒๕๖๗
dateFormat(new Date(), "dddd dd mmmm yyyy"); // ศุกร์ ๒๑ มิถุนายน ๒๕๖๗
dateFormat(new Date(), "dd/mm/yyyy", "ad"); // ๒๑/๐๖/๒๐๒๔

// --- numberFormat
numberFormat(123456); // ๑๒๓๔๕๖
numberFormat(123.456, 2); // ๑๒๓.๔๕
numberFormat(123456789, 0, ','); // ๑๒๓,๔๕๖,๗๘๙
numberFormat(-1234); // -๑๒๓๔
numberFormat(-1234, 2); // -๑๒๓๔.๐๐
numberFormat(-1234, 2, ','); // -๑,๒๓๔.๐๐

// --- bathText
bathText(1000); // หนึ่งพันบาทถ้วน
bathText(1000000); // หนึ่งล้านบาทถ้วน
bathText(3750.85) // สามพันเจ็ดร้อยห้าสิบบาทแปดสิบห้าสตางค์
```
## Description (คำอธิบาย)

 * **`dateFormat(date, format, type, era)`**
    * `date` (ค่าวันที่) - [จำเป็น]
      * `new Date()`
      * `"2024-6-21"`
    * `format` (รูปแบบวันที่) - [ไม่บังคับ] - (default - "dd/mm/yyyy")
      * **Meaning of variables** (ความหมายของตัวแปร)
        
      | **Variable** (ตัวแปร) | **Description** (คำอธิบาย) |
      | --- | --- |
      | `d`  | วันที่หลักเดี่ยวไม่เติมเลข ๐ นำหน้า  |
      | `dd`  | วันที่หลักเดี่ยวเติมเลข ๐ นำหน้า |
      | `ddd`  | วันตัวย่อ เช่น อา, จ, อ, พ, พฤ, ศ, ส |
      | `dddd`  | วันตัวเต็ม เช่น อาทิตย์, จันทร์, อังคาร, พุธ, พฤหัสบดี, ศุกร์, เสาร์ |
      | `m`  | เดือนหลักเดี่ยวไม่เติมเลข ๐ นำหน้า |
      | `mm`  | เดือนหลักเดี่ยวเติมเลข ๐ นำหน้า |
      | `mmm`  | เดือนตัวย่อ เช่น ม.ค., ก.พ., มี.ค., เม.ย., พ.ค, มิ.ย., ก.ค., ส.ค., ก.ย., ต.ค., พ.ย., ธ.ค.  |
      | `mmmm`  | เดือนตัวเต็ม เช่น มกราคม, กุมภาพันธ์, มีนาคม, เมษายน, พฤษภาคม, มิถุนายน, กรกฎาคม, สิงหาคม, กันยายน, ตุลาคม , พฤศจิกายน , ธันวาคม |
      | `yy`  | ปีสองหลัก เช่น ๖๗ |
      | `yyyy`  | ปีตัวเต็ม เช่น ๒๕๖๗ |
      | `H`  | ชั่วโมงหลักเดียวไม่เติมเลข ๐ นำหน้า |
      | `HH`  | ชั่วโมงหลักเดียวเติมเลข ๐ นำหน้า |
      | `M`  | นาทีหลักเดียวไม่เติมเลข ๐ นำหน้า |
      | `MM`  | นาทีหลักเดียวเติมเลข ๐ นำหน้า |
      | `s`  | วินาทีหลักเดียวไม่เติมเลข ๐ นำหน้า |
      | `ss`  | วินาทีหลักเดียวเติมเลข ๐ นำหน้า |
  
      
      * **Format** (รูปแบบ)
        
      | **Format** (รูปแบบ) | **Example** (ตัวอย่าง) |
      | --- | --- |
      | `dd/mm/yyyy`  | ๒๑/๐๖/๒๕๖๗ (default) |
      | `dd/mm/yy` | ๒๑/๐๖/๖๗ |
      | `yyyy/mm/dd` | ๒๕๖๗/๐๖/๒๑ |
      | `yy/mm/dd` | ๖๗/๐๖/๒๑ |
      | `HH:MM:ss` | ๐๗:๓๐:๒๕ |
      | `dd mmm yyyy` | ๒๑ มิ.ย. ๒๕๖๗ |
      | `dd mmmm yyyy` | ๒๑ มิถุนายน ๒๕๖๗ |
      | `ddd dd mmm yyyy` | ศ ๒๑ มิ.ย. ๒๕๖๗ |
      | `dddd dd mmmm yyyy` | ศุกร์ ๒๑ มิถุนายน ๒๕๖๗ |
      | `dd/mm/yyyy HH:MM:ss` | ๒๑/๐๖/๒๕๖๗ ๐๗:๓๐:๒๕ |
      | `dddd dd mmmm yyyy HH:MM:ss` | ศุกร์ ๒๑ มิถุนายน ๒๕๖๗ ๐๗:๓๐:๒๕ |

    * `era` (ศักราช) - [ไม่บังคับ] - (default - "be")
      
      | **Variable** (ตัวแปร) | **Description** (คำอธิบาย) | **Example** (ตัวอย่าง) |
      | --- | --- | --- |
      | `be` | พุทธศักราช | ๒๕๖๗ (default) |
      | `ad` | คริสต์ศักราช | ๒๐๒๔ |
    
* **`numberFormat(number, decimals, thousandsSeparator)`**
   * `number` (ค่าตัวเลข) - [จำเป็น]
     * 1000, 1000.50, -1000 เป็นต้น
   * `decimals` (ทศนิยม) - [ไม่บังคับ]
      * 0, 1, 2, 3, ...n (จำนวนเต็มบวก)
   * `thousandsSeparator` (ตัวคั่นหลักพัน) - [ไม่บังคับ]
      * `","`

* **`bathText(number)`**
   * `number` (ค่าตัวเลข) - [จำเป็น]
     * 0 - 1000000000000 (support)
    
## Refer (อ้างอิง)
[**Date/Time Formats**](https://www.ibm.com/docs/en/sgfmw/5.3.1?topic=format-datetime-formats)
