const stringFunction = () => {
    setTimeout(() => console.log('name'), 2000);
};

const functionAsync = async () => {
    const respnse = await stringFunction()
    console.log(respnse)
    console.log('functionAsync')
};

console.log('Before')
functionAsync()
console.log('After')