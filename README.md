## Installation

```bash
# server
$ cd server
$ yarn

# client
$ cd client
$ yarn
```

## Running the app

```bash
# server
$ yarn start:dev

# client
$ yarn dev
```

#### Description 💻

Выбор технологий при разработке client:

+ @tanstack/react-query - чтобы не переизобретать велосипед и писать свой хук типа useQuery, пал осознанный выбор на данную библиотеку.
  ```bash
  const { isLoading, data, ... } = useQuery()

  const useQuery = () => {
    // some logic

    return { isLoading, data, ... }
  }
  ```
+ scss и css модули - для удобной и изолированной работы со стилями
+ vite - простой сборщик в сравнении с webpack(не тянет кучу лишних зависимостей)
+ осознанно не применял state manager так как приложение достаточно небольшое и тянуть state manager было бы избыточно
+ axios - для запросов
+ ts - работа с типизацией, стандарт

Выбор технологий при разработке server:

+ nest.js - в сравнении с express даёт больше возможностей при разработке и диктует своё построение архитектуры для разработки, что в разы её упрощает
+ faker.js - либа для генерации фейковых данных (убрала очень много рутины при добавлении данных)
+ mongo - тут сыграл личный опыт работы с этой бд

#### Design 🎨
##### Main screen
![Иллюстрация к проекту](https://github.com/a-fralou/game-squid/blob/main/screen.png)

##### Modal
![Иллюстрация к проекту](https://github.com/a-fralou/game-squid/blob/main/modal.png)

##### Loading
![Иллюстрация к проекту](https://github.com/a-fralou/game-squid/blob/main/loading.png)