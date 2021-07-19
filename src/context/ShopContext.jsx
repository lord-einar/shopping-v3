import { createContext, useEffect, useState } from "react";
import db from "../firebase/client";

export const ShopContext = createContext();

export function ShopComponent({ children }) {

  const [productos, setProductos] = useState([]);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState([]);


  const [categories, setCategories] = useState([
    {
      name: "Indumentaria",
      image: "img/indumentaria.jpg",
      link: "indumentaria",
    },
    {
      name: "Informatica",
      image: "img/informatica.jpg",
      link: "informatica",
    },
    {
      name: "Herramientas",
      image: "img/herramientas.jpg",
      link: "herramientas",
    },
    {
      name: "Smartwatch",
      image: "img/smartwatch.png",
      link: "smarwatch",
    },
  ]);

  // const getData = () => {
  //     db.collection("products").get().then((querySnapshot) => {
  //         querySnapshot.docs.map(d => {
  //             return setProductos([{id: d.id, data: d.data()}])
  //           });
  //       });
  //   };

    const getByCategory = cat => {
      setProductos([])
      const prodByCategory = db.collection("products").where('category', '==', cat)
      let datos = {}
      prodByCategory.get().then((querySnapshot) => {
            querySnapshot.docs.map(d => {
              datos = {...d.data(), id: d.id}
              return setProductos(prod => [...prod, datos])
              });
          })
    }

    const addToCart = (newProd, cant) => {

      const subtotal = newProd.price * cant

      const productoAgregado = {...newProd, cantidad: cant, subtotal: subtotal}
      if(cart){
          cart.map(item => {
              if(item.id === productoAgregado.id){
                return item.cantidad = item.cantidad + productoAgregado.cantidad
              }
            })
          }
          setCart(cart => [...cart, productoAgregado])
    }

    const removeToCart = (id) => {

      let aux = cart.filter(obj => {
          return obj.id !== id;
        });
        setCart(aux);
  }

  const borrarCarrito = () => {
      setCart([])
  }

    
    useEffect(() => {
        if(category){
          getByCategory(category)
        }
    }, [category]);
    
  return (
    <ShopContext.Provider value={{removeToCart, borrarCarrito, addToCart, cart, categories, category, setCategory, productos, setProductos, setCart }}>
        {children}
    </ShopContext.Provider>
  );
}
