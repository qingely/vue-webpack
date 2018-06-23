<template>
    <div id="test">{{ test }}</div>
</template>

<script>
    export default {
        data() {
            return {
                test: 'I have a dream!'
            }
        }
    }
</script>

<style scoped>
#test {
    color: red;
}
</style>

