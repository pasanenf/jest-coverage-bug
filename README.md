# jest-coverage-bug

Test only RedirectLink to get 100% coverage for Anchor

```bash
$ yarn test __tests__/components/RedirectLink.test.js

------------------|---------|----------|---------|---------|-------------------
File              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------|---------|----------|---------|---------|-------------------
All files         |   69.86 |        0 |       0 |   69.86 |
 Anchor.vue       |     100 |      100 |     100 |     100 |
 ArrowLink.vue    |       0 |        0 |       0 |       0 | 1-21
 RedirectLink.vue |      96 |      100 |       0 |      96 | 23
------------------|---------|----------|---------|---------|-------------------
```

Test everything to lower the coverage for Anchor

```bash
$ yarn test

------------------|---------|----------|---------|---------|-------------------
File              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------|---------|----------|---------|---------|-------------------
All files         |   68.49 |    33.33 |       0 |   68.49 |
 Anchor.vue       |   96.29 |       50 |       0 |   96.29 | 25
 ArrowLink.vue    |       0 |        0 |       0 |       0 | 1-21
 RedirectLink.vue |      96 |      100 |       0 |      96 | 23
------------------|---------|----------|---------|---------|-------------------
```

Or delete `__tests__/Anchor.test.js` and test everything to get 100% coverage for Anchor

```bash
$ yarn test

------------------|---------|----------|---------|---------|-------------------
File              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------|---------|----------|---------|---------|-------------------
All files         |   69.86 |        0 |       0 |   69.86 |
 Anchor.vue       |     100 |      100 |     100 |     100 |
 ArrowLink.vue    |       0 |        0 |       0 |       0 | 1-21
 RedirectLink.vue |      96 |      100 |       0 |      96 | 23
------------------|---------|----------|---------|---------|-------------------
```
