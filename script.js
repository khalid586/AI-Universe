async function fetchData(){
    try{
        const response = await fetch('https://openapi.programming-hero.com/api/ai/tools') // using await here so that the next line waits for the promise to be resolved/making it synchronus
        data = response.json(); // using await here so that the furthere execution is paused till the promise is being resolved, it might return an unresolved promise otherwise {*sometimes} (A promise without values)        
        return data;
    }
    catch(error){
        console.error(error);
        throw error;
    }
}

async function loadData(){
    const data = await fetchData();
    const obj = data?.data?.tools[1];
    console.log(obj);
    console.log(typeof data?.data?.tools[1])
    console.log(data?.data?.tools[1]?.description)
}


loadData();