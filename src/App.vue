<template>
    <v-app id="inspire">
        <v-navigation-drawer
                v-model="drawer"
                app
                clipped
        >
            <v-list dense>
                <v-list-item link to="/aesthetic_usability_effect/bad_design">
                    <v-list-item-content>
                        <v-list-item-title>Aesthetic usability effect</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link to="/doherty_threshold/bad_design">
                    <v-list-item-content>
                        <v-list-item-title>Doherty threshold</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

            </v-list>
        </v-navigation-drawer>

        <v-app-bar
                app
                clipped-left
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
            <v-toolbar-title>Application</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <v-container
            >
                <router-view></router-view>
            </v-container>
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
            console.log(this.$router.currentRoute)
        },
    };
</script>
