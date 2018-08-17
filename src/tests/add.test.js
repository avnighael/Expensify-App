const add = (a,b) => a+b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(1,4);
    expect(result).toBe(5);
});

test('should print "Hello {name of the person}', () => {
    const greeting = generateGreeting("Mike");
    expect(greeting).toBe(`Hello Mike!`);
});

test('should generate greeting for no no=ame', () => {
    const greeting = generateGreeting();
    expect(greeting).toBe(`Hello Anonymous!`);
});
