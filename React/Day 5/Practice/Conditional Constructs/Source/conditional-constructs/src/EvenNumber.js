function EvenNumber() {
    const evenNumbers = [];

    for(let i = 1; i <= 100; i ++){
        if(i % 2 == 0){
            evenNumbers.push(i);
        }
    }

    let myarray = evenNumbers.map((number) => {return <span>{ number } &nbsp;&nbsp;&nbsp;</span> });

    return (
        
        <div>
        <h1 class="display-5 text-primary text-center m-1">Even Numbers between 1 to 100</h1>
        <div class="container mx-auto text-center display-6 fs-4 pt-3">
            { myarray }
        </div>
    </div>
  );
}

export default EvenNumber;