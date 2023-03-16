const chai ="chai";
const spies = "chai spies";
chai.spies
const receivesAFunction = (spicy)=>{
    spicy();
}
receivesAFunction((spy) =>{return `&{spy}`});
const returnsANamedFunction =()=> receivesAFunction;
const returnsAnAnonymousFunction =()=>{
    return ()=>{

    }
;}




