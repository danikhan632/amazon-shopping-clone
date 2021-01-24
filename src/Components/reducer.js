export const initialState = {
  basket: [],
  user:null
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //creates new array and adds item, then sets array as new basket
      const tmp = {
        ...state,
        basket: [...state.basket, action.item],
      };
      return tmp;

    case "REMOVE_FROM_BASKET":
      //finds the first index of match
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        break;
      }
      return {
        ...state,
        basket: newBasket,
      };
      case "SET_USER":
        return{
          ...state,
          user: action.user
        }
        case "EMPTY_BASKET":
        return{
          ...state,
          basket:[]
        }

    default:
      return state;
  }
};

export default reducer;

/*
for (let i=0; i < state.basket?.length;i++) {
        if (action.item.id === state.basket[i].item.id) {
          console.log('duplicates');
        }
      }


      for (let i=0; i < arr.basket.length;i++) {
            if (action.item.id ===  arr.basket[i].item.id) {
              console.log('duplicates');
            }
          }
                      console.log(arr.basket[arr.basket.length-1].id);



let add = true;
      let tmp= {
        ...state,
        basket: [...state.basket]
      };

      if(state.basket?.length > 0){
        for (let i=0; i < state.basket?.length;i++) {
          if (action.item.id === state.basket[i].id) {
            console.log(state.basket[i].quantity);
            state.basket[i].quantity++;
            return tmp;
          }
        }
      }
*/
