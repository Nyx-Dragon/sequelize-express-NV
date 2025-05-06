```mermaid
erDiagram
    USERS ||--o{ ORDERS : places
    ORDERS ||--|{ ORDER_ITEMS : contains
    PRODUCTS ||--o{ ORDER_ITEMS : listed_in
    ORDERS }o--|| PAYMENTS : uses

    USERS {
        int id PK
        string name
        string email
        string password
    }

    PRODUCTS {
        int id PK
        string name
        float price
        boolean is_active
        datetime created_at
    }

    ORDERS {
        int id PK
        int user_id FK
        datetime created_at
        string status
        text error_message
    }

    ORDER_ITEMS {
        int id PK
        int order_id FK
        int product_id FK
        int quantity
        float unit_price
    }

    PAYMENTS {
        int id PK
        int order_id FK
        string method
        datetime paid_at
        string status
        text error_message
    }
```
