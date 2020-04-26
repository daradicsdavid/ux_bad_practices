<template>
    <v-container fluid>

        <v-row>
            <v-col class="mb-8" cols="4">

                <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn
                                color="primary"
                                dark
                                v-on="on"
                        >
                            Options
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item @click="addItem">
                            <v-list-item-title>Add</v-list-item-title>

                        </v-list-item>
                        <v-list-item @click="deleteSelected">
                            <v-list-item-title>Delete</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-col>
            <v-col cols="12">
                <v-list v-if="items && items.length">
                    <v-list-item :key="index" v-for="(item,index) in items">
                        <v-list-item-action>
                            <v-checkbox
                                    :value="isSelected(index)"
                                    @click="selectItem(index)"
                                    color="primary"
                            ></v-checkbox>
                        </v-list-item-action>

                        <v-list-item-content>
                            <v-list-item-title>{{item.name}}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-col>

        </v-row>

        <v-btn
                fab
                dark
                absolute
                color="primary"
                style="bottom: 10px;right: 10px"
                to="/law_of_proximity/good_design"
        >
            <v-icon>fas fa-check</v-icon>
        </v-btn>
    </v-container>

</template>
<script>
    export default {
        name: "LPBadDesign",
        data: function () {
            return {
                items: [],
                selectedItems: []
            }
        },
        methods: {
            addItem() {
                this.items = [...this.items, {name: 'Item'}]
            },
            deleteSelected() {
                this.items = this.items.filter((item, index) => !this.selectedItems.includes(index))
                this.selectedItems = []
            },
            isSelected(index) {
                return this.selectedItems.includes(index)
            },
            selectItem(index) {
                console.log(index)
                this.selectedItems.push(index)
            }
        }
    }
</script>