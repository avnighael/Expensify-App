// NOTE: JSX does not have built-in data binding

console.log('App.js is running');

const app = {
    title: 'Indesicion App',
    subtitle: 'Put your life in the hands of computer',
    options: []
};

const onFormSubmit = (e) => {

    // prevents default behavior i.e. refreshing the whole page
    e.preventDefault();

    //elements are indexed by name.
    // here option of e.target.elements.option.value is name of that form input
    const option = e.target.elements.option.value.trim();

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const removeAll = () => {
    app.options = [];
    render();
};

const makeDesicion = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    console.log(option);
};

const appRoot = document.getElementById('app');

const render = () => {
    const template =(
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options:" : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={makeDesicion}> What should I do? </button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}> {option} </li>)
                }
            </ol>

            {/*not called onFormSubmit() because if used this it expects some return
        and this function returns 'undefined'. Instead it is just referenced*/}
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();
