# convert-thai

## usage
```npm
npm i convert-thai
```
### Convert date and number data into Thai

#### Typescript
```typescript
import { convertThai } from "convert-thai";

// --- dateFormat
convertThai.dateFormat(new Date()); // ๑๙/๖/๒๕๖๗
convertThai.dateFormat(new Date(), "dd/mm/yy"); // ๑๙/๖/๒๕๖๗
convertThai.dateFormat(new Date(), "dd/mm/yy h:m:s"); // ๑๙/๖/๒๕๖๗ ๑๒:๐:๓๕
convertThai.dateFormat(new Date(), "dd mm yy"); // ๑๙ ๖ ๒๕๖๗
convertThai.dateFormat(new Date(), "dd mm yy", "short"); // ๑๙ มิ.ย. ๒๕๖๗
convertThai.dateFormat(new Date(), "dd mm yy", "full"); // ๑๙ มิถุนายน ๒๕๖๗

// --- numberFormat
convertThai.numberFormat(123456789); // ๑๒๓๔๕๖๗๘๙
```

#### javascript
```javascript
const { convertThai } = require('convert-thai');

// --- dateFormat
convertThai.dateFormat(new Date()); // ๑๙/๖/๒๕๖๗
convertThai.dateFormat(new Date(), "dd/mm/yy"); // ๑๙/๖/๒๕๖๗
convertThai.dateFormat(new Date(), "dd/mm/yy h:m:s"); // ๑๙/๖/๒๕๖๗ ๑๒:๐:๓๕
convertThai.dateFormat(new Date(), "dd mm yy"); // ๑๙ ๖ ๒๕๖๗
convertThai.dateFormat(new Date(), "dd mm yy", "short"); // ๑๙ มิ.ย. ๒๕๖๗
convertThai.dateFormat(new Date(), "dd mm yy", "full"); // ๑๙ มิถุนายน ๒๕๖๗

// --- numberFormat
convertThai.numberFormat(123456789); // ๑๒๓๔๕๖๗๘๙
```
