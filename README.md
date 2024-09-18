# convert-thai
This package is used for converting date and number data into Thai format. (แพ็คเกจนี้ใช้สำหรับแปลงข้อมูลวันที่และตัวเลขเป็นรูปแบบภาษาไทย)

[![npm](https://img.shields.io/npm/v/convert-thai)](https://www.npmjs.com/package/convert-thai)
[![npm](https://img.shields.io/npm/dm/convert-thai)](https://www.npmjs.com/package/convert-thai)
[![npm](https://img.shields.io/npm/l/convert-thai)](https://www.npmjs.com/package/convert-thai)
[![npm bundle size](https://img.shields.io/bundlephobia/min/convert-thai)](https://www.npmjs.com/package/convert-thai)

## Install (ติดตั้ง)
#### Using npm
```npm
npm i convert-thai
```
#### Using Yarn
```npm
yarn add convert-thai
```
#### Using in HTML (สำหรับการใช้งานใน HTML)
```html
<script src="https://cdn.jsdelivr.net/npm/convert-thai@latest/dist/bundle.js"></script>
```
## Usage (วิธีการใช้งาน)

#### Typescript
```typescript
import { dateFormat, numberFormat, bathText, convertThai } from "convert-thai";

// --- convertThai
convertThai.dateFormat(new Date()) // ๑๘/๐๙/๒๕๖๗
convertThai.numberFormat(1000) // ๑๐๐๐
convertThai.bathText(1000) // หนึ่งพันบาทถ้วน

// --- dateFormat
dateFormat(new Date()); // ๑๘/๐๙/๒๕๖๗
dateFormat("2024-9-18"); // ๑๘/๐๙/๒๕๖๗
dateFormat(new Date(), "dd/mm/yyyy"); // ๑๘/๐๙/๒๕๖๗
dateFormat(new Date(), "dd/mm/yyyy HH:MM:ss"); // ๑๘/๐๙/๒๕๖๗ ๐๗:๓๐:๒๕
dateFormat(new Date(), "dd mmm yyyy"); // ๑๘ ก.ย. ๒๕๖๗
dateFormat(new Date(), "dd mmmm yyyy"); // ๑๘ กันยายน ๒๕๖๗
dateFormat(new Date(), "dddd dd mmmm yyyy"); // พุธ ๑๘ กันยายน ๒๕๖๗
dateFormat(new Date(), "yyyy-mm-dd"); // ๒๕๖๗-๐๙-๑๘

dateFormat(new Date(), "dd/mm/yyyy", "BE"); // พ.ศ. ๑๘/๐๙/๒๕๖๗
dateFormat(new Date(), "dd/mm/yyyy", "CE"); // ค.ศ. ๑๘/๐๙/๒๐๒๔
dateFormat(new Date(), "dd/mm/yyyy", "HE"); // ม.ศ. ๑๘/๐๙/๑๔๐๒
dateFormat(new Date(), "dd/mm/yyyy", "JE"); // จ.ศ. ๑๘/๐๙/๑๔๘๒
dateFormat(new Date(), "dd/mm/yyyy", "MS"); // ร.ศ. ๑๘/๐๙/๒๖๖๒
dateFormat(new Date(), "dd/mm/yyyy", "RE"); // ฮ.ศ. ๑๘/๐๙/๒๔๓

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
bathText(-1000); // ลบหนึ่งพันบาทถ้วน
bathText(-3750.85) // ลบสามพันเจ็ดร้อยห้าสิบบาทแปดสิบห้าสตางค์
```

#### Javascript
```javascript
const { dateFormat, numberFormat, bathText, convertThai } = require('convert-thai');

// --- convertThai
convertThai.dateFormat(new Date()) // ๑๘/๐๙/๒๕๖๗
convertThai.numberFormat(1000) // ๑๐๐๐
convertThai.bathText(1000) // หนึ่งพันบาทถ้วน

// --- dateFormat
dateFormat(new Date()); // ๑๘/๐๙/๒๕๖๗
dateFormat("2024-9-18"); // ๑๘/๐๙/๒๕๖๗
dateFormat(new Date(), "dd/mm/yyyy"); // ๑๘/๐๙/๒๕๖๗
dateFormat(new Date(), "dd/mm/yyyy HH:MM:ss"); // ๑๘/๐๙/๒๕๖๗ ๐๗:๓๐:๒๕
dateFormat(new Date(), "dd mmm yyyy"); // ๑๘ ก.ย. ๒๕๖๗
dateFormat(new Date(), "dd mmmm yyyy"); // ๑๘ กันยายน ๒๕๖๗
dateFormat(new Date(), "dddd dd mmmm yyyy"); // พุธ ๑๘ กันยายน ๒๕๖๗
dateFormat(new Date(), "yyyy-mm-dd"); // ๒๕๖๗-๐๙-๑๘

dateFormat(new Date(), "dd/mm/yyyy", "BE"); // พ.ศ. ๑๘/๐๙/๒๕๖๗
dateFormat(new Date(), "dd/mm/yyyy", "CE"); // ค.ศ. ๑๘/๐๙/๒๐๒๔
dateFormat(new Date(), "dd/mm/yyyy", "HE"); // ม.ศ. ๑๘/๐๙/๑๔๐๒
dateFormat(new Date(), "dd/mm/yyyy", "JE"); // จ.ศ. ๑๘/๐๙/๑๔๘๒
dateFormat(new Date(), "dd/mm/yyyy", "MS"); // ร.ศ. ๑๘/๐๙/๒๖๖๒
dateFormat(new Date(), "dd/mm/yyyy", "RE"); // ฮ.ศ. ๑๘/๐๙/๒๔๓

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
bathText(-1000); // ลบหนึ่งพันบาทถ้วน
bathText(-3750.85) // ลบสามพันเจ็ดร้อยห้าสิบบาทแปดสิบห้าสตางค์
```
#### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Convert Thai Test</title>
</head>

<body>
    <script src="https://cdn.jsdelivr.net/npm/convert-thai@latest/dist/bundle.js"></script>
    <script>
        console.log(convertThai.dateFormat(new Date())); // ๑๘/๐๙/๒๕๖๗
        console.log(convertThai.numberFormat(123456)); // ๑๒๓๔๕๖
        console.log(convertThai.bathText(1000)); // หนึ่งพันบาทถ้วน

        const { dateFormat, numberFormat, bathText } = convertThai;

        console.log(dateFormat(new Date(), "dd/mm/yyyy", "CE")); // ๑๘/๐๙/๒๐๒๔
        console.log(numberFormat(123456));  // ๑๒๓๔๕๖
        console.log(bathText(1000)); // หนึ่งพันบาทถ้วน
    </script>
</body>
</html>
```

## Description (คำอธิบาย)

#### dateFormat
 * **`dateFormat(date, format, type, era)`**
    * `date` (ค่าวันที่) - [จำเป็น]
      * `new Date()`
      * `"2024-6-21"`
    * `format` (รูปแบบวันที่) - [ไม่บังคับ] - (default - "dd/mm/yyyy")
    * `era` (ศักราช) - [ไม่บังคับ] - (default - "BE")
      
##### **Meaning of variables** (ความหมายของตัวแปร)
        
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
  
      
##### **Format** (รูปแบบ)
        
   | **Format** (รูปแบบ) | **Example** (ตัวอย่าง) |
   | --- | --- |
   | `dd/mm/yyyy`  | ๑๘/๐๙/๒๕๖๗ (default) |
   | `dd/mm/yy` | ๑๘/๐๙/๖๗ |
   | `yyyy/mm/dd` | ๒๕๖๗/๐๙/๑๘ |
   | `yy/mm/dd` | ๖๗/๐๙/๑๘ |
   | `HH:MM:ss` | ๐๗:๓๐:๒๕ |
   | `dd mmm yyyy` | ๑๘ ก.ย. ๒๕๖๗ |
   | `dd mmmm yyyy` | ๑๘ กันยายน ๒๕๖๗ |
   | `ddd dd mmm yyyy` | พ ๑๘ ก.ย. ๒๕๖๗ |
   | `dddd dd mmmm yyyy` | พุธ ๑๘ กันยายน ๒๕๖๗ |
   | `dd/mm/yyyy HH:MM:ss` | ๑๘/๐๙/๒๕๖๗ ๐๗:๓๐:๒๕ |
   | `dddd dd mmmm yyyy HH:MM:ss` | พุธ ๑๘ กันยายน ๒๕๖๗ ๐๗:๓๐:๒๕ |

##### **Era** (ศักราช)
      
   | **Variable** (ตัวแปร) | **Description** (คำอธิบาย) | **Example** (ตัวอย่าง) |
   | --- | --- | --- |
   | `BE` | พ.ศ. (พุทธศักราช) | ๒๕๖๗ (default) |
   | `CE` | ค.ศ. (คริสต์ศักราช) | ๒๐๒๔ |
   | `MS` | ม.ศ. (มหาศักราช) | ๑๔๐๒ |
   | `JE` | จ.ศ. (จุลศักราช) | ๑๔๘๒ |
   | `RE` | ร.ศ. (รัตนโกสินทร์ศักราช) | ๒๖๖๒ |
   | `HE` | ฮ.ศ. (ฮิจเราะห์ศักราช) | ๒๔๓ |

#### numberFormat
* **`numberFormat(number, decimals, thousandsSeparator)`**
   * `number` (ค่าตัวเลข) - [จำเป็น]
     * 1000, 1000.50, -1000 เป็นต้น
   * `decimals` (ทศนิยม) - [ไม่บังคับ]
      * 0, 1, 2, 3, ...n (จำนวนเต็มบวก)
   * `thousandsSeparator` (ตัวคั่นหลักพัน) - [ไม่บังคับ]
      * `","`

#### bathText
* **`bathText(number)`**
   * `number` (ค่าตัวเลข) - [จำเป็น]
     * -9999999999999 - 9999999999999 (support)
    
## Refer (อ้างอิง)

[**Date/Time Formats**](https://www.ibm.com/docs/en/sgfmw/5.3.1?topic=format-datetime-formats)
