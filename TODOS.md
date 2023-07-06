## Выполненные таски

1. Таблица brands -> id, name;
2. Таблица suppliers -> id, stock (boolean);
3. Таблица price-lists -> id, name;
4. Таблица order-status -> id, name;
5. Таблица sku -> id, owner_brand_id (ссылка на brands), article;
6. Таблица sku-names -> owner_sku_id (ссылка на sku), name; !Создается лишнее поле id, надо исправить

# Создание новых колонок

2. Таблица basket -> owner_user_id (ссылка на user), owner_sku_id (ссылка на sku\*), qty, price, supplier (ссылка на supplier\*);

3. \*Таблица supplier_offers -> supplier_id (ссылка на supplier\*), sku_id(ссылка на sku\*), base_price, qty;

4. Таблица offer-prices -> price_list_id (ссылка на price-lists\*), supplier_id (ссылка на suppliers\*), sku_id (ссылка на sku\*), price;
5. Таблица users -> email, password, fullName, userName, phoneNumber, address, legalForm, kindOfActivity, price_list_id (ссылка на price-lists)
6. Таблица orders -> id, user_id(ссылка на user), creator_dt;

7. Таблица order-lines -> id, owner_order_id (ссылка на orders\*), sku_id (ссылка на sku \*), supplier_id (ссылка на supplier\*), qty, supplier_price, client_price
8. Таблица order_lines_status -> owner_order_line_id (ссылка на order-lines\*), owner_status_id (ссылка на order-status\*), qty

во всех таблицах сделать PrimaryKey() с типом integer + автоинкремент
там где используются ссылки на id должно быть FOREIGN KEY с проверками и каскадами
