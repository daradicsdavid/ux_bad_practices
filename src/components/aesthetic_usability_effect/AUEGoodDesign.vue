<template>
    <v-row align="center">
        <v-col cols="12">
            <v-form ref="form">
                <v-text-field
                        :counter="10"
                        label="Name"
                        required
                ></v-text-field>

                <v-text-field
                        label="E-mail"
                        required
                ></v-text-field>

                <v-select
                        :rules="[v => !!v || 'Item is required']"
                        label="Item"
                        required
                ></v-select>

                <v-checkbox
                        :rules="[v => !!v || 'You must agree to continue!']"
                        label="Do you agree?"
                        required
                ></v-checkbox>


            </v-form>
        </v-col>
        <v-col class="text-right">
            <v-btn
                    class="mr-4"
                    color="primary"
            >
                Validate
            </v-btn>
        </v-col>
        <v-btn
                fab
                dark
                absolute
                color="error"
                style="bottom: 10px;right: 10px"
                to="/aesthetic_usability_effect/bad_design"
        >
            <v-icon>fas fa-times</v-icon>
        </v-btn>
    </v-row>
</template>
<script>
    export default {
        name: "AUEGoodDesign",
        mounted: function () {

        }
    }
</script>