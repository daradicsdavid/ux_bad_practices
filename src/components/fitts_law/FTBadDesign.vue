<template>
    <v-container fluid>
        <v-btn
                fab
                dark
                absolute
                small
                color="primary"
                style="bottom: 10px;right: 10px"
                to="/fitts_law/good_design"
        >
            <v-icon>fas fa-check</v-icon>
        </v-btn>
        <v-btn
                fab
                dark
                absolute
                small
                color="error"
                style="bottom: 30px;right: 30px"
        >
            <v-icon>fas fa-joint</v-icon>
        </v-btn>
        <v-btn
                fab
                dark
                absolute
                small
                color="warning"
                style="bottom: 0px;right: 30px"
        >
            <v-icon>fas fa-cannabis</v-icon>
        </v-btn>
        <v-btn
                fab
                dark
                absolute
                small
                color="secondary"
                style="bottom: 0px;right: 0px"
        >
            <v-icon>fas fa-bong</v-icon>
        </v-btn>
    </v-container>

</template>
<script>
    export default {
        name: "FTBadDesign",
        mounted: function () {

        }
    }
</script>