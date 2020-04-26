<template>
    <v-container fluid fill-height>
        <v-row justify="center" align="end">
            <v-col cols="12">
                <v-toolbar dense>
                    <v-text-field
                            class="ml-4 mr-2"
                            hide-details
                            single-line
                            prepend-inner-icon="fas fa-search"
                            color="error"
                    ></v-text-field>
                    <v-toolbar-title>Title</v-toolbar-title>
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>
                </v-toolbar>
            </v-col>
        </v-row>
        <v-btn
                fab
                dark
                absolute
                color="primary"
                style="bottom: 10px;right: 10px"
                to="/jakobs_law/good_design"
        >
            <v-icon>fas fa-check</v-icon>
        </v-btn>
    </v-container>

</template>
<script>
    export default {
        name: "JLBadDesign",
        mounted: function () {

        }
    }
</script>