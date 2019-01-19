describe('productsPurchased', () => {
    it('is a function', () => {
        expect(typeof productsPurchased).toEqual('function');
    });

    it('returns an array', () => {
        expect(Array.isArray(productsPurchased(orders, products))).toEqual(true);
    });

    it('each element in the array is an object', () => {
        expect(productsPurchased(orders,products).every(result => {
                return typeof result === 'object' && !Array.isArray(result)
            })
        ).toEqual(true);
    });

    it('returns products that have been purchased', () => {
        expect(productsPurchased(orders, products)).toEqual([{
            id: 1,
            name: 'foo',
            price: 7
          },{
            id: 5,
            name: 'bazz',
            price: 1
          }]);
    });
});

describe('topSellingProductByQuantity', () => {

    it('is a function', () => {
        expect(typeof topSellingProductByQuantity).toEqual('function');
    });

    it('returns an object that is not an array', () => {
        expect(typeof topSellingProductByQuantity(orders, products)).toEqual('object');
        expect(Array.isArray(topSellingProductByQuantity(orders, products))).toEqual(false);
    });

    it('returns the product that sold the most by qty', () => {
        expect(topSellingProductByQuantity(orders, products)).toEqual({id: 5, name: 'bazz', price: 1, total: 213});
    });
});

describe('usersWithOrders', () => {
    const result = usersWithOrders(users, orders);
    it('is a function', () => {
        expect(typeof usersWithOrders).toEqual('function');
    });

    it('returns an array', () => {
        expect(Array.isArray(result)).toEqual(true);
    });

    it('returns an array of objects', () => {
        expect(result.every(user => typeof user === 'object' && !Array.isArray(user)));
    });

    it('returns users who have placed orders', () => {
        expect(result[0].name).toEqual('moe');
        expect(result[1].name).toEqual('curly');
        expect(result.length).toEqual(2);
    });
});

