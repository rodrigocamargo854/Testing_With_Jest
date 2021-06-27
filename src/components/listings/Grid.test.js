import data from '../../data/courses.json';

//the number of itens in Data json
const numberItems = data.length;
test('Number of items = 11', () => {
    expect(numberItems).toBe(12);
});

//test for greatthanorequal a 12
test('Number of items = 12', () => {
    expect(numberItems).toBeGreaterThanOrEqual(11);
});