# Exact Age Calculator

This package calculates the exact age of a given date of birth.

## Installing

```bash
npm install exact-age
```

or

```bash
pnpm install exact-age
```

or

```bash
yarn add exact-age
```

## Example Usages

### Common JS

```js
const exactAge = require("exact-age");

// Using String format
// Assuming the current day as 03-20-2024
const dob = "03-20-2000";
const age = exactAge(dob); // Output: 24

// Using Date format
// Assuming the current day as 03-20-2024
const dob = new Date("06-22-2005");
const age = exactAge(dob); // Output: 19
```

### ES6

```js
import exactAge from "exact-age";

// Using String format
// Assuming the current day as 03-20-2024
const dob = "03-20-2000";
const age = exactAge(dob); // Output: 24

// Using Date format
// Assuming the current day as 03-20-2024
const dob = new Date("06-22-2005");
const age = exactAge(dob); // Output: 19
```

## Socials

[![Instagram](https://skillicons.dev/icons?i=instagram)](https://instagram.com/dpaulos6) [![Instagram](https://skillicons.dev/icons?i=linkedin)](https://linkedin.com/in/dpaulos6) [![Instagram](https://skillicons.dev/icons?i=github)](https://github.com7dpaulos6) [![Instagram](https://skillicons.dev/icons?i=discord)](https://discord.gg/Y7ujpKmmma)

## License

This project is licensed under the [MIT License](LICENSE).
