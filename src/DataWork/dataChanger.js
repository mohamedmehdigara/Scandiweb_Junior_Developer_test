import _  from 'lodash';



//  return empty --->
export const empt=()=>{
    return ''
}
// exports selected category data to dipatcher ---> 
export const categoryProductList = (productList) =>{
const Categorized = [];
productList.forEach(element => {
Categorized.push(element);
});
return  Categorized;
}

// calculate sum for cart  ---> 
export const calculateSum = (cart,currency) =>{
    let sum = 0;
    cart.map(item=>{
        item.prices.map(prices=>{
            if(prices.currency === currency.symb){
               sum += (prices.amount * item.itemCount);
            }
            return ''
        })
        return ''
    })
    return `${currency.cur} ${sum.toFixed(2)}`;
}

//Cart.js img carousel -->
export const handleCarouselPrew=(id,gal)=>{
    const element = document.getElementById(id.replace(/\s/g));
    let pic = element.firstChild.src;
    let indexOfCurrentPic = gal.indexOf(pic);
    indexOfCurrentPic === 0?element.firstChild.src = gal[gal.length - 1]: element.firstChild.src = gal[indexOfCurrentPic - 1];
}
export const handleCarouselNext =(id,gal)=>{
    const element = document.getElementById(id.replace(/\s/g));
    let pic = element.firstChild.src;
    let indexOfCurrentPic = gal.indexOf(pic);
    indexOfCurrentPic === gal.length-1?element.firstChild.src = gal[0]: element.firstChild.src = gal[indexOfCurrentPic + 1];
}

// Removes item from cart --->
export const RemoveItem =(cart,item)=>{
const index =_.findIndex(cart,{cartId: item.cartId});
cart[index].itemCount -= 1;
if(cart[index].itemCount===0){
cart.splice(index,1);
}
}

// sets up selected atributes -->
export const AtributeSetter = (atributeArray,atrName,atrVal) =>{
    const index =_.findIndex(atributeArray,atrName);
    let SelectedAtribute = {};
    if(index === -1){
        SelectedAtribute[atrName] = atrVal;
        atributeArray = [...atributeArray,SelectedAtribute]
        return atributeArray;
        }else{
        SelectedAtribute[atrName] = atrVal;
        atributeArray.splice(index, 1, SelectedAtribute);
        return atributeArray;
    }

}
// highlights selected atributes -->
export const isSelected = (selAtributes,AtrName,AtrValue)=>{
    let SelectedAtribute = {};
    SelectedAtribute[AtrName]=AtrValue;
    const index =_.findIndex(selAtributes,SelectedAtribute);
    if(index === -1){
        return false
    }else{
        return true
    }
}
// marks correct atribute color -->
export const isSelectedColor = (selAtributes,name,value)=>{
    if(isSelected(selAtributes,name,value)){
     return  <div id="selectedCol"><p>SELECTED</p></div>
    }
    else{
        return ''
    }
}

// set background for color Attributes --->
export const  setAtribColor =(color)=>{
    return {backgroundColor:color}
}
// checks redux for selected currency gives correct price -----> 
export const GiveCorrectPrice=(ItemPricePack,CurrentCurency)=>{
  if(CurrentCurency.length === 1){
    CurrentCurency = {symb: 'USD', cur: '$'} 
  }
   const res = ItemPricePack.filter(x=>x.currency===CurrentCurency.symb);

   return `${CurrentCurency.cur} ${res[0].amount}`;
}

// returns selected atributes array ---->
export const GiveSelectedAtributes = (cart,id) =>{
    const curentItem = _.findIndex(cart,{cartId:id});
    return cart[curentItem].selectedAtributes;
}


//counts duplicates in  cart --->
export const GiveCartData = (cartState,actionCart) =>{
let dupl =0;
const isEqualObj = (x,y)=>{
    return _(x).differenceWith(y, _.isEqual).isEmpty();
}
actionCart['cartId'] = `${actionCart.id}id:${cartState.length}`;
cartState.forEach(item=>{
    if(isEqualObj(item.selectedAtributes,actionCart.selectedAtributes) && _.isEqual(item.id,actionCart.id)){
        item.itemCount += 1; 
        dupl = 1;
    }
});
dupl===0?cartState.push(actionCart):empt();
}
export const UpdateAtributes =(id,cart,atribs)=>{
    const index =_.findIndex(cart,{cartId:id});
    cart[index].selectedAtributes = atribs;
    return cart;
}



// gives count of items ===>
export const countOfItems =(cart)=>{
let count = 0;
cart.map(item=>{
    count += item.itemCount;
    return ''
})
return count;
}



// stage item send to cart from main.. --->
export const stageItemMain=(item)=>{    
item['selectedAtributes'] = GiveStartAtributes(item.attributes);
item['itemCount'] = 1;
console.log(item)
return item ;
}



//give Random start Attribute values main --->
export const GiveStartAtributes = (atributes) =>{
let atrBox = [];

atributes.forEach(atr=>{
    let selected = {};
    selected[atr.name]=atr.items[0].value
    atrBox.push(selected);

});
return atrBox;
}  

