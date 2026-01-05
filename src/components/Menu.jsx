import React, {useState} from 'react'
import {menuLists} from "../../constants/index.js";

const Menu = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalcocktails = menuLists.length;
    const gotoSlide= (index) => {
        const newindex = (index +totalcocktails) % totalcocktails;
        setCurrentIndex(newindex)
    }

    const getCocktailAt= (indexOffset) => {
        return menuLists[(currentIndex + indexOffset + totalcocktails) % totalcocktails]
    }
    const currentCocktail=getCocktailAt(0);
    const prevCocktail= getCocktailAt(-1);
    const nextCocktail= getCocktailAt(1);

    return (
        <section id='menu' aria-labelledby='menu-heading'>
            <img src='/images/slider-left-leaf.png' alt='left-leaf' id='m-left-leaf'/>
            <img src='/images/slider-right-leaf.png' alt='right-leaf' id='m-right-leaf'/>

            <h2 id='menu-heading' className='sr-only'>
                Cocktail Menu
            </h2>

            <nav className='cocktail-tabs' aria-label='Cocktail Navigation'>
                {menuLists.map((menu, index)=> {
                    const isActive = index === currentIndex;
                    return(
                        <button
                            key={menu.id}
                            className={`${isActive ? 'text-white border-white': 'text-white/50 border-white/50'}`}
                            onClick={()=>gotoSlide(index)}
                        >
                            {menu.name}
                        </button>
                    )
                })}
            </nav>

            <div className='content'>
                <div className='arrow'>
                    <button className='text-left' onClick={()=> gotoSlide(currentIndex-1)}>
                        <span>{prevCocktail.name}</span>
                        <img src='/images/right-arrow.png' alt='right-arrow' aria-hidden='true'/>
                    </button>

                    <button className='text-left' onClick={()=> gotoSlide(currentIndex+1)}>
                        <span>{nextCocktail.name}</span>
                        <img src='/images/left-arrow.png' alt='left-arrow' aria-hidden='true'/>
                    </button>
                </div>
                <div className='cocktail'>
                    <img src={currentCocktail.image} className='object-contain'/>
                </div>
            </div>
        </section>
    )
}
export default Menu
