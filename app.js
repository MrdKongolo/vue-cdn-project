const app = Vue.createApp({
    data(){
        return {
            url: 'http://www.eldadservices.com',
            showBooks:true,
            books: [
                {title:'La fin des àges',author:'Pearson',img:'assets/1.jpg', isFav: true},
                {title:'La matière ',author:'Carls',img:'assets/2.jpg', isFav: false},
                {title:'Empire Lunda',author:'Le Muntu',img:'assets/3.jpg', isFav: true},
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        changeTitle(title){
            this.title = title;
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks;
        },
        handleEvent(e, data){
            console.log(e, e.type);
            if(data){
                console.log(data);
            }
        },
        handleMouseMove(e){
            this.x = e.offsetX;
            this.y = e.offsetY;
        }, 
        changeFav(book){
            book.isFav = !book.isFav;
        }
    }, 
    computed: {
        filteredBooks(){
            return this.books.filter((book) => book.isFav);
        }
    }
})
app.mount('#app')