
# Indonesia Postal Code API

An Indonesia Postal Code backend API Using Express JS


## Installation

Install vislap-project with npm

```bash
  npm install

  or
  yarn install

  or
  pnpm install
```
    
## KodePos API Reference

#### Kode Pos Get

```http
  GET /kodepos/:provinceId?q=[Kelurahan]-[Kecamatan]-[Kota]
```

| Param           | Type      | Description                  |
| :-------------- | :-------- | :--------------------------- |
| `provinceId`    | `number`  | **Required**. Province Id    |

| Query Param | Type     | Description                                                                                   |
| :---------- | :------- | :-------------------------------------------------------------------------------------------- |
| `q`         | `string` | **Required**. kelurahan name, Kecamatan name, and kota name (**whitespace is safe to use**)   |

