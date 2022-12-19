# TESTING CODE 

## Library yang digunakan

- Mysql driver : [mysql2](https://www.npmjs.com/package/mysql2).
- Promise-based ORM : [Sequalize](https://www.npmjs.com/package/sequelize).
- Data validator : [https://www.npmjs.com/package/joi.
- Utility [nodemon](https://www.npmjs.com/package/nodemon)
- authentication [jwt](https://www.npmjs.com/package/jsonwebtoken)

## INSTALASI
ubah configurasi database pada file config/config.json <br>

## Install Package, Migrasi database, SEEDER data DAN RUNNING NODEJS
```sh
npm install
npx sequelize-cli db:migrate
npx sequelize-cli db:undo # untuk migrate ulang
npm start
```

## Routes
```sh
localhost:5000/api/v1/register # Register(s) (POST)
localhost:5000/api/v1/login # Login user (POST)
localhost:5000/api/v1/jadwal # Menambahkan Jadwal (POST)
localhost:5000/api/v1/jadwal/:id # get jadwal by id (GET)
localhost:5000/api/v1/jadwal/:id # update quota by id (PATCH)
localhost:5000/api/v1/pesan # pemesanan oleh customer (POST)
```

## Example Requests
##### Register 
```json
{
  "name": "admin",
  "email": "admin@gmail.com",
  "password": "123456",
  "address": "jakarta barat"
}
```

##### Login 
```json
{
  "email": "admin@gmail.com",
  "password": "123456"
}
```

##### Menambahkan Jadwal 
```json
{
   "jadwal": "7/12/2022",
    "quota": "53"
}
```

##### Update quota by id
```json
{
     "quota": "70"
}
```

##### Pemesanan Oleh Customer
```json
{
    "idJadwal": "1",
    "name": "mas awi",
    "phone": "082122034",
    "tipe_mobil": "alya",
    "no_plat": "B 7653 CB",
    "kerusakan": "ban pecah",
    "waktu_pesan": "10.19"
}
```

##### screenshot
