## Project Setup

---

Download the project and move it to the corresponding folder.

- Then open terminal and navigate to the folder then type the below command.

```sh
npm install
```

- All the required node package will be install.
- Then create **.env** file in the root directory.
- Then copy all the value from **.env.sample**, move it to the **.env** file, then change the value.
- This .env file will have all the enviromental level configurations.

## Database Setup

---

For database i have used sqlite3 as default, Please use the same.

- To migrate all the value to the database.

```sh
npm run migrate
```

- To rollback all the migrated value.

```sh
npm run rollback
```

- To seed the database with value.

```sh
npm run seed
```

## Running the Server

---

After completing the above step run the below command.

- To start the project in production.

```sh
npm start
```

- To start the project in development

```sh
npm run dev
```

## Test

---

For running the test.

```sh
npm run test
```
