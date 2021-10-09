import React,{useState} from 'react'



function TodoForm(props) {

    const [input, setInput] = useState('');
    const {addTodoMethod} = props;

    const submitHandler = (event) =>{
        event.preventDefault();
        
            addTodoMethod({
                title:input,
                completed:false


            });
            
            setInput('') 
           
        }

    const onChangeHandler = (event) =>{
        setInput(event.target.value)
        
        
    }



    return (
        <div>
            <form onSubmit={submitHandler}>
                <input 
                value={input}
                onChange={onChangeHandler}

                />
                <button>
                    Add Todo
                </button>
            </form>
        </div>
    )
}

export default TodoForm;
