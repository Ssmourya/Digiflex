import React, { useState } from 'react';

const Fibonacci = () => {
    const [count, setCount] = useState(10);
    const [series, setSeries] = useState([]);

    // Function to calculate Fibonacci series
    const calculateFibonacci = (n) => {
        let fib = [];
        if (n <= 0) return fib;
        
        fib[0] = 0;
        if (n === 1) return fib;
        
        fib[1] = 1;
        for (let i = 2; i < n; i++) {
            fib[i] = fib[i-1] + fib[i-2];
        }
        return fib;
    };

    // Handle generate button click
    const handleGenerate = () => {
        const result = calculateFibonacci(count);
        setSeries(result);
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Fibonacci Series Generator</h2>
            
            <div className="mb-4 flex items-center gap-4">
                <input 
                    type="number" 
                    value={count}
                    onChange={(e) => setCount(Math.max(0, parseInt(e.target.value) || 0))}
                    className="px-4 py-2 border rounded-md w-32"
                    min="0"
                />
                <button 
                    onClick={handleGenerate}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                    Generate Series
                </button>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Result:</h3>
                <div className="flex flex-wrap gap-2">
                    {series.map((num, index) => (
                        <span 
                            key={index}
                            className="px-3 py-1 bg-white border rounded-full text-sm"
                        >
                            {num}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Fibonacci; 