// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category---done
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});


// Categories have many Products---done
Category.hasMany(Product, {
  foreignKey: 'category_id'
});


// Products belongToMany Tags (through ProductTag)---done
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    foreignKey: 'product_id'
  },
  as: 'product_productTag'
});


// Tags belongToMany Products (through ProductTag)---done
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    foreignKey: 'tag_id'
  },
  as: 'tag_productTag'
});

module.exports = { Product, Category, Tag, ProductTag };
