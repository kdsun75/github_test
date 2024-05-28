let input = prompt('What would you like to do?');

const todos = ['Collection Chicken Eggs', 'Clean Litter Box'];

while(input !== 'quit' && input !=='q'){
    if(input === 'list'){
        console.log('*************************');
        for(let i=0; i<todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*************************');
    }else if(input === 'new'){
        const newTodo = prompt("OK, what is the new todo?");
        todos.push(newTodo);
    }else if(input === 'delete'){
        const index = parseInt(prompt('OK, enter an index to delete:'));
        if(!Number.isNaN(index)){ //숫자면     
            const deleted = todos.splice(index, 1);  // 반환값은 삭제된 요소들을 반환(여러개일수 있음)
            console.log(`OK. deleted: ${deleted[0]}`);
        }else{
            console.log("Unknown index!");
        }
        
        
    }else if(input === 'modify'){

    }

    input = prompt('What would you like to do?');
}

console.log('OK QUIT THE APP!'); 