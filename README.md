<!-- "module": "nodenext",
    "target": "esnext",
    "types": ["node"],
  "isolatedModules": false, --> 
  
  <!-- settings notes from Hasna -->



# Lab 6.1, Advanced DOM Manipulation

## Description
In this lab, an inventory tracker capable of managing both physical and digital products is built to reinforce understanding of OOP. Inheritance is explored by creating an abstract class called Product, which is then extended to either a PhysicalProduct class or a DigitalProduct class. Each class is contained in its own module and exported for other modules to access. 
<br>
Early commits missing after re-creating local and cloud repositories.
<br>
Compiles, error finding modules when code runs. 

## Running the program
To view this lab, type "node dist/main.js" in the console
<br>

## Reflection Questions
> How does TypeScript enforce type safety in this object-oriented program?
TypeScript enforces type safety by allowing the user to specify the datatype of values, parameters, or outputs when a variable or function is declared.
<br>

> How did inheritance reduce code duplication for PhysicalProduct and DigitalProduct?
Inherited properties such as sku,. name, and price do not need to be redefined in PhysicalProducts.ts and DigitalProducts.ts.
<br>

> What are the benefits of using encapsulation and access modifiers (public, private, protected) in this context?
Encapsulation allows access of variables and functions used within a parent, and can prevent those variables and functions from being modified or accessed outside the needed scope.
<br>

> If you had to add a new type of product (e.g., a SubscriptionProduct), how would polymorphism make this extension straightforward?
After SubscriptionProduct inherits from Products, edits can be made to SubscriptionProduct's specific properties while not having to manage shared properties.
<br>
