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

  const getData = async () => {
      db.collection("products").get().then((querySnapshot) => {
          querySnapshot.docs.map(d=>{
              setProductos([{id: d.id, data: d.data()}])
            });
        });
    };

    const getByCategory = cat => {
      setProductos([])
      const prodByCategory = db.collection("products").where('category', '==', cat)
      let datos = {}
      prodByCategory.get().then((querySnapshot) => {
            querySnapshot.docs.map(d=>{
              datos = {...d.data(), id: d.id}
              setProductos(prod => [...prod, datos])
              });
          })
    }

    // const getProdById = id => {
    //   // setProductos([])
    //   const prodByCategory = db.collection("products").where('id', '==', id)
    //   let datos = {}
    //   prodByCategory.get().then((querySnapshot) => {
    //         querySnapshot.docs.map(d=>{
    //           datos = {...d.data(), id: d.id}
    //           setProductos(prod => [...prod, datos])
    //           });
    //       })
    // }
    
    useEffect(() => {
        if(category){
          getByCategory(category)
        }
    }, [category]);
    
  return (
    <ShopContext.Provider value={{categories, category, setCategory, productos, setProductos, setCart }}>
        {children}
    </ShopContext.Provider>
  );
}
