<template>
    <v-container fluid>

        <v-row>
            <v-col cols="12">
                <v-list v-if="items && items.length">
                    <v-list-item :key="index" v-for="(item,index) in items">
                        <v-list-item-content>
                            <v-list-item-title>{{item.name}}</v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-icon color="error" @click="deleteItem(index)">fas fa-trash</v-icon>
                        </v-list-item-action>

                    </v-list-item>
                </v-list>
            </v-col>
            <v-col cols="12" class="text-right">
                <v-btn
                        fab
                        dark
                        bottom
                        right
                        color="primary"
                        @click="addItem"
                >
                    <v-icon>fas fa-plus</v-icon>
                </v-btn>
            </v-col>
        </v-row>

        <v-btn
                fab
                dark
                absolute
                color="error"
                style="bottom: 10px;right: 10px"
                to="/law_of_proximity/bad_design"
        >
            <v-icon>fas fa-times</v-icon>
        </v-btn>
    </v-container>

</template>
<script>
    export default {
        name: "LPGoodDesign",
        data: function () {
            return {
                items: [],
                selectedItems: []
            }
        },
        methods: {
            addItem() {
                this.items = [...this.items, {name: 'New item'}]
            },
            deleteItem(index) {
                this.items = this.items.filter((item, i) => i !== index)
            }
        }
    }
</script>