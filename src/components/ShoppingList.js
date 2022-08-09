const ShoppingList = () => {
    const shop = [
        `monstrera`,
        `focus lyrata`,
        `pothos arganté`,
        `yucca`,
        `palmier`
    ]
    return ( 
        <ul>
            {shop.map((plant, index)=>(
                  <li key = { `$ {plant} - ${index} ` } > {plant} </li>
            ))}
          
        </ul>
     );
}
 
export default ShoppingList;