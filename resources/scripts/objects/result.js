const result = {
    field: document.getElementById('result'),
    render(input_result){
        this.field.innerHTML = input_result;
    }
}

export { result }