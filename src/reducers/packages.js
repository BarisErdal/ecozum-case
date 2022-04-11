import { createSlice } from '@reduxjs/toolkit';

const packagesSlice = createSlice({
    name: 'packages',
    initialState: {
        packageArr: [],
      selectedPkgArr:[],
      amount:0,
      pkgToBuy:[]

    },
    reducers: {
    
      setPackageArr(state, action) {
        //ok
       state.packageArr= action.payload;
     },
     addToSelected(state, action) {
        //ok
       state.selectedPkgArr.push(action.payload);

     },
     discardPkg(state, action) {
        //ok
      //let valOf =  state.selectedPkgArr.find(pkg=> pkg==action.payload)
      const arr= state.selectedPkgArr.filter(i=> i!==action.payload);
      state.selectedPkgArr= arr;
     },
     addPrice(state, action) {
      //ok
      console.log(action.payload,"addprice")
      state.amount=Number(state.amount)+Number(action.payload)
   },
   discardPrice(state, action) {
    //ok
    console.log(action.payload,"discardprice")
   state.amount=Number(state.amount)-Number(action.payload)
 },

    



    },
  });
export const  pkgActions = packagesSlice.actions;

export default packagesSlice.reducer;