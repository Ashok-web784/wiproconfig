
class Util {
    
    static getDate() {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); 
        const yyyy = today.getFullYear();
        return `${dd}-${mm}-${yyyy}`;
    }

    static getPIValue() {
        return Math.PI;
    }

    static convertC2F(celsius) {
        return (celsius * 9/5) + 32;
    }

    static getFibonacci(n) {
        const fib = [];
        if (n <= 0) return fib;
        fib.push(0);
        if (n === 1) return fib;
        fib.push(1);
        for (let i = 2; i < n; i++) {
            fib.push(fib[i-1] + fib[i-2]);
        }
        return fib;
    }
}

console.log("Today's Date:", Util.getDate());
console.log("Value of PI:", Util.getPIValue());
console.log("25°C in Fahrenheit:", Util.convertC2F(25));
console.log("First 10 Fibonacci numbers:", Util.getFibonacci(10));

