class Category {
    id?: string;
    name: string = '';
    description: string = '';
    created_at: Date = new Date();

    constructor() {
        if (!this.id) {
            this.id = 'JULIOOOOOO';
        }
    }
}

export { Category }