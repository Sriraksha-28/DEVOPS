const { createOrder } = require("./order");

test("valid order should be created", () => {
    const items = [
        { name: "Book", price: 100, quantity: 1 }
    ];

    const result = createOrder(items);

    expect(result.success).toBe(true);
    expect(result.message).toBe("Order created successfully");
});

test("empty cart should fail", () => {
    const result = createOrder([]);

    expect(result.success).toBe(false);
    expect(result.message).toBe("Cart is empty");
    expect(result.order).toBe(null);
});

test("multiple products should be added", () => {
    const items = [
        { name: "Book", price: 100, quantity: 1 },
        { name: "Pen", price: 20, quantity: 2 },
        { name: "Bag", price: 500, quantity: 1 }
    ];

    const result = createOrder(items);

    expect(result.order.items.length).toBe(3);
});

test("coupon should give discount", () => {
    const items = [
        { name: "Book", price: 1000, quantity: 1 }
    ];

    const result = createOrder(items, "SAVE10");

    expect(result.order.total).toBe(900);
});

test("without coupon coupon should be null", () => {
    const items = [
        { name: "Book", price: 100, quantity: 1 }
    ];

    const result = createOrder(items);

    expect(result.order.coupon).toBe(null);
});