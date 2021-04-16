const app = Vue.createApp({
    data() {
        return {
            ettitle: '',
            etbody:'',
            etsts: false,
            goals: [],
            updtbody: '',
            updtsts: '',
        };
    },
    computed: {

    },
    methods: {
        addGoal( t,b,s) {
            this.goals.push({
               t:   this.ettitle,
               b:   this.etbody,
               s:   this.etsts,
            })
            this.ettitle = ''
            this.etbody = ''
            this.etsts = false
        },
        removeG(idx) {
            this.goals.splice(idx, 1)
        },
        editGoal(){
            this.goals.push({

            })

        }
    },
});

app.mount('#styling');