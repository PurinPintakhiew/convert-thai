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
```
## Description (คำอธิบาย)
