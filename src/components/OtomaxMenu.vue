<template>
    <div class="otomax-menu">
        <v-menu transition="slide-y-transition" bottom :offset-y='true' :offset-x='true'>
            <template v-slot:activator="{ on, attrs }">
                <div v-bind="attrs" v-on="on">
                    <v-img
                        src="../assets/images/icon-menu.svg"
                        height="38"
                        width="38"
                    />
                </div>
            </template>
            <v-list>
                <v-list-item v-for="(item, i) in items" :key="i" >
                    <v-list-item-title @click="item.action !== undefined ? item.action() : null">
                        <router-link class='o-menu' :to='item.href'>
                            <div class="d-flex align-center">
                                <div class="icon-area mr-3" v-if='item.icon'>
                                    <img :src="item.icon" alt="" width='20'>
                                </div>
                                <div class="title-area">
                                    {{ item.title }}
                                </div>
                            </div>
                        </router-link>
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
export default {
    name: 'OtomaxMenu',
    props: {
        items: { type: Array, require: true, },
    },
}
</script>

<style lang="scss" scoped>
    @import '@/assets/css/_variables.scss';

    .o-menu, .o-menu:link {
        text-decoration: none;
        color: $black ; 
        font-size: .8rem !important;
    }
</style>