<template>
    <v-container fluid>
        <v-row justify="center" align="start">
            <v-col cols="12">
                <v-toolbar dense>
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>
                    <v-toolbar-title>Title</v-toolbar-title>
                    <v-text-field
                            class="ml-4 mr-2"
                            hide-details
                            single-line
                            append-outer-icon="fas fa-search"
                    ></v-text-field>
                </v-toolbar>
            </v-col>
        </v-row>
        <v-btn
                fab
                dark
                absolute
                color="error"
                style="bottom: 10px;right: 10px"
                to="/jakobs_law/bad_design"
        >
            <v-icon>fas fa-times</v-icon>
        </v-btn>
    </v-container>

</template>
<script>
    export default {
        name: "JLGoodDesign",
        mounted: function () {

        }
    }
</script>