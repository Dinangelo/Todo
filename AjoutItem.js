const {ref} = Vue;
export default {
    props: {
        onAddItem: {
            type: Function,
            required: true
        }
    },

    setup(props){
        const newItem = ref('');
        const addItem = () => {
            props.onAddItem(newItem.value);
            newItem.value = '';
        };

        return {
            newItem,
            addItem
        };
    },
    template:`<div>
        <input class="" v-model="newItem" />
        <button @click="addItem">Add New</button>
    </div>`
}