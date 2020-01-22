<template>
  <v-container style="background-color: white">
    <v-card elevation="6">
      <v-row justify="center" wrap>
        <v-col cols="12" md="6" xs="12">
          <h1 style="text-align:center; color:#98989C">
            Administrador de proveedores
          </h1>
        </v-col>
      </v-row>

      <v-row justify="center" wrap>
        <v-col cols="12" xs="12" md="8">
          <v-data-table
            :headers="headers"
            :items="providers"
            sort-by="email"
            class="elevation-1"
          >
            <template v-slot:top>
              <v-toolbar flat color="white">
                <v-toolbar-title>Proveedores</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="500px">
                  <template v-slot:activator="{ on }">
                    <v-btn color="primary" dark class="mb-2" v-on="on"
                      >Nuevo Proveedor</v-btn
                    >
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6">
                            <v-text-field
                              v-model="editedItem.nombre"
                              label="Nombre"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-text-field
                              v-model="editedItem.email"
                              label="email"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-text-field
                              v-model="editedItem.dni"
                              label="dni"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-text-field
                              v-model="editedItem.empresa"
                              label="empresa"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="close"
                        >Cancel</v-btn
                      >
                      <v-btn color="blue darken-1" text @click="save"
                        >Save</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template v-slot:item.action="{ item }">
              <v-icon small class="mr-2" @click="editItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="deleteItem(item)">
                mdi-delete
              </v-icon>
            </template>
            <template v-slot:no-data>
              <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
      <v-row wrap justify="center">
        <v-col style="margin-left: 5px" cols="12" md="4" xs="12">
          <v-expansion-panels
            style="border-radius: 100px; border: #FFC221 2px solid;"
          >
            <v-expansion-panel>
              <v-expansion-panel-header
                ><v-icon>mdi-help-circle</v-icon>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "Nombre",
        align: "left",
        sortable: false,
        value: "nombre"
      },
      { text: "email", value: "email" },
      { text: "dni", value: "dni" },
      { text: "empresa", value: "empresa" },
      { text: "Actions", value: "action", sortable: false }
    ],
    providers: [],
    editedIndex: -1,
    editedItem: {
      nombre: "",
      email: "",
      dni: 0,
      empresa: ""
    },
    defaultItem: {
      nombre: "",
      email: "",
      dni: 0,
      empresa: ""
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  async created() {
    await this.initialize();
  },

  methods: {
    async initialize() {
      const response = await axios.get("http://localhost:3000/api/v1/provider");
      this.providers = response.data.data;
    },

    editItem(item) {
      this.editedIndex = this.providers.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    async deleteItem(item) {
      console.log(item);
      const index = this.providers.indexOf(item);
      confirm("Estas seguro que quieres elinar este proveedor?") &&
        this.providers.splice(index, 1) &&
        (await axios.delete(
          `http://localhost:3000/api/v1/provider/${item.id}`
        ));
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    async save() {
      if (this.editedIndex > -1) {
        Object.assign(this.providers[this.editedIndex], this.editedItem);

        await axios.patch(
          `http://localhost:3000/api/v1/provider/${this.editedItem.id}`,
          this.editedItem
        );
      } else {
        this.providers.push(this.editedItem);
        await axios.post(
          "http://localhost:3000/api/v1/provider",
          this.editedItem
        );
      }
      this.close();
    }
  }
};
</script>
