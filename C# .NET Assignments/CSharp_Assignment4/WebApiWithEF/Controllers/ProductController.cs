﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApiWithEF.Models;

namespace WebApiWithEF.Controllers
{
    public class ProductController : ApiController
    {
        ProductDBEntities db = new ProductDBEntities();

        //Add Post Request

        public string Post(Product product)
        {
            db.Products.Add(product);
            db.SaveChanges();
            return "Product added";
        }

        //Get All Records
        public IEnumerable<Product> Get()
        {
            return db.Products.ToList();
        }

        //Get Single Product
        public Product Get(int id)
        {
            Product product =  db.Products.Find(id);
            return product;
        }

        //Update The Records
        public string Put(int id, Product product)
        {
            var product_ = db.Products.Find(id);   
            product_.Name = product.Name;
            product_.Price = product.Price;
            product_.Quantity = product.Quantity;
            product_.Active = product.Active;

            db.Entry(product_).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();

            return "Product Updated";
        }

        //Delete the Record
        public string Delete(int id)
        {
            Product product = db.Products.Find(id);
            db.Products.Remove(product);
            db.SaveChanges();
            return "Deleted";
        }
    }
}
