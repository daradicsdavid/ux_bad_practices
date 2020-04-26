<template>
    <v-app id="inspire">
        <v-navigation-drawer
                v-model="drawer"
                app
                clipped
        >
            <v-list dense>
                <v-list-item link to="/rules">
                    <v-list-item-content>
                        <v-list-item-title>Rules</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link to="/aesthetic_usability_effect">
                    <v-list-item-content>
                        <v-list-item-title>Aesthetic usability effect</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link to="/doherty_threshold">
                    <v-list-item-content>
                        <v-list-item-title>Doherty threshold</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link to="/fitts_law">
                    <v-list-item-content>
                        <v-list-item-title>Fitt's law</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link to="/jakobs_law">
                    <v-list-item-content>
                        <v-list-item-title>Jakob's law</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link to="/law_of_proximity">
                    <v-list-item-content>
                        <v-list-item-title>Law of proximity</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link to="/postels_law">
                    <v-list-item-content>
                        <v-list-item-title>Postel's law</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

            </v-list>
        </v-navigation-drawer>

        <v-app-bar
                app
                clipped-left
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
            <v-toolbar-title>UX Worst Practices</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>

    export default {
        name: 'App',

        components: {},
        data: () => ({
            drawer: null,
        }),
        created() {
            this.$vuetify.theme.dark = true
        },
    };
</script>
