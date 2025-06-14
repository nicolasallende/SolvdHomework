
/*
I consider that this format will have the product object

const product = {
    productName: "name",
    price: 1200, 
} ;

*/


//Input: array of Products(Objects), the discount percentage
function calculateDiscountedPrice(arr, discount){
    //I create a new array with the price changed
    return arr.map(product => ({
        ...product,
        price: product.price * (1 - (discount /100))
    }))
};

function calculateTotalPrice(arr){
    return arr.reduce( (total, product) => total + product.price, 0 )
}



/*  Basic test 

const products = [
    {name: "Book", price: 20},
    {name: "Pen", price: 5},
    {name: "Computer", price:100},
  ];

  const discountedProducts = calculateDiscountedPrice(products, 10);
  console.log("original price");
  products.forEach(product => console.log(`${product.name} : ${product.price}`));
  console.log("Discount price");
  discountedProducts.forEach(product => console.log(`${product.name} : ${product.price}`));
  
  const total = calculateTotalPrice(products);
  console.log(total);
  */