const Mycomponent = ()=>{
    let name = "Rinkal";
    let arr = [10,20,30,40];
    let obj = {
        name:"Rinkal",
        age:25,
        salary:25000
    }
    let arr_obj = [
        {
            name:"Rinkal",
            age:25,
            salary:25000
        },
        {
            name:"Test",
            age:22,
            salary:22000
        }]

    let e= arr_obj.map((i)=>{
        return <li>{i.name}</li>
    })
    return (
        <>
            <h3>My Name is {obj.name} -- {obj['age']}</h3>
            <h4>Array is : {e} -- {arr_obj[0].name}</h4>
        </>
    )
}

export default Mycomponent;