<template>
    <div>
        <h1>One</h1>

        <div>
            {{ one }}
        </div>
        <button
            @click="inc"
        >
            Inc one
        </button>
        <button
            @click="apicall"
        >
            apicall
        </button>
    </div>
</template>

<script>
export default {
    props: {},
    data(){
        return {}
    },
    computed: {
        one() {
            return this.$store.getters['submodule/one'];
        }
    },
    methods: {
        inc() {
            this.$store.commit('inc', {value: 3, other: 4});
        },
        apicall() {
            this.$store.dispatch('apicall', {id: 1})
        }
    },
    components: {}
}
</script>
