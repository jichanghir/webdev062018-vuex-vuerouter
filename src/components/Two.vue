<template>
    <div>
        <h1>Two</h1>

        <div>
            {{ one }}
        </div>
       <!--  <button
            @click="plus"
        >
            Inc one
        </button>
        <button
            @click="apicall({id: 1})"
        >
            apicall
        </button> -->
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
// import { mapState, mapGetters, mapMutations, mapActions} from 'vuex';
const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('submodule');

export default {
    props: {},
    data(){
        return {}
    },
    computed: {
        ...mapGetters(['one']),
    },
    methods: {
        // ...mapMutations(['inc', 'dec']),
        // ...mapActions(['apicall']),

        // plus() {
        //     this.inc({value: 3, other: 4})
        // }
    },
    components: {}
}
</script>
