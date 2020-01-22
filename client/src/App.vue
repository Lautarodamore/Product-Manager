<template>
  <v-app>
    <v-app-bar app :color="colorAppBar" dark>
      <v-app-bar-nav-icon
        v-if="inDemo"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn
        v-if="!inDemo"
        :to="{ path: '/dashboard' }"
        @click="inDemo = true"
        color="#ffc221"
      >
        <span style="color:black">START DEMO</span>
      </v-btn>
      <v-btn
        v-if="inDemo"
        :to="{ path: '/' }"
        @click="inDemo = false"
        color="#ffc221"
      >
        <span style="color:black">LEAVE DEMO</span>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Product Manager</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-group prepend-icon="mdi-clipboard-text">
          <template v-slot:activator>
            <v-list-item-title>Productos</v-list-item-title>
          </template>
          <v-list-item link v-for="(crud, i) in cruds" :key="i">
            <v-list-item-title v-text="crud[0]"></v-list-item-title>
            <v-list-item-action>
              <v-icon>mdi-add</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list-group>

        <v-list-item :to="{ path: '/type-product' }" link>
          <v-list-item-icon>
            <v-icon>mdi-ballot</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Tipo de Productos</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ path: '/providers' }" link>
          <v-list-item-icon>
            <v-icon>mdi-truck-fast</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Proveedores</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-list>
        <v-list-item :to="{ path: '/dashboard' }" link>
          <v-list-item-icon>
            <v-icon>mdi-desktop-mac-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-slide-y-transition mode="out-in">
        <router-view />
      </v-slide-y-transition>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    colorAppBar: "#282C34",
    inDemo: false,
    drawer: false,
    dmins: [
      ["Management", "people_outline"],
      ["Settings", "settings"]
    ],
    cruds: [
      ["Crear", "mdi-add"],
      ["Editar/Eliminar", "mdi-hammer-wrench"]
    ]
  })
};
</script>

<style>
.from-middle:before {
  top: 0;
  left: 50%;
  height: 100%;
  width: 0;
  border: 1px solid var(--inv);
  border-left: 0;
  border-right: 0;
}

.from-middle:after {
  bottom: 0;
  left: 0;
  height: 0;
  width: 100%;
  background: var(--inv);
}

.from-middle:hover:before {
  left: 0;
  width: 100%;
}

.from-middle:hover:after {
  top: 0;
  height: 100%;
}
</style>
