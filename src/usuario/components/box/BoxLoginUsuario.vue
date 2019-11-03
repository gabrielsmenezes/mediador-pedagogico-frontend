<template>
  <div class="loginUsuario">
    <v-container>
      <v-layout row wrap justify-center align-center class="layout-form">
          <v-flex text-xs-center md12>
        <v-avatar size="120">
          <img :src="logoClickEscola" />
        </v-avatar>
        <h1 class="label" >Mediador Pedagógico</h1>
          </v-flex>
        <v-flex md6 class="black formulario-flex" elevation-5>
          <v-form md10>
            <v-layout row wrap justify-center align-center>
              <v-flex md8 mt-3>
                <h1 class="label">Email</h1>
                <v-text-field
                  dark
                  class="input"
                  name="email"
                  type="email"
                  v-validate="'required'"
                  :error-messages="errors.collect('email')"
                  data-vv-name="email"
                  box
                  background-color="white"
                  v-model="usuario.email"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex md8 mt-3>
                <h1 class="label">Senha</h1>
                <v-text-field
                  dark
                  class="input"
                  name="senha"
                  type="password"
                  v-validate="'required'"
                  :error-messages="errors.collect('senha')"
                  data-vv-name="senha"
                  box
                  background-color="white"
                  v-model="usuario.senha"
                  required
                ></v-text-field>
                <v-layout row wrap justify-center>
                  <router-link :to="{path:'/'}">
                    <v-btn>Cancelar</v-btn>
                  </router-link>

                  <router-link :to="{path:'/'}">
                    <v-btn>Login</v-btn>
                  </router-link>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import Dictionary from "@/usuario/dictionary/Dictionary.js";
import Usuario from "@/usuario/domain/Usuario.js";
export default {

$_veeValidate: {
    validator: "new"
  },

mounted(){
this.$validator.localize("pt", new Dictionary());
},

  data: () => ({
    usuario: new Usuario(),
    logoClickEscola: require("@/assets/LogoClickEscola.png")
  })
};
</script>
<style scoped>
.formulario-flex {
  border-radius: 15px;
}

.loginUsuario {
  background-color: dimgray;
  height: 100vh;
}

.layout-form {
  margin-top: 8%;
}

.label {
  color: white;
}
.input {
  border-radius: 20px;
}
</style>