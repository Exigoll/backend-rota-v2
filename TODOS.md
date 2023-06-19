# Создание новых колонок

## Выполненные таски

1. Таблица brands -> id, name;
2. Таблица sku -> id, owner_brand_id, article;
3. Таблица sku-names -> owner_sku_id, name;
4. Таблица suppliers -> id, stock (boolean)
5. \*Таблица supplier_offers -> supplier_id (ссылка на supplier\*), sku_id(ссылка на sku\*), base_price, qty;
6. \*Таблица basket -> owner_user_id (ссылка на user), owner_sku_id (ссылка на sku-names\*), qty, price, supplier (ссылка на supplier\*);
7. Таблица price-lists -> id, name;
8. Таблица offer-prices -> price_list_id (ссылка на price-lists\*), supplier_id (ссылка на suppliers\*), sku_id (ссылка на sku\*), price;
9. Таблица users -> email, password, fullName, userName, phoneNumber, address, legalForm, kindOfActivity, price_list_id (ссылка на price-lists)
10. Таблица orders -> id, user_id(ссылка на user), creator_dt;
11. Таблица order-status -> id, name
12. Таблица order_lines_status -> owner_order_line_id, owner_status_id, qty
13. Таблица order-lines -> id, owner_order_id, sku_id (ссылка на sku), supplier_id (ссылка на supplier), qty, supplier_price, client_price
