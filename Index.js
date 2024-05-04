function refreshElement() {

    const element1 = `
    <div>
        <div>
            <h1>Real DOM</h1>
        </div>
        <div>
            <input type='text'>
        </div>
        <div>
            ${new Date().toLocaleTimeString()}
        </div>
    </div>`;

    document.getElementById('real-dom').innerHTML = element1;


    const element2 = React.createElement('div', {}, [
        React.createElement('div', {}, React.createElement('h1', {}, 'Virtual DOM')),
        React.createElement('div', {}, new Date().toLocaleTimeString())
    ]);

    root.render(element2);

}



const root = ReactDOM.createRoot(document.getElementById('virtual-dom'));


setInterval(refreshElement, 1000);

