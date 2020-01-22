<template>
  <div>
    <v-container fluid id="contenido">
      <v-layout text-center wrap style="margin-top:9%">
        <v-flex mb-4 align="center">
          <h1 id="titleHome" class="display-2 font-weight-bold mb-3 mt-9">
            Product Manager
          </h1>
          <h2 class="subheading font-weight-regular" style="color: white;">
            Conoce el modulo mas avanzado para la creacion de productos
          </h2>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <h1 data-aos="fade-down" id="intro">Introduccion</h1>
      <v-layout wrap mt-10>
        <v-flex xs12 md6>
          <div data-aos="fade-right" style="margin-top:10px;">
            <h4 id="sub-top">Herramientas</h4>
            <h1 id="tit-top">Big Data and Analytics</h1>
            <p style="text-align: justify;">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Ipsum. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum. Ipsum.
            </p>
          </div>
        </v-flex>
        <v-flex xs12 md6>
          <v-img
            data-aos="fade-left"
            :src="require('./../assets/undraw_operating_system_4lr6.svg')"
          >
          </v-img>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid id="contenido">
      <h1
        data-aos="fade-up"
        id="titleHome"
        style="text-align:center;"
        class="display-2 font-weight-bold mb-9 mt-9"
      >
        Tecnologias usadas
      </h1>
      <v-container>
        <v-layout text-center wrap>
          <v-flex mt-4 xs12 md6>
            <v-card data-aos="fade-right" class="mx-auto" max-width="344">
              <v-img
                src="https://victorroblesweb.es/wp-content/uploads/2017/03/vuejs2-victorroblesweb.jpg"
                height="200px"
              ></v-img>

              <v-card-title>
                Front-end: Vue.JS
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex mt-4 xs12 md6>
            <v-card data-aos="fade-left" class="mx-auto" max-width="344">
              <v-img
                src="https://elabismodenull.files.wordpress.com/2016/09/nodejs-typescript.png?w=1000"
                height="200px"
              ></v-img>

              <v-card-title>
                Backend: NodeJS + Typescript
              </v-card-title>
            </v-card>
          </v-flex>

          <v-flex mt-4 xs12 md6>
            <v-card data-aos="fade-right" class="mx-auto" max-width="344">
              <v-img
                src="https://www.muylinux.com/wp-content/uploads/2017/10/postgresql.png"
                height="200px"
              ></v-img>

              <v-card-title>
                Database: PostgreSQL
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex mt-4 xs12 md6>
            <v-card data-aos="fade-left" class="mx-auto" max-width="344">
              <v-img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWvL2Fj6zAmx8ZUnft7E5W493Wl_3ZZOraAFHOb3NaDKb1BSeb&s"
                height="200px"
              ></v-img>

              <v-card-title>
                ORM: Sequelize
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex mt-4 xs12 md6>
            <v-card data-aos="fade-right" class="mx-auto" max-width="344">
              <v-img
                src="https://i0.wp.com/tecnops.es/wp-content/uploads/2018/10/testingJS.png?fit=750%2C410"
                height="200px"
              ></v-img>

              <v-card-title>
                Test: Jest
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex mt-4 xs12 md6>
            <v-card data-aos="fade-left" class="mx-auto" max-width="344">
              <v-img
                src="https://www.dataart.com.ar/media/2819742/news-docker2-big-1600x960.jpg"
                height="200px"
              ></v-img>

              <v-card-title>
                Deployment: Docker
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({})
};
</script>
<style scoped>
#contenido {
  background-color: #282c34;
  height: 60%;
}

#titleHome {
  color: #ffc221;
  font-size: 45px;
}

#intro {
  text-align: center;
  font-weight: lighter;
  font-size: 50px;
}

#sub-top {
  font-size: 24px;
  margin: 5px 0px;
  font-weight: 400;
}

#tit-top {
  font-size: 48px;
  margin: 5px 0px;
  font-weight: lighter;
}
</style>
