<template>
    <v-container fluid>

        <v-form
                ref="form"
                v-model="valid"
                lazy-validation
        >
            <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Name"
                    required
            ></v-text-field>

            <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
            ></v-text-field>


            <v-text-field
                    v-model="number"
                    label="Number"
                    type="number"
                    required
            ></v-text-field>


            <v-checkbox
                    v-model="checkbox"
                    :rules="[v => !!v || 'You must agree to continue!']"
                    label="Do you agree?"
                    required
            ></v-checkbox>

            <div class="text-right">
                <v-btn
                        color="success"
                        class="mr-4"
                        @click="validate"
                >
                    Validate
                </v-btn>


            </div>
        </v-form>
        <v-btn
                fab
                dark
                absolute
                color="primary"
                style="bottom: 10px;right: 10px"
                to="/postels_law/good_design"
        >
            <v-icon>fas fa-check</v-icon>
        </v-btn>
    </v-container>

</template>
<script>
    export default {
        name: "PLBadDesign",
        data: () => ({
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
            ],
            number: '',
            numberRules: [
                v => !!v || 'Should be a number',
                v => /^[0-9]*$/.test(v) || 'Should be a valid number',
            ],

            checkbox: false,
        }),

        methods: {
            validate() {
                this.$refs.form.validate()
            }
        },
    }
</script>