// Helper function to calculate the area of a rectangle
function calculateRectangleArea(width, height) {
    return width * height;
  }
  
  // Helper function to calculate the circumference of a circle
  function calculateCircleCircumference(radius) {
    return 2 * Math.PI * radius;
  }
  
  // Helper function to check if a number is prime
  function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Example usage of helper functions
  console.log(calculateRectangleArea(5, 4)); // Output: 20
  console.log(calculateCircleCircumference(3)); // Output: Approximately 18.84955592153876
  console.log(isPrime(7)); // Output: true
  console.log(isPrime(10)); // Output: false
  