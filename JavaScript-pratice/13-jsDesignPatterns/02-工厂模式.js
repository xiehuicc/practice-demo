/* 

  优势:

    将对象的创建逻辑与客户端代码分离,提高了代码的可维护性和灵活性。
    可以根据不同的需求创建不同的产品对象,而不需要关心具体的创建过程。
    可以很好地封装对象的创建过程,避免客户端代码直接使用 new 关键字创建对象。
    
  缺点:

    增加了代码的复杂性和间接性,可能会降低代码的可读性。
    如果产品对象的创建逻辑过于复杂,工厂类也会变得很复杂。
  例子:
  一个常见的例子是,我们有一个电商网站,需要根据用户的不同需求创建不同类型的产品对象。我们可以使用工厂模式来封装产品对象的创建过程。
*/

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ProductFactory {
  static createProduct(type, name, price) {
    switch (type) {
      case 'book':
        return new Product(name, price);
      case 'electronics':
        return new ElectronicsProduct(name, price);
      case 'clothing':
        return new ClothingProduct(name, price);
      default:
        throw new Error('Invalid product type');
    }
  }
}

class ElectronicsProduct extends Product {
  constructor(name, price) {
    super(name, price);
    this.warranty = '1 year';
  }
}

class ClothingProduct extends Product {
  constructor(name, price) {
    super(name, price);
    this.size = 'M';
  }
}

// 使用
const book = ProductFactory.createProduct('book', 'JavaScript Book', 29.99);
const electronics = ProductFactory.createProduct('electronics', 'Smartphone', 499.99);
const clothing = ProductFactory.createProduct('clothing', 'T-Shirt', 19.99);