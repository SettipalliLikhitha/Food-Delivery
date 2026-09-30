import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eaque debitis placeat delectus earum natus eveniet suscipit voluptatum commodi. Dolores illum nam aliquid eligendi accusantium culpa delectus accusamus asperiores reiciendis.
      Libero corporis incidunt labore, facere harum itaque nulla voluptatem laboriosam odio recusandae id delectus rem! Error non dolorum iure, ipsa nisi consectetur debitis atque animi laboriosam, explicabo aut vel quasi?</p>
    <div className="explore-menu-list">
        {menu_list.map((item, index) =>{
            return(
                <div key = {index} className="exp-menu-list-item">
                    <img src={item.menu_image} alt=''/>
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default ExploreMenu
