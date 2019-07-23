import uniquid from "uniqid";

export default class List {
    constructor() {
        this.items = [];
    }

    addItem (count, unit, ingredient) {
        const item = {
            id: uniquid(),
            count,
            unit,
            ingredient
        }
        this.items.push(item);
        return item;
    }

    deleteItem (id) {
        const index = this.items.findIndex(el => el.id === id);
        // [1, 2, 3, 4] splice (1,1) --> returns 2, original will be [1, 3, 4]
        // [1, 2, 3, 4] slice (1,2) --> returns 2, original will be [1, 2, 3, 4]
        this.items.splice(index, 1);
    }

    updateCount (id, newCount) {
        this.items.find(el => el.id === id).count = newCount;
    }
}